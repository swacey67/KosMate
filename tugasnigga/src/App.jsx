import { BackgroundPaths } from './components/ui/background-paths';
import DisplayCards from './components/ui/display-cards'; 
import { ContainerScroll } from './components/ui/container-scroll-animation';
import { BottomNavBar } from './components/ui/bottom-nav-bar'; // Import Bottom Nav
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import Auth from './Auth'; 
import { 
  Search, MapPin, Home, DollarSign, Wifi, Wind, 
  ShieldCheck, Zap, ArrowRight, Star, 
  Coffee, ChevronDown, CheckCircle2
} from 'lucide-react';

const allProperties = [
  { id: 1, title: "The Vertex Penthouse", location: "Senopati, South Jakarta", price: "Rp 67.000.000", period: "/month", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", type: "Apartment", rating: 4.9 },
  { id: 2, title: "Lumina Studio Suites", location: "Kuningan, South Jakarta", price: "Rp 3.550.000", period: "/month", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", type: "Premium Kost", rating: 4.8 },
  { id: 3, title: "Kost Ananda Putra", location: "Mlati, Kab. Sleman", price: "Rp 1.700.000", period: "/month", image: "https://bicarasekarang.wordpress.com/wp-content/uploads/2018/09/70518-cover2b2.jpg", type: "Boarding House", rating: 5.0 },
  { id: 4, title: "Tembalang Executive", location: "Tembalang, Semarang", price: "Rp 2.500.000", period: "/month", image: "https://images.unsplash.com/photo-1502672260266-1c1de2422078?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", type: "Premium Kost", rating: 4.9 },
  { id: 5, title: "Banyumanik Suites", location: "Banyumanik, Semarang", price: "Rp 3.200.000", period: "/month", image: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-mobile/tix-hotel/images-web/2021/03/29/195d3bcb-8713-4c11-a8af-f995e77001fd-1617016516124-fa7d3b9cd836de6692da91b1dcf675c9.jpg", type: "Apartment", rating: 4.7 },
  { id: 6, title: "Candisari Lofts", location: "Candisari, Semarang", price: "Rp 2.800.000", period: "/month", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", type: "Loft", rating: 4.8 },
  { id: 7, title: "Seturan Co-Living", location: "Seturan, Yogyakarta", price: "Rp 1.900.000", period: "/month", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", type: "Premium Kost", rating: 4.6 },
  { id: 8, title: "Jakal Premium Hub", location: "Kaliurang, Yogyakarta", price: "Rp 2.200.000", period: "/month", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", type: "Studio", rating: 4.9 },
  { id: 9, title: "Pondok Indah Mansions", location: "Pondok Indah, Jakarta", price: "Rp 2.500.000", period: "/month", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", type: "Apartment", rating: 4.7 }
];

// Logo mengambang di pojok kiri atas
const TopLogo = ({ navigate }) => (
  <div className="absolute top-6 left-6 md:top-8 md:left-12 z-[1000] flex items-center gap-2 cursor-pointer" onClick={() => { navigate('/'); window.scrollTo(0,0); }}>
    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-teal-500 flex items-center justify-center box-glow shadow-[0_0_20px_rgba(45,212,191,0.4)]">
      <Home className="w-6 h-6 text-[#0A1128]" />
    </div>
    <span className="text-3xl font-bold tracking-tight text-white hidden md:block drop-shadow-md">
      Kos<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Mate</span>
    </span>
  </div>
);

const Explore = ({ navigate, pathname, scrollToAbout }) => {
  const [searchParams] = useSearchParams();
  const locQuery = searchParams.get('location')?.toLowerCase() || "";
  const typeQuery = searchParams.get('type') || "";
  const priceQuery = searchParams.get('price') || "";

  const filteredProperties = allProperties.filter(p => {
    const matchLoc = p.location.toLowerCase().includes(locQuery) || p.title.toLowerCase().includes(locQuery);
    const matchType = typeQuery ? p.type === typeQuery : true;
    let matchPrice = true;
    if (priceQuery) {
      const numericPrice = parseInt(p.price.replace(/\D/g, ''));
      const [min, max] = priceQuery.split('-').map(Number);
      matchPrice = numericPrice >= min && numericPrice <= max;
    }
    return matchLoc && matchType && matchPrice;
  });

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-200 font-sans selection:bg-teal-500/30 overflow-x-hidden pt-10">
      <TopLogo navigate={navigate} />
      
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
                Discover Your Perfect <br />
                <span className="text-5xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-400 py-2 inline-block">
                  Sanctuary
                </span>
              </h1>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">Scroll to explore our complete catalog of verified, premium living spaces designed for your comfort.</p>
            </>
          }
        >
          <div className="relative w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Luxury Interior"
              className="mx-auto w-full h-full object-cover object-center"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
               <div className="glass-panel px-8 py-6 rounded-2xl flex flex-col items-center text-center">
                  <CheckCircle2 className="w-12 h-12 text-teal-400 mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-1">{filteredProperties.length} Premium Spaces Found</h3>
                  <p className="text-slate-300 text-sm">
                    {locQuery ? `Showing results for "${searchParams.get('location')}"` : "Showing results across Indonesia"}
                  </p>
               </div>
            </div>
          </div>
        </ContainerScroll>
      </div>

      <section className="px-6 pb-40 max-w-7xl mx-auto -mt-32 md:-mt-64 relative z-20">
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="group glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-teal-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] flex flex-col cursor-pointer bg-[#0A1128]">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white bg-black/80 border border-white/10">{property.type}</div>
                  <div className="absolute top-4 right-4 z-10 px-2 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 bg-black/80 border border-white/10">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />{property.rating}
                  </div>
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-90"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative">
                  <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors mb-2">{property.title}</h3>
                  <p className="text-slate-400 text-sm flex items-center gap-1 mb-6"><MapPin className="w-4 h-4 text-slate-500" />{property.location}</p>
                  <div className="mt-auto">
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
        ) : (
          <div className="w-full flex flex-col items-center justify-center text-center py-20 glass-panel rounded-3xl border-dashed border-white/10">
             <Search className="w-16 h-16 text-slate-600 mb-4" />
             <h3 className="text-2xl font-bold text-white mb-2">No spaces found</h3>
             <p className="text-slate-400 mb-8 max-w-md">We couldn't find any properties matching your exact search criteria. Try adjusting your filters!</p>
             <button onClick={() => navigate('/explore')} className="px-8 py-3 rounded-full bg-teal-500/10 text-teal-400 font-bold hover:bg-teal-500 hover:text-[#070B19] transition-all duration-300">
               Clear Filters
             </button>
          </div>
        )}
      </section>

      <BottomNavBar pathname={pathname} navigate={navigate} scrollToAbout={scrollToAbout} />
    </div>
  );
};

const App = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchPrice, setSearchPrice] = useState("");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollToAbout = () => {
    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => { document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' }); }, 100);
    } else {
      document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const executeSearch = () => {
    const params = new URLSearchParams();
    if (searchLocation) params.append("location", searchLocation);
    if (searchType) params.append("type", searchType);
    if (searchPrice) params.append("price", searchPrice);
    navigate(`/explore?${params.toString()}`);
  };

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const baseOverlay = "before:absolute before:inset-0 before:rounded-3xl before:bg-[#070B19]/60 grayscale-[100%] hover:before:opacity-0 hover:grayscale-0 before:transition-opacity before:duration-700 transition-all duration-500 ease-out";
  const stackedCardsData = allProperties.slice(0, 6).map((property, index) => {
    const classes = [
      `hover:-translate-y-10 hover:z-[100] ${baseOverlay}`,
      `translate-x-8 md:translate-x-12 translate-y-6 md:translate-y-10 hover:-translate-y-2 md:hover:-translate-y-1 hover:z-[100] ${baseOverlay}`,
      `translate-x-16 md:translate-x-24 translate-y-12 md:translate-y-20 hover:translate-y-4 md:hover:translate-y-10 hover:z-[100] ${baseOverlay}`,
      `translate-x-24 md:translate-x-36 translate-y-20 md:translate-y-32 hover:translate-y-12 md:hover:translate-y-20 hover:z-[100] ${baseOverlay}`,
      `translate-x-32 md:translate-x-48 translate-y-28 md:translate-y-40 hover:translate-y-20 md:hover:translate-y-32 hover:z-[100] ${baseOverlay}`,
      `translate-x-40 md:translate-x-60 translate-y-36 md:translate-y-52 hover:translate-y-28 md:hover:translate-y-40 hover:z-[100] transition-all duration-500 ease-out`
    ];
    return { property, className: `[grid-area:stack] ${classes[index]}` };
  });

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-[#070B19] text-slate-200 font-sans selection:bg-teal-500/30 overflow-x-hidden pb-24">
          <style dangerouslySetInnerHTML={{__html: `
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
            body { font-family: 'Plus Jakarta Sans', sans-serif; }
            .glass-panel { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); }
            .text-glow { text-shadow: 0 0 20px rgba(45, 212, 191, 0.5); }
            .box-glow { box-shadow: 0 0 25px rgba(45, 212, 191, 0.2); }
            .box-glow-hover:hover { box-shadow: 0 0 35px rgba(45, 212, 191, 0.4); }
          `}} />

          <TopLogo navigate={navigate} />

          <section className="relative pb-10">
            <BackgroundPaths title="Elevate Your Living">
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light">
                Premium kosts and apartments curated for the modern student and ambitious professional. Experience luxury without the hassle.
              </p>

              <div className="glass-panel rounded-2xl p-3 md:p-4 max-w-4xl mx-auto shadow-2xl border border-white/10 flex flex-col md:flex-row gap-3 transform hover:scale-[1.01] transition-transform duration-300 relative z-[500]">
                
                <div className="flex-1 flex items-center bg-[#0A1128]/50 rounded-xl px-4 py-3 md:py-4 border border-white/5 group hover:border-teal-500/30 transition-colors">
                  <MapPin className="text-teal-400 w-5 h-5 mr-3" />
                  <div className="flex flex-col text-left w-full">
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Location</label>
                    <input 
                      type="text" 
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && executeSearch()}
                      placeholder="Where do you want to live?" 
                      className="bg-transparent border-none outline-none text-white placeholder-slate-400 text-sm w-full font-medium" 
                    />
                  </div>
                </div>

                <div className="flex-1 flex items-center bg-[#0A1128]/50 rounded-xl px-4 py-3 md:py-4 border border-white/5 group hover:border-teal-500/30 transition-colors cursor-pointer relative">
                  <Home className="text-teal-400 w-5 h-5 mr-3 z-10" />
                  <div className="flex flex-col text-left w-full relative">
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold z-10">Property Type</label>
                    <div className="flex justify-between items-center w-full relative">
                      <select 
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                        className="w-full bg-transparent border-none outline-none text-white text-sm font-medium appearance-none cursor-pointer pr-6 relative z-10"
                      >
                        <option value="" className="text-black">Any Type</option>
                        <option value="Apartment" className="text-black">Apartment</option>
                        <option value="Premium Kost" className="text-black">Premium Kost</option>
                        <option value="Boarding House" className="text-black">Boarding House</option>
                        <option value="Loft" className="text-black">Loft</option>
                        <option value="Studio" className="text-black">Studio</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 absolute right-0 pointer-events-none z-0" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex items-center bg-[#0A1128]/50 rounded-xl px-4 py-3 md:py-4 border border-white/5 group hover:border-teal-500/30 transition-colors cursor-pointer relative">
                  <DollarSign className="text-teal-400 w-5 h-5 mr-3 z-10" />
                  <div className="flex flex-col text-left w-full relative">
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold z-10">Price Range</label>
                    <div className="flex justify-between items-center w-full relative">
                      <select 
                        value={searchPrice}
                        onChange={(e) => setSearchPrice(e.target.value)}
                        className="w-full bg-transparent border-none outline-none text-white text-sm font-medium appearance-none cursor-pointer pr-6 relative z-10"
                      >
                        <option value="" className="text-black">Any Price</option>
                        <option value="0-2000000" className="text-black">Under Rp 2 Juta</option>
                        <option value="2000000-5000000" className="text-black">Rp 2 Juta - Rp 5 Juta</option>
                        <option value="5000000-999999999" className="text-black">Above Rp 5 Juta</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 absolute right-0 pointer-events-none z-0" />
                    </div>
                  </div>
                </div>

                <button 
                  onClick={executeSearch}
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-[#070B19] rounded-xl px-8 py-4 flex items-center justify-center gap-2 font-bold hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all duration-300 md:w-auto w-full relative z-10"
                >
                  <Search className="w-5 h-5" /><span>Search</span>
                </button>
              </div>
            </BackgroundPaths>
          </section>

          <section className="py-10 border-y border-white/5 bg-[#0A1128]/30">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="mt-2 text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Trusted by 10,000+ Students & Professionals from</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="text-xl font-black font-serif">UI / UX ACADEMY</div>
                <div className="text-xl font-bold tracking-tighter">TECH<span className="font-light">CORP</span></div>
                <div className="text-xl font-extrabold italic">Global<span className="text-teal-400">U</span></div>
              </div>
            </div>
          </section>

          <section className="pt-20 px-6 max-w-7xl mx-auto relative z-50">
            <div className="flex justify-between items-end relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-0">Trending Premium Spaces</h2>
                <p className="text-slate-400 mt-2">Handpicked properties offering the ultimate living experience.</p>
              </div>
            </div>

            <div className="-mt-[40px] md:-mt-[6px] -ml-[200px]">
              <DisplayCards cards={stackedCardsData} />
            </div>
          </section>

          <section id="about-section" className="pt-8 pb-24 px-6 max-w-7xl mx-auto relative z-20">
            <div className="glass-panel rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-white/5 bg-gradient-to-br from-[#0A1128] to-[#070B19]">
              <div className="flex-1 space-y-6">
                <span className="inline-block py-1 px-3 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold tracking-wider uppercase border border-teal-500/20">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Built for the modern <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">urban explorer.</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  KosMate was born out of frustration with the traditional rental market. We believe finding your next sanctuary shouldn't involve sketchy listings, hidden fees, or endless back-and-forth messaging.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Whether you're a student at Undip looking for a quiet study space, or a professional in Jakarta needing a premium suite, we personally verify every single property so you can book with absolute confidence.
                </p>
                
                <div className="flex gap-8 pt-4">
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-white">500+</span>
                    <span className="text-xs text-teal-400 uppercase tracking-wider mt-1 font-bold">Verified Spaces</span>
                  </div>
                  <div className="w-px bg-white/10 mx-2"></div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-white">10k+</span>
                    <span className="text-xs text-teal-400 uppercase tracking-wider mt-1 font-bold">Happy Members</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_0_40px_rgba(45,212,191,0.15)] group">
                <img 
                  src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Inside a KosMate Premium property" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-panel backdrop-blur-md bg-white/5 border-white/10 p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex -space-x-3">
                      <img className="w-10 h-10 rounded-full border-2 border-[#0A1128]" src="https://i.pravatar.cc/100?img=1" alt="User" />
                      <img className="w-10 h-10 rounded-full border-2 border-[#0A1128]" src="https://i.pravatar.cc/100?img=2" alt="User" />
                      <img className="w-10 h-10 rounded-full border-2 border-[#0A1128]" src="https://i.pravatar.cc/100?img=3" alt="User" />
                      <div className="w-10 h-10 rounded-full border-2 border-[#0A1128] bg-teal-500 flex items-center justify-center text-xs font-bold text-[#070B19]">+99</div>
                    </div>
                    <span className="text-sm font-semibold text-white">Join the community</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[#0A1128]/50 z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[100px] z-0"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-16 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The KosMate Advantage</h2>
                <p className="text-slate-400">We've redesigned the rental experience from the ground up to provide unparalleled peace of mind and luxury.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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

          <footer className="bg-[#050812] border-t border-white/5 pt-20 pb-24 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-slate-500 text-xs">
                &copy; {new Date().getFullYear()} KosMate Technologies. All rights reserved.
              </p>
            </div>
          </footer>
          
          {/* Ini adalah Floating Bottom Nav Bar yang baru */}
          <BottomNavBar pathname={pathname} navigate={navigate} scrollToAbout={scrollToAbout} />

        </div>
      } />

      <Route path="/explore" element={<Explore navigate={navigate} pathname={pathname} scrollToAbout={scrollToAbout} />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default App;