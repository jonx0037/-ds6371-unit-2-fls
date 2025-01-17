import { PresentationChartLineIcon } from '@heroicons/react/24/outline';

export default function PracticalSignificance() {
  return (
    <div className="py-8">
      <div className="flex items-center mb-8">
        <PresentationChartLineIcon className="h-8 w-8 text-blue-600 mr-4" />
        <h1 className="text-3xl font-bold text-gray-900">
          Statistical vs. Practical Significance
        </h1>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Marketing Strategy Case Study
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <p className="text-gray-700 mb-4">
            Our marketing strategy analysis provided a clear example of how statistical significance 
            doesn't automatically translate to practical importance:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Statistical Results
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Statistically significant increase in sales</li>
                <li>Sales improved from $1.23 to $1.60</li>
                <li>P-value below significance threshold</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Practical Implications
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Implementation cost: $5.00 per unit</li>
                <li>Revenue increase: $0.37 per unit</li>
                <li>Net loss when considering costs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Key Considerations for Business Decisions
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Cost-Benefit Analysis
            </h3>
            <p className="text-gray-700">
              When evaluating statistical findings, consider:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Implementation costs</li>
              <li>Expected return on investment</li>
              <li>Long-term sustainability</li>
              <li>Resource allocation implications</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Context Matters
            </h3>
            <p className="text-gray-700">
              Statistical significance should be interpreted within the broader business context:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Industry standards and benchmarks</li>
              <li>Company goals and objectives</li>
              <li>Market conditions and competition</li>
              <li>Available alternatives</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Decision-Making Framework
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <strong>Evaluate Statistical Evidence:</strong>
              <p className="text-gray-700 mt-1">
                Begin with rigorous statistical analysis to establish the reliability of findings
              </p>
            </li>
            <li>
              <strong>Assess Practical Impact:</strong>
              <p className="text-gray-700 mt-1">
                Quantify the real-world implications of implementing changes
              </p>
            </li>
            <li>
              <strong>Consider Alternatives:</strong>
              <p className="text-gray-700 mt-1">
                Compare the proposed solution with other possible approaches
              </p>
            </li>
            <li>
              <strong>Make Informed Decisions:</strong>
              <p className="text-gray-700 mt-1">
                Balance statistical evidence with practical considerations to reach optimal decisions
              </p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}