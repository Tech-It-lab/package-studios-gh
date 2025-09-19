import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import PortfolioItem from './PortfolioItem';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface AlbumItem {
  title: string;
  category: string;
  image: string;
  videoUrl?: string;
}

interface PortfolioAlbumProps {
  brandName: string;
  brandLogo?: string;
  description?: string;
  items: AlbumItem[];
  className?: string;
}

const PortfolioAlbum: React.FC<PortfolioAlbumProps> = ({
  brandName,
  brandLogo,
  description,
  items,
  className
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Card className={`w-full cursor-pointer ${className}`}>
            <CardHeader>
              <div className="flex items-center gap-4">
                {brandLogo && (
                  <div className="w-12 h-12 flex-shrink-0">
                    <img 
                      src={brandLogo} 
                      alt={`${brandName} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <CardTitle className="text-2xl">{brandName}</CardTitle>
                  {description && (
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full">
                <CarouselContent className="-ml-4">
                  {items.slice(0, 1).map((item, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full">
                      <PortfolioItem
                        title={item.title}
                        category={item.category}
                        image={item.image}
                        videoUrl={item.videoUrl}
                        className="h-64"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                {items.length} {items.length === 1 ? 'project' : 'projects'}
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-package-black">
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-white">{brandName} - All Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <PortfolioItem
                  key={index}
                  title={item.title}
                  category={item.category}
                  image={item.image}
                  videoUrl={item.videoUrl}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PortfolioAlbum;
