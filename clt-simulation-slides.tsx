import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CLTSimulationSection = () => {
  // Simulated data for distribution shapes
  const distributionData = [
    { size: 5, mean: 4.2, sd: 0.8 },
    { size: 10, mean: 4.3, sd: 0.6 },
    { size: 20, mean: 4.4, sd: 0.4 },
    { size: 50, mean: 4.5, sd: 0.3 }
  ];

  return (
    <div className="space-y-4">
      {/* Section Title Slide */}
      <div className="min-h-screen bg-white flex flex-col justify-center items-center p-8">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Central Limit Theorem Simulation</h1>
          <p className="text-xl text-gray-600">Analysis of Sampling Distributions</p>
        </div>
      </div>

      {/* Initial Simulation Results Slide */}
      <div className="min-h-screen bg-white flex flex-col justify-center p-8">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Initial Simulation (n=5)</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">500 Random Samples</h3>
            <div className="text-gray-700 space-y-4">
              <p>Key Observations from Initial Sample Size:</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold mb-2">Distribution Shape</h4>
                  <p>Early signs of normality emerging, though with notable variability</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold mb-2">Center and Spread</h4>
                  <p>Mean stable but larger standard deviation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sample Size Comparison Slide */}
      <div className="min-h-screen bg-white flex flex-col justify-center p-8">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Effect of Sample Size</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Comparative Analysis</h3>
            
            <div className="h-64 w-full">
              <ResponsiveContainer>
                <LineChart data={distributionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="size" label={{ value: 'Sample Size', position: 'bottom' }} />
                  <YAxis label={{ value: 'Standard Deviation', angle: -90, position: 'left' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="sd" stroke="#2563eb" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold">n = 10</h4>
                <p>Improved normality, reduced variance</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold">n = 20</h4>
                <p>Clear normal shape emerging</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold">n = 50</h4>
                <p>Strong normality, minimal variance</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold">Theoretical σ/√n</h4>
                <p>Close match to observed SD</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pattern Recognition Slide */}
      <div className="min-h-screen bg-white flex flex-col justify-center p-8">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Key Patterns Observed</h2>
          
          <div className="bg-green-50 p-6 rounded-lg space-y-6">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-gray-800">Distribution Shape</h4>
                <p className="text-gray-700">Consistent progression toward normality with increasing sample size</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-gray-800">Center Stability</h4>
                <p className="text-gray-700">Sample means remain unbiased estimators across all sample sizes</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-gray-800">Spread Reduction</h4>
                <p className="text-gray-700">Standard error decreases predictably with square root of sample size</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-gray-800">Universal Application</h4>
                <p className="text-gray-700">Patterns hold across different underlying population distributions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implications Slide */}
      <div className="min-h-screen bg-white flex flex-col justify-center p-8">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Statistical Implications</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Applications in Statistical Analysis</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold">Sample Size Selection</h4>
                  <p>Guides determination of appropriate sample sizes for studies</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold">Inference Methods</h4>
                  <p>Supports validity of normal-theory based procedures</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold">Precision Control</h4>
                  <p>Enables management of estimation precision</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold">Practical Application</h4>
                  <p>Informs real-world statistical decision making</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CLTSimulationSection;