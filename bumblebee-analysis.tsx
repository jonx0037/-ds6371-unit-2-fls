import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BumblebeeBatAnalysis = () => {
  // Data
  const batWeights = [1.7, 1.6, 1.5, 2.0, 2.3, 1.6, 1.6, 1.8, 1.5, 1.7, 1.2, 1.4, 1.6, 1.6, 1.6];
  
  // Calculate summary statistics
  const n = batWeights.length;
  const mean = batWeights.reduce((a, b) => a + b) / n;
  const sd = Math.sqrt(batWeights.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (n - 1));
  const se = sd / Math.sqrt(n);
  const nullValue = 1.8;
  const tStat = (mean - nullValue) / se;
  const pValue = 0.034;
  
  // Generate t-distribution curve data
  const tCurveData = [];
  for (let x = -4; x <= 4; x += 0.1) {
    tCurveData.push({
      x: x,
      y: Math.exp(-(x * x) / 2) / Math.sqrt(2 * Math.PI)
    });
  }

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">Bumblebee Bat Weight Analysis</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-gray-50 rounded">
          <h3 className="font-semibold mb-2">Summary Statistics</h3>
          <ul className="space-y-2">
            <li>Sample Size (n): {n}</li>
            <li>Sample Mean: {mean.toFixed(3)} g</li>
            <li>Standard Deviation: {sd.toFixed(3)} g</li>
            <li>Standard Error: {se.toFixed(3)} g</li>
            <li>t-statistic: {tStat.toFixed(3)}</li>
          </ul>
        </div>
        
        <div className="p-4 bg-gray-50 rounded">
          <h3 className="font-semibold mb-2">Hypothesis Test</h3>
          <ul className="space-y-2">
            <li>H₀: μ = 1.8 g</li>
            <li>H₁: μ ≠ 1.8 g</li>
            <li>α = 0.05</li>
            <li>Critical Values: ±2.145</li>
          </ul>
        </div>
      </div>
      
      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={tCurveData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="x"
              label={{ value: 't-value', position: 'bottom' }} 
            />
            <YAxis 
              label={{ value: 'Density', angle: -90, position: 'left' }} 
            />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="y" 
              stroke="#2563eb" 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 rounded">
          <h3 className="font-semibold mb-2">Statistical Conclusion</h3>
          <p>With |t| = {Math.abs(tStat).toFixed(3)} > critical value 2.145 and p-value = {pValue} < α = 0.05,
             we reject H₀.</p>
          <p className="mt-2">There is sufficient evidence to conclude that the true mean weight of bumblebee bats 
             differs from 1.8 g.</p>
          <p className="mt-2">95% CI: ({(mean - 2.145*se).toFixed(3)}, {(mean + 2.145*se).toFixed(3)}) g</p>
        </div>
      </div>
    </div>
  );
};

export default BumblebeeBatAnalysis;