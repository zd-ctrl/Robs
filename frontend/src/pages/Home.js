import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Phone, Award, Users, Clock, Shield } from 'lucide-react';
import mockData from '../data/mockData';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_8e4b8657-9f00-4d13-8490-6fcb3b912fb2/artifacts/92mfjt5o_abt_img1.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium Concrete
                <span className="text-gradient block">Polishing Solutions</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Transform your space with stunning, durable polished concrete floors. 
                Serving Ontario with excellence and innovation since day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-primary bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center group"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:647-641-3782"
                  className="glass border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center group"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 647-641-3782
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Dragon Concrete?</h3>
                <ul className="space-y-3">
                  {mockData.whyChooseUs.slice(0, 4).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{item.title}: {item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, number: '500+', text: 'Projects Completed' },
              { icon: Users, number: '15+', text: 'Years Experience' },
              { icon: Clock, number: '24/7', text: 'Customer Support' },
              { icon: Shield, number: '100%', text: 'Satisfaction Guaranteed' }
            ].map((stat, index) => (
              <div key={index} className="text-center scroll-reveal">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From residential floors to commercial spaces, we deliver exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.services.slice(0, 6).map((service, index) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover-lift scroll-reveal p-6">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover img-hover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={`/service/${service.id}`}
                  className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 scroll-reveal">
            <Link
              to="/services"
              className="btn-primary bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Speaks</h2>
            <p className="text-xl text-gray-600">Beautiful concrete transformations across Ontario</p>
          </div>

          <div className="gallery-grid">
            {mockData.gallery.slice(0, 6).map((image, index) => (
              <div key={index} className="scroll-reveal">
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                      <p className="text-sm opacity-80">{image.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 scroll-reveal">
            <Link
              to="/gallery"
              className="btn-primary bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center"
            >
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl opacity-90">Don't just take our word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockData.testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="glass rounded-xl p-6 scroll-reveal">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-blue-300 text-sm">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 scroll-reveal">
            <Link
              to="/testimonials"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold inline-flex items-center"
            >
              Read More Reviews
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation estimate for your concrete polishing project. 
              Our experts are ready to help you create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center"
              >
                Get Your Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:647-641-3782"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 647-641-3782
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;