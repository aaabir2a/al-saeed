import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import Button from '@/components/Button';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import StatCard from '@/components/StatCard';
import ProjectCard from '@/components/ProjectCard';
import ValueCard from '@/components/ValueCard';
import { Building2, HardHat, Wrench, Shield, Users, Award, Truck, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Building Construction',
      description: 'Comprehensive concrete construction with 14+ years of expertise.',
      features: [
        'Concrete Paving',
        'Retaining Walls',
        'Barrier Walls',
        'Sidewalks and Curbs',
        'Cement Stabilized Base'
      ]
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: 'Excavation Services',
      description: 'Expert earth moving and underground construction services.',
      features: [
        'Earth Excavation',
        'Earth Borrow & Grading',
        'Granular Placement',
        'Sewer and Watermain',
        'Underground Services'
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Maintenance Services',
      description: 'Professional maintenance for all building types.',
      features: [
        'Government Buildings',
        'Commercial Buildings',
        'Institutional Buildings',
        'Industrial Buildings',
        'Preventive Maintenance'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'New Construction',
      description: 'Design-build approach from concept to completion.',
      features: [
        'Design-Build Approach',
        'Complete Project Management',
        'Cost-Effective Solutions',
        'Energy Efficient Buildings',
        'Concept to Completion'
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Renovation & Fit-Up',
      description: 'Transform spaces to meet your business needs.',
      features: [
        'Interior Renovations',
        'Office Space Remodeling',
        'Commercial Fit-Ups',
        'Partition Systems',
        'Lighting & Electrical'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety Solutions',
      description: 'COVID-19 compliant facility modifications.',
      features: [
        'Facility Assessments',
        'Social Distancing Setup',
        'Safety Barriers',
        'Automatic Doorways',
        'Intercom Systems'
      ]
    }
  ];

  const projects = [
    {
      title: 'G+5 Residential Building',
      description: 'Modern residential complex with complete amenities',
      location: 'Najma, Doha',
      category: 'Residential'
    },
    {
      title: 'Commercial Office Complex',
      description: 'State-of-the-art office buildings and warehouses',
      location: 'Industrial Area',
      category: 'Commercial'
    },
    {
      title: 'Luxury Villa Development',
      description: 'Premium villas with pools, majlis, and boundary walls',
      location: 'Al Khor, Al Rayyan',
      category: 'Residential'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Section id="home" background="primary" padding="lg" className="pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 font-display leading-tight">
              Building Qatar's <span className="text-primary-600">Future</span>
            </h1>
            <p className="text-xl text-neutral-700 mb-8 leading-relaxed">
              With over 14 years of excellence in civil construction and contracting, 
              Al Saeed Trading & Contracting delivers quality projects on time with competitive value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#services">
                Our Services
              </Button>
              <Button variant="outline" size="lg" href="#contact">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative h-96 lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl transform rotate-3 shadow-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent-600 to-accent-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <Building2 className="w-32 h-32 text-white opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="dark" padding="md" className="bg-gradient-to-r from-accent-700 to-accent-900">
        <div className="grid md:grid-cols-4 gap-8">
          <StatCard value="14+" label="Years Experience" />
          <StatCard value="100+" label="Projects Completed" />
          <StatCard value="50+" label="Expert Team" />
          <StatCard value="100%" label="Client Satisfaction" />
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" background="white" padding="lg">
        <SectionTitle
          title="About Al Saeed"
          subtitle="Founded by Engineer Mofijur Rahman, we've grown from humble beginnings to become a major player in Qatar's civil construction industry."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard
            icon={<Shield className="w-12 h-12" />}
            title="Integrity"
            description="Honesty and integrity guide all our operations with respect for environment, community, and people."
          />
          <ValueCard
            icon={<HardHat className="w-12 h-12" />}
            title="Safety"
            description="No compromise with safety. We ensure everyone goes home safely at the end of each working day."
          />
          <ValueCard
            icon={<Award className="w-12 h-12" />}
            title="Success"
            description="Providing quality products to satisfy clients and maintain long-term relationships for mutual benefit."
          />
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" background="gray" padding="lg">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive construction services for heavy civil, commercial, industrial, and municipal projects."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      {/* Resources Section */}
      <Section background="white" padding="lg">
        <SectionTitle
          title="Our Resources"
          subtitle="Equipped with state-of-the-art machinery and an experienced team of professionals."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-neutral-900 mb-6 font-display">Extensive Fleet</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Heavy Transporters', 'Excavators', 'Bulldozers', 'Graders', 'Cranes (50 Ton)', 'Rollers', 'Forklifts', 'Generators'].map((equipment) => (
                <div key={equipment} className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-xl border border-primary-200">
                  <Truck className="w-6 h-6 text-primary-600 mb-2" />
                  <p className="font-semibold text-neutral-900">{equipment}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-neutral-900 mb-6 font-display">Professional Team</h3>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl border border-primary-200">
              <Users className="w-12 h-12 text-primary-600 mb-4" />
              <p className="text-neutral-700 mb-4 text-lg">
                Our team of 15+ professionals brings extensive experience and skills to ensure 
                successful project delivery.
              </p>
              <p className="text-neutral-700 text-lg">
                We believe that our staff are our most important asset, and we invest in their 
                personal and professional development.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" background="gray" padding="lg">
        <SectionTitle
          title="Featured Projects"
          subtitle="From private developments to large government projects across Qatar."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      {/* Associated Business */}
      <Section background="white" padding="lg">
        <SectionTitle
          title="Associated Businesses"
          subtitle="Diversified business portfolio serving Qatar"
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
            <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-white text-3xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2 font-display">Al Saeed Vegetables Farm</h3>
            <p className="text-neutral-600">Fresh produce cultivation</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
            <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-white text-3xl">🐔</span>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2 font-display">Al Saeed Chicken House</h3>
            <p className="text-neutral-600">Poultry farming operations</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
            <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-white text-3xl">🐄</span>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2 font-display">Al Saeed Dairy Farm</h3>
            <p className="text-neutral-600">Quality dairy production</p>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" background="dark" padding="lg" className="bg-gradient-to-br from-neutral-900 to-neutral-800">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 font-display">Get In Touch</h2>
            <p className="text-neutral-300 mb-8 text-lg">
              Ready to start your next project? Contact us for a consultation and quote.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Address</p>
                  <p className="text-neutral-300">Flat 3, Floor 4, Building #30, Street 950</p>
                  <p className="text-neutral-300">Umm Ghuwailina, Doha, Qatar</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Phone</p>
                  <p className="text-neutral-300">+974 55799113</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <p className="text-neutral-300">alsaeedcontractingtrading@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Working Hours</p>
                  <p className="text-neutral-300">Saturday - Thursday</p>
                  <p className="text-neutral-300">8:00 AM - 5:00 PM (AST)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700">
            <h3 className="text-2xl font-bold mb-6 font-display">Send Us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 border border-neutral-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 border border-neutral-600"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 border border-neutral-600"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 border border-neutral-600"
              ></textarea>
              <Button variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 pyContinue9:56 AM-12">
<div className="container mx-auto px-4">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div>
<Logo size="md" showText={true} className="mb-4" />
<p className="text-sm text-neutral-400 mt-4">
Building excellence in Qatar's construction industry since 2009.
</p>
</div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-primary-400 transition">About Us</a></li>
            <li><a href="#services" className="hover:text-primary-400 transition">Services</a></li>
            <li><a href="#projects" className="hover:text-primary-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary-400 transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-primary-400 transition">Building Construction</a></li>
            <li><a href="#services" className="hover:text-primary-400 transition">Excavation</a></li>
            <li><a href="#services" className="hover:text-primary-400 transition">Maintenance</a></li>
            <li><a href="#services" className="hover:text-primary-400 transition">Renovation</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Certifications</h4>
          <p className="text-sm mb-2">C.R. Number: 79356</p>
          <p className="text-sm mb-2">License: 70347</p>
          <p className="text-sm">Ministry Approved</p>
        </div>
      </div>

      <div className="border-t border-neutral-800 pt-8 text-center text-sm">
        <p>&copy; 2026 Al Saeed Trading & Contracting WLL. All rights reserved.</p>
      </div>
    </div>
  </footer>
</main>
);
}