import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceLine, Label, ResponsiveContainer } from 'recharts';

const MarketingStrategySection = () => {
  // Data for confidence interval visualization
  const data = [
    { x: 1.0, y: 0 },
    { x: 1.23, y: 0 },
    { x: 1.4, y: 0 },
    { x: 1.6, y: 0 },
    { x: 1.8, y: 0 }
  ];

  return (
    <div className="space-y-4">
      {/* Section Title Slide */}
      <div className="min-h-screen bg-white flex flex-col justify-center items-center p-8">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Marketing Strategy Analysis</h1>
          <p className="text-xl text-gray-600">Evaluating Statistical and Practical Significance</p>
        </div>
      </div>

      {/* Statistical Significance Slide */}
      <div className="min-h-screen bg-white flex flex-col justify-center p-8">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Statistical Significance</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">95% Confidence Interval Analysis</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="x">
                    <Label value="Sales Increase ($)" position="bottom" />
                  </XAxis>
                  <YAxis />
                  <ReferenceLine x={1.23} stroke="#2563eb" label="Lower Bound $1.23" />
                  <ReferenceLine x={1.60} stroke="#2563eb" label="Upper Bound $1.60" />
                  <ReferenceLine x={0} stroke="#ef4444" label="Zero Line" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-gray-700 mt-4">
              <p className="mb-4">Confidence Interval: ($1.23, $1.60)</p>
              <p>Strong statistical evidence of increased sales:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Interval entirely above zero</li>
                <li>Both bounds positive</li>
                <li>Consistent positive effect demonstrated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Practical Significance Slide */}
      <div className="min-h-screen bg-white flex flex-col justify-center p-8">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Practical Significance</h2>
          
          <div className="bg-red-50 p-6 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Cost-Benefit Analysis</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Implementation Cost</h4>
                <p className="text-2xl font-bold text-red-600">$5.00 per day</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Maximum Revenue Increase</h4>
                <p className="text-2xl font-bold text-blue-600">$1.60 per day</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Net Impact Range</h4>
              <ul className="space-y-2">
                <li>Best case: -$3.40 per day</li>
                <li>Worst case: -$3.77 per day</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion Slide */}
      <div className="min-h-screen bg-white flex flex-col justify-center p-8">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Key Findings</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Statistical vs. Practical Significance</h3>
              <p className="text-gray-700">While the new marketing strategy shows statistically significant sales improvement, it fails to demonstrate practical significance:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Statistical evidence confirms sales increase</li>
                <li>Implementation costs exceed maximum potential benefit</li>
                <li>Strategy would result in net daily loss</li>
                <li>Demonstrates importance of considering both statistical and practical significance in business decisions</li>
              </ul>
            </div>
            
            <div className="border-t pt-4">
              <p className="text-gray-700 font-semibold">Recommendation: Do not implement the new marketing strategy despite its statistical significance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingStrategySection;
