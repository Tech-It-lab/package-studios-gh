
import React from 'react';
import { useLocation } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';

const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <section className="py-32 min-h-[70vh] flex items-center">
        <div className="container-custom text-center">
          <h1 className="text-7xl md:text-9xl font-bold text-package-red mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            We couldn't find the page you're looking for. The page might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button to="/" className="flex items-center mx-auto">
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
