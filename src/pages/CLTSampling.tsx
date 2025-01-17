import { BeakerIcon } from '@heroicons/react/24/outline';

export default function CLTSampling() {
  return (
    <div className="py-8">
      <div className="flex items-center mb-8">
        <BeakerIcon className="h-8 w-8 text-blue-600 mr-4" />
        <h1 className="text-3xl font-bold text-gray-900">
          The Power of Simulation and Sampling Distributions
        </h1>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Central Limit Theorem (CLT)
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <p className="text-gray-700 mb-4">
            Our simulations revealed key insights about sampling distributions and their behavior 
            under various conditions. The Central Limit Theorem demonstrates that:
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              As sample size increases, the distribution of sample means becomes increasingly normal
            </li>
            <li>
              This holds true regardless of the underlying population distribution
            </li>
            <li>
              The standard error decreases as sample size increases, leading to more precise estimates
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Key Observations from Simulations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Sample Size Effects
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Larger samples lead to more stable estimates</li>
              <li>Distribution shape becomes more normal</li>
              <li>Variance of sample means decreases</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Distribution Properties
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mean of sample means equals population mean</li>
              <li>Standard error = σ/√n</li>
              <li>Symmetry increases with sample size</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Practical Applications
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Statistical Inference
              </h3>
              <p className="text-gray-700">
                The CLT forms the foundation for many statistical procedures:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Confidence interval construction</li>
                <li>Hypothesis testing</li>
                <li>Sample size determination</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real-World Examples
              </h3>
              <p className="text-gray-700">
                Applications we explored in our analyses:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Marketing strategy effectiveness</li>
                <li>Age discrimination analysis</li>
                <li>Beach Comber data analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Important Considerations
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-600">•</span>
              <span className="ml-2">
                <strong>Independence Assumption:</strong> Samples must be independent for the CLT to apply
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-600">•</span>
              <span className="ml-2">
                <strong>Sample Size Requirements:</strong> Generally, n ≥ 30 is considered sufficient for 
                the CLT to take effect
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-600">•</span>
              <span className="ml-2">
                <strong>Population Distribution:</strong> While the CLT works regardless of the population 
                distribution, extreme skewness may require larger samples
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}