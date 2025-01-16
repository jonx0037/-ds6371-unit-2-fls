import React from 'react';

const QQQSection = () => {
  return (
    <div className="space-y-4">
      {/* Section Title Slide */}
      <div className="min-h-screen bg-white flex flex-col justify-center items-center p-8">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Quick Quiz Questions</h1>
          <p className="text-xl text-gray-600">Section 1: Understanding Key Statistical Concepts</p>
        </div>
      </div>

      {/* QQQ1 Slide */}
      <div className="min-h-screen bg-white flex flex-col justify-center p-8">
        <div className="max-w-4xl space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Question 1</h2>
            <p className="text-lg text-gray-700">True or False: If a sample size is large, then the shape of a histogram of the sample data will be approximately normal, regardless of the shape of the original population distribution.</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Answer: False</h3>
            <div className="text-gray-700 space-y-4">
              <p>The shape of the histogram of sample data will generally reflect the shape of the original population distribution, regardless of sample size.</p>
              <p>Key points:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Central Limit Theorem applies to the sampling distribution of means, not individual observations</li>
                <li>Large sample size improves representation of the underlying distribution</li>
                <li>Sample distribution maintains characteristics of the population distribution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* QQQ2 Slide */}
      <div className="min-h-screen bg-white flex flex-col justify-center p-8">
        <div className="max-w-4xl space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Question 2</h2>
            <p className="text-lg text-gray-700">A comparison of breathing capacities indicated no difference in means between households with low and high nitrogen dioxide levels (two-sided p-value = 0.24). What is the error in this interpretation?</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Answer</h3>
            <div className="text-gray-700 space-y-4">
              <p>The error is in concluding that the means are equal. Failing to reject the null hypothesis does not prove the null hypothesis true.</p>
              <p>Correct interpretation:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We lack sufficient evidence to conclude the means are different</li>
                <li>The difference could plausibly be zero</li>
                <li>We are not proving equality, only failing to prove difference</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* QQQ3 Slide */}
      <div className="min-h-screen bg-white flex flex-col justify-center p-8">
        <div className="max-w-4xl space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Question 3</h2>
            <p className="text-lg text-gray-700">For the guinea pig survival time study with randomly assigned control and treatment groups, which statistical model would be most appropriate?</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Answer</h3>
            <div className="text-gray-700 space-y-4">
              <p>The additive treatment effect model using a normal approximation with equal variances is most appropriate because:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Random assignment to treatment groups ensures independence</li>
                <li>Comparing two independent groups allows for straightforward analysis</li>
                <li>Primary interest is in the treatment effect</li>
                <li>Survival times with random assignment support normality assumption</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* QQQ4 Slide */}
      <div className="min-h-screen bg-white flex flex-col justify-center p-8">
        <div className="max-w-4xl space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Question 4</h2>
            <p className="text-lg text-gray-700">What is the formal definition of the "p-value"?</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Answer</h3>
            <div className="text-gray-700 space-y-4">
              <p>The p-value is the probability of observing a test statistic as extreme as or more extreme than the one actually observed, assuming that the null hypothesis is true.</p>
              <p>Key components:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Probability of obtaining observed results (or more extreme) by chance alone</li>
                <li>Calculated under the assumption that null hypothesis is true</li>
                <li>Quantifies strength of evidence against null hypothesis</li>
                <li>Smaller p-values indicate stronger evidence against null hypothesis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QQQSection;
