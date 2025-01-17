import { BookOpenIcon, ChartBarIcon, BeakerIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const features = [
  {
    name: 'Fundamental Statistical Principles',
    description: 'Explore the relationship between confidence intervals and hypothesis testing, and how they complement each other in statistical inference.',
    icon: ChartBarIcon,
    href: '/statistical-principles'
  },
  {
    name: 'Statistical vs. Practical Significance',
    description: 'Learn how to balance statistical findings with real-world implications through case studies in marketing strategy analysis.',
    icon: PresentationChartLineIcon,
    href: '/practical-significance'
  },
  {
    name: 'Simulation and Sampling Distributions',
    description: 'Understand the Central Limit Theorem through interactive simulations and real-world applications.',
    icon: BeakerIcon,
    href: '/clt-sampling'
  }
];

export default function Home() {
  return (
    <div className="py-8">
      <div className="text-center">
        <BookOpenIcon className="h-12 w-12 text-blue-600 mx-auto" />
        <h1 className="mt-4 text-4xl font-bold text-gray-900">
          Statistical Foundations for Data Science
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Unit 2: Statistical Inference and Practical Applications
        </p>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.name}
                to={feature.href}
                className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div>
                  <Icon
                    className="h-8 w-8 text-blue-600"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
                <span
                  className="absolute inset-0 rounded-lg ring-2 ring-transparent group-hover:ring-blue-600"
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Key Learning Objectives
        </h2>
        <ul className="mt-4 text-left max-w-2xl mx-auto">
          <li className="flex items-start mt-4">
            <span className="flex-shrink-0 h-6 w-6 text-blue-600">•</span>
            <span className="ml-2">
              Understanding the relationship between confidence intervals and hypothesis testing
            </span>
          </li>
          <li className="flex items-start mt-4">
            <span className="flex-shrink-0 h-6 w-6 text-blue-600">•</span>
            <span className="ml-2">
              Distinguishing between statistical and practical significance in real-world scenarios
            </span>
          </li>
          <li className="flex items-start mt-4">
            <span className="flex-shrink-0 h-6 w-6 text-blue-600">•</span>
            <span className="ml-2">
              Applying multiple statistical approaches to strengthen analytical conclusions
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}