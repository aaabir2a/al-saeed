import NextImage from 'next/image';
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
    <main className="min-h-screen bg-white overflow-x-hidden">
      <div className="relative w-full overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <Section id="home" background="primary" padding="lg" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="z-10">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-primary-100/50 rounded-full border border-primary-200/50 mb-6 animate-fade-in shadow-sm">
                  <span className="text-[10px] font-black text-primary-800 uppercase tracking-[0.2em]">Est. 2009 • Excellence in Qatar</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-neutral-950 mb-6 font-display leading-[1] tracking-tight">
                  Building <br />
                  Qatar's <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                    Future
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-neutral-500 mb-10 leading-relaxed max-w-lg font-medium">
                  With over <span className="text-neutral-950 font-black">14 years</span> of excellence in civil construction.
                  Delivering landmark projects with integrity and competitive value.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="md" href="#services" className="px-10 py-4 rounded-xl shadow-lg shadow-primary-500/20 text-base font-black tracking-widest uppercase">
                    Explore Services
                  </Button>
                  <Button variant="outline" size="md" href="#contact" className="px-10 py-4 rounded-xl border-2 text-base font-black tracking-widest uppercase">
                    Get a Quote
                  </Button>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500/10 to-accent-500/10 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60"></div>
                <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square max-w-[550px] mr-auto lg:ml-auto">
                  {/* Secondary Image Layer (Rotated Background) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-[3rem] transform rotate-3 transition-transform duration-700 group-hover:rotate-6 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
                  </div>

                  {/* Primary Image Layer with Logo Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-[3rem] shadow-2xl overflow-hidden transition-transform duration-700 group-hover:-translate-y-2 group-hover:-translate-x-2">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-5929c69d3978?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
                    <div className="h-full flex items-center justify-center p-8 md:p-12">
                      <div className="text-center">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 backdrop-blur-3xl rounded-[2rem] mx-auto mb-6 md:mb-8 flex items-center justify-center border border-white/10 p-5 md:p-6 shadow-2xl">
                          <div className="relative w-full h-full">
                            <NextImage src="/logo/logo-transparent.png" alt="Logo" fill className="object-contain" priority />
                          </div>
                        </div>
                        <div className="space-y-2 md:space-y-3">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-display uppercase tracking-wider">Al Saeed</div>
                          <div className="text-primary-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">Trading & Contracting</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Stats Section */}
        <Section background="dark" padding="md" className="relative z-10 -mt-12 mx-4 md:mx-12 rounded-[2rem] shadow-2xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCard value="14+" label="Years Experience" />
            <StatCard value="100+" label="Projects Completed" />
            <StatCard value="50+" label="Expert Team" />
            <StatCard value="100%" label="Client Satisfaction" />
          </div>
        </Section>

        {/* About Section */}
        <Section id="about" background="white" padding="lg">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionTitle
              title="Our Legacy of Excellence"
              subtitle="Founded by Engineer Mofijur Rahman, Al Saeed has evolved from a specialized contractor into a major player in Qatar's infrastructure, built on a foundation of trust and technical mastery."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <ValueCard
              icon={<Shield className="w-12 h-12" />}
              title="Unyielding Integrity"
              description="Our word is our bond. We maintain the highest ethical standards in every contract, ensuring transparency and accountability."
            />
            <ValueCard
              icon={<HardHat className="w-12 h-12" />}
              title="Safety First Culture"
              description="At Al Saeed, safety isn't a policy—it's a promise. We implement rigorous protocols to ensure a zero-harm environment."
            />
            <ValueCard
              icon={<Award className="w-12 h-12" />}
              title="Proven Success"
              description="With over a decade of successful project delivery, we provide high-value solutions that exceed client expectations."
            />
          </div>
        </Section>

        {/* Services Section */}
        <Section id="services" background="gray" padding="lg" className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
          <SectionTitle
            title="Mastering Heavy Civil & Building Works"
            subtitle="We offer turnkey solutions across the construction spectrum, specializing in high-complexity infrastructure and industrial projects."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </Section>

        {/* Resources Section */}
        <Section background="white" padding="lg">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-4xl font-black text-neutral-950 mb-8 font-display tracking-tight">Industrial Strength <br /><span className="text-primary-600">Infrastructure</span></h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: 'Heavy Transporters', icon: <Truck /> },
                  { name: 'Excavators', icon: <Wrench /> },
                  { name: 'Bulldozers', icon: <Building2 /> },
                  { name: 'Cranes (50 Ton)', icon: <HardHat /> },
                  { name: 'Rollers', icon: <Shield /> },
                  { name: 'Generators', icon: <Wrench /> }
                ].map((item, i) => (
                  <div key={i} className="group bg-neutral-50 p-6 rounded-2xl border border-neutral-100 hover:border-primary-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                    <div className="text-primary-500 mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                    <p className="font-bold text-neutral-900 group-hover:text-primary-700 transition-colors uppercase text-xs tracking-widest">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-100 rounded-[3rem] -z-10 transform -rotate-3"></div>
                <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-12 rounded-[3rem] shadow-2xl text-white">
                  <Users className="w-16 h-16 text-primary-200 mb-8" />
                  <h4 className="text-3xl font-bold mb-6 font-display">A Workforce of Specialists</h4>
                  <p className="text-primary-50/90 mb-8 text-lg leading-relaxed">
                    Our core strength lies in our team of 50+ dedicated professionals. From senior engineers to site supervisors, every member is committed to the Al Saeed standard of excellence.
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="h-px flex-1 bg-white/20"></div>
                    <Button variant="outline" className="border-white/40 text-white hover:bg-white hover:text-primary-700">Learn More</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" background="gray" padding="lg">
          <SectionTitle
            title="Landmark Developments"
            subtitle="Explore our portfolio of high-impact projects that are shaping the landscape of modern Qatar."
          />

          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </Section>

        {/* Associated Business */}
        <Section background="white" padding="lg">
          <SectionTitle
            title="Diversified Group Operations"
            subtitle="Beyond construction, Al Saeed Group is a pillar of Qatar's agricultural and food security sectors."
          />

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Vegetable Farm', icon: '🌱', bg: 'from-green-500 to-green-600', sub: 'Fresh Produce Cultivation' },
              { title: 'Chicken House', icon: '🐔', bg: 'from-orange-500 to-orange-600', sub: 'Poultry Operations' },
              { title: 'Dairy Farm', icon: '🐄', bg: 'from-blue-500 to-blue-600', sub: 'Quality Dairy Production' }
            ].map((biz, i) => (
              <div key={i} className="group relative p-10 bg-white rounded-3xl border border-neutral-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${biz.bg} opacity-[0.03] rounded-bl-[5rem] group-hover:opacity-10 transition-opacity`}></div>
                <div className={`w-24 h-24 bg-gradient-to-br ${biz.bg} rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform`}>
                  <span className="text-white text-4xl">{biz.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-neutral-950 mb-3 font-display">{biz.title}</h3>
                <p className="text-neutral-500 font-medium uppercase text-xs tracking-[0.2em]">{biz.sub}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" background="dark" padding="lg" className="bg-[#050505] relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[120px] -z-10 delay-1000"></div>

          <div className="grid lg:grid-cols-2 gap-24 relative z-10">
            <div>
              <div className="inline-block px-4 py-1.5 bg-primary-500/10 text-primary-400 text-xs font-black uppercase tracking-[0.3em] rounded-full border border-primary-500/20 mb-8">
                Regional Presence • International Standards
              </div>
              <h2 className="text-6xl md:text-7xl font-black mb-10 font-display tracking-tight leading-none">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                  The Future.
                </span>
              </h2>
              <p className="text-neutral-400 mb-16 text-xl leading-relaxed max-w-lg font-medium">
                Al Saeed provides industrial-grade solutions for Qatar's most demanding infrastructure projects. We're ready to partner with you.
              </p>

              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-12">
                  <div className="group">
                    <p className="font-black text-primary-500 mb-4 uppercase tracking-[0.2em] text-[10px]">Headquarters</p>
                    <p className="text-white text-lg font-bold leading-snug group-hover:text-primary-400 transition-colors">
                      Flat 3, Floor 4, Building 30<br />Street 950, Umm Ghuwailina<br />Doha, Qatar
                    </p>
                  </div>

                  <div className="group">
                    <p className="font-black text-primary-500 mb-4 uppercase tracking-[0.2em] text-[10px]">Direct Assistance</p>
                    <p className="text-white text-3xl font-black tracking-tight group-hover:text-primary-400 transition-colors">
                      +974 55799113
                    </p>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="group">
                    <p className="font-black text-primary-500 mb-4 uppercase tracking-[0.2em] text-[10px]">Digital Inquiry</p>
                    <p className="text-white text-lg font-bold break-all group-hover:text-primary-400 transition-colors">
                      alsaeedcontractingtrading@gmail.com
                    </p>
                  </div>

                  <div className="group">
                    <p className="font-black text-primary-500 mb-4 uppercase tracking-[0.2em] text-[10px]">Operational Hours</p>
                    <p className="text-white text-lg font-bold group-hover:text-primary-400 transition-colors">
                      Sat - Thu: 08:00 - 17:00<br />AST (Arabia Standard Time)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-[3rem] blur-xl opacity-50"></div>
              <div className="relative bg-neutral-900/40 backdrop-blur-2xl p-10 md:p-14 rounded-[3rem] border border-white/5 shadow-2xl">
                <h3 className="text-4xl font-black mb-10 font-display tracking-tight text-white italic">Begin Your Partnership</h3>
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest ml-1">Full Identity</label>
                      <input
                        type="text"
                        placeholder="e.g. John Doe"
                        className="w-full px-8 py-5 bg-white/5 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 border border-white/5 transition-all placeholder:text-neutral-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest ml-1">Email Connection</label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        className="w-full px-8 py-5 bg-white/5 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 border border-white/5 transition-all placeholder:text-neutral-700"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest ml-1">Contact Phone</label>
                    <input
                      type="tel"
                      placeholder="+974 XXXX XXXX"
                      className="w-full px-8 py-5 bg-white/5 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 border border-white/5 transition-all placeholder:text-neutral-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest ml-1">Requirement Overview</label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your project requirements..."
                      className="w-full px-8 py-5 bg-white/5 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 border border-white/5 transition-all resize-none placeholder:text-neutral-700"
                    ></textarea>
                  </div>
                  <Button variant="primary" size="lg" className="w-full py-6 rounded-2xl shadow-2xl shadow-primary-500/20 text-lg font-black tracking-widest uppercase">
                    Transmit Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="bg-neutral-950 text-neutral-500 py-24 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-16 mb-20">
              <div className="col-span-1 md:col-span-1">
                <Logo size="md" showText={true} className="mb-8 invert transition-opacity hover:opacity-80" />
                <p className="text-sm leading-relaxed max-w-xs">
                  Since 2009, Al Saeed Trading & Contracting has been a symbol of engineering excellence and industrial integrity in the State of Qatar.
                </p>
              </div>

              <div>
                <h4 className="text-white text-xs font-black mb-8 uppercase tracking-[0.3em]">Foundation</h4>
                <ul className="space-y-4 text-sm font-medium">
                  <li><a href="#about" className="hover:text-primary-500 transition-colors">Our Legacy</a></li>
                  <li><a href="#services" className="hover:text-primary-500 transition-colors">Turnkey Services</a></li>
                  <li><a href="#projects" className="hover:text-primary-500 transition-colors">Major Works</a></li>
                  <li><a href="#contact" className="hover:text-primary-500 transition-colors">Connect</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white text-xs font-black mb-8 uppercase tracking-[0.3em]">Services</h4>
                <ul className="space-y-4 text-sm font-medium">
                  <li><a href="#services" className="hover:text-primary-500 transition-colors">Infrastructure</a></li>
                  <li><a href="#services" className="hover:text-primary-500 transition-colors">Heavy Earthworks</a></li>
                  <li><a href="#services" className="hover:text-primary-500 transition-colors">Facility Maintenance</a></li>
                  <li><a href="#services" className="hover:text-primary-500 transition-colors">Industrial Renovation</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white text-xs font-black mb-8 uppercase tracking-[0.3em]">Governance</h4>
                <div className="space-y-4 text-sm font-medium">
                  <p>C.R. Number: <span className="text-white">79356</span></p>
                  <p>License: <span className="text-white">70347</span></p>
                  <div className="inline-flex items-center px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] text-primary-400 font-black tracking-widest uppercase">
                    Ministry Approved
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-xs font-bold uppercase tracking-widest">&copy; 2026 Al Saeed Trading & Contracting WLL. All rights reserved.</p>
              <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-primary-500 transition-colors">Privacy</a>
                <a href="#" className="hover:text-primary-500 transition-colors">Terms</a>
                <a href="#" className="hover:text-primary-500 transition-colors">Compliance</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}