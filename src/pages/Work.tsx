
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import PortfolioItem from '../components/PortfolioItem';
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
    'Photography',
    'Documentaries',
    'Commercials',
    'Animations'
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
        'photography': 'Photography',
        'documentaries': 'Documentaries',
        'commercials': 'Commercials',
        'social-media': 'Commercials',
        'drone': 'Photography',
        'animation': 'Animations'
      };
      
      const mappedCategory = categoryMapping[filterParam];
      if (mappedCategory && categories.includes(mappedCategory)) {
        setActiveCategory(mappedCategory);
      }
    }
  }, [location]);

  // Portfolio data
  const portfolioItems: PortfolioItemData[] = [
    {
      title: 'Sailor BTS',
      category: 'Music Videos',
      image: '/media/sailor bts.png',
      videoUrl: "https://www.instagram.com/reel/DVtJpQICvFd/embed" 
    },
    {
      title: 'Sailor - Music Video',
      category: 'Music Videos',
      image: '/media/Sailor.png',
      videoUrl: "https://youtube.com/embed/RFn82FbGkLQ" 
    },
    {
      title: 'Nkwa Foundation',
      category: 'Documentaries',
      image: '/media/Nkwa.png',
      videoUrl: "https://www.instagram.com/reel/DVEi9C6CoQC/embed"
    },
    
    {
      title: 'Food Photography',
      category: 'Photography',
      image: '/media/rock3.jpg',
    },
    {
      title: 'Food Photography',
      category: 'Photography',
      image: '/media/rock 5.jpg',
    },
    {
      title: 'Food Photography',
      category: 'Photography',
      image: '/media/rock1.jpg',
    },
    {
      title: 'Food Photography',
      category: 'Photography',
      image: '/media/rock8.jpg',
    },
    {
      title: 'Food Photography',
      category: 'Photography',
      image: '/media/rock7.jpg',
    },
  
    {
      title: 'Food Photography',
      category: 'Photography',
      image: '/media/rock 4.jpg',
    },
    {
      title: 'NWGL New Year Promo',
      category: 'Animations',
      image: '/media/NWGL New yr pic.jpeg',
      videoUrl: "/media/NWGL NEW YEAR PROMO.MP4" 
    },
    {
      title: 'UHL New Year Promo',
      category: 'Animations',
      image: '/media/UHL New yr pic.jpeg',
      videoUrl: "/media/UHL New yr pic.jpeg" 
    },
    {
      title: 'RJZ ft Kwesi Arthur - Hello Daddy',
      category: 'Music Videos',
      image: '/media/daddy.png',
      videoUrl: 'https://youtube.com/embed/X48qb6124n0'
    },
    
    {
      title: 'UHL Christmas',
      category: 'Animations',
      image: '/media/UHL.png',
      videoUrl: '/media/UHL Xmas.mp4'
    },
    {
      title: 'NWGL Christmas',
      category: 'Animations',
      image: '/media/NWGL Xmas.png',
      videoUrl: '/media/NWGL Christmas.mp4'
    },
    {
      title: 'Tulenkey - Your Girlfriend',
      category: 'Music Videos',
      image: '/media/tulenkey.jpg',
      videoUrl: 'https://youtube.com/embed/zXjitxBJ_KE'
    },
    {
      title: 'Excellent - Music Video',
      category: 'Music Videos',
      image: 'https://th.bing.com/th/id/OIP.nPK68WVkVrmR1rNGbj5zawHaHa?cb=iwp2&rs=1&pid=ImgDetMain',
      videoUrl: "https://www.youtube.com/embed/_-oNukOGyEw" 
    },
     {
      title: 'Rugged 2.0 - Music Video',
      category: 'Music Videos',
      image: '/media/Rugged.png',
      videoUrl: 'https://www.youtube.com/embed/EuV8ShBmRj0'
    },
    {
      title: 'Product/Food Photography',
      category: 'Photography',
      image: '/media/wings.jpg'
    },
    {
      title: 'Voices of Silence',
      category: 'Documentaries',
      image: '/media/vos1.jpg',
      videoUrl: 'https://www.youtube.com/embed/xHtthgdy-ik'
    },
    {
      title: 'Food Photography',
      category: 'Photography',
      image: '/media/BALL MEAL.JPG'
    },
    {
      title: 'Product Photography',
      category: 'Photography',
      image: '/media/sunflower.jpg'
    },
    {
      title: 'Barracha Ad',
      category: 'Commercials',
      image: '/media/barracha 5.png',
      videoUrl: '/media/barracha.MP4'
    },
    {
      title: 'Excellent BTS',
      category: 'Music Videos',
      image: '/media/Excellent_BTS_img.png',
      videoUrl: 'https://www.instagram.com/reel/DMVqIjXqxzk/embed'
    },
    {
      title: 'Guzangs Fashion Video',
      category: 'Commercial',
      image: '/media/Guzangs.png',
      videoUrl: 'https://www.instagram.com/reel/DMT4F0Zql9O/embed'
    },
    {
      title: 'RJZ - fOR lIFE',
      category: 'Music Videos',
      image: '/media/for life.jpeg',
    },
     {
      title: 'Free The Youth',
      category: 'Commercials',
      image: '/media/fty pic.jpg',
      videoUrl: '/public/media/RACE TO LAGOS   - A film by @mr_akrong AVAILABLE TOMORROW AT @ourhomecoming  Racers- @isurboi_protein1 @kellykurlz @kweku_maposh @joey_lit.mp4'
    },
    
    {
      title: 'Micro Gardens Staff Interview',
      category: 'Commercials',
      image: '/media/Fran.png',
      videoUrl: '/media/Micros.mp4'
    },
    {
      title: 'This is Ghana',
      category: 'Commercials',
      image: '/media/this is ghana pic.jpg',
      videoUrl: 'https://www.youtube.com/embed/wCGpuRi9V3E'
    },
    {
      title: 'Free the youth Sports Jersey Campaign',
      category: 'Commercials',
      image: '/media/FTy sports jersey.png',
      videoUrl: 'https://youtube.com/embed/dNOa2U85kaE'
    },
    {
      title: 'Bet Planet Golden Goal Ad',
      category: 'Commercials',
      image: '/media/betplanet pic.png',
      videoUrl: 'https://youtube.com/embed/0OJTfxJ695A'
    },
    {
      title: 'Chipper Cash',
      category: 'Commercials',
      image: '/media/Chipper.png',
      videoUrl: 'https://youtube.com/embed/cpRiHoUJpYc'
    },
    {
      title: 'Jauhari Jewelry',
      category: 'Commercials',
      image: '/media/jauhari (2).png',
      videoUrl: 'https://youtube.com/embed/rqV4ouV-tH4'
    },
    {
      title: 'Bet Planet wheel of fortune',
      category: 'Commercials',
      image: '/media/wheel.png',
      videoUrl: 'https://youtube.com/embed/ihg9cHb92i8'
    },
     {
      title: 'La Meme Gang ft Kwame Eugene - This Year',
      category: 'Music Videos',
      image: '/media/lameme.png',
      videoUrl: 'https://youtube.com/embed/YLiEIuRqtdM'
    },
    {
      title: 'Kayso - Take It',
      category: 'Music Videos',
      image: '/media/Kayso.png',
      videoUrl: 'https://youtube.com/embed/5mi17VuTON0'
    },
    {
      title: 'RJZ - Not Yours',
      category: 'Music Videos',
      image: '/media/not yours.png',
      videoUrl: 'https://youtube.com/embed/8VWeQ_45h5I'
    },
    
    {
      title: 'Photography',
      category: 'Photography',
      image: '/media/kiwi.jpg',
    },
    {
      title: 'Barracha Ad',
      category: 'Commercials',
      image: '/media/barracha1.PNG',
      videoUrl: '/media/barracha2.MP4'
    },
    {
      title: 'Barracha Ad',
      category: 'Commercials',
      image: '/media/barracha4.jpeg',
      videoUrl: '/media/barracha 3.MP4'
    },
    {
      title: 'FTY shoe Ad',
      category: 'Photography',
      image: '/media/ftyshoe.JPG',
    },
    {
      title: 'FTY shoe Ad',
      category: 'Photography',
      image: '/media/fty shoe2.JPG',
    },
      {
      title: 'FTY shoe Ad',
      category: 'Photography',
      image: '/media/fty shoe1.JPG',
    },
    {
      title: 'RJZ - Bye Bye',
      category: 'Music Videos',
      image: '/media/bye-bye-cover-art.jpg',
      videoUrl: 'https://youtube.com/embed/jQpdf1rTZRA'
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
                brandName={item.brandName}
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
                    <span className="font-semibold">Client:</span> Kojo Black
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
                  src="/media/vos1.jpg" 
                  alt="VoS Documentary" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-3">Voices of Silence</h3>
                <p className="text-package-red font-medium mb-4">Documentary</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Voices of Silence is a moving documentary that sheds light on the lives, challenges, and triumphs of students at Ghana's first school for the deaf and blind. It captures their resilience, talents, and dreams, while raising awareness about the power of inclusion and education.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-semibold">Client:</span> Meinergy & Package Studios Collaboration
                  </div>
                  <div>
                    <span className="font-semibold">Services:</span> Research, Direction, Production, Post-Production
                  </div>
                  <div>
                    <span className="font-semibold">Year:</span> 2022
                  </div>
                </div>
                <Button href="https://youtu.be/xHtthgdy-ik" target="_blank">
                  Watch Documentary
                </Button>
              </div>
            </div>

           {/* Featured Project 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/public/media/fty pic.jpg" 
                  alt="FTY Commercial" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">FTY Promo</h3>
                <p className="text-package-red font-medium mb-4">Commercial</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  A dynamic promo video for Free Day Youth’s new race-themed clothing line, bringing the energy of the track to life with a race course-inspired concept that highlights speed, style, and youth culture.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-semibold">Client:</span> Free The Youth
                  </div>
                  <div>
                    <span className="font-semibold">Services:</span> Direction, Cinematography, Editing, Color Grading,
                  </div>
                  <div>
                    <span className="font-semibold">Year:</span> 2025
                  </div>
                </div>
                <Button href="https://www.instagram.com/reel/DImRC5lMDX0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">
                  Watch Video
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
