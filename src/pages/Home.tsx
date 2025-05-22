
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Film, Music, Camera, Headphones, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import PortfolioItem from '../components/PortfolioItem';

const Home: React.FC = () => {
  const countRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }
  }, []);

  const services = [
    {
      id: 'music-videos',
      title: 'Music Video Production',
      description: 'Creative direction and professional production for artists and labels.',
      icon: <Music size={36} />
    },
    {
      id: 'documentaries',
      title: 'Documentaries',
      description: 'Compelling storytelling that captures real-life stories.',
      icon: <Film size={36} />
    },
    {
      id: 'photography',
      title: 'Photography',
      description: 'Professional photography for commercial and personal projects.',
      icon: <Camera size={36} />
    },
    {
      id: 'podcasts',
      title: 'Podcast Production',
      description: 'End-to-end podcast production services with professional equipment.',
      icon: <Headphones size={36} />
    }
  ];

  const featuredWork = [
    {
      title: 'Music Video - Excellent"',
      category: 'Music Video',
      image: 'https://th.bing.com/th/id/OIP.nPK68WVkVrmR1rNGbj5zawHaHa?cb=iwp2&rs=1&pid=ImgDetMain',
    },
    {
      title: 'Music Video - Bye Bye',
      category: 'Music Video',
      image: '/media/bye-bye-cover-art.jpg',
    },
    {
      title: 'Documentary - "Digital Age"',
      category: 'Documentary',
      image: '/media/logo1.png',
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-package-black">
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-60"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/media/THIS IS GHANA Vol. 1 🇬🇭  (Drone Showreel).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
          >
            Creative Media <span className="text-package-red">Production</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
          >
            We craft compelling visual stories for brands, artists, and in-house projects
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button to="/portfolio" size="lg">See Our Work</Button>
            <Button to="/services" variant="outline" size="lg">Explore Services</Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-package-gray dark:bg-package-black/60">
        <div className="container-custom">
          <SectionHeader 
            title="About Package Studios"
            subtitle="We are a creative media production company specializing in both in-house and commissioned media services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-5">Our Creative Philosophy</h3>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                At Package Studios, we believe in the power of visual storytelling. We combine technical excellence with creative innovation to produce content that resonates with audiences and achieves our clients' goals.
              </p>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Our team of passionate professionals brings expertise in videography, photography, sound design, and creative direction to every project.
              </p>
              <Button to="/about">Learn More About Us <ArrowRight size={16} className="ml-2" /></Button>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/media/Package.jpg" 
                alt="Creative team at work" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Stats */}
          <div ref={countRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <p className="text-4xl font-bold text-package-red">120+</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-package-red">50+</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Brands/Businesses</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-package-red">8</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader 
            title="Our Services" 
            subtitle="We offer a comprehensive range of media production services tailored to your needs."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/services">View All Services</Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-package-gray dark:bg-package-black/60 clip-diagonal">
        <div className="container-custom">
          <SectionHeader 
            title="Featured Work" 
            subtitle="Explore our latest projects and see how we bring creative visions to life."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWork.map((item, index) => (
              <PortfolioItem
                key={index}
                title={item.title}
                category={item.category}
                image={item.image}
                videoUrl={index === 0 ? "https://www.youtube.com/embed/_-oNukOGyEw" : undefined}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/portfolio">View Full Portfolio</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-package-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your creative vision to life with our professional media production services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/book" size="lg">Book a Service</Button>
            <Button to="/contact" variant="outline" size="lg">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Clients/Testimonial Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader 
            title="What Our Clients Say" 
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-center p-8 bg-white dark:bg-package-black shadow-lg rounded-lg border border-package-light-gray">
              <p className="text-xl italic mb-6">
                "Package Studios delivered beyond our expectations. Their creativity and technical expertise transformed our vision into an incredible visual story."
              </p>
              <cite className="not-italic">
                <div className="font-medium">Sarah Johnson</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Marketing Director, Accra Media</div>
              </cite>
            </blockquote>
          </div>
          
          <div className="mt-16">
            <h3 className="text-center text-xl mb-8">Trusted by</h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="h-22 w-40">
                <img src="/media/Honey.png" alt="Honeysuckle Logo" className="h-full w-full object-contain" />
              </div>
              <div className="h-15 w-44">
                <img src="/media/FTY.png" alt="Free The Youth Logo" className="h-full w-full object-contain" />
              </div>
              <div className="h-15 w-24">
                <img src="/media/Faceless.png" alt="Faceless Logo" className="h-full w-full object-contain" />
              </div>
              <div className="h-15 w-24">
                <img src="/media/S&M.png" alt="S&M Organics Logo" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
