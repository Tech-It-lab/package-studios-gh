
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      <h2 className="mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 h-1 w-16 bg-package-red"></span>
      </h2>
      {subtitle && <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-3xl">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
