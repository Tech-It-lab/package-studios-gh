
import React from 'react';
import { 
  Music, Film, Camera, Headphones, Video, Monitor, 
  Smartphone, Laptop, ArrowRight 
} from 'lucide-react';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

const Services: React.FC = () => {
  const services = [
    {
      id: 'music-videos',
      title: 'Music Video Production',
      description: 'Creative direction and professional production for artists and labels. We handle the entire process from concept to final delivery.',
      icon: <Music size={36} />,
      details: 'Our music video production services include concept development, location scouting, professional filming, and post-production with color grading.',
      features: [
        'Creative conceptualization and storyboarding',
        'Professional cinematography and lighting',
        'Art direction and set design',
        'Post-production and color grading',
        'Delivery in multiple formats'
      ]
    },
    {
      id: 'podcast-production',
      title: 'Podcast Production',
      description: 'End-to-end podcast production services with professional equipment and editing for high-quality audio content.',
      icon: <Headphones size={36} />,
      details: 'We provide complete podcast production solutions, from recording in our soundproofed studio to editing and distribution support.',
      features: [
        'Professional audio recording',
        'Sound editing and mixing',
        'Intro/outro music creation',
        'Cover art design',
        'Distribution platform setup'
      ]
    },
    {
      id: 'documentaries',
      title: 'Documentaries',
      description: 'Compelling storytelling that captures real-life stories with depth, nuance, and cinematic quality.',
      icon: <Film size={36} />,
      details: 'Our documentary production covers research, interviews, filming, and post-production to create impactful non-fiction content.',
      features: [
        'Research and story development',
        'Interview coordination and filming',
        'B-roll capture and organization',
        'Narrative structure development',
        'Professional editing and sound design'
      ]
    },
    {
      id: 'photography',
      title: 'Photography',
      description: 'Professional photography for commercial, editorial, and personal projects with creative direction.',
      icon: <Camera size={36} />,
      details: 'Our photography services span commercial product photography, portraits, event coverage, and artistic photography.',
      features: [
        'Commercial and product photography',
        'Portrait and lifestyle sessions',
        'Event coverage',
        'Retouching and image processing',
        'Digital and print delivery'
      ]
    },
    {
      id: 'videography',
      title: 'Videography',
      description: 'High-quality video production for events, corporate videos, interviews, and more.',
      icon: <Video size={36} />,
      details: 'We provide videography services for corporate events, weddings, interviews, and other occasions requiring professional video coverage.',
      features: [
        'Event videography',
        'Corporate video production',
        'Interview and testimonial recording',
        'Multi-camera setups',
        'Highlight reels and full coverage options'
      ]
    },
    {
      id: 'commercials',
      title: 'Adverts & Commercials',
      description: 'Effective commercial content that promotes your brand and engages your target audience.',
      icon: <Monitor size={36} />,
      details: 'Our commercial production services help brands create impactful advertising content for TV, web, and social media platforms.',
      features: [
        'TV commercial production',
        'Web advertising videos',
        'Product demonstrations',
        'Brand storytelling',
        'Call-to-action optimization'
      ]
    },
    {
      id: 'social-media',
      title: 'Social Media Management',
      description: 'Content creation and management for your brand\'s social media presence and engagement.',
      icon: <Smartphone size={36} />,
      details: 'We create and manage social media content that aligns with your brand voice and engages your target audience effectively.',
      features: [
        'Content creation and scheduling',
        'Short-form video production',
        'Photography for social platforms',
        'Campaign planning and execution',
        'Analytics and performance reporting'
      ]
    },
    {
      id: 'drone',
      title: 'Drone Services',
      description: 'Aerial photography and videography for unique perspectives and stunning visual content.',
      icon: <Laptop size={36} />,
      details: 'Our professional drone services provide breathtaking aerial footage for real estate, events, landscapes, and commercial projects.',
      features: [
        'Aerial photography',
        'Cinematic drone videography',
        'Real estate aerial tours',
        'Event aerial coverage',
        'Mapping and surveying'
      ]
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 bg-package-gray dark:bg-package-black/90">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Professional media production services tailored to your creative vision and business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" id="services-grid">
        <div className="container-custom">
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
        </div>
      </section>

      {/* Individual Service Details */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className="py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4 text-package-red">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {service.details}
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight size={18} className="text-package-red mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button to={`/portfolio?filter=${service.id}`}>View Related Projects</Button>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={`https://source.unsplash.com/random/800x600/?${service.id.replace('-', ',')}`} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-package-gray dark:bg-package-black/60">
        <div className="container-custom">
          <SectionHeader 
            title="Our Process" 
            subtitle="How we bring your creative vision to life through our structured approach."
            centered
          />
          
          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-package-red -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative bg-white dark:bg-package-black p-6 rounded-lg shadow-md z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-package-red text-white mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Consultation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  We meet to discuss your vision, goals, timeline, and budget for the project.
                </p>
              </div>
              
              <div className="relative bg-white dark:bg-package-black p-6 rounded-lg shadow-md z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-package-red text-white mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Pre-Production</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  We plan every detail, from creative concepts to logistics and scheduling.
                </p>
              </div>
              
              <div className="relative bg-white dark:bg-package-black p-6 rounded-lg shadow-md z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-package-red text-white mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Production</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Our expert team executes the project with professional equipment and techniques.
                </p>
              </div>
              
              <div className="relative bg-white dark:bg-package-black p-6 rounded-lg shadow-md z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-package-red text-white mb-4 mx-auto">
                  4
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Post-Production</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  We edit, color grade, and perfect your content before final delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-package-gray dark:bg-package-black/60">
        <div className="container-custom">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services and processes."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How long does a typical project take?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Project timelines vary depending on complexity. A basic video might take 1-2 weeks, while more complex productions can take several weeks to a few months. We'll provide a detailed timeline during consultation.
              </p>
            </div>
            
            <div className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Do you work with clients outside of Ghana?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! We work with clients globally and can manage remote projects or travel to your location depending on the project requirements and budget.
              </p>
            </div>
            
            <div className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How do I book your services?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                You can book our services by filling out the booking form on our website, calling us, or sending an email. We'll then schedule a consultation to discuss your project in detail.
              </p>
            </div>
            
            <div className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What is your payment structure?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We typically require a 50% deposit to secure your booking and begin production, with the remaining balance due upon project completion. For larger projects, we offer milestone-based payment plans.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Have more questions? We're here to help!
            </p>
            <Button to="/contact">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-package-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book our services today and bring your creative vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/book" size="lg">Book a Consultation</Button>
            <Button to="/contact" variant="outline" size="lg">Contact Us</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
