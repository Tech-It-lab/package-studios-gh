
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import PortfolioItem from '../components/PortfolioItem';
import PortfolioAlbum from '../components/PortfolioAlbum';
import Button from '../components/Button';
import { cn } from '@/lib/utils';
import ReactPlayer from 'react-player'

interface PortfolioItemData {
  title: string;
  category: string;
  image: string;
  videoUrl?: string;
  brandName?: string;
}

const Work: React.FC = () => {
  // Categories for filtering
  const categories = [
    'All',
    'Music Videos',
    'Podcasts',
    'Photography',
    'Documentaries',
    'Commercials',
    'Albums'
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

// Brand Albums data
const brandAlbums: {
  brandName: string;
  brandLogo: string;
  description: string;
  items: PortfolioItemData[];
}[] = [
  {
    brandName: "Honeysuckle",
    brandLogo: "/src/components/media/honeysuckle-logo.png",
    description: "Music production and video content",
    items: [
      {
        title: 'Album Cover Shoot',
        category: 'Photography',
        image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22'
      },
      {
        title: 'Music Video - Single Release',
        category: 'Music Videos',
        image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        title: 'Behind the Scenes',
        category: 'Photography',
        image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b'
      }
    ]
  },
  {
    brandName: "Free The Youth",
    brandLogo: "/src/components/media/free-the-youth-logo.png",
    description: "Documentary and awareness campaigns",
    items: [
      {
        title: 'Campaign Documentary',
        category: 'Documentaries',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        title: 'Event Photography',
        category: 'Photography',
        image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22'
      }
    ]
  },
  {
    brandName: "S&M Organics",
    brandLogo: "/src/components/media/sm-organics-logo.png",
    description: "Product photography and commercials",
    items: [
      {
        title: 'Product Showcase',
        category: 'Photography',
        image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22'
      },
      {
        title: 'Brand Commercial',
        category: 'Commercials',
        image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  {
    brandName: "Sunshine Ghana",
    brandLogo: "https://via.placeholder.com/150x150/FFD700/000000?text=SG",
    description: "Beverage and lifestyle brand content",
    items: [
      {
        title: 'Brand Campaign Shoot',
        category: 'Photography',
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772'
      },
      {
        title: 'Product Commercial',
        category: 'Commercials',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        title: 'Lifestyle Photography',
        category: 'Photography',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
      }
    ]
  },
  {
    brandName: "Rockefellas",
    brandLogo: "https://via.placeholder.com/150x150/8B4513/FFFFFF?text=R",
    description: "Restaurant and food content creation",
    items: [
      {
        title: 'Menu Photography',
        category: 'Photography',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b'
      },
      {
        title: 'Restaurant Commercial',
        category: 'Commercials',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        title: 'Food Styling Session',
        category: 'Photography',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'
      }
    ]
  },
  {
    brandName: "Microgardens",
    brandLogo: "https://via.placeholder.com/150x150/228B22/FFFFFF?text=MG",
    description: "Urban farming and sustainability projects",
    items: [
      {
        title: 'Farm Documentary',
        category: 'Documentaries',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        title: 'Product Photography',
        category: 'Photography',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b'
      },
      {
        title: 'Sustainability Campaign',
        category: 'Commercials',
        image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  }
];
  // Portfolio data
  const portfolioItems: PortfolioItemData[] = [
    {
      title: 'Excellent - Music Video',
      category: 'Music Videos',
      image: 'https://th.bing.com/th/id/OIP.nPK68WVkVrmR1rNGbj5zawHaHa?cb=iwp2&rs=1&pid=ImgDetMain',
      videoUrl: "https://www.youtube.com/embed/_-oNukOGyEw" 
    },
    {
      title: 'Free The Youth',
      category: 'Commercials',
      image: '/media/fty pic.jpg',
      videoUrl: '/public/media/RACE TO LAGOS   - A film by @mr_akrong AVAILABLE TOMORROW AT @ourhomecoming  Racers- @isurboi_protein1 @kellykurlz @kweku_maposh @joey_lit.mp4'
    },
    {
      title: 'For Meinergy',
      category: 'Documentaries',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Product/Food Photography',
      category: 'Photography',
      image: '/media/wings.jpg'
    },
    {
      title: 'Podcast Studio Setup',
      category: 'Podcasts',
      image: '/media/pod.jpg'
    },
    {
      title: 'Rugged 2.0 - Music Video',
      category: 'Music Videos',
      image: '/media/Rugged.png',
      videoUrl: 'https://www.youtube.com/embed/EuV8ShBmRj0'
    },
    {
      title: 'Food Photography',
      category: 'Photography',
      image: '/media/BALL MEAL.JPG'
    },
    {
      title: 'Excellent BTS',
      category: 'Music Video',
      image: '/media/Excellent_BTS_img.png',
      videoUrl: 'https://www.instagram.com/reel/DMVqIjXqxzk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      title: 'Product Photography',
      category: 'Photography',
      image: '/media/sunflower.jpg'
    },
    {
      title: 'RJZ - fOR lIFE',
      category: 'Music Video',
      image: 'https://ghanamusic.com/wp-content/uploads/2020/04/PSX_20200420_150219-1200x900.jpg',
      videoUrl: 'https://youtu.be/x4gBS0byPR0'
    },
    {
      title: 'Fashion Collection',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22'
    },
    {
      title: 'Micro Gardens Staff Interview',
      category: 'Commercials',
      image: '/media/Fran.png',
      videoUrl: '/media/Micros.mp4'
    }
  ];

  // Flatten album items into portfolio items for unified filtering
  const albumItems = brandAlbums.flatMap(album =>
    album.items.map(item => ({
      ...item,
      brandName: album.brandName,
      category: 'Albums' // Override to 'Albums' for album items
    }))
  );

  // Combine portfolio items and album items
  const allItems: PortfolioItemData[] = [...portfolioItems, ...albumItems];

  // Filter items based on active category
  const filteredItems = activeCategory === 'All' 
    ? allItems 
    : allItems.filter(item => item.category === activeCategory);

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
          {activeCategory === 'Albums' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {brandAlbums.map((album, index) => (
                <PortfolioAlbum
                  key={index}
                  brandName={album.brandName}
                  brandLogo={album.brandLogo}
                  description={album.description}
                  items={album.items}
                />
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <PortfolioItem
                    key={index}
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    videoUrl={item.videoUrl}
                    brandName={item.brandName}
                  />
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-xl text-gray-500">No items found in this category. Please try another filter.</p>
                </div>
              )}
            </>
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
