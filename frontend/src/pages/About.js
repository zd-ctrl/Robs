import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, CheckCircle, ArrowRight } from 'lucide-react';
import mockData from '../data/mockData';

const About = () => {
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
            <h1 className="text-5xl font-bold mb-6">About Dragon Concrete & Polishing</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Leading provider of concrete flooring solutions in Ontario, delivering excellence with every project.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="scroll-reveal">
              <img 
                src="https://customer-assets.emergentagent.com/job_polished-floors/artifacts/329go5ws_abt_img1%20%281%29.webp" 
                alt="Dragon Concrete Polished Floor"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="scroll-reveal">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Dragon Concrete & Polish is a leading provider of concrete flooring solutions in Ontario. 
                  With years of experience in concrete floor finishing and polishing, we have honed our craft 
                  to deliver the highest quality finished concrete floors in the industry.
                </p>
                <p>
                  We pride ourselves on offering innovative and cost-effective solutions to homeowners and 
                  businesses across the Greater Toronto Area. Our team is committed to helping you transform 
                  your space with stunning and customized concrete flooring.
                </p>
                <p>
                  Whether your project is large or small, we provide personalized service to ensure your 
                  vision comes to life. We collaborate closely with our clients to deliver affordable, 
                  high-quality concrete flooring solutions that meet your needs. Your satisfaction is our top priority.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { number: '500+', label: 'Projects Completed', icon: Award },
              { number: '15+', label: 'Years Experience', icon: Users },
              { number: '98%', label: 'Customer Satisfaction', icon: CheckCircle },
              { number: '24/7', label: 'Support Available', icon: Users }
            ].map((stat, index) => (
              <div key={index} className="text-center scroll-reveal">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Dragon Concrete?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us apart from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover-lift scroll-reveal">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Skilled professionals dedicated to delivering exceptional concrete solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Rob Dragon',
                role: 'Founder & Lead Contractor',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
                description: 'Over 15 years of concrete polishing expertise, leading every project with passion and precision.'
              },
              {
                name: 'Maria Santos',
                role: 'Project Manager',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b25c2ae3?w=400',
                description: 'Ensures every project runs smoothly from initial consultation to final walkthrough.'
              },
              {
                name: 'James Wilson',
                role: 'Master Polisher',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
                description: 'Expert in diamond grinding and polishing techniques with unmatched attention to detail.'
              }
            ].map((member, index) => (
              <div key={index} className="text-center scroll-reveal">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your concrete polishing project and create something amazing together.
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

export default About;