import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Award } from 'lucide-react';
import mockData from '../data/mockData';

const Locations = () => {
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
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Service Locations</h1>
            <p className="text-xl opacity-90">
              Serving Ontario from Downtown Toronto to all major cities and regions
            </p>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Ontario Coverage</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From small residential projects to large commercial installations, we serve clients throughout Ontario.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="scroll-reveal">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Service Promise</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Statewide Coverage</h4>
                    <p className="text-gray-600">Professional concrete polishing services across all of Ontario</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Service</h4>
                    <p className="text-gray-600">Personalized service with deep understanding of local needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Expertise</h4>
                    <p className="text-gray-600">Experienced teams familiar with regional building codes and requirements</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-reveal">
              <div className="bg-indigo-50 rounded-2xl p-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Coverage Statistics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">500+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">20+</div>
                    <div className="text-sm text-gray-600">Cities Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cities We Serve</h2>
            <p className="text-xl text-gray-600">Professional concrete services in major Ontario markets</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockData.locations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift scroll-reveal">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={`${location.city}, Ontario`}
                    className="w-full h-full object-cover img-hover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{location.city}</h3>
                  <div className="text-indigo-600 font-medium mb-3">{location.region}</div>
                  <p className="text-gray-600 text-sm mb-4">{location.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <Award className="h-4 w-4 inline mr-1" />
                      {location.projects} projects
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Regional Expertise</h2>
            <p className="text-xl text-gray-600">Specialized knowledge of Ontario's diverse markets and requirements</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                region: 'Greater Toronto Area',
                cities: ['Toronto', 'Mississauga', 'Brampton', 'Markham', 'Richmond Hill', 'Vaughan'],
                specialty: 'High-density commercial and residential projects'
              },
              {
                region: 'Golden Horseshoe',
                cities: ['Hamilton', 'Burlington', 'Oakville', 'St. Catharines', 'Niagara Falls'],
                specialty: 'Industrial and manufacturing facilities'
              },
              {
                region: 'Southwestern Ontario',
                cities: ['London', 'Windsor', 'Kitchener', 'Waterloo', 'Cambridge', 'Guelph'],
                specialty: 'Automotive and technology sector flooring'
              },
              {
                region: 'Eastern Ontario',
                cities: ['Ottawa', 'Kingston', 'Cornwall', 'Belleville', 'Peterborough'],
                specialty: 'Government and institutional projects'
              }
            ].map((region, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover-lift scroll-reveal">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{region.region}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Major Cities:</h4>
                  <div className="flex flex-wrap gap-1">
                    {region.cities.map((city, idx) => (
                      <span key={idx} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Specialty:</h4>
                  <p className="text-xs text-gray-600">{region.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Radius */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Don't See Your Area?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're constantly expanding our service area. If you don't see your city listed, 
              contact us—we may still be able to serve your location!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow">
                <MapPin className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Expanding Coverage</h3>
                <p className="text-sm text-gray-600">We're always looking to serve new areas throughout Ontario</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <Phone className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-sm text-gray-600">Special arrangements for unique or remote locations</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <Award className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Same Quality</h3>
                <p className="text-sm text-gray-600">Consistent excellence regardless of project location</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us Today</h3>
              <p className="text-gray-600 mb-6">
                Ready to transform your concrete floors? Reach out to discuss your project, 
                no matter where you're located in Ontario.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:647-641-3782"
                  className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center transition-all"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 647-641-3782
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;