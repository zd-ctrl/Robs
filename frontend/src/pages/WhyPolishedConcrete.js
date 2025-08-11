import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, DollarSign, Shield, Zap, Leaf, Sparkles, Clock } from 'lucide-react';

const WhyPolishedConcrete = () => {
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

  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost-Effective Solution',
      description: 'Lower long-term costs compared to other flooring options. No need for waxing, sealing, or replacement.',
      details: ['Reduces maintenance costs by up to 60%', 'No regular waxing required', 'Eliminates flooring replacement costs']
    },
    {
      icon: Shield,
      title: 'Exceptional Durability',
      description: 'Withstands heavy traffic, impacts, and daily wear better than traditional flooring materials.',
      details: ['Scratch and stain resistant', 'Handles heavy machinery', 'Lasts 20+ years with minimal maintenance']
    },
    {
      icon: Sparkles,
      title: 'Enhanced Aesthetics',
      description: 'Creates a beautiful, mirror-like finish that reflects light and enhances your space\'s appearance.',
      details: ['Increases light reflection by 30%', 'Modern, professional appearance', 'Customizable with stains and dyes']
    },
    {
      icon: Zap,
      title: 'Improved Safety',
      description: 'Non-slip surface options and seamless finish eliminate trip hazards and improve workplace safety.',
      details: ['Anti-slip additives available', 'Eliminates trip hazards', 'Reduces dust and allergens']
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Choice',
      description: 'Sustainable option that uses existing concrete slabs and requires no harmful chemicals or coatings.',
      details: ['Uses existing concrete substrate', 'No VOC emissions', 'Reduces construction waste']
    },
    {
      icon: Clock,
      title: 'Low Maintenance',
      description: 'Simple daily cleaning with standard equipment. No special products or procedures required.',
      details: ['Daily dust mopping sufficient', 'Occasional damp mopping', 'No waxing or buffing needed']
    }
  ];

  const comparisons = [
    {
      flooring: 'Polished Concrete',
      cost: 'Low',
      maintenance: 'Minimal',
      durability: 'Excellent',
      appearance: 'Modern',
      installation: 'Fast'
    },
    {
      flooring: 'Vinyl Tile',
      cost: 'Medium',
      maintenance: 'Medium',
      durability: 'Fair',
      appearance: 'Limited',
      installation: 'Medium'
    },
    {
      flooring: 'Carpet',
      cost: 'High',
      maintenance: 'High',
      durability: 'Poor',
      appearance: 'Traditional',
      installation: 'Fast'
    },
    {
      flooring: 'Hardwood',
      cost: 'Very High',
      maintenance: 'High',
      durability: 'Good',
      appearance: 'Premium',
      installation: 'Slow'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Why Choose Polished Concrete?</h1>
            <p className="text-xl opacity-90">
              Discover the benefits of polished concrete flooring for your home or business
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Smart Flooring Choice</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Polished concrete offers unmatched benefits for both residential and commercial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover-lift scroll-reveal border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-1">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Visual */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See the Transformation</h2>
            <p className="text-xl text-gray-600">Witness how polished concrete can completely transform any space</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Before Polishing</h3>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600"
                  alt="Concrete before polishing"
                  className="rounded-lg w-full mb-4"
                />
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Dull, gray appearance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Dusty and porous surface
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Stains and discoloration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Poor light reflection
                  </li>
                </ul>
              </div>
            </div>

            <div className="scroll-reveal">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">After Polishing</h3>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <img 
                  src="https://customer-assets.emergentagent.com/job_8e4b8657-9f00-4d13-8490-6fcb3b912fb2/artifacts/92mfjt5o_abt_img1.webp"
                  alt="Polished concrete floor"
                  className="rounded-lg w-full mb-4"
                />
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Beautiful, glossy finish
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Dust-free, sealed surface
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Stain and scratch resistant
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Enhanced light reflection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flooring Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Compares</h2>
            <p className="text-xl text-gray-600">See how polished concrete stacks up against other flooring options</p>
          </div>

          <div className="max-w-4xl mx-auto scroll-reveal">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-600 text-white">
                      <th className="text-left py-4 px-6 font-semibold">Flooring Type</th>
                      <th className="text-center py-4 px-4 font-semibold">Cost</th>
                      <th className="text-center py-4 px-4 font-semibold">Maintenance</th>
                      <th className="text-center py-4 px-4 font-semibold">Durability</th>
                      <th className="text-center py-4 px-4 font-semibold">Appearance</th>
                      <th className="text-center py-4 px-4 font-semibold">Installation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((row, index) => (
                      <tr key={index} className={`border-b border-gray-100 ${index === 0 ? 'bg-green-50' : ''}`}>
                        <td className="py-4 px-6 font-semibold text-gray-900">{row.flooring}</td>
                        <td className="py-4 px-4 text-center text-sm">{row.cost}</td>
                        <td className="py-4 px-4 text-center text-sm">{row.maintenance}</td>
                        <td className="py-4 px-4 text-center text-sm">{row.durability}</td>
                        <td className="py-4 px-4 text-center text-sm">{row.appearance}</td>
                        <td className="py-4 px-4 text-center text-sm">{row.installation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect for Any Space</h2>
            <p className="text-xl text-gray-600">Polished concrete works beautifully in various applications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Warehouses & Distribution Centers',
              'Retail Stores & Showrooms',
              'Office Buildings & Lobbies',
              'Restaurants & Hospitality',
              'Manufacturing Facilities',
              'Automotive Showrooms',
              'Residential Basements',
              'Garages & Workshops',
              'Healthcare Facilities',
              'Educational Institutions',
              'Government Buildings',
              'Sports & Recreation Centers'
            ].map((application, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow hover-lift scroll-reveal">
                <span className="font-medium text-gray-900">{application}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Environmentally Responsible</h2>
              <p className="text-lg text-gray-600 mb-8">
                Choosing polished concrete is not just good for your budget and maintenance schedule—it's also an environmentally conscious decision.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Uses Existing Materials',
                    description: 'Works with your existing concrete slab, reducing construction waste'
                  },
                  {
                    title: 'No Toxic Chemicals',
                    description: 'Process uses water and diamond grinding—no harmful chemicals or VOC emissions'
                  },
                  {
                    title: 'Energy Efficient',
                    description: 'Reflective surface reduces lighting needs, cutting energy consumption'
                  },
                  {
                    title: 'Long Lifespan',
                    description: 'Lasts decades without replacement, reducing environmental impact'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Leaf className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="scroll-reveal">
              <img 
                src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600"
                alt="Eco-friendly concrete polishing"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Polished Concrete?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover how polished concrete can transform your space with beauty, durability, and cost-effectiveness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center"
              >
                Get Your Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/gallery"
                className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all"
              >
                View Our Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyPolishedConcrete;