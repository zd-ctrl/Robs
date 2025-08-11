import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Factory, Store, Hospital } from 'lucide-react';
import mockData from '../data/mockData';

const Commercial = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const commercialTypes = [
    {
      icon: Building2,
      title: 'Office Buildings',
      description: 'Professional, durable floors for corporate environments',
      features: ['Low maintenance', 'Professional appearance', 'Long-lasting durability']
    },
    {
      icon: Factory,
      title: 'Industrial Facilities',
      description: 'Heavy-duty solutions for manufacturing and warehouses',
      features: ['Chemical resistance', 'Heavy traffic durability', 'Safety compliance']
    },
    {
      icon: Store,
      title: 'Retail Spaces',
      description: 'Attractive floors that enhance your brand image',
      features: ['Customer appeal', 'Easy maintenance', 'Brand enhancement']
    },
    {
      icon: Hospital,
      title: 'Healthcare Facilities',
      description: 'Hygienic, seamless floors for medical environments',
      features: ['Hygienic surface', 'Easy sanitization', 'Seamless finish']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Commercial Concrete Solutions</h1>
            <p className="text-xl opacity-90">
              Professional-grade concrete flooring for businesses, offices, warehouses, and industrial facilities across Ontario
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Commercial Flooring Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored concrete solutions for every type of commercial space
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commercialTypes.map((type, index) => (
              <div key={index} className="text-center scroll-reveal">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="text-sm text-gray-500">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="mb-1">• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commercial Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for all commercial concrete needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mockData.commercialServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover-lift scroll-reveal">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Perfect for:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.applications.map((app, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/service/${service.id}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Commercial Concrete Polishing?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Cost-Effective',
                    description: 'Lower maintenance costs compared to other flooring options'
                  },
                  {
                    title: 'Durability',
                    description: 'Withstands heavy traffic and industrial equipment'
                  },
                  {
                    title: 'Professional Appearance',
                    description: 'Enhances your business image with a modern, clean look'
                  },
                  {
                    title: 'Improved Lighting',
                    description: 'Reflective surface reduces lighting costs by up to 30%'
                  },
                  {
                    title: 'Quick Installation',
                    description: 'Minimal downtime with fast project completion'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="scroll-reveal">
              <img 
                src="https://customer-assets.emergentagent.com/job_8e4b8657-9f00-4d13-8490-6fcb3b912fb2/artifacts/92mfjt5o_abt_img1.webp"
                alt="Commercial concrete polishing"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Trusted by businesses across various industries</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Manufacturing', 'Warehousing', 'Retail', 'Healthcare',
              'Education', 'Hospitality', 'Automotive', 'Food Processing',
              'Logistics', 'Technology', 'Government', 'Entertainment'
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow hover-lift scroll-reveal">
                <span className="font-semibold text-gray-900">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl font-bold mb-6">Ready to Upgrade Your Commercial Space?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a free consultation and estimate for your commercial concrete polishing project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center"
              >
                Get Commercial Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/gallery"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all"
              >
                View Commercial Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commercial;