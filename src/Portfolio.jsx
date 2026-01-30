import React, { useState, useEffect } from 'react';
import { Camera, Mail, Phone, MapPin, Briefcase, Code, Palette, Award, ChevronDown, ExternalLink, Github, Linkedin } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "We Are Hiring Campaign",
      category: "Social Media",
      image: "/mnt/user-data/uploads/Red_and_White_Professional_We_Are_Hiring_Instagram_Post.png",
      description: "Bold recruitment campaign design for customer service position"
    },
    {
      id: 2,
      title: "Men's Perfume Collection",
      category: "Product Design",
      image: "/mnt/user-data/uploads/Black_and_White_Simple_Minimalist_Perfume_Product_Promotion_Facebook_Post.png",
      description: "Minimalist luxury perfume promotional design"
    },
    {
      id: 3,
      title: "Scent of Elegance",
      category: "Branding",
      image: "/mnt/user-data/uploads/Gold_and_Black_Elegant_Perfume_Instagram_Post.png",
      description: "Premium perfume advertisement with elegant aesthetics"
    },
    {
      id: 4,
      title: "Land Plot Sale Promotion",
      category: "Real Estate",
      image: "/mnt/user-data/uploads/Green_and_Yellow_Modern_Land_Plot_Sale_Promotion_Instagram_Post.png",
      description: "Modern real estate marketing design"
    },
    {
      id: 5,
      title: "Co-Working Space Promo",
      category: "Commercial",
      image: "/mnt/user-data/uploads/Green_and_White_Creative_Minimalist_Co-Working_Space_Office_For_Rent_Promotion_Instagram_Post.png",
      description: "Creative minimal office space advertisement"
    },
    {
      id: 6,
      title: "New Year Sale Banner",
      category: "E-commerce",
      image: "/mnt/user-data/uploads/Black_White_and_Gold_Modern_New_Year_Sale_Banner_Landscape.png",
      description: "Luxury promotional banner for seasonal sale"
    },
    {
      id: 7,
      title: "Modern Office Space",
      category: "Real Estate",
      image: "/mnt/user-data/uploads/Blue_Modern_Coworking_Office_Space_Instagram_Post.png",
      description: "Professional office rental promotion design"
    }
  ];

  const skills = {
    technical: ["HTML", "CSS", "JavaScript", "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "IT Support", "Network Management"],
    soft: ["Leadership", "Team Management", "Problem-Solving", "Customer Relations", "Sales & Negotiation", "Communication"]
  };

  const experience = [
    {
      role: "IT Officer / IT Support Engineer",
      company: "Suenos International Marketing",
      period: "Apr 2023 – Present",
      location: "Karachi, PK",
      highlights: [
        "Provided end-to-end IT support resolving hardware, software, and connectivity issues",
        "Managed network infrastructure including routers, switches, LAN/WAN connections",
        "Maintained IT inventory and technical documentation for efficient tracking"
      ]
    },
    {
      role: "Graphic Designer & Social Media Handler",
      company: "Suenos International Marketing",
      period: "Jul 2022 – Present",
      location: "Karachi, PK",
      highlights: [
        "Creating engaging social media graphics and promotional content",
        "Managing brand visual identity across digital platforms",
        "Designing marketing materials for various campaigns"
      ]
    },
    {
      role: "Confirmation Manager",
      company: "Suenos International Marketing",
      period: "Dec 2022 – Jul 2023",
      location: "Karachi, PK",
      highlights: [
        "Managed verification and confirmation processes ensuring accuracy and compliance",
        "Coordinated with internal teams to resolve discrepancies",
        "Trained team members to maintain consistent performance"
      ]
    },
    {
      role: "Team Supervisor",
      company: "Suenos International Marketing",
      period: "Jul 2020 – Dec 2020",
      location: "Karachi, PK",
      highlights: [
        "Supervised customer service representatives with focus on performance",
        "Monitored daily targets, call quality, and productivity",
        "Provided coaching and performance reviews"
      ]
    }
  ];

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        .font-display {
          font-family: 'Syne', sans-serif;
        }

        .font-mono {
          font-family: 'Space Mono', monospace;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .noise-bg {
          position: relative;
          overflow: hidden;
        }

        .noise-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
        }

        .gradient-text {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #dc2626 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .work-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .work-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(220, 38, 38, 0.1));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .work-card:hover::before {
          opacity: 1;
        }

        .work-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(251, 191, 36, 0.2);
        }

        .work-card img {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .work-card:hover img {
          transform: scale(1.1);
        }

        .section-title {
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60%;
          height: 4px;
          background: linear-gradient(90deg, #fbbf24, #dc2626);
        }

        .skill-tag {
          transition: all 0.3s ease;
          border: 1px solid rgba(251, 191, 36, 0.3);
        }

        .skill-tag:hover {
          transform: translateY(-2px);
          border-color: #fbbf24;
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #fbbf24;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .scroll-indicator {
          animation: float 2s ease-in-out infinite;
        }

        .backdrop-blur-custom {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-custom shadow-lg shadow-amber-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-display text-2xl font-bold gradient-text">MI</div>
          <div className="flex gap-8 font-mono text-sm">
            <a href="#about" className="nav-link hover:text-amber-400">About</a>
            <a href="#work" className="nav-link hover:text-amber-400">Work</a>
            <a href="#experience" className="nav-link hover:text-amber-400">Experience</a>
            <a href="#contact" className="nav-link hover:text-amber-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative noise-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-red-500/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float delay-300"></div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fadeInUp opacity-0">
            <div className="inline-block px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/30 mb-6 font-mono text-sm text-amber-400">
              Available for Freelance
            </div>
          </div>
          
          <h1 className="font-display text-7xl md:text-9xl font-black mb-6 leading-none animate-fadeInUp opacity-0 delay-100">
            <span className="gradient-text">Muhammad</span>
            <br />
            <span className="text-white">Ibrahim</span>
          </h1>
          
          <p className="font-mono text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto animate-fadeInUp opacity-0 delay-200">
            IT Officer × Graphic Designer × Team Leader
          </p>
          
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-12 animate-fadeInUp opacity-0 delay-300">
            Crafting visual experiences and managing tech solutions with 3+ years of expertise in customer relations, graphic design, and IT infrastructure.
          </p>
          
          <div className="flex gap-4 justify-center animate-fadeInUp opacity-0 delay-400">
            <a href="#work" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-red-500 text-white font-mono font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 bg-zinc-900 text-white font-mono font-bold rounded-lg border border-zinc-800 hover:border-amber-500 transition-all duration-300 hover:scale-105">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator">
          <ChevronDown className="w-8 h-8 text-amber-400 animate-glow" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-zinc-900 noise-bg">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl font-black mb-16 section-title gradient-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-slideInLeft opacity-0">
              <p className="text-lg text-zinc-400 leading-relaxed">
                I'm a multidisciplinary professional based in Karachi, Pakistan, combining technical expertise with creative design skills. Currently pursuing a Bachelor's in Computer Science while working as an IT Officer and Graphic Designer.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                With a Diploma in Media Science from Arena Multimedia, I'm proficient in Adobe Creative Suite and bring a unique blend of technical problem-solving and creative innovation to every project.
              </p>
              
              <div className="flex gap-4 pt-4">
                <a href="mailto:Ibrahimsaqib445@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-zinc-800 rounded-lg hover:bg-amber-500/20 hover:border-amber-500 border border-zinc-700 transition-all duration-300">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span className="font-mono text-sm">Email Me</span>
                </a>
                <a href="tel:+923171033194" className="flex items-center gap-2 px-6 py-3 bg-zinc-800 rounded-lg hover:bg-amber-500/20 hover:border-amber-500 border border-zinc-700 transition-all duration-300">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="font-mono text-sm">Call Me</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-8 animate-slideInRight opacity-0">
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-amber-400 flex items-center gap-2">
                  <Code className="w-6 h-6" />
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <span key={index} className="skill-tag px-4 py-2 bg-zinc-800 rounded-full font-mono text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-amber-400 flex items-center gap-2">
                  <Briefcase className="w-6 h-6" />
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <span key={index} className="skill-tag px-4 py-2 bg-zinc-800 rounded-full font-mono text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-500/10 to-red-500/10 p-6 rounded-xl border border-amber-500/20">
                <h3 className="font-display text-xl font-bold mb-2 text-amber-400">Education</h3>
                <p className="text-zinc-300 font-mono text-sm mb-1">Bachelor's in Computer Science</p>
                <p className="text-zinc-500 text-sm">Federal Urdu University • GPA: 3.1 • 4th Semester</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 bg-zinc-950 noise-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl font-black mb-16 section-title gradient-text">
            Featured Work
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="work-card bg-zinc-900 rounded-xl overflow-hidden cursor-pointer opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedWork(project)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="font-mono text-xs text-amber-400 mb-2">{project.category}</div>
                  <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-zinc-500 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-zinc-900 noise-bg">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl font-black mb-16 section-title gradient-text">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div 
                key={index}
                className="bg-zinc-950 p-8 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-1">{job.role}</h3>
                    <p className="text-amber-400 font-mono">{job.company}</p>
                  </div>
                  <div className="text-zinc-500 font-mono text-sm mt-2 md:mt-0 md:text-right">
                    <div>{job.period}</div>
                    <div className="flex items-center gap-1 justify-end mt-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-zinc-400">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-zinc-950 noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-red-500/5"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-5xl md:text-6xl font-black mb-8 gradient-text">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind? Need IT support or creative design work? Let's discuss how we can bring your vision to life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300">
              <Mail className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <h3 className="font-display font-bold mb-2">Email</h3>
              <a href="mailto:Ibrahimsaqib445@gmail.com" className="text-zinc-400 hover:text-amber-400 text-sm break-all">
                Ibrahimsaqib445@gmail.com
              </a>
            </div>
            
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300">
              <Phone className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <h3 className="font-display font-bold mb-2">Phone</h3>
              <a href="tel:+923171033194" className="text-zinc-400 hover:text-amber-400 text-sm">
                +92 317 1033194
              </a>
            </div>
            
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300">
              <MapPin className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <h3 className="font-display font-bold mb-2">Location</h3>
              <p className="text-zinc-400 text-sm">Karachi, Pakistan</p>
            </div>
          </div>
          
          <a 
            href="mailto:Ibrahimsaqib445@gmail.com" 
            className="inline-block px-12 py-4 bg-gradient-to-r from-amber-500 to-red-500 text-white font-mono font-bold rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-zinc-500 font-mono text-sm">
            © 2026 Muhammad Ibrahim. Designed & Built with passion.
          </p>
          <p className="text-zinc-600 text-xs mt-2">
            IT Officer × Graphic Designer × Problem Solver
          </p>
        </div>
      </footer>

      {/* Work Detail Modal */}
      {selectedWork && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedWork(null)}
        >
          <div 
            className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedWork.image} 
                alt={selectedWork.title}
                className="w-full h-auto"
              />
              <button 
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-zinc-950/80 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <div className="font-mono text-sm text-amber-400 mb-2">{selectedWork.category}</div>
              <h3 className="font-display text-3xl font-bold mb-4">{selectedWork.title}</h3>
              <p className="text-zinc-400">{selectedWork.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}