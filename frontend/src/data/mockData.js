const mockData = {
  // Services data - All with unique polished concrete images
  services: [
    {
      id: 'concrete-polishing',
      name: 'Concrete Polishing',
      description: 'Transform dull concrete into a brilliant, mirror-like surface that reflects light beautifully.',
      image: 'https://images.unsplash.com/photo-1515895309288-a3815ab7cf81',
      category: 'both',
      details: 'Our concrete polishing process uses diamond grinding tools to create a smooth, glossy finish that enhances both durability and aesthetics. Perfect for warehouses, showrooms, retail spaces, and modern homes.',
      benefits: ['Increased light reflection', 'Easy maintenance', 'Long-lasting finish', 'Cost-effective solution']
    },
    {
      id: 'epoxy-flooring',
      name: 'Epoxy Floor Coatings',
      description: 'Durable, chemical-resistant epoxy coatings perfect for industrial and commercial applications.',
      image: 'https://images.unsplash.com/photo-1595424073665-bf04f38d9c0b',
      category: 'commercial',
      details: 'High-performance epoxy systems that provide superior protection against chemicals, abrasion, and heavy traffic. Available in various colors and finishes.',
      benefits: ['Chemical resistance', 'Non-slip options available', 'Easy to clean', 'Seamless finish']
    },
    {
      id: 'decorative-concrete',
      name: 'Decorative Concrete',
      description: 'Stunning decorative options including staining, stamping, and artistic finishes.',
      image: 'https://images.unsplash.com/photo-1671775281678-a44894dc7d8c',
      category: 'residential',
      details: 'Create unique, artistic concrete surfaces with our decorative techniques. From acid staining to stamped patterns, we bring your vision to life.',
      benefits: ['Custom designs', 'Wide color selection', 'Unique patterns', 'Artistic appeal']
    },
    {
      id: 'concrete-sealing',
      name: 'Concrete Sealing',
      description: 'Protective sealers that enhance durability and maintain the beauty of your concrete.',
      image: 'https://images.unsplash.com/photo-1521459467264-802e2ef3141f',
      category: 'both',
      details: 'Professional-grade sealers that protect against moisture, stains, and wear while maintaining the natural beauty of concrete.',
      benefits: ['Moisture protection', 'Stain resistance', 'Enhanced durability', 'UV protection']
    },
    {
      id: 'floor-restoration',
      name: 'Floor Restoration',
      description: 'Bring old, damaged concrete floors back to life with our restoration services.',
      image: 'https://images.unsplash.com/photo-1617713965103-9fda56c89fad',
      category: 'both',
      details: 'Complete restoration services for damaged, stained, or worn concrete floors. We repair, refinish, and restore to like-new condition.',
      benefits: ['Cost-effective renewal', 'Structural repairs', 'Surface refinishing', 'Extended floor life']
    },
    {
      id: 'warehouse-flooring',
      name: 'Warehouse Flooring',
      description: 'Heavy-duty flooring solutions designed for industrial and warehouse environments.',
      image: 'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg',
      category: 'commercial',
      details: 'Industrial-strength flooring systems that withstand heavy machinery, forklift traffic, and demanding warehouse conditions.',
      benefits: ['Heavy-duty durability', 'Low maintenance', 'Dust reduction', 'Improved safety']
    }
  ],

  // Commercial services
  commercialServices: [
    {
      id: 'retail-flooring',
      name: 'Retail Store Flooring',
      description: 'Attractive, durable floors that enhance your retail environment and brand image.',
      applications: ['Shopping centers', 'Boutiques', 'Showrooms', 'Department stores']
    },
    {
      id: 'office-flooring',
      name: 'Office Building Floors',
      description: 'Professional-grade flooring solutions for corporate and office environments.',
      applications: ['Corporate offices', 'Medical facilities', 'Banks', 'Government buildings']
    },
    {
      id: 'industrial-flooring',
      name: 'Industrial Flooring',
      description: 'Heavy-duty solutions for manufacturing, warehouses, and industrial facilities.',
      applications: ['Manufacturing plants', 'Warehouses', 'Distribution centers', 'Food processing facilities']
    },
    {
      id: 'hospitality-flooring',
      name: 'Hospitality Flooring',
      description: 'Beautiful, low-maintenance floors perfect for hotels, restaurants, and entertainment venues.',
      applications: ['Hotels', 'Restaurants', 'Bars', 'Entertainment venues']
    }
  ],

  // Residential services
  residentialServices: [
    {
      id: 'basement-floors',
      name: 'Basement Floor Polishing',
      description: 'Transform your basement with beautiful, moisture-resistant polished concrete floors.',
      applications: ['Finished basements', 'Home gyms', 'Workshops', 'Recreation rooms']
    },
    {
      id: 'garage-floors',
      name: 'Garage Floor Coating',
      description: 'Durable, easy-to-clean garage floors that resist oil stains and tire marks.',
      applications: ['Residential garages', 'Workshop areas', 'Storage spaces', 'Multi-car garages']
    },
    {
      id: 'kitchen-floors',
      name: 'Kitchen & Bathroom Floors',
      description: 'Seamless, hygienic flooring perfect for kitchens and bathrooms.',
      applications: ['Modern kitchens', 'Bathroom floors', 'Laundry rooms', 'Mudrooms']
    },
    {
      id: 'patio-floors',
      name: 'Patio & Outdoor Floors',
      description: 'Weather-resistant decorative concrete for patios, driveways, and outdoor spaces.',
      applications: ['Patios', 'Pool decks', 'Driveways', 'Walkways']
    }
  ],

  // Gallery images - All unique polished concrete images
  gallery: [
    {
      url: 'https://customer-assets.emergentagent.com/job_polished-floors/artifacts/329go5ws_abt_img1%20%281%29.webp',
      title: 'Polished Concrete Showroom',
      location: 'Toronto, ON',
      category: 'commercial'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_8e4b8657-9f00-4d13-8490-6fcb3b912fb2/artifacts/vxenacd5_concrete-installation.jpg',
      title: 'Commercial Installation',
      location: 'Mississauga, ON',
      category: 'commercial'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_8e4b8657-9f00-4d13-8490-6fcb3b912fb2/artifacts/uglxrwxx_NTI5NzE_d4OZ8rt4zcRF5NUF-7282-NOC.jpg',
      title: 'Concrete Finishing Work',
      location: 'Hamilton, ON',
      category: 'industrial'
    },
    {
      url: 'https://images.pexels.com/photos/247719/pexels-photo-247719.jpeg',
      title: 'Polished Concrete Surface',
      location: 'Ottawa, ON',
      category: 'commercial'
    },
    {
      url: 'https://images.pexels.com/photos/3616764/pexels-photo-3616764.jpeg',
      title: 'Concrete Texture Finish',
      location: 'London, ON',
      category: 'commercial'
    },
    {
      url: 'https://images.pexels.com/photos/6474343/pexels-photo-6474343.jpeg',
      title: 'Industrial Concrete Floor',
      location: 'Kitchener, ON',
      category: 'industrial'
    },
    {
      url: 'https://images.pexels.com/photos/6474129/pexels-photo-6474129.jpeg',
      title: 'Polished Floor Process',
      location: 'Windsor, ON',
      category: 'residential'
    },
    {
      url: 'https://images.unsplash.com/photo-1633319985833-a933819c9974',
      title: 'Textured Concrete Floor',
      location: 'Markham, ON',
      category: 'commercial'
    },
    {
      url: 'https://images.unsplash.com/photo-1633319987184-55abe254437e',
      title: 'Smooth Concrete Surface',
      location: 'Brampton, ON',
      category: 'industrial'
    },
    {
      url: 'https://images.unsplash.com/photo-1617967397910-f52bebe67e72',
      title: 'Professional Concrete Finish',
      location: 'Burlington, ON',
      category: 'commercial'
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: 'Sarah Mitchell',
      rating: 5,
      comment: 'Dragon Concrete transformed our warehouse floor beyond expectations. The polished surface is not only beautiful but incredibly durable. Their team was professional, punctual, and delivered exactly what they promised.',
      project: 'Warehouse Polishing - Mississauga',
      date: '2024-06-15'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Outstanding work on our basement renovation! The polished concrete floor looks amazing and has completely changed the feel of the space. Highly recommend Dragon Concrete for residential projects.',
      project: 'Basement Floor Polishing - Toronto',
      date: '2024-05-22'
    },
    {
      name: 'Jennifer Lopez',
      rating: 5,
      comment: 'Professional service from start to finish. They completed our retail store floor ahead of schedule and within budget. The quality is exceptional and our customers constantly compliment the beautiful floor.',
      project: 'Retail Store Flooring - Hamilton',
      date: '2024-07-08'
    },
    {
      name: 'David Thompson',
      rating: 5,
      comment: 'Best decision we made for our manufacturing facility. The new floor surface has reduced dust, improved lighting, and can handle our heavy machinery perfectly. Dragon Concrete delivers results.',
      project: 'Industrial Flooring - London',
      date: '2024-04-30'
    },
    {
      name: 'Amanda Roberts',
      rating: 5,
      comment: 'The team at Dragon Concrete exceeded our expectations. Our garage floor coating has held up perfectly for over a year now. Easy to clean and looks great. Will definitely use them again.',
      project: 'Garage Floor Coating - Ottawa',
      date: '2024-06-03'
    },
    {
      name: 'Robert Kim',
      rating: 5,
      comment: 'Incredible transformation of our office space. The polished concrete gives it a modern, professional look that our clients love. The process was smooth and the results speak for themselves.',
      project: 'Office Building - Kitchener',
      date: '2024-05-18'
    }
  ],

  // Why choose us reasons
  whyChooseUs: [
    {
      title: 'Expert Craftsmanship',
      description: '15+ years of concrete polishing expertise with proven results across Ontario.',
      icon: 'Award'
    },
    {
      title: 'Premium Materials',
      description: 'We use only the highest quality diamond tools and professional-grade materials.',
      icon: 'Shield'
    },
    {
      title: 'Guaranteed Results',
      description: '100% satisfaction guarantee with comprehensive warranty on all work.',
      icon: 'CheckCircle'
    },
    {
      title: 'Fast Turnaround',
      description: 'Efficient project completion without compromising on quality or attention to detail.',
      icon: 'Clock'
    },
    {
      title: 'Competitive Pricing',
      description: 'Fair, transparent pricing with detailed quotes and no hidden costs.',
      icon: 'DollarSign'
    },
    {
      title: 'Full Service',
      description: 'Complete concrete solutions from preparation to finishing and maintenance.',
      icon: 'Settings'
    }
  ],

  // Process steps
  processSteps: [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We assess your space, discuss your needs, and provide a detailed project estimate.',
      duration: '1-2 hours'
    },
    {
      step: 2,
      title: 'Surface Preparation',
      description: 'Thorough cleaning, crack repair, and surface preparation to ensure optimal results.',
      duration: '1-2 days'
    },
    {
      step: 3,
      title: 'Grinding & Polishing',
      description: 'Progressive diamond grinding stages to achieve the desired level of polish and shine.',
      duration: '2-5 days'
    },
    {
      step: 4,
      title: 'Sealing & Protection',
      description: 'Application of protective sealers to enhance durability and maintain the finish.',
      duration: '1 day'
    },
    {
      step: 5,
      title: 'Final Inspection',
      description: 'Comprehensive quality check and walkthrough to ensure complete satisfaction.',
      duration: '1 hour'
    }
  ],

  // Service locations
  locations: [
    {
      city: 'Toronto',
      region: 'Greater Toronto Area',
      description: 'Full service coverage for residential, commercial, and industrial projects.',
      projects: 150,
      image: 'https://images.unsplash.com/photo-1517391815255-0063521ce15b'
    },
    {
      city: 'Mississauga',
      region: 'Greater Toronto Area',
      description: 'Commercial and industrial flooring solutions for the business district.',
      projects: 89,
      image: 'https://images.unsplash.com/photo-1524638431109-93d95c968f03'
    },
    {
      city: 'Hamilton',
      region: 'Golden Horseshoe',
      description: 'Residential and commercial concrete polishing services.',
      projects: 67,
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e'
    },
    {
      city: 'Ottawa',
      region: 'Eastern Ontario',
      description: 'Government, commercial, and residential flooring solutions.',
      projects: 45,
      image: 'https://images.unsplash.com/photo-1518856232045-d9143eebaf49'
    },
    {
      city: 'London',
      region: 'Southwestern Ontario',
      description: 'Industrial and commercial concrete polishing specialists.',
      projects: 38,
      image: 'https://images.unsplash.com/photo-1470925758041-6b396975080f'
    },
    {
      city: 'Kitchener-Waterloo',
      region: 'Waterloo Region',
      description: 'Tech industry and residential flooring solutions.',
      projects: 42,
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e'
    },
    {
      city: 'Windsor',
      region: 'Essex County',
      description: 'Automotive industry and residential concrete polishing.',
      projects: 29,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
    },
    {
      city: 'Brampton',
      region: 'Greater Toronto Area',
      description: 'Warehouse and residential concrete solutions.',
      projects: 35,
      image: 'https://images.unsplash.com/photo-1524638431109-93d95c968f03'
    }
  ]
};

export default mockData;