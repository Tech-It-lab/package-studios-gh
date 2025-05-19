
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon, className }) => {
  return (
    <div className={cn(
      'service-card bg-white dark:bg-package-black p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-transparent hover:border-package-light-gray',
      className
    )}>
      <div className="service-icon mb-4 transition-all duration-300 text-gray-600 dark:text-gray-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <Link 
        to={`/portfolio?filter=${id}`}
        className="inline-flex items-center text-package-red hover:underline font-medium"
      >
        See More <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
