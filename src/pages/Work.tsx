
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import PortfolioItem from '../components/PortfolioItem';
import Button from '../components/Button';
import { cn } from '@/lib/utils';
import ReactPlayer from 'react-player'

const Work: React.FC = () => {
  // Categories for filtering
  const categories = [
    'All',
    'Music Videos',
    'Podcasts',
    'Photography',
    'Documentaries',
    'Commercials'
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const location = useLocation();

  // Set active category based on URL parameters when component mounts or URL changes
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filterParam = searchParams.get('filter');
    
    if (filterParam) {
      // Map service IDs to categories
      const categoryMapping: {[key: string]: string} = {
        'music-videos': 'Music Videos',
        'podcast-production': 'Podcasts',
        'photography': 'Photography',
        'documentaries': 'Documentaries',
        'videography': 'Music Videos',
        'commercials': 'Commercials',
        'social-media': 'Commercials',
        'drone': 'Photography'
      };
      
      const mappedCategory = categoryMapping[filterParam];
      if (mappedCategory && categories.includes(mappedCategory)) {
        setActiveCategory(mappedCategory);
      }
    }
  }, [location]);
  // Portfolio data
  const portfolioItems = [
    {
      title: 'Excellent - Music Video',
      category: 'Music Videos',
      image: 'https://th.bing.com/th/id/OIP.nPK68WVkVrmR1rNGbj5zawHaHa?cb=iwp2&rs=1&pid=ImgDetMain',
      videoUrl: "https://www.youtube.com/embed/_-oNukOGyEw" 
    },
    {
      title: 'Free The Youth',
      category: 'Commercials',
      image: 'data:image/webp;base64,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',
      videoUrl: '/public/media/RACE TO LAGOS   - A film by @mr_akrong AVAILABLE TOMORROW AT @ourhomecoming  Racers- @isurboi_protein1 @kellykurlz @kweku_maposh @joey_lit.mp4'
    },
    {
      title: 'The Digital Frontier',
      category: 'Documentaries',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Night Lights Photography',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22'
    },
    {
      title: 'Podcast Studio Setup',
      category: 'Podcasts',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b'
    },
    {
      title: 'Echo - Music Video',
      category: 'Music Videos',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Food Brand Commercial',
      category: 'Commercials',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc'
    },
    {
      title: 'Morning Talk Show',
      category: 'Podcasts',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b'
    },
    {
      title: 'Product Photography',
      category: 'Photography',
      image: 'https://drive.google.com/file/d/1CnlxDsAxmhQ3MhgyjH6sxzptNRwxsxXK/view?usp=sharing'
    },
    {
      title: 'Cultural Heritage',
      category: 'Documentaries',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Fashion Collection',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22'
    },
    {
      title: 'Product Launch Event',
      category: 'Commercials',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 bg-package-gray dark:bg-package-black/90">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore our portfolio of creative projects across various media formats.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-10 bg-white dark:bg-package-black sticky top-16 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-4 py-2 rounded-full transition-all',
                  activeCategory === category 
                    ? 'bg-package-red text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <PortfolioItem
                key={index}
                title={item.title}
                category={item.category}
                image={item.image}
                videoUrl={item.videoUrl}
              />
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No items found in this category. Please try another filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-package-gray dark:bg-package-black/60">
        <div className="container-custom">
          <SectionHeader 
            title="Featured Projects" 
            subtitle="Explore some of our creative work."
            centered
          />
          
          <div className="space-y-16">
            {/* Featured Project 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/media/Rugged.png" 
                  alt="Music Video Project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Kojo Blak ft Olivetheboy - "Rugged 2.0"</h3>
                <p className="text-package-red font-medium mb-4">Music Video</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  A vibrant music video shot in urban Accra, combining traditional elements with modern cinematography. This project showcases our ability to create visually stunning content that enhances the artist's musical vision.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-semibold">Client:</span> Record Label Name
                  </div>
                  <div>
                    <span className="font-semibold">Services:</span> Direction, Cinematography, Editing, Color Grading, Styling
                  </div>
                  <div>
                    <span className="font-semibold">Year:</span> 2024
                  </div>
                </div>
                <Button href="https://youtu.be/EuV8ShBmRj0" target="_blank">
                  Watch Video
                </Button>
              </div>
            </div>

            {/* Featured Project 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-2 aspect-video rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/media/bye-bye-cover-art.jpg" 
                  alt="Music Video Project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-3">Aburi Documentary</h3>
                <p className="text-package-red font-medium mb-4">Documentary Series</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  An award-winning documentary series exploring the impact of technology on local communities in Ghana. Through intimate interviews and compelling visuals, we tell the story of digital transformation in West Africa.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-semibold">Client:</span> NGO Media Foundation
                  </div>
                  <div>
                    <span className="font-semibold">Services:</span> Research, Direction, Production, Post-Production
                  </div>
                  <div>
                    <span className="font-semibold">Year:</span> 2022
                  </div>
                </div>
                <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                  Watch Trailer
                </Button>
              </div>
            </div>

           {/* Featured Project 1.1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/public/media/Rugged.png" 
                  alt="Music Video Project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">RJZ - "Bye Bye"</h3>
                <p className="text-package-red font-medium mb-4">Music Video</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  A vibrant music video shot in urban Accra, combining traditional elements with modern cinematography. This project showcases our ability to create visually stunning content that enhances the artist's musical vision.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-semibold">Client:</span> Record Label Name
                  </div>
                  <div>
                    <span className="font-semibold">Services:</span> Direction, Cinematography, Editing, Color Grading, Styling
                  </div>
                  <div>
                    <span className="font-semibold">Year:</span> 2020
                  </div>
                </div>
                <Button href="https://youtu.be/jQpdf1rTZRA" target="_blank">
                  Watch Video
                </Button>
              </div>
            </div>

            {/* Featured Project 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-2 aspect-video rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/media/bye-bye-cover-art.jpg" 
                  alt="Music Video Project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-3">Aburi Documentary</h3>
                <p className="text-package-red font-medium mb-4">Documentary Series</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  An award-winning documentary series exploring the impact of technology on local communities in Ghana. Through intimate interviews and compelling visuals, we tell the story of digital transformation in West Africa.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-semibold">Client:</span> NGO Media Foundation
                  </div>
                  <div>
                    <span className="font-semibold">Services:</span> Research, Direction, Production, Post-Production
                  </div>
                  <div>
                    <span className="font-semibold">Year:</span> 2022
                  </div>
                </div>
                <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                  Watch Trailer
                </Button>
              </div>
            </div>

            {/* Featured Project 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc" 
                  alt="Commercial Project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Tech Product Launch</h3>
                <p className="text-package-red font-medium mb-4">Commercial</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  A sleek, high-energy commercial for a major tech product launch. This project demonstrates our ability to create compelling advertising content that drives consumer engagement and brand awareness.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-semibold">Client:</span> Tech Brand Inc.
                  </div>
                  <div>
                    <span className="font-semibold">Services:</span> Creative Direction, Production, Visual Effects, Sound Design
                  </div>
                  <div>
                    <span className="font-semibold">Year:</span> 2024
                  </div>
                </div>
                <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                  Watch Commercial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader 
            title="Client Testimonials" 
            subtitle="What our clients say about working with Package Studios."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md border border-package-light-gray">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">John Williams</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Music Artist</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "Working with Package Studios on my music video was an incredible experience. Their team understood my vision and took it to the next level with their creativity and technical expertise."
              </p>
            </div>
            
            <div className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md border border-package-light-gray">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "Package Studios delivered a commercial that perfectly captured our brand essence and resonated with our target audience. The ROI on this project exceeded our expectations."
              </p>
            </div>
            
            <div className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md border border-package-light-gray">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Michael Brown</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Podcast Host</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "The podcast production quality we get from Package Studios is top-notch. They've helped us create a professional sound that has dramatically increased our listener engagement."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-package-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Next Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you bring your creative vision to life with our professional media production services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" className="bg-white text-package-red hover:bg-gray-100" size="lg">
              Get in Touch
            </Button>
            <Button to="/book" variant="outline" size="lg">
              Book a Service
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
