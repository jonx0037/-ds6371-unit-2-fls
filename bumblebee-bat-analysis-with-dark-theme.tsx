import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const BumblebeeBatAnalysis = () => {
  // Sample data
  const batWeights = [1.7, 1.6, 1.5, 2.0, 2.3, 1.6, 1.6, 1.8, 1.5, 1.7, 1.2, 1.4, 1.6, 1.6, 1.6];
  
  // Calculate summary statistics
  const mean = batWeights.reduce((a, b) => a + b) / batWeights.length;
  const sd = Math.sqrt(batWeights.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (batWeights.length - 1));
  const se = sd / Math.sqrt(batWeights.length);
  const tStat = (mean - 1.8) / se;
  
  // Generate t-distribution data
  const tData = [];
  for (let x = -4; x <= 4; x += 0.1) {
    tData.push({
      x,
      density: Math.exp(-(x * x) / 2) / Math.sqrt(2 * Math.PI)
    });
  }

  // Generate histogram data
  const histData = [];
  const min = Math.min(...batWeights);
  const max = Math.max(...batWeights);
  const binWidth = 0.1;
  for (let x = min; x <= max; x += binWidth) {
    histData.push({
      x,
      count: batWeights.filter(w => w >= x && w < x + binWidth).length
    });
  }

  return (
    <div className="p-8 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6">Bumblebee Bat Weight Analysis</h2>
      
      <div className="grid grid-cols-2 gap-8">
        {/* Summary Statistics */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Summary Statistics</h3>
          <div className="space-y-2">
            <p>Sample Size: {batWeights.length}</p>
            <p>Mean: {mean.toFixed(3)} g</p>
            <p>Standard Deviation: {sd.toFixed(3)} g</p>
            <p>Standard Error: {se.toFixed(3)} g</p>
            <p>t-statistic: {tStat.toFixed(3)}</p>
          </div>
        </div>

        {/* Histogram */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Weight Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <LineChart data={histData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis 
                  dataKey="x" 
                  label={{ value: 'Weight (g)', position: 'bottom', fill: '#fff' }}
                  stroke="#fff"
                />
                <YAxis 
                  label={{ value: 'Frequency', angle: -90, position: 'left', fill: '#fff' }}
                  stroke="#fff"
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Line type="step" dataKey="count" stroke="#38bdf8" dot={false} />
                <ReferenceLine x={mean} stroke="#f87171" strokeDasharray="3 3" />
                <ReferenceLine x={1.8} stroke="#818cf8" strokeDasharray="3 3" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* T-Distribution */}
        <div className="bg-gray-800 p-6 rounded-lg col-span-2">
          <h3 className="text-xl font-semibold mb-4">T-Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <LineChart data={tData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis 
                  dataKey="x" 
                  label={{ value: 't-value', position: 'bottom', fill: '#fff' }}
                  stroke="#fff"
                />
                <YAxis 
                  label={{ value: 'Density', angle: -90, position: 'left', fill: '#fff' }}
                  stroke="#fff"
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="density" stroke="#38bdf8" dot={false} />
                <ReferenceLine x={tStat} stroke="#f87171" label={{ value: 't-stat', fill: '#fff' }} />
                <ReferenceLine x={2.145} stroke="#818cf8" strokeDasharray="3 3" />
                <ReferenceLine x={-2.145} stroke="#818cf8" strokeDasharray="3 3" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BumblebeeBatAnalysis;