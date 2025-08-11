import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, Clock, Users, Star, CheckCircle } from 'lucide-react';
import mockData from '../data/mockData';

const WhyUs = () => {
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
            <h1 className="text-5xl font-bold mb-6">Why Choose Dragon Concrete?</h1>
            <p className="text-xl opacity-90">
              Discover what sets us apart as Ontario's premier concrete polishing company
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Excellence in Every Detail</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality, service, and customer satisfaction makes us the preferred choice for concrete solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.whyChooseUs.map((item, index) => {
              const IconComponent = {
                'Award': Award,
                'Shield': Shield,
                'CheckCircle': CheckCircle,
                'Clock': Clock,
                'DollarSign': Award, // Using Award as fallback
                'Settings': Shield // Using Shield as fallback
              }[item.icon] || CheckCircle;

              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover-lift scroll-reveal border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600">Numbers that speak to our experience and excellence</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Completed Projects', icon: Award },
              { number: '15+', label: 'Years of Experience', icon: Users },
              { number: '98%', label: 'Customer Satisfaction', icon: Star },
              { number: '24/7', label: 'Emergency Support', icon: Clock }
            ].map((stat, index) => (
              <div key={index} className="text-center scroll-reveal">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dragon Concrete vs. Others</h2>
            <p className="text-xl text-gray-600">See how we compare to the competition</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden scroll-reveal">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-2xl font-bold text-center">Feature Comparison</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                      <th className="text-center py-4 px-6 font-semibold text-blue-600">Dragon Concrete</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-600">Typical Competitors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Free Estimates', us: true, them: 'Sometimes' },
                      { feature: 'Licensed & Insured', us: true, them: true },
                      { feature: '24/7 Emergency Service', us: true, them: false },
                      { feature: 'Satisfaction Guarantee', us: '100%', them: 'Limited' },
                      { feature: 'Years of Experience', us: '15+', them: 'Varies' },
                      { feature: 'Premium Materials', us: true, them: 'Standard' },
                      { feature: 'Fast Turnaround', us: true, them: false },
                      { feature: 'Warranty Coverage', us: 'Comprehensive', them: 'Basic' }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                        <td className="py-4 px-6 text-center">
                          {typeof row.us === 'boolean' ? (
                            row.us ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <span className="text-red-500">✗</span>
                            )
                          ) : (
                            <span className="text-blue-600 font-semibold">{row.us}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {typeof row.them === 'boolean' ? (
                            row.them ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <span className="text-red-500">✗</span>
                            )
                          ) : (
                            <span className="text-gray-600">{row.them}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Quality Promise</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Materials Only</h3>
                    <p className="text-gray-600">We use only the highest quality diamond tools, sealers, and equipment to ensure lasting results.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Craftsmen</h3>
                    <p className="text-gray-600">Our team consists of skilled professionals with years of concrete polishing experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Warranty</h3>
                    <p className="text-gray-600">We stand behind our work with industry-leading warranties on all our projects.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-reveal">
              <img 
                src="https://customer-assets.emergentagent.com/job_8e4b8657-9f00-4d13-8490-6fcb3b912fb2/artifacts/uglxrwxx_NTI5NzE_d4OZ8rt4zcRF5NUF-7282-NOC.jpg"
                alt="Quality concrete work"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Preview */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-4">Don't Take Our Word for It</h2>
            <p className="text-xl opacity-90">See what our satisfied customers have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockData.testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="glass rounded-xl p-6 scroll-reveal">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.comment.substring(0, 100)}..."</p>
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
              Read All Reviews
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience the Dragon Difference</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to see why so many customers choose Dragon Concrete for their flooring needs? 
              Contact us today for your free estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center"
              >
                Get Your Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:647-641-3782"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all"
              >
                Call: 647-641-3782
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;