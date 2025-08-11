import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';
import mockData from '../data/mockData';

const Testimonials = () => {
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Customer Testimonials</h1>
            <p className="text-xl opacity-90">
              See what our satisfied customers say about Dragon Concrete & Polishing
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="scroll-reveal">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="scroll-reveal">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="scroll-reveal">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="scroll-reveal">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from real customers across Ontario</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover-lift scroll-reveal">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-blue-300 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600 text-sm">{testimonial.project}</div>
                  <div className="text-gray-500 text-sm mt-1">
                    {new Date(testimonial.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <Quote className="h-16 w-16 text-blue-300 mx-auto mb-6" />
            <blockquote className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
              "Dragon Concrete transformed our entire warehouse facility. Not only did they deliver exceptional quality, but they also completed the project ahead of schedule. The polished floors have significantly improved our lighting and reduced maintenance costs. I would recommend them to any business looking for professional concrete solutions."
            </blockquote>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-xl font-bold text-gray-900">David Thompson</div>
            <div className="text-blue-600">Manufacturing Facility - London, ON</div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Before & After Transformations</h2>
            <p className="text-xl text-gray-600">See the dramatic difference our work makes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Warehouse Transformation',
                location: 'Mississauga, ON',
                before: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400',
                after: 'https://customer-assets.emergentagent.com/job_8e4b8657-9f00-4d13-8490-6fcb3b912fb2/artifacts/92mfjt5o_abt_img1.webp'
              },
              {
                title: 'Residential Basement',
                location: 'Toronto, ON',
                before: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
                after: 'https://images.unsplash.com/photo-1631912423639-13b9cff4b812'
              },
              {
                title: 'Commercial Office',
                location: 'Hamilton, ON',
                before: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
                after: 'https://images.unsplash.com/photo-1570992532407-b71ca75b801e'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift scroll-reveal">
                <div className="grid grid-cols-2 h-48">
                  <div className="relative">
                    <img src={project.before} alt="Before" className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <img src={project.after} alt="After" className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      AFTER
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reviews by Category</h2>
            <p className="text-xl text-gray-600">See what customers love most about our services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Quality of Work',
                rating: '4.9/5',
                reviews: 125,
                highlight: 'Exceptional craftsmanship and attention to detail'
              },
              {
                category: 'Customer Service',
                rating: '4.8/5',
                reviews: 108,
                highlight: 'Professional, friendly, and responsive team'
              },
              {
                category: 'Value for Money',
                rating: '4.9/5',
                reviews: 97,
                highlight: 'Fair pricing with outstanding results'
              }
            ].map((category, index) => (
              <div key={index} className="text-center scroll-reveal">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{category.rating}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.category}</h3>
                <p className="text-gray-600 mb-2">{category.reviews} reviews</p>
                <p className="text-sm text-gray-500 italic">"{category.highlight}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl font-bold mb-6">Join Our Satisfied Customers</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the Dragon Concrete difference for yourself. Get a free estimate today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center"
              >
                Get Your Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/gallery"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;