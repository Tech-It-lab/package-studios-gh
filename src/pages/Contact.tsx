
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    // Validate form
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: "Error",
        description: "Please fill all required fields.",
        variant: "destructive",
      });
      setSubmitStatus('error');
      return;
    }

    try {
      // Send form data to Formspree
      const response = await fetch("https://formspree.io/f/movdpevn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      
      if (response.ok) {
        toast({
          title: "Success",
          description: "Your message has been sent successfully!",
        });
        
        // Reset form
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        setSubmitStatus('success');
      } else {
        throw new Error("Failed to submit the form");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
      setSubmitStatus('error');
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 bg-package-gray dark:bg-package-black/90">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Get in touch with our team for inquiries, collaborations, or to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-package-red/10 text-package-red mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Our Location</h3>
              <p className="text-gray-600 dark:text-gray-400">
                15 Naa Korkoi Oblayoo Street, Kokomlemle, Accra, Ghana
              </p>
            </div>
            
            <div className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-package-red/10 text-package-red mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <a href="tel:+233530855727" className="hover:text-package-red transition-colors">
                  +233 53 085 5727
                </a>
              </p>
            </div>
            
            <div className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-package-red/10 text-package-red mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <a href="mailto:packagestudiosgh@gmail.com" className="hover:text-package-red transition-colors">
                  packagestudiosgh@gmail.com
                </a>
              </p>
            </div>
            
            <div className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-package-red/10 text-package-red mx-auto mb-4">
                <Instagram size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Social Media</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <a 
                  href="https://www.instagram.com/packagestudios/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-package-red transition-colors"
                >
                  @packagestudios
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact Form */}
      <section className="py-16 bg-package-gray dark:bg-package-black/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15881.508683226028!2d-0.2090059!3d5.5774444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a5309602865%3A0xbb2c253c7f913d!2sKokomlemle%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1714858562968!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Package Studios Location"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div>
              <SectionHeader 
                title="Send a Message" 
                subtitle="Have questions or want to discuss a project? Fill out the form below."
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={submitStatus === 'submitting'}
                  >
                    {submitStatus === 'submitting' ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-r-transparent border-white rounded-full"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>Send Message</>
                    )}
                  </Button>
                </div>
              </form>

              {/* Success message */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <div className="flex items-center">
                    <Check size={20} className="text-green-500 mr-2" />
                    <p className="text-green-800 font-medium">Your message has been sent successfully!</p>
                  </div>
                  <p className="text-green-700 text-sm mt-2 text-center">We'll get back to you as soon as possible.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-package-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book our services today and let us help bring your creative vision to life.
          </p>
          <Button to="/book" size="lg">Book a Service</Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
