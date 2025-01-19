import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Legend, ComposedChart, Bar, Scatter } from 'recharts';

const PocketCashAnalysis = () => {
  // Data
  const smuData = [34, 1200, 23, 50, 60, 50, 0, 0, 30, 89, 0, 300, 400, 20, 10, 0];
  const seattleData = [20, 10, 5, 0, 30, 50, 0, 100, 110, 0, 40, 10, 3, 0];
  
  // Calculate summary statistics
  const calcMean = arr => arr.reduce((a, b) => a + b) / arr.length;
  const calcSD = arr => {
    const mean = calcMean(arr);
    return Math.sqrt(arr.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (arr.length - 1));
  };
  
  const smuMean = calcMean(smuData);
  const seattleMean = calcMean(seattleData);
  const smuSD = calcSD(smuData);
  const seattleSD = calcSD(seattleData);
  
  // Create histogram data
  const createHistogramData = (data, bins = 10) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const binWidth = (max - min) / bins;
    const counts = new Array(bins).fill(0);
    
    data.forEach(value => {
      const binIndex = Math.min(Math.floor((value - min) / binWidth), bins - 1);
      counts[binIndex]++;
    });
    
    return counts.map((count, i) => ({
      binStart: min + i * binWidth,
      smuCount: 0,
      seattleCount: 0,
      [`${data === smuData ? 'smu' : 'seattle'}Count`]: count,
    }));
  };
  
  // Combine histogram data
  const smuHist = createHistogramData(smuData);
  const seattleHist = createHistogramData(seattleData);
  
  // T-test calculation
  const n1 = smuData.length;
  const n2 = seattleData.length;
  const pooledSD = Math.sqrt(((n1-1)*smuSD*smuSD + (n2-1)*seattleSD*seattleSD)/(n1+n2-2));
  const se = pooledSD * Math.sqrt(1/n1 + 1/n2);
  const tStat = (smuMean - seattleMean) / se;
  const df = n1 + n2 - 2;
  
  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6">Pocket Cash Analysis: SMU vs Seattle U</h2>
      
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-xl font-semibold mb-4">SMU (n={n1})</h3>
          <p>Mean: ${smuMean.toFixed(2)}</p>
          <p>SD: ${smuSD.toFixed(2)}</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-xl font-semibold mb-4">Seattle U (n={n2})</h3>
          <p>Mean: ${seattleMean.toFixed(2)}</p>
          <p>SD: ${seattleSD.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="bg-gray-800 p-4 rounded mb-8">
        <h3 className="text-xl font-semibold mb-4">Distribution Comparison</h3>
        <div className="h-64">
          <ResponsiveContainer>
            <ComposedChart data={[...smuHist, ...seattleHist]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="binStart" 
                label={{ value: 'Amount ($)', position: 'bottom', fill: 'white' }}
              />
              <YAxis 
                label={{ value: 'Frequency', angle: -90, position: 'left', fill: 'white' }}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                labelStyle={{ color: 'white' }}
              />
              <Legend />
              <Bar dataKey="smuCount" fill="#60a5fa" name="SMU" />
              <Bar dataKey="seattleCount" fill="#f87171" name="Seattle U" />
              <ReferenceLine x={smuMean} stroke="#60a5fa" strokeDasharray="3 3" label={{ value: 'SMU Mean', fill: 'white' }} />
              <ReferenceLine x={seattleMean} stroke="#f87171" strokeDasharray="3 3" label={{ value: 'Seattle U Mean', fill: 'white' }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-gray-800 p-4 rounded">
        <h3 className="text-xl font-semibold mb-4">Two-Sample t-Test Results</h3>
        <div className="space-y-2">
          <p>t-statistic: {tStat.toFixed(3)}</p>
          <p>Degrees of freedom: {df}</p>
          <p>Pooled SD: ${pooledSD.toFixed(2)}</p>
          <p>Standard Error: ${se.toFixed(2)}</p>
          <p>Mean Difference: ${(smuMean - seattleMean).toFixed(2)}</p>
          <p>95% CI: (${(smuMean - seattleMean - 2.042*se).toFixed(2)}, ${(smuMean - seattleMean + 2.042*se).toFixed(2)})</p>
        </div>
      </div>
    </div>
  );
};

export default PocketCashAnalysis;