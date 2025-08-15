import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
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

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '647-641-3782',
      description: 'Available for all inquiries',
      action: 'tel:647-641-3782'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'infopolising@gmail.com',
      description: 'Send us your questions',
      action: 'mailto:infopolising@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: '195 Barrington Avenue',
      description: 'Downtown Toronto, ON',
      action: 'https://maps.google.com/?q=195+Barrington+Avenue+Toronto'
    }
  ];

  const serviceAreas = [
    'Toronto', 'Mississauga', 'Hamilton', 'Ottawa', 
    'London', 'Kitchener-Waterloo', 'Windsor', 'Brampton',
    'Burlington', 'Markham', 'Richmond Hill', 'Vaughan'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl opacity-90">
              Ready to transform your space? Contact us for a free estimate and consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center scroll-reveal">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-1">{method.details}</p>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all inline-block"
                >
                  {method.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 scroll-reveal">
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Service Areas</h2>
              </div>
              <p className="text-gray-600 mb-6">
                We proudly serve clients throughout Ontario, from Downtown Toronto to all major cities and surrounding areas.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 font-medium">
                  Don't see your area listed? Contact us - we may be able to serve your location!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Estimate CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <h2 className="text-4xl font-bold mb-6">Get Your Free Estimate Today</h2>
            <p className="text-xl mb-8 opacity-90">
              No obligation, detailed quote with transparent pricing. Let's discuss your concrete polishing project.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                'Free On-Site Consultation',
                'Detailed Project Quote',
                'Professional Recommendations'
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center bg-white/10 rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:647-641-3782"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 647-641-3782
              </a>
              <a
                href="mailto:infopolising@gmail.com"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;