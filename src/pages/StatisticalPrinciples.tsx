import { ChartBarIcon } from '@heroicons/react/24/outline';

export default function StatisticalPrinciples() {
  return (
    <div className="py-8">
      <div className="flex items-center mb-8">
        <ChartBarIcon className="h-8 w-8 text-blue-600 mr-4" />
        <h1 className="text-3xl font-bold text-gray-900">
          Fundamental Statistical Principles
        </h1>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Confidence Intervals and Hypothesis Testing
        </h2>
        <p className="text-gray-700 mb-6">
          The relationship between confidence intervals and hypothesis testing represents a cornerstone 
          of statistical inference. These two approaches complement each other, providing different 
          perspectives on the same underlying question:
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Confidence Intervals:</strong> Provide a range of plausible values for population 
              parameters, helping us understand the precision of our estimates
            </li>
            <li>
              <strong>Hypothesis Tests:</strong> Help us make decisions about specific claims regarding 
              population parameters
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Multiple Testing Approaches
        </h2>
        <p className="text-gray-700 mb-6">
          Our analyses demonstrated the value of using multiple statistical approaches to strengthen 
          conclusions. For example, in the age discrimination analysis, we used both:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Permutation Tests
            </h3>
            <p className="text-gray-700">
              A non-parametric approach that makes no assumptions about the underlying distribution
              of the data.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Traditional t-tests
            </h3>
            <p className="text-gray-700">
              A parametric approach that assumes normally distributed data but provides well-understood
              theoretical guarantees.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Key Considerations
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-600">•</span>
              <span className="ml-2">
                <strong>Sample Size Implications:</strong> Understanding how sample size affects both 
                confidence intervals and test statistics
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-600">•</span>
              <span className="ml-2">
                <strong>Assumptions:</strong> Recognizing and validating the assumptions underlying 
                different statistical methods
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-600">•</span>
              <span className="ml-2">
                <strong>Interpretation:</strong> Drawing appropriate conclusions based on both 
                statistical evidence and practical context
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}