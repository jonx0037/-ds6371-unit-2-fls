import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const AgeDiscriminationAnalysis = () => {
  // Data
  const firedAges = [34, 37, 37, 38, 41, 42, 43, 44, 44, 45, 45, 45, 46, 48, 49, 53, 53, 54, 54, 55, 56];
  const notFiredAges = [27, 33, 36, 37, 38, 38, 39, 42, 42, 43, 43, 44, 44, 44, 45, 45, 45, 45, 46, 46, 47, 47, 48, 48, 49, 49, 51, 51, 52, 54];

  // Calculate summary statistics
  const calcMean = arr => arr.reduce((a, b) => a + b) / arr.length;
  const calcSD = arr => {
    const mean = calcMean(arr);
    return Math.sqrt(arr.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (arr.length - 1));
  };

  const firedMean = calcMean(firedAges);
  const notFiredMean = calcMean(notFiredAges);
  const firedSD = calcSD(firedAges);
  const notFiredSD = calcSD(notFiredAges);

  // Generate data for permutation distribution
  const [permutationData, setPermutationData] = useState([]);
  const [pValue, setPValue] = useState(null);
  
  useEffect(() => {
    const runPermutationTest = () => {
      const observedDiff = firedMean - notFiredMean;
      const allAges = [...firedAges, ...notFiredAges];
      const n1 = firedAges.length;
      const iterations = 10000;
      let counter = 0;
      const diffs = [];

      for (let i = 0; i < iterations; i++) {
        // Shuffle ages
        const shuffled = [...allAges].sort(() => Math.random() - 0.5);
        const group1 = shuffled.slice(0, n1);
        const group2 = shuffled.slice(n1);
        const diff = calcMean(group1) - calcMean(group2);
        diffs.push(diff);
        
        if (Math.abs(diff) >= Math.abs(observedDiff)) {
          counter++;
        }
      }

      // Create histogram data
      const histogramData = diffs.reduce((acc, val) => {
        const bin = Math.round(val * 10) / 10;
        acc[bin] = (acc[bin] || 0) + 1;
        return acc;
      }, {});

      const plotData = Object.entries(histogramData).map(([x, y]) => ({
        x: parseFloat(x),
        y: y / iterations
      }));

      setPermutationData(plotData);
      setPValue(counter / iterations);
    };

    runPermutationTest();
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Fired Group (n={firedAges.length})</h3>
          <p>Mean: {firedMean.toFixed(2)} years</p>
          <p>SD: {firedSD.toFixed(2)} years</p>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Not Fired Group (n={notFiredAges.length})</h3>
          <p>Mean: {notFiredMean.toFixed(2)} years</p>
          <p>SD: {notFiredSD.toFixed(2)} years</p>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Permutation Test Results</h3>
        <p>Observed Difference: {(firedMean - notFiredMean).toFixed(2)} years</p>
        <p>p-value: {pValue?.toFixed(4)}</p>
        
        <div className="h-64 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={permutationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis 
                dataKey="x"
                label={{ value: 'Difference in Means', position: 'bottom', fill: 'white' }}
              />
              <YAxis
                label={{ value: 'Density', angle: -90, position: 'left', fill: 'white' }}
              />
              <Tooltip contentStyle={{ backgroundColor: '#1f2937' }}/>
              <Line type="monotone" dataKey="y" stroke="#60a5fa" dot={false} />
              <ReferenceLine x={firedMean - notFiredMean} stroke="#ef4444" label={{ value: 'Observed', fill: 'white' }}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Statistical Analysis</h3>
        <div className="space-y-2">
          <p><strong>Hypotheses:</strong></p>
          <p>H₀: No age discrimination (differences due to chance)</p>
          <p>H₁: Systematic age discrimination exists</p>
          <p className="mt-4"><strong>Results:</strong></p>
          <p>The analysis suggests {pValue < 0.05 ? 'evidence of' : 'insufficient evidence for'} age discrimination.</p>
        </div>
      </div>
    </div>
  );
};

export default AgeDiscriminationAnalysis;