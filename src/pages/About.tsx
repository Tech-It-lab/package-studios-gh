
import React from 'react';
import { Camera, Film, Music, Video, Users, Award } from 'lucide-react';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const About: React.FC = () => {
  const values = [
    {
      title: 'Creativity',
      description: 'We push boundaries and explore new perspectives to deliver unique and innovative content.',
      icon: <Camera size={32} className="text-package-red" />
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in technical execution and creative development.',
      icon: <Award size={32} className="text-package-red" />
    },
    {
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to ensure their vision is realized.',
      icon: <Users size={32} className="text-package-red" />
    },
    {
      title: 'Integrity',
      description: 'We build relationships based on trust, transparency, and ethical business practices.',
      icon: <Film size={32} className="text-package-red" />
    }
  ];

  const workingHours = [
    { days: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { days: 'Saturday', hours: 'By Appointment' },
    { days: 'Sunday', hours: 'Closed' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 bg-package-gray dark:bg-package-black/90">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Package Studios</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A creative media production company with a passion for visual storytelling and technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title="Our Story" />
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                At Package Studios, we are storytellers at heart and creators by trade. Package Studios was founded in 2018 with a simple mission: to create compelling visual stories that captivate and inspire. What began as just an idea has grown into a full-service media production company.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Based in Accra, Ghana, we specialize in in-house and commissioned media production; from music videos and documentaries to podcast production, photography, and commercials. Whether it's from the sky with our drone services or behind the lens on the ground, our team brings a unique blend of artistry, technical expertise, and insight to every project. We've worked with local and international clients, helping them tell their stories through various media formats. Our journey has been one of continuous learning, growth, and creative exploration.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Today, Package Studios is known for its distinctive visual style, technical expertise, and collaborative approach. We pride ourselves on building lasting relationships with our clients and delivering content that exceeds expectations. We exist to package ideas into unforgettable visuals. For artists, brands, and changemakers, we are your creative partners, capturing moments, crafting messages, and pushing boundaries in audio-visual storytelling.
              </p>
            </div>
            <div className="aspect-square md:aspect-auto rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="/media/logo1.png" 
                alt="Package Studios Logo" 
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-package-gray dark:bg-package-black/60">
        <div className="container-custom">
          <SectionHeader 
            title="Our Values" 
            subtitle="These core principles guide our work and define who we are as a creative team."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Director Section */}
      <section className="py-20 bg-package-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="/media/Henry.png" 
                alt="Henry Akrong, Director" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About the Director</h2>
              <p className="text-xl text-gray-300 mb-2">Henry Akrong, Founder & Creative Director</p>
              <div className="h-1 w-16 bg-package-red mb-6"></div>
              <p className="mb-4 text-gray-300">
                Henry is the visionary force behind Package Studios. With years of hands-on experience in cinematography, direction, and creative strategy, the director brings an eye for detail and a passion for excellence to every production. Their work spans multiple genres and platforms, united by a commitment to authentic storytelling and creative innovation.
              </p>
              <p className="mb-4 text-gray-300">
                His work spans music videos, commercials, documentaries, and narrative films, garnering recognition both locally and internationally.
              </p>
              <p className="mb-6 text-gray-300">
                Henry founded Package Studios with the goal of building a creative hub that nurtures talent and produces world-class content from Ghana to the world.
              </p>
              <Button href="https://www.director-website.com" variant="outline">
                Visit Director's Website
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-package-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your creative vision to life with our team of experts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="outline" size="lg">Contact Us</Button>
            <Button to="/book" size="lg" className="bg-white text-package-red hover:bg-gray-100">Book a Service</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
