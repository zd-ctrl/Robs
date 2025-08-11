import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Car, Utensils, Droplets } from 'lucide-react';
import mockData from '../data/mockData';

const Residential = () => {
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

  const residentialTypes = [
    {
      icon: Home,
      title: 'Living Spaces',
      description: 'Beautiful polished concrete for modern homes',
      features: ['Stylish appearance', 'Easy maintenance', 'Allergen-free surface']
    },
    {
      icon: Car,
      title: 'Garage Floors',
      description: 'Durable coatings that resist stains and wear',
      features: ['Oil stain resistance', 'Easy cleaning', 'Attractive finish']
    },
    {
      icon: Utensils,
      title: 'Kitchen & Dining',
      description: 'Seamless, hygienic floors perfect for food areas',
      features: ['Food-safe surface', 'Water resistant', 'Modern aesthetic']
    },
    {
      icon: Droplets,
      title: 'Bathrooms',
      description: 'Moisture-resistant solutions for wet areas',
      features: ['Waterproof finish', 'Non-slip options', 'Seamless design']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Residential Concrete Solutions</h1>
            <p className="text-xl opacity-90">
              Transform your home with beautiful, durable polished concrete floors that combine style and functionality
            </p>
          </div>
        </div>
      </section>

      {/* Residential Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Residential Flooring Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Custom concrete solutions for every room in your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {residentialTypes.map((type, index) => (
              <div key={index} className="text-center scroll-reveal">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="h-8 w-8 text-green-600" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Residential Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for homeowners</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mockData.residentialServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover-lift scroll-reveal">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Perfect for:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.applications.map((app, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/service/${service.id}`}
                  className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center group"
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
              <img 
                src="https://images.unsplash.com/photo-1631912423639-13b9cff4b812"
                alt="Residential concrete flooring"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Residential Concrete?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Low Maintenance',
                    description: 'Easy to clean and maintain, saving you time and money'
                  },
                  {
                    title: 'Durability',
                    description: 'Long-lasting floors that can withstand daily family life'
                  },
                  {
                    title: 'Modern Style',
                    description: 'Contemporary look that increases your home value'
                  },
                  {
                    title: 'Allergen-Free',
                    description: 'No carpets or grout lines to trap dust and allergens'
                  },
                  {
                    title: 'Customizable',
                    description: 'Various colors, patterns, and finishes to match your style'
                  },
                  {
                    title: 'Eco-Friendly',
                    description: 'Sustainable option that uses existing concrete slab'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Spaces */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Home Applications</h2>
            <p className="text-xl text-gray-600">Where homeowners love polished concrete most</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Basements', 'Garages', 'Kitchens', 'Bathrooms',
              'Laundry Rooms', 'Mudrooms', 'Workshops', 'Home Gyms',
              'Patios', 'Pool Decks', 'Driveways', 'Walkways'
            ].map((space, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow hover-lift scroll-reveal">
                <span className="font-semibold text-gray-900">{space}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Process, Beautiful Results</h2>
            <p className="text-xl text-gray-600">From consultation to completion in just a few days</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', desc: 'Free in-home assessment' },
              { step: '2', title: 'Preparation', desc: 'Surface cleaning and prep' },
              { step: '3', title: 'Polishing', desc: 'Diamond grinding process' },
              { step: '4', title: 'Finishing', desc: 'Final sealing and cleanup' }
            ].map((item, index) => (
              <div key={index} className="text-center scroll-reveal">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl font-bold mb-6">Transform Your Home Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a free in-home consultation and estimate for your residential concrete project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center"
              >
                Get Home Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/gallery"
                className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all"
              >
                View Home Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Residential;