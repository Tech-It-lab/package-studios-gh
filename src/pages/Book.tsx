
import React, { useState } from 'react';
import { Calendar, Clock, Film, ArrowRight, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { cn } from '@/lib/utils';

const Book: React.FC = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    date: '',
    time: '',
    message: '',
    agreed: false
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormState({
      ...formState,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    // Validate form
    if (!formState.name || !formState.email || !formState.serviceType || !formState.agreed) {
      toast({
        title: "Error",
        description: "Please fill all required fields and accept the terms.",
        variant: "destructive",
      });
      setSubmitStatus('error');
      return;
    }

    // Simulate API call
    try {
      // In a real application, you'd send the data to your backend or email service here
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Success",
        description: "Your booking request has been submitted successfully!",
      });
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        date: '',
        time: '',
        message: '',
        agreed: false
      });
      
      setSubmitStatus('success');
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
      setSubmitStatus('error');
    }
  };

  const services = [
    { id: 'music-videos', name: 'Music Video Production' },
    { id: 'podcast-production', name: 'Podcast Production' },
    { id: 'documentaries', name: 'Documentaries' },
    { id: 'photography', name: 'Photography' },
    { id: 'videography', name: 'Videography' },
    { id: 'commercials', name: 'Adverts & Commercials' },
    { id: 'social-media', name: 'Social Media Management' },
    { id: 'drone', name: 'Drone Services' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 bg-package-gray dark:bg-package-black/90">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Book a Service</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Ready to start your project? Fill out the form below to request a booking.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <SectionHeader 
                title="Request a Booking" 
                subtitle="Fill out the form below to get started with your project."
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
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
                      Email Address *
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formState.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        id="date"
                        name="date"
                        type="date"
                        value={formState.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <input
                        id="time"
                        name="time"
                        type="time"
                        value={formState.time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      />
                      <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none"
                    placeholder="Tell us more about your project, requirements, and any specific details..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    id="agreed"
                    name="agreed"
                    type="checkbox"
                    checked={formState.agreed}
                    onChange={handleChange}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="agreed" className="text-sm text-gray-600 dark:text-gray-400">
                    I agree to the <a href="#" className="text-package-red hover:underline">Terms of Service</a> and <a href="#" className="text-package-red hover:underline">Privacy Policy</a>
                  </label>
                </div>

                <div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={submitStatus === 'submitting'}
                  >
                    {submitStatus === 'submitting' ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-r-transparent border-white rounded-full"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>Submit Booking Request</>
                    )}
                  </Button>
                </div>
              </form>

              {/* Success message */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <div className="flex items-center">
                    <Check size={20} className="text-green-500 mr-2" />
                    <p className="text-green-800 font-medium">Your booking request has been submitted successfully!</p>
                  </div>
                  <p className="text-green-700 text-sm mt-2">We will contact you shortly to confirm your booking.</p>
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="bg-package-gray dark:bg-package-black/60 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Booking Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">How It Works</h4>
                    <ol className="space-y-4">
                      <li className="flex">
                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-package-red text-white mr-3">1</span>
                        <div>
                          <p className="font-medium">Submit your booking request</p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">Fill out the form with your project details.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-package-red text-white mr-3">2</span>
                        <div>
                          <p className="font-medium">Initial consultation</p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">We'll contact you to discuss your project in detail.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-package-red text-white mr-3">3</span>
                        <div>
                          <p className="font-medium">Proposal and quotation</p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">We'll send you a detailed proposal with pricing.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-package-red text-white mr-3">4</span>
                        <div>
                          <p className="font-medium">Project commencement</p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">Once approved, we'll schedule your project and begin production.</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                  
                  <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
                    <h4 className="text-lg font-semibold mb-3">Contact Information</h4>
                    <div className="space-y-3">
                      <p className="flex items-center">
                        <Film size={18} className="text-package-red mr-2" />
                        <span>Package Studios</span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-package-red mr-2 mt-1">📍</span>
                        <span>15 Naa Korkoi Oblayoo Street, Kokomlemle, Accra, Ghana</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-package-red mr-2">📞</span>
                        <a href="tel:+233530855727" className="hover:text-package-red transition-colors">+233 53 085 5727</a>
                      </p>
                      <p className="flex items-center">
                        <span className="text-package-red mr-2">✉️</span>
                        <a href="mailto:packagestudiosgh@gmail.com" className="hover:text-package-red transition-colors">packagestudiosgh@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white dark:bg-package-black border border-package-light-gray rounded-lg">
                <h4 className="text-xl font-bold mb-4">Need a Custom Quote?</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  For complex projects or special requirements, you can request a custom quote.
                </p>
                <Button to="/contact" className="flex items-center">
                  Contact Us <ArrowRight size={16} className="ml-2" />
                </Button>
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
            subtitle="Find answers to common questions about booking our services."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How far in advance should I book?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We recommend booking at least 2-4 weeks in advance for standard projects, and 4-8 weeks for more complex productions to ensure availability and adequate preparation time.
              </p>
            </div>
            
            <div className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What is your payment policy?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We typically require a 50% deposit to secure your booking, with the remaining balance due upon project completion. For larger projects, we offer milestone-based payment plans.
              </p>
            </div>
            
            <div className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Can I reschedule my booking?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, you can reschedule with at least 48 hours notice. Last-minute reschedules may incur a fee, depending on the project scope and resources allocated.
              </p>
            </div>
            
            <div className="bg-white dark:bg-package-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Do you offer rush services?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, we offer rush services for urgent projects, subject to availability and an additional fee. Contact us directly to discuss your timeline requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Book;
