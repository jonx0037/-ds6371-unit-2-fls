import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CreativityAnalysisSlides = () => {
  // Sample data for t-test visualization
  const tTestData = [
    { x: -4, y: 0.00135 },
    { x: -3, y: 0.00874 },
    { x: -2.07, y: 0.04400 },
    { x: -1, y: 0.24197 },
    { x: 0, y: 0.39894 },
    { x: 1, y: 0.24197 },
    { x: 2, y: 0.05399 },
    { x: 3, y: 0.00443 },
    { x: 4, y: 0.00135 }
  ];

  return (
    <div className="space-y-8">
      {/* Data Visualization Enhancement */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Statistical Analysis Results</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded">
            <h3 className="font-semibold">Intrinsic Treatment</h3>
            <p>Mean: 19.8</p>
            <p>SD: 5.2</p>
          </div>
          <div className="p-4 bg-red-50 rounded">
            <h3 className="font-semibold">Extrinsic Treatment</h3>
            <p>Mean: 15.2</p>
            <p>SD: 6.1</p>
          </div>
        </div>
        
        <div className="mt-6 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={tTestData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="y" stroke="#2563eb" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* T-Test Results Enhancement */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">T-Test Significance</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold">Test Statistics</h3>
            <ul className="space-y-2">
              <li>t-statistic: -2.07</li>
              <li>Degrees of freedom: 45</li>
              <li>p-value: 0.044</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold">Effect Size</h3>
            <p>Cohen's d: 0.82</p>
            <p className="text-sm text-gray-600">Large effect size (>0.8)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativityAnalysisSlides;