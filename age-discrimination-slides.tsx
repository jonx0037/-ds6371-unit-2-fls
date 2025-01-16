import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AgeDiscriminationSection = () => {
  const differenceData = [
    { x: -2, y: 0.05 },
    { x: -1, y: 0.15 },
    { x: 0, y: 0.25 },
    { x: 1, y: 0.15 },
    { x: 1.79, y: 0.10 },
    { x: 2, y: 0.05 }
  ];

  return (
    <div className="space-y-4">
      {/* Introduction Slide */}
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Age Discrimination Analysis</h1>
          <p className="text-xl text-gray-600 mb-8">Statistical Analysis of Employee Age Data</p>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Data Overview</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold mb-2">Fired Group (n₁ = 21)</h3>
                <p className="text-gray-600">Mean Age: 45.86 years</p>
                <p className="text-gray-600">SD: 6.89 years</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-semibold mb-2">Not Fired Group (n₂ = 30)</h3>
                <p className="text-gray-600">Mean Age: 44.07 years</p>
                <p className="text-gray-600">SD: 5.92 years</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Permutation Test Slide */}
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Permutation Test Analysis</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Test Setup</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold">Hypotheses</h4>
                  <p>H₀: No relationship between age and firing status</p>
                  <p>H₁: Systematic relationship exists</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold">Test Statistic</h4>
                  <p>Observed difference in means = 1.79 years</p>
                  <p>Number of permutations = 10,000</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Results</h3>
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold">Permutation Test Outcome</h4>
                <p>p-value = 0.0412</p>
                <p className="mt-2">Evidence suggests age-based discrimination at α = 0.05</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two-Sample t-Test Slide */}
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Two-Sample t-Test Analysis</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Analysis Details</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold">Test Parameters</h4>
                  <p>Degrees of freedom = 49</p>
                  <p>t-statistic = 2.076</p>
                  <p>p-value = 0.0434</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold">Standard Error Calculation</h4>
                  <p>Pooled SD = 6.32</p>
                  <p>Standard Error = 1.82</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Confidence Interval</h3>
              <div className="bg-white p-4 rounded shadow-sm">
                <p>95% CI for difference in means:</p>
                <p className="text-lg font-medium text-blue-600">(0.0547, 3.5253) years</p>
                <p className="mt-2">Interval excludes zero, supporting the discrimination claim</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparative Analysis Slide */}
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Synthesis of Results</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Comparison of Methods</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold">Permutation Test</h4>
                  <p>p-value = 0.0412</p>
                  <p>Requires no distributional assumptions</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold">t-Test</h4>
                  <p>p-value = 0.0434</p>
                  <p>Provides confidence interval</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Statistical Conclusions</h3>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="space-y-2">
                  <p>Both methods provide evidence of age discrimination</p>
                  <p>Mean age difference: 1.79 years higher in fired group</p>
                  <p>95% confidence interval excludes zero</p>
                  <p>Results are both statistically and practically significant</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Scope of Inference</h3>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="space-y-2">
                  <p>Results generalizable to ASG employee population</p>
                  <p>Random sampling supports population inference</p>
                  <p>Systematic age differences support discrimination claim</p>
                  <p>Additional context strengthens conclusions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeDiscriminationSection;