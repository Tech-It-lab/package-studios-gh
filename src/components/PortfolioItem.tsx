
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  videoUrl?: string;
  className?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  category,
  image,
  videoUrl,
  className,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
            'portfolio-item cursor-pointer group overflow-hidden rounded-lg relative',
            className
          )}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover aspect-square sm:aspect-video"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
            <h3 className="text-white font-bold text-lg">{title}</h3>
            <p className="text-gray-300 text-sm">{category}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-package-black">
        {videoUrl ? (
          <div className="relative aspect-video">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-package-red"></div>
              </div>
            )}
            <iframe
              src={videoUrl}
              title={title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            ></iframe>
          </div>
        ) : (
          <img 
            src={image} 
            alt={title} 
            className="w-full" 
          />
        )}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-400">{category}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioItem;
