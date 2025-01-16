import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceLine, Label, ResponsiveContainer } from 'recharts';

// Generate t-distribution curve data points
const tCurveData = [];
for (let i = 0; i < 100; i++) {
  const x = -4 + (i * 0.08);
  const y = Math.exp(-(x * x) / 2) / Math.sqrt(2 * Math.PI);
  tCurveData.push({ x, y });
}

const BeachComberSection = () => {
  return (
    <div className="space-y-4">
      <div className="min-h-screen bg-white p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Beach Comber Analysis</h1>
        <p className="text-xl text-gray-600">Statistical Analysis of Patron Age Data</p>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Sample Statistics</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded shadow-sm">
              <h3 className="font-semibold">Sample Size</h3>
              <p className="text-2xl mt-2">n = 7</p>
            </div>
            <div className="p-6 bg-blue-50 rounded shadow-sm">
              <h3 className="font-semibold">Sample Mean</h3>
              <p className="text-2xl mt-2">x̄ = 29.86 years</p>
            </div>
            <div className="p-6 bg-blue-50 rounded shadow-sm">
              <h3 className="font-semibold">Standard Deviation</h3>
              <p className="text-2xl mt-2">s = 7.08 years</p>
            </div>
            <div className="p-6 bg-blue-50 rounded shadow-sm">
              <h3 className="font-semibold">Data Values</h3>
              <p className="mt-2">25, 19, 37, 29, 40, 28, 31</p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">95% Confidence Interval</h2>
        <div className="space-y-6">
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Interval Construction</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded shadow-sm">
                <h4 className="font-semibold text-lg mb-4">Using t-distribution (df = 6)</h4>
                <div className="space-y-2">
                  <p className="text-lg">x̄ ± (t₀.₀₂₅,₆)(s/√n)</p>
                  <p className="text-lg">29.86 ± (2.447)(7.08/√7)</p>
                  <p className="text-lg">29.86 ± 6.55</p>
                  <p className="text-xl font-semibold text-blue-600 mt-4">(23.31, 36.41) years</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded shadow-sm">
                <h4 className="font-semibold text-lg mb-4">Using z-distribution (known σ)</h4>
                <div className="space-y-2">
                  <p className="text-lg">29.86 ± (1.96)(7.08/√7)</p>
                  <p className="text-lg">29.86 ± 5.24</p>
                  <p className="text-xl font-semibold text-blue-600 mt-4">(24.62, 35.10) years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Hypothesis Testing</h2>
        <div className="space-y-6">
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded shadow-sm">
                <h4 className="font-semibold text-lg mb-4">Hypotheses</h4>
                <p className="text-lg">H₀: μ = 21 years</p>
                <p className="text-lg">H₁: μ ≠ 21 years</p>
              </div>
              
              <div className="bg-white p-6 rounded shadow-sm">
                <h4 className="font-semibold text-lg mb-4">Test Statistic</h4>
                <p className="text-lg">t = (29.86 - 21)/(7.08/√7) = 3.31</p>
                <p className="text-lg mt-2">Critical values: ±2.447</p>
                
                <div className="mt-6 h-64 bg-gray-50 p-4 rounded">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={tCurveData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="x" 
                        type="number" 
                        domain={[-4, 4]}
                        tickCount={9}
                      >
                        <Label value="t-statistic" position="bottom" offset={0} />
                      </XAxis>
                      <YAxis>
                        <Label value="Density" angle={-90} position="left" offset={0} />
                      </YAxis>
                      <Line 
                        type="monotone" 
                        dataKey="y" 
                        stroke="#2563eb" 
                        dot={false} 
                        strokeWidth={2}
                      />
                      <ReferenceLine 
                        x={-2.447} 
                        stroke="#ef4444" 
                        strokeDasharray="3 3"
                        label={{ value: "t₀.₀₂₅", position: "top" }} 
                      />
                      <ReferenceLine 
                        x={2.447} 
                        stroke="#ef4444" 
                        strokeDasharray="3 3"
                        label={{ value: "t₀.₉₇₅", position: "top" }} 
                      />
                      <ReferenceLine 
                        x={3.31} 
                        stroke="#22c55e"
                        strokeWidth={2}
                        label={{ value: "t = 3.31", position: "top" }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded shadow-sm">
                <h4 className="font-semibold text-lg mb-4">Results</h4>
                <p className="text-lg">p-value = 0.0162 < α = 0.05</p>
                <p className="text-lg mt-2 font-medium">Reject H₀ at 5% significance level</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Statistical Conclusions</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded shadow-sm">
                <h4 className="font-semibold text-lg mb-4">Confidence Interval Interpretation</h4>
                <p className="text-lg">We are 95% confident the true mean age of Beach Comber patrons at 7pm falls between 23.31 and 36.41 years.</p>
              </div>
              
              <div className="bg-white p-6 rounded shadow-sm">
                <h4 className="font-semibold text-lg mb-4">Business Implications</h4>
                <div className="space-y-2">
                  <p className="text-lg">Strong statistical evidence that the true mean age differs from 21 years</p>
                  <p className="text-lg">Results suggest an older customer base than hypothesized</p>
                  <p className="text-lg text-gray-600 mt-4">Note: Scope limited to 7pm timeframe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeachComberSection;