import { useState, useEffect } from 'react';
import './App.css';

const Icon = ({ paths, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths}</svg>
);
const MailIcon      = () => <Icon paths={<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>} />;
const PhoneIcon     = () => <Icon paths={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>} />;
const PinIcon       = ({ size = 18 }) => <Icon size={size} paths={<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>} />;
const ClockIcon     = () => <Icon paths={<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>} />;
const ArrowIcon     = () => <Icon paths={<><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>} />;
const MoonIcon      = () => <Icon paths={<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>} />;
const SunIcon       = () => <Icon paths={<><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>} />;
const PhoneSmIcon   = () => <Icon size={13} paths={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>} />;
const TeamIcon      = () => <Icon size={14} paths={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>} />;
const PersonIcon    = () => <Icon size={14} paths={<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>} />;
const BoxIcon       = () => <Icon size={14} paths={<><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>} />;
const InstagramIcon = () => <Icon size={16} paths={<><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>} />;
const TwitterIcon   = () => <Icon size={16} paths={<><path d="M4 4l16 16M4 20 20 4"/></>} />;
const FacebookIcon  = () => <Icon size={16} paths={<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>} />;
const LinkedInIcon  = () => <Icon size={16} paths={<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>} />;
const YouTubeIcon   = () => <Icon size={16} paths={<><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></>} />;

const BulbIcon      = () => <Icon size={24} paths={<><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></>} />;
const HandshakeIcon = () => <Icon size={24} paths={<path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>} />;
const CompeteIcon   = () => <Icon size={24} paths={<><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="18" width="12" height="4"/></>} />;
const LockIcon      = () => <Icon size={26} paths={<><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1.5"/></>} />;
const TerminalIcon  = () => <Icon size={26} paths={<><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></>} />;
const BrainIcon     = () => <Icon size={26} paths={<><path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12h-4V9.5A4 4 0 0 1 8 6a4 4 0 0 1 4-4z"/><path d="M10 12v2a2 2 0 0 0 4 0v-2"/><path d="M8 21h8"/><path d="M12 17v4"/></>} />;
const LayersIcon    = () => <Icon size={26} paths={<><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>} />;
const CrosshairIcon = () => <Icon size={26} paths={<><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></>} />;
const VRIcon        = () => <Icon size={26} paths={<><path d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4.5l-1.5 2-1.5-2H6a2 2 0 0 1-2-2V8z"/><circle cx="8.5" cy="12" r="2"/><circle cx="15.5" cy="12" r="2"/><path d="M10.5 12h3"/></>} />;

const TECH_EVENTS = [
  { id:'ai-escape', color:'cyan', icon:<LockIcon />, title:'AI Escape', type:'Individual', venue:'103CM', desc:'Solve AI-based puzzles and challenges to escape virtual stages using logic and ML concepts.', fullDesc:'Work through a series of AI-themed puzzles and logical challenges set within an immersive virtual escape room. Each stage tests your understanding of machine learning concepts, algorithmic thinking, and problem-solving under pressure. The fastest and most accurate solver wins.', requirements:'Laptop, problem-solving skills, basic ML knowledge', coords:[{name:'B. Akhilasri',roll:'22B81A6668',phone:'7032668444'},{name:'S. Sai Pranavi Reddy',roll:'22B81A66A5',phone:'93946 71056'}] },
  { id:'ai-prompt', color:'pink', icon:<TerminalIcon />, title:'AI Prompt Engineering', type:'Individual', venue:'204CB', desc:'Craft effective prompts to generate the best AI outputs for given tasks using ChatGPT, Gemini, and more.', fullDesc:'Master the art of prompt engineering across multiple AI platforms. Participants are given specific tasks and must craft the most effective prompts to achieve the desired output. Judged on accuracy, creativity, and efficiency of prompt design.', requirements:'Laptop with internet access, AI platform accounts', coords:[{name:'Goshika Vishnu Vardhan',roll:'22B81A66C6',phone:'9182836746'},{name:'G Ronith Chandra',roll:'22B81A66A0',phone:'73862 45945'}] },
  { id:'ndli-quiz', color:'yellow', icon:<BrainIcon />, title:'NDLI Quiz', type:'Team', venue:'110CB (Lab)', desc:'Teams build a small AI-based solution or prototype within three hours for a given problem statement.', fullDesc:'A fast-paced hackathon-style event where teams race to build a working AI prototype for a real-world problem statement revealed at the start. Judged on innovation, implementation quality, and presentation.', requirements:'Laptop, development tools, team of 2–3', coords:[{name:'Chinmayi Bangaru',roll:'22B81A6675',phone:'6302925318'},{name:'B Deepak Kumar',roll:'22B81A6676',phone:'75693 91577'}] },
];

const NONTECH_EVENTS = [
  { id:'build-battle', color:'cyan', icon:<LayersIcon />, title:'Build Battle', type:'Team of 3–6', venue:'213CM', desc:'Teams (3–6) build a given structure within a time limit using provided materials. Best design and fastest build wins.', fullDesc:'Teams of 3–6 are given a structure to build within a time limit using provided materials. The best design combined with the fastest build time wins. Creativity, speed, and teamwork are the keys to victory.', requirements:'Building blocks, tables, scoreboard, cardboard boxes, blindfolds', coords:[{name:'Manideep Sai',roll:'23B81A7323',phone:'7901237872'},{name:'Yashmmith Sai',roll:'23B81A7364',phone:'9440546373'}] },
  { id:'dodge-dark', color:'purple', icon:<CrosshairIcon />, title:'Dodge in the Dark', type:'Team', venue:'226CM', desc:'Dodgeball played in a dark room using glow-in-the-dark balls. An electrifying twist on a classic game.', fullDesc:'Dodgeball with a thrilling twist — the entire game is played in a pitch-dark room using glow-in-the-dark balls. Dodge, duck, and dive your way to victory in this pulse-pounding team event.', requirements:'Smiley balls, glow paint, black chart papers', coords:[{name:'Sai Shyam Sundar',roll:'22B81A66A8',phone:'9154273760'},{name:'Alankrutha Reddy',roll:'23B81A6668',phone:'7842120706'}] },
  { id:'vr-valley', color:'rose', icon:<VRIcon />, title:'VR Valley', type:'Individual', venue:'212CM', desc:'VR gaming and simulation experience for participants. Immerse yourself in virtual worlds and compete for glory.', fullDesc:'Step into the future with VR gaming and simulation experiences. Participants get to immerse themselves in cutting-edge virtual environments, compete in VR challenges, and experience the next frontier of technology firsthand.', requirements:'VR setup rental, VR games', coords:[{name:'Tanush Kumar',roll:'23B81A66B9',phone:'7032082075'},{name:'N Deepika',roll:'23B81A05HQ',phone:'6301986304'}] },
];

const CONVENORS = [
  { name:'Dr. H.N. Lakshmi',  role:'Assoc. Dean, ET',           photo:'/dr-lakshmi.jpg' },
  { name:'Dr. R. Usha Rani',  role:'Prof & Head CSE (AI&ML)',   photo:'/dr-usha-rani.jpg' },
];

const FACULTY_ADVISORS = [
  { name:'Kandle Navaneetha',       role:'Assistant Professor',          photo:'/navaneetha.jpg' },
  { name:'Dr. M. Surya Bhupal Rao', role:'Associate Professor',          photo:'/suryabhopal.jpg' },
  { name:'Dr. Y. Alekya Rani',      role:'Associate Professor, CSE-AI&ML', photo:'/alekhya.jpg' },
  { name:'Farhana Bano',            role:'Sr. Assistant Professor',      photo:'/farhana-bano.jpg' },
];

const ORGANIZERS = [
  { name:'T. Rohan Reddy',         role:'President',      photo:'/rohan-reddy.jpg',    grad:'linear-gradient(135deg,#00f5c8,#7ef542)' },
  { name:'Manikanta Paka',         role:'Vice President',  photo:'/manikanta-paka.jpg', grad:'linear-gradient(135deg,#ff4d6d,#fb923c)' },
  { name:'Kamalla Varsha',         role:'Secretary',       photo:'/kamalla-varsha.jpg', grad:'linear-gradient(135deg,#a78bfa,#60a5fa)' },
  { name:'CH. Sri Harsha Vardhan', role:'Treasurer',       photo:'/sri-harsha.jpg',     grad:'linear-gradient(135deg,#ffd60a,#ff9800)' },
];

function useCountdown(target) {
  const [time, setTime] = useState({days:'00',hours:'00',mins:'00',secs:'00'});
  useEffect(() => {
    const tick = () => {
      const diff = new Date(target) - new Date();
      if (diff <= 0) return;
      setTime({
        days: String(Math.floor(diff/86400000)).padStart(2,'0'),
        hours: String(Math.floor((diff%86400000)/3600000)).padStart(2,'0'),
        mins: String(Math.floor((diff%3600000)/60000)).padStart(2,'0'),
        secs: String(Math.floor((diff%60000)/1000)).padStart(2,'0'),
      });
    };
    tick(); const id = setInterval(tick,1000); return () => clearInterval(id);
  }, [target]);
  return time;
}

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, {threshold: 0.1});
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}



function Modal({ event, onClose }) {
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', h); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="modal-icon">{event.icon}</div>
            <div>
              <div className="modal-title">{event.title}</div>
              <div className="modal-venue"><PinIcon size={16}/> Venue: {event.venue}</div>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <p className="modal-desc">{event.fullDesc}</p>
          <div className="modal-requirements">
            <h5><BoxIcon /> Requirements</h5>
            <p>{event.requirements}</p>
          </div>
          <div className="modal-coordinators">
            <h5><PersonIcon /> Student Coordinators</h5>
            <div className="coord-grid">
              {event.coords.map((c,i) => (
                <div key={i} className="coord-card">
                  <div className="coord-name">{c.name}</div>
                  <div className="coord-roll">{c.roll}</div>
                  <div className="coord-phone"><PhoneSmIcon/> {c.phone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-outline" onClick={onClose}>Close</button>
          <button className="btn-primary"><ArrowIcon/> Register Now</button>
        </div>
      </div>
    </div>
  );
}

function EventCard({ event, onClick }) {
  return (
    <div className={`event-card ec-${event.color}`} onClick={onClick}>
      <div className="event-card-icon">{event.icon}</div>
      <h3 className="event-card-title">{event.title}</h3>
      <p className="event-card-desc">{event.desc}</p>
      <div className="event-card-meta">
        <span className="meta-tag team">{event.type.startsWith('Team') ? <TeamIcon/> : <PersonIcon/>} {event.type}</span>
        <span className="meta-tag"><PinIcon size={14}/> {event.venue}</span>
      </div>
      <button className="btn-card">View Details →</button>
    </div>
  );
}

function AboutCards() {
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const cards = [
    {icon:<BulbIcon/>, title:'Innovate', sub:'Push the boundaries of technology and creativity'},
    {icon:<HandshakeIcon/>, title:'Collaborate', sub:'Connect with 5000+ students from across India'},
    {icon:<CompeteIcon/>, title:'Compete', sub:'Win from a ₹10L+ prize pool across 25+ events'},
  ];
  return (
    <div className="about-card-stack" onMouseLeave={() => !isMobile && setHovered(null)}>
      {cards.map((c, i) => (
        <div key={i} className={`acard acard-${i+1}`}
          style={isMobile ? {} : {
            filter: hovered !== null && hovered !== i ? 'blur(2.5px) brightness(0.45)' : 'none',
            transform: hovered === i ? 'scale(1.07) translateY(-6px)' : hovered !== null ? 'scale(0.96)' : '',
            rotate: hovered === i ? '0deg' : '',
            zIndex: hovered === i ? 10 : '',
            boxShadow: hovered === i ? '0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px var(--accent)' : '',
          }}
          onMouseEnter={() => !isMobile && setHovered(i)}>
          <div className="acard-icon">{c.icon}</div>
          <div className="acard-title">{c.title}</div>
          <div className="acard-sub">{c.sub}</div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [modal, setModal] = useState(null);
  const time = useCountdown('2026-03-13T09:00:00+05:30');
  useReveal();

  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);

  useEffect(() => {
    const container = document.getElementById('particles');
    if (!container || container.children.length > 0) return;
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 4 + 2;
      p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;animation-delay:${Math.random()*15}s;animation-duration:${10+Math.random()*15}s;opacity:${Math.random()*0.5+0.1};background:${['#00f5c8','#ff4d6d','#ffd60a','#a78bfa'][Math.floor(Math.random()*4)]};`;
      container.appendChild(p);
    }
  }, []);

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth'});

  return (
    <>
      {/* HERO */}
      <section id="hero">
        <div className="hero-canvas">
          <div className="hero-grid"/>
          <div className="hero-glow-1"/><div className="hero-glow-2"/><div className="hero-glow-3"/>
          <div id="particles"/>
        </div>
        <div className="hero-content">
          <div className="hero-badge"><span className="dot"/>• MARCH 13–15, 2026 · HYDERABAD</div>
          <h1 className="hero-title">
            <span className="line1">artha</span>
            <span className="line2">AI</span>
            <span className="line1">da '26</span>
          </h1>
          <p className="hero-tagline">Where Intelligence Meets Innovation — The Ultimate College Tech Fest of the Decade</p>
          <div className="countdown-wrap">
            {[['DAYS',time.days],['HOURS',time.hours],['MINS',time.mins],['SECS',time.secs]].map(([l,v]) => (
              <div key={l} className="cd-unit"><span className="cd-num">{v}</span><span className="cd-label">{l}</span></div>
            ))}
          </div>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => scrollTo('contact')}><ArrowIcon/> Register Now</button>
            <button className="btn-outline" onClick={() => scrollTo('tech-events')}>Explore Events</button>
          </div>
        </div>
        <div className="scroll-indicator">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
          SCROLL
        </div>
        <button className="theme-toggle" onClick={() => setTheme(t => t==='dark'?'light':'dark')}>
          {theme==='dark' ? <MoonIcon/> : <SunIcon/>}
        </button>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="about-header reveal">
            <p className="section-tag">// About</p>
            <div className="divider"/>
          </div>
          <div className="about-inner">
            <div className="about-text reveal">
              <div className="about-divider"/>
              <p>arthaAIda is the flagship annual techno-cultural festival of CVR College of Engineering, Hyderabad. A convergence of brilliant minds, cutting-edge ideas, and boundless creativity — where every participant gets a platform to shine.</p>
              <p>From mind-bending hackathons to electrifying talent shows, arthaAIda '26 promises an immersive three-day extravaganza that challenges your intellect, celebrates your talent, and connects you with the brightest students across India.</p>
            </div>
            <div className="about-visual reveal"><AboutCards/></div>
          </div>
        </div>
      </section>

      {/* TECH EVENTS */}
      <section id="tech-events">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-tag">// Technical Events</p>
            <h2 className="section-title">Sharpen Your Skills,<br/>Prove Your Mettle</h2>
            <p className="section-subtitle">Compete in cutting-edge technical challenges designed for the problem-solvers, builders, and innovators of tomorrow.</p>
            <div className="divider"/>
          </div>
          <div className="events-grid reveal">
            {TECH_EVENTS.map(ev => <EventCard key={ev.id} event={ev} onClick={() => setModal(ev)}/>)}
          </div>
        </div>
      </section>

      {/* NON-TECH EVENTS */}
      <section id="nontech-events">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-tag">// Non-Technical Events</p>
            <h2 className="section-title">Unleash Your Creativity,<br/>Light Up the Stage</h2>
            <p className="section-subtitle">Because talent goes beyond code. Express yourself, compete, and celebrate with 5000+ fellow students.</p>
            <div className="divider"/>
          </div>
          <div className="events-grid reveal">
            {NONTECH_EVENTS.map(ev => <EventCard key={ev.id} event={ev} onClick={() => setModal(ev)}/>)}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-tag">// The People Behind the Fest</p>
            <h2 className="section-title">The Minds Behind<br/>arthaAIda '26</h2>
            <p className="section-subtitle">Led by distinguished faculty and driven by passionate student leaders.</p>
            <div className="divider"/>
          </div>

          {/* CONVENORS */}
          <div className="team-block">
            <div className="team-section-heading">
              <div className="team-section-line"/>
              <span>Convenors</span>
              <div className="team-section-line"/>
            </div>
            <div className="convenor-grid">
              {CONVENORS.map((c,i) => (
                <div key={i} className="person-card">
                  <div className="person-photo-area">
                    <img src={c.photo} alt={c.name}
                      onError={e=>{ e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }}
                    />
                    <div className="person-photo-fallback" style={{display:'none'}}>
                      {c.name.split(' ').map(w=>w[0]).slice(0,2).join('')}
                    </div>
                    <div className="person-role-badge">Convenor</div>
                  </div>
                  <div className="person-info">
                    <div className="person-name">{c.name}</div>
                    <div className="person-dept">{c.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FACULTY ADVISORS */}
          <div className="team-block">
            <div className="team-section-heading">
              <div className="team-section-line"/>
              <span>Faculty Advisors</span>
              <div className="team-section-line"/>
            </div>
            <div className="organizer-grid">
              {FACULTY_ADVISORS.map((f,i) => (
                <div key={i} className="person-card">
                  <div className="person-photo-area">
                    <img src={f.photo} alt={f.name}
                      onError={e=>{ e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }}
                    />
                    <div className="person-photo-fallback" style={{display:'none'}}>
                      {f.name.split(' ').map(w=>w[0]).slice(0,2).join('')}
                    </div>
                    <div className="person-role-badge">Faculty</div>
                  </div>
                  <div className="person-info">
                    <div className="person-name">{f.name}</div>
                    <div className="person-dept">{f.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ORGANIZERS */}
          <div className="team-block">
            <div className="team-section-heading">
              <div className="team-section-line"/>
              <span>Student Organizers</span>
              <div className="team-section-line"/>
            </div>
            <div className="organizer-grid">
              {ORGANIZERS.map((o,i) => (
                <div key={i} className="person-card">
                  <div className="person-photo-area">
                    <img src={o.photo} alt={o.name}
                      onError={e=>{ e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }}
                    />
                    <div className="person-photo-fallback" style={{display:'none',background:o.grad}}>
                      {o.name.split(' ').map(w=>w[0]).slice(0,2).join('')}
                    </div>
                    <div className="person-role-badge">{o.role}</div>
                  </div>
                  <div className="person-info">
                    <div className="person-name">{o.name}</div>
                    <div className="person-dept">{o.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-tag">// Contact & Registration</p>
            <h2 className="section-title">Get In Touch,<br/>Join the Journey</h2>
            <p className="section-subtitle">Have questions? Reach out to us and our team will respond within 24 hours.</p>
            <div className="divider"/>
          </div>
          <div className="contact-inner reveal">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              {[
                {icon:<MailIcon/>, title:'Email Us', content:<><a href="mailto:arthaaida2@gmail.com">arthaaida2@gmail.com</a></>},
                {icon:<PhoneIcon/>, title:'Call Us', content:<><p>Manikanta Paka — +91 97014 38139</p><p>T. Rohan Reddy — +91 78935 89907</p></>},
                {icon:<PinIcon/>, title:'Venue', content:<p>CVR College of Engineering<br/>Vastunagar, Mangalpalli (V), Ibrahimpatnam (M)<br/>Rangareddy District, Telangana — 501 510</p>},
                {icon:<ClockIcon/>, title:'Dates', content:<p>March 13–15, 2026<br/>Registration Deadline: March 10, 2026</p>},
              ].map((item,i) => (
                <div key={i} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-detail"><h4>{item.title}</h4>{item.content}</div>
                </div>
              ))}

            </div>
            <div className="map-container">
              <div className="map-bg-img"/>
              <div className="map-content">
                <div className="map-pin-icon"><PinIcon size={44}/></div>
                <div className="map-text">
                  <strong>CVR College of Engineering</strong><br/>
                  Vastunagar, Mangalpalli (V), Ibrahimpatnam (M)<br/>
                  Rangareddy District, Telangana — 501 510
                </div>
                <a href="https://maps.google.com/?q=CVR+College+of+Engineering+Ibrahimpatnam" target="_blank" rel="noreferrer" className="map-link">Open in Google Maps →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">artha<span>AI</span>da '26</div>
              <p>The annual techno-cultural festival of CVR College of Engineering, Hyderabad. Where intelligence meets innovation — every year.</p>
            </div>
            {[
              {title:'Events', links:[['#tech-events','Technical'],['#nontech-events','Non-Technical']]},
              {title:'Info',   links:[['#about','About'],['#team','Team'],['#contact','Contact']]},

            ].map(col => (
              <div key={col.title} className="footer-col">
                <h4>{col.title}</h4>
                <ul>{col.links.map(([href,label]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2026 <span>arthaAIda</span> · CVR College of Engineering, Hyderabad. All rights reserved.</p>

          </div>
        </div>
      </footer>

      {modal && <Modal event={modal} onClose={() => setModal(null)}/>}
    </>
  );
}
