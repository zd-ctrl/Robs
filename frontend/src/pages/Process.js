import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Phone } from 'lucide-react';
import mockData from '../data/mockData';

const Process = () => {
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
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Proven Process</h1>
            <p className="text-xl opacity-90">
              From initial consultation to final walkthrough, we ensure every step delivers exceptional results
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Professional, Reliable</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our time-tested 5-step process ensures consistent, high-quality results on every project.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {mockData.processSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center mb-16 scroll-reveal">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="w-24 h-24 bg-purple-600 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow md:text-left text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">{step.description}</p>
                  <div className="flex items-center justify-center md:justify-start">
                    <Clock className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-purple-600 font-semibold">Typical Duration: {step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-xl text-gray-600">Detailed breakdown of each step in our process</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Step Details */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8 scroll-reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Step 1: Initial Consultation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">On-site evaluation of your concrete floor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Discussion of your goals and preferences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Detailed written estimate with timeline</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Answer all your questions about the process</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 scroll-reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Step 2: Surface Preparation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Deep cleaning to remove all contaminants</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Crack repair and surface leveling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Area protection and safety setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Initial assessment for grinding approach</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 scroll-reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Step 3: Grinding & Polishing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Progressive diamond grinding stages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Dust control and continuous cleanup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Quality checks at each grinding level</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Final polishing to desired gloss level</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual Process */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8 scroll-reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Step 4: Sealing & Protection</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Application of premium concrete sealer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Even coverage for maximum protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Proper curing time for optimal results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Final surface buffing and finishing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 scroll-reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Step 5: Final Inspection</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Comprehensive quality inspection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Client walkthrough and approval</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Maintenance instructions and warranty</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Complete cleanup of work area</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-8 scroll-reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Guarantee</h3>
                <p className="text-gray-600 mb-4">
                  We stand behind every project with a comprehensive warranty and 100% satisfaction guarantee.
                </p>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-purple-600 font-semibold">Your satisfaction is our top priority</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Timeline</h2>
            <p className="text-xl text-gray-600">Typical project timelines based on square footage</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                size: 'Small Projects',
                area: 'Under 1,000 sq ft',
                duration: '2-3 Days',
                examples: ['Residential basements', 'Small offices', 'Garages']
              },
              {
                size: 'Medium Projects', 
                area: '1,000-5,000 sq ft',
                duration: '4-7 Days',
                examples: ['Retail stores', 'Restaurants', 'Large basements']
              },
              {
                size: 'Large Projects',
                area: 'Over 5,000 sq ft',
                duration: '1-3 Weeks',
                examples: ['Warehouses', 'Manufacturing facilities', 'Large retail spaces']
              }
            ].map((project, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center scroll-reveal">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.size}</h3>
                <div className="text-lg text-purple-600 font-semibold mb-2">{project.area}</div>
                <div className="text-2xl font-bold text-gray-900 mb-4">{project.duration}</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  {project.examples.map((example, idx) => (
                    <li key={idx}>• {example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Materials */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Equipment & Materials</h2>
            <p className="text-xl text-gray-600">We use only the finest tools and materials for superior results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Diamond Grinding Equipment',
              'Industrial Dust Collection',
              'High-Quality Diamond Pads',
              'Premium Concrete Sealers',
              'Professional Polishing Machines',
              'Crack Repair Materials',
              'Surface Testing Equipment',
              'Safety & Protection Gear'
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow hover-lift scroll-reveal">
                <span className="font-semibold text-gray-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and see how our proven process can transform your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center"
              >
                Get Your Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:647-641-3782"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all"
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

export default Process;