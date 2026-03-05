import React, { useState, useEffect } from 'react';
import { 
  Search, MapPin, Home, DollarSign, Wifi, Wind, 
  ShieldCheck, Zap, Menu, X, ArrowRight, Star, 
  Coffee, ChevronDown
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle sticky navbar glass effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProperties = [
    {
      id: 1,
      title: "The Vertex Penthouse",
      location: "Senopati, South Jakarta",
      price: "$1,200",
      period: "/month",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Apartment",
      rating: 4.9
    },
    {
      id: 2,
      title: "Lumina Studio Suites",
      location: "Kuningan, South Jakarta",
      price: "$450",
      period: "/month",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Premium Kost",
      rating: 4.8
    },
    {
      id: 3,
      title: "Aura Residence",
      location: "SCBD, Central Jakarta",
      price: "$850",
      period: "/month",
      image: "https://images.unsplash.com/photo-1502672260266-1c1e5250fe0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Loft",
      rating: 5.0
    }
  ];

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-200 font-sans selection:bg-teal-500/30">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .text-glow { text-shadow: 0 0 20px rgba(45, 212, 191, 0.5); }
        .box-glow { box-shadow: 0 0 25px rgba(45, 212, 191, 0.2); }
        .box-glow-hover:hover { box-shadow: 0 0 35px rgba(45, 212, 191, 0.4); }
      `}} />

      {/* 1. Sticky Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-teal-500 flex items-center justify-center box-glow">
              <Home className="w-5 h-5 text-[#0A1128]" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Kos<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Mate</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">List a Property</a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Explore</a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</a>
            <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-[#070B19] font-bold text-sm tracking-wide hover:scale-105 transition-transform duration-300 box-glow-hover shadow-[0_0_15px_rgba(45,212,191,0.4)]">
              Sign In / Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t-0 flex flex-col p-6 gap-4">
            <a href="#" className="text-slate-300 font-medium py-2">List a Property</a>
            <a href="#" className="text-slate-300 font-medium py-2">Explore</a>
            <a href="#" className="text-slate-300 font-medium py-2">About</a>
            <button className="mt-2 w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-[#070B19] font-bold text-sm shadow-[0_0_15px_rgba(45,212,191,0.4)]">
              Sign In / Sign Up
            </button>
          </div>
        )}
      </nav>

      {/* 2. The Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/80 via-[#070B19]/90 to-[#070B19]"></div>
          {/* Subtle glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
          <span className="inline-block py-1 px-3 rounded-full glass-panel text-cyan-400 text-xs font-bold tracking-wider uppercase mb-6 border-cyan-400/30">
            Welcome to the new standard
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Elevate Your Living. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-400 text-glow">
              Find Your Perfect Space.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light">
            Premium kosts and apartments curated for the modern student and ambitious professional. Experience luxury without the hassle.
          </p>

          {/* Floating Search Bar */}
          <div className="glass-panel rounded-2xl p-3 md:p-4 max-w-4xl mx-auto shadow-2xl border border-white/10 flex flex-col md:flex-row gap-3 transform hover:scale-[1.01] transition-transform duration-300">
            
            {/* Location Input */}
            <div className="flex-1 flex items-center bg-[#0A1128]/50 rounded-xl px-4 py-3 md:py-4 border border-white/5 group hover:border-teal-500/30 transition-colors">
              <MapPin className="text-teal-400 w-5 h-5 mr-3" />
              <div className="flex flex-col text-left w-full">
                <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Location</label>
                <input 
                  type="text" 
                  placeholder="Where do you want to live?" 
                  className="bg-transparent border-none outline-none text-white placeholder-slate-400 text-sm w-full font-medium"
                />
              </div>
            </div>

            {/* Property Type */}
            <div className="flex-1 flex items-center bg-[#0A1128]/50 rounded-xl px-4 py-3 md:py-4 border border-white/5 group hover:border-teal-500/30 transition-colors cursor-pointer relative">
              <Home className="text-teal-400 w-5 h-5 mr-3" />
              <div className="flex flex-col text-left w-full">
                <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Property Type</label>
                <div className="flex justify-between items-center text-sm font-medium text-slate-300 w-full">
                  <span>Kost, Apartment...</span>
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            </div>

            {/* Price Range */}
            <div className="flex-1 flex items-center bg-[#0A1128]/50 rounded-xl px-4 py-3 md:py-4 border border-white/5 group hover:border-teal-500/30 transition-colors cursor-pointer relative">
              <DollarSign className="text-teal-400 w-5 h-5 mr-3" />
              <div className="flex flex-col text-left w-full">
                <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Price Range</label>
                <div className="flex justify-between items-center text-sm font-medium text-slate-300 w-full">
                  <span>Any Price</span>
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-[#070B19] rounded-xl px-8 py-4 flex items-center justify-center gap-2 font-bold hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all duration-300 md:w-auto w-full">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Social Proof / Trust Bar */}
      <section className="py-10 border-y border-white/5 bg-[#0A1128]/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
            Trusted by 10,000+ Students & Professionals from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Fake Logos using typography for demonstration */}
            <div className="text-xl font-black font-serif">UI / UX ACADEMY</div>
            <div className="text-xl font-bold tracking-tighter">TECH<span className="font-light">CORP</span></div>
            <div className="text-xl font-extrabold italic">Global<span className="text-teal-400">U</span></div>
            <div className="text-xl font-medium tracking-widest">NEXUS</div>
            <div className="text-xl font-bold">STARTUP<span className="text-xs align-top">®</span></div>
          </div>
        </div>
      </section>

      {/* 4. Featured Exclusive Listings */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trending Premium Spaces</h2>
            <p className="text-slate-400">Handpicked properties offering the ultimate living experience.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-teal-400 font-semibold hover:text-cyan-300 transition-colors group">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <div key={property.id} className="group glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-teal-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] flex flex-col cursor-pointer bg-[#0A1128]/40">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 glass-panel px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-md bg-black/20">
                  {property.type}
                </div>
                <div className="absolute top-4 right-4 z-10 glass-panel px-2 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 backdrop-blur-md bg-black/20">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  {property.rating}
                </div>
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow relative">
                {/* Subtle gradient line */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
                
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    {property.title}
                  </h3>
                </div>
                
                <p className="text-slate-400 text-sm flex items-center gap-1 mb-6">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  {property.location}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center gap-4 mb-6 text-slate-300">
                    <div className="flex items-center gap-1.5 text-xs bg-white/5 px-2.5 py-1.5 rounded-lg">
                      <Wifi className="w-3.5 h-3.5 text-teal-400" /> High-Speed
                    </div>
                    <div className="flex items-center gap-1.5 text-xs bg-white/5 px-2.5 py-1.5 rounded-lg">
                      <Wind className="w-3.5 h-3.5 text-teal-400" /> AC Included
                    </div>
                    <div className="flex items-center gap-1.5 text-xs bg-white/5 px-2.5 py-1.5 rounded-lg">
                      <Coffee className="w-3.5 h-3.5 text-teal-400" /> Pantry
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <div>
                      <span className="text-2xl font-bold text-white">{property.price}</span>
                      <span className="text-sm text-slate-500">{property.period}</span>
                    </div>
                    <button className="p-2.5 rounded-full bg-teal-500/10 text-teal-400 hover:bg-teal-500 hover:text-[#070B19] transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-teal-400 font-semibold">
            View All Properties <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 5. Why KosMate? (Value Proposition) */}
      <section className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#0A1128]/50 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[100px] z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The KosMate Advantage</h2>
            <p className="text-slate-400">We've redesigned the rental experience from the ground up to provide unparalleled peace of mind and luxury.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl glass-panel flex items-center justify-center mb-6 border-teal-500/30 group-hover:border-teal-400 transition-colors duration-300 relative">
                <div className="absolute inset-0 bg-teal-500/10 rounded-2xl group-hover:bg-teal-500/20 transition-colors blur-md"></div>
                <ShieldCheck className="w-10 h-10 text-teal-400 relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Verified Luxury</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Every listing undergoes a rigorous 50-point inspection. What you see in our high-res galleries is exactly what you get. No surprises.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl glass-panel flex items-center justify-center mb-6 border-cyan-500/30 group-hover:border-cyan-400 transition-colors duration-300 relative">
                <div className="absolute inset-0 bg-cyan-500/10 rounded-2xl group-hover:bg-cyan-500/20 transition-colors blur-md"></div>
                <Zap className="w-10 h-10 text-cyan-400 relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Seamless Booking</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Schedule tours, sign digital contracts, and make secure payments all within our platform in minutes, not days.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl glass-panel flex items-center justify-center mb-6 border-teal-500/30 group-hover:border-teal-400 transition-colors duration-300 relative">
                <div className="absolute inset-0 bg-teal-500/10 rounded-2xl group-hover:bg-teal-500/20 transition-colors blur-md"></div>
                <Search className="w-10 h-10 text-teal-400 relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Zero Hidden Fees</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Transparent pricing from day one. Wi-Fi, maintenance, and essential utilities are often bundled into one clear monthly rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The Footer */}
      <footer className="bg-[#050812] border-t border-white/5 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-teal-500 flex items-center justify-center">
                <Home className="w-5 h-5 text-[#0A1128]" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Kos<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Mate</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Redefining urban living for the modern generation. Discover, book, and experience premium spaces effortlessly.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors text-slate-300 hover:text-teal-400">
                 <span className="font-bold">in</span>
              </div>
              <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors text-slate-300 hover:text-teal-400">
                 <span className="font-bold">ig</span>
              </div>
              <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors text-slate-300 hover:text-teal-400">
                 <span className="font-bold">x</span>
              </div>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Jakarta Selatan</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Jakarta Pusat</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Premium Kosts</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Luxury Apartments</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Support Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Terms & Privacy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="text-white font-bold mb-6 tracking-wide">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">Get exclusive early access to new premium listings and offers.</p>
            <div className="flex bg-[#0A1128] rounded-xl p-1 border border-white/10 focus-within:border-teal-500/50 transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none text-white text-sm px-4 py-3 w-full"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-[#070B19] px-4 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto text-center pt-8 border-t border-white/10">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} KosMate Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;