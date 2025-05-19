
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-package-black text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <img 
              src="/media/logo1.png" 
              alt="Package Studios Logo" 
              className="h-12"
            />
            <p className="text-gray-400 text-sm">
              We specialize in creative media production services, delivering high-quality content that captivates and inspires.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-package-red text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-package-red text-sm transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-package-red text-sm transition-colors">Services</Link></li>
              <li><Link to="/work" className="text-gray-400 hover:text-package-red text-sm transition-colors">Our Work</Link></li>
              <li><Link to="/book" className="text-gray-400 hover:text-package-red text-sm transition-colors">Book a Service</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-package-red text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#music-videos" className="text-gray-400 hover:text-package-red text-sm transition-colors">Music Videos</Link></li>
              <li><Link to="/services#podcasts" className="text-gray-400 hover:text-package-red text-sm transition-colors">Podcast Production</Link></li>
              <li><Link to="/services#documentaries" className="text-gray-400 hover:text-package-red text-sm transition-colors">Documentaries</Link></li>
              <li><Link to="/services#photography" className="text-gray-400 hover:text-package-red text-sm transition-colors">Photography</Link></li>
              <li><Link to="/services#social-media" className="text-gray-400 hover:text-package-red text-sm transition-colors">Social Media Management</Link></li>
              <li><Link to="/services#drone" className="text-gray-400 hover:text-package-red text-sm transition-colors">Drone Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-package-red mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">15 Naa Korkoi Oblayoo Street, Kokomlemle, Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-package-red flex-shrink-0" />
                <a href="tel:+233530855727" className="text-gray-400 hover:text-package-red text-sm transition-colors">+233 53 085 5727</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-package-red flex-shrink-0" />
                <a href="mailto:carobackbone@gmail.com" className="text-gray-400 hover:text-package-red text-sm transition-colors">packagestudiosgh@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={18} className="text-package-red flex-shrink-0" />
                <a href="https://www.instagram.com/packagestudios/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-package-red text-sm transition-colors">@packagestudios</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Package Studios. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/packagestudios/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={18} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
