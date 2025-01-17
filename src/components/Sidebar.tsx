import { Link, useLocation } from 'react-router-dom';
import {
  BookOpenIcon,
  ChartBarIcon,
  PresentationChartLineIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  {
    name: 'Overview',
    href: '/',
    icon: BookOpenIcon,
  },
  {
    name: 'Statistical Principles',
    href: '/statistical-principles',
    icon: ChartBarIcon,
  },
  {
    name: 'Practical Significance',
    href: '/practical-significance',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'CLT & Sampling',
    href: '/clt-sampling',
    icon: BeakerIcon,
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          DS 6371 Unit 2
        </h2>
        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  flex items-center px-3 py-2 text-sm font-medium rounded-md
                  ${isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                `}
              >
                <Icon
                  className={`mr-3 h-5 w-5 ${
                    isActive ? 'text-blue-700' : 'text-gray-400'
                  }`}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;