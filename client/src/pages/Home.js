import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../data/constants';
import { useTheme } from '../context/ThemeContext';
import { 
  Shield, Lock, Cpu, Server, Settings, FileCheck, ArrowRight, 
  BarChart3, Layers, Sparkles, Upload, Share2, Eye, Activity,
  Zap, Award, Users, Building2, GraduationCap, Scale, Heart, Rocket,
  MessageSquare, Search, FileText, KeyRound, Database, Cloud,
  Check, X, ChevronDown, Mail,
  Fingerprint, ShieldCheck, Bell, Clock, RefreshCw, Sun, Moon
} from 'lucide-react';
import '../styles/apple-auth.css';
import './Home.css';

const fade = { 
  initial: { opacity: 0, y: 24 }, 
  whileInView: { opacity: 1, y: 0 }, 
  viewport: { once: true, margin: '-80px' }, 
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
};

const BgEnvironment = ({ mouseX, mouseY }) => (
  <>
    <div className="ap-parallax-orb" style={{ left: mouseX, top: mouseY }} />
    <div className="ap-grain" />
    <div className="ap-env">
      <div className="ap-aurora">
        <div className="ap-ab" />
        <div className="ap-ab" />
        <div className="ap-ab" />
        <div className="ap-ab" />
      </div>
      <div className="ap-beams">
        <div className="ap-beam" />
        <div className="ap-beam" />
        <div className="ap-beam" />
      </div>
      <div className="ap-mesh">
        <div className="ap-mesh-grid" />
        <div className="ap-mesh-dots" />
      </div>
      <div className="ap-orbits">
        <div className="ap-orbit"><div className="ap-orbit-dot" /></div>
        <div className="ap-orbit"><div className="ap-orbit-dot" /></div>
        <div className="ap-orbit"><div className="ap-orbit-dot" /></div>
      </div>
      <div className="ap-shapes">
        <div className="ap-shape"><svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" fill="none" stroke="rgba(0,113,227,0.3)" strokeWidth="1" /></svg></div>
        <div className="ap-shape"><svg viewBox="0 0 40 40"><polygon points="20,2 38,20 20,38 2,20" fill="none" stroke="rgba(175,82,222,0.3)" strokeWidth="1" /></svg></div>
        <div className="ap-shape"><svg viewBox="0 0 80 80"><polygon points="40,4 74,22 74,58 40,76 6,58 6,22" fill="none" stroke="rgba(255,55,95,0.25)" strokeWidth="1" /></svg></div>
        <div className="ap-shape"><svg viewBox="0 0 50 50"><rect x="4" y="4" width="42" height="42" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="1" transform="rotate(45 25 25)" /></svg></div>
        <div className="ap-shape"><svg viewBox="0 0 35 35"><circle cx="17.5" cy="17.5" r="15" fill="none" stroke="rgba(0,113,227,0.25)" strokeWidth="1" /></svg></div>
        <div className="ap-shape"><svg viewBox="0 0 45 45"><polygon points="22.5,2 43,22.5 22.5,43 2,22.5" fill="none" stroke="rgba(175,82,222,0.25)" strokeWidth="1" /></svg></div>
      </div>
      <div className="ap-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="ap-p"
            style={{
              left: `${(i * 13 + 7) % 100}%`,
              animationDuration: `${8 + (i % 10)}s`,
              animationDelay: `${(i * 1.1) % 12}s`,
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
            }}
          />
        ))}
      </div>
      <div className="ap-sparkles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="ap-sparkle"
            style={{
              left: `${(i * 17 + 11) % 100}%`,
              top: `${(i * 23 + 9) % 100}%`,
              animationDelay: `${(i * 0.4) % 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  </>
);

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [m, setM] = useState({ x: 0, y: 0 });
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const fn = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
      setM({ x: (e.clientX / window.innerWidth - 0.5) * 2, y: (e.clientY / window.innerHeight - 0.5) * 2 });
    };
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  const faqs = [
    { q: 'How secure is TrustShare really?', a: 'Every file is encrypted with AES-256-GCM before it touches storage. Each file gets its own unique key wrapped by a master key. Even our own database administrators cannot read your files.' },
    { q: 'What happens if I share a link and want to revoke it?', a: 'Every share link can be instantly revoked. Once revoked, the link returns a 410 Gone error and the recipient loses all access — even if they have the URL saved.' },
    { q: 'Can I control who downloads vs. just views my files?', a: 'Yes. Every share link supports View Only or Download permission. You can toggle this in real-time without recreating the link.' },
    { q: 'Is my data used to train AI models?', a: 'Never. Our AI features (summaries, content search, assistant) process your data ephemerally in memory. Nothing is stored, logged, or used for training.' },
    { q: 'What compliance standards do you meet?', a: 'TrustShare is SOC 2 Type II compliant with full audit trails, encryption at rest, and role-based access control ready for enterprise governance requirements.' },
    { q: 'How does multi-factor authentication work?', a: 'MFA sends a 6-digit OTP to your email on every login. Even if someone steals your password, they cannot access your account without physical access to your inbox.' },
  ];

  return (
    <div className="ap">
      <BgEnvironment mouseX={mouseX} mouseY={mouseY} />

      {/* ═══ PREMIUM FLOATING PILL NAVIGATION ═══ */}
      <nav className="ap-nav">
        <Link to="/" className="ap-logo">
          <img src="/logo.png" alt="" onError={e => e.target.style.display='none'} />
          TrustShare
        </Link>
        <div className="ap-nav-r">
          <a href="#features" className="ap-nav-a">Features</a>
          <a href="#security" className="ap-nav-a">Security</a>
          <a href="#usecases" className="ap-nav-a">Use Cases</a>
          <Link to={ROUTES.LOGIN} className="ap-nav-a">Sign In</Link>
          <Link to={ROUTES.SIGNUP} className="ap-nav-a ap-nav-cta">Get Started</Link>
          <div className="ap-nav-divider" />
          <button 
            type="button" 
            className="ap-theme-btn" 
            onClick={toggleTheme} 
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </nav>

      {/* ═══ SECTION 1: HERO ═══ */}
      <section className="ap-hero">
        <div className="ap-hero-inner">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <span className="ap-eyebrow"><Sparkles size={11} /> Introducing TrustShare</span>
          </motion.div>

          <div className="ap-shield-wrap">
            <motion.div
              className="ap-shield-3d"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16,1,0.3,1] }}
              style={{ transform: `rotateY(${m.x * 20}deg) rotateX(${-m.y * 15}deg)` }}
            >
              <div className="ap-shield-glow" />
              <div className="ap-shield-ring" />
              <div className="ap-shield-ring" />
              <div className="ap-shield-ring" />
              <svg viewBox="0 0 120 140" fill="none" style={{ width: '100%', height: '100%', position: 'relative', zIndex: 2 }}>
                <defs>
                  <linearGradient id="hsg" x1="0" y1="0" x2="120" y2="140">
                    <stop offset="0%" stopColor="#0071e3" />
                    <stop offset="100%" stopColor="#5e5ce6" />
                  </linearGradient>
                </defs>
                <path d="M60 5 L110 25 L110 70 C110 105 85 130 60 138 C35 130 10 105 10 70 L10 25 Z" fill="url(#hsg)" opacity="0.95" />
                <motion.path d="M45 70 L55 80 L78 55" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 0.8 }} />
              </svg>
            </motion.div>
          </div>

          <motion.h1 className="ap-h1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
            Security that<br /><span className="ap-serif">just works.</span>
          </motion.h1>
          <motion.p className="ap-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}>
            Every file encrypted with AES-256. Every share controlled. Every action logged.<br />Built for teams that refuse to compromise.
          </motion.p>
          <motion.div className="ap-cta-row" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Link to={ROUTES.SIGNUP} className="ap-cta-btn">Get Started Free <ArrowRight size={14} /></Link>
            <Link to={ROUTES.LOGIN} className="ap-cta">Sign in <span className="ap-cta-arrow">›</span></Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 2: PROBLEM/SOLUTION ═══ */}
      <section className="ap-sec ap-sec-light">
        <div className="ap-sec-inner">
          <motion.div {...fade}>
            <div className="ap-sec-eyebrow">The Problem</div>
            <h2 className="ap-sec-h">Sensitive files.<br /><span className="ap-serif">Unsafe channels.</span></h2>
            <p className="ap-sec-p">Every day, organizations share confidential documents over WhatsApp, email, and cloud drives — with no encryption, no access control, and no visibility into who accessed what.</p>
          </motion.div>

          <div className="home-problem-grid">
            {[
              { icon: X, title: 'WhatsApp & Email', desc: 'Zero encryption. Once sent, files live forever on unknown servers.', color: '#ff3b30' },
              { icon: X, title: 'Consumer Cloud Drives', desc: 'Broad permissions. Anyone with a link can share it further.', color: '#ff9500' },
              { icon: X, title: 'USB & Physical Media', desc: 'Lost devices. No audit trail. Compliance nightmare.', color: '#af52de' },
            ].map((p, i) => (
              <motion.div key={i} className="home-problem-card" {...fade} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="home-problem-icon" style={{ background: `${p.color}15`, color: p.color }}>
                  <p.icon size={22} />
                </div>
                <h3 className="home-problem-title">{p.title}</h3>
                <p className="home-problem-desc">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="home-solution-badge" {...fade} transition={{ delay: 0.4 }}>
            <Check size={16} />
            <span>TrustShare solves all three with one zero-trust platform</span>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 3: STATS ═══ */}
      <section className="ap-sec ap-sec-dark">
        <div className="ap-sec-inner">
          <motion.div {...fade}>
            <div className="ap-sec-eyebrow">Trusted at scale</div>
            <h2 className="ap-sec-h">The numbers<br />speak for themselves.</h2>
          </motion.div>
          <div className="ap-stats">
            {[
              { v: '10M+', l: 'Files encrypted' },
              { v: '99.99%', l: 'Uptime SLA' },
              { v: 'AES-256', l: 'Encryption standard' },
              { v: 'SOC 2', l: 'Type II compliant' },
              { v: '50K+', l: 'Teams protected' },
              { v: '<50ms', l: 'Encryption latency' },
            ].map((s, i) => (
              <motion.div key={i} {...fade} transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}>
                <div className="ap-stat-v">{s.v}</div>
                <div className="ap-stat-l">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: CORE FEATURES ═══ */}
      <section className="ap-sec" id="features">
        <div className="ap-sec-inner">
          <motion.div {...fade}>
            <div className="ap-sec-eyebrow">Capabilities</div>
            <h2 className="ap-sec-h">Engineered for<br /><span className="ap-serif">zero trust.</span></h2>
            <p className="ap-sec-p">Every feature built from the ground up with security as the foundation.</p>
          </motion.div>
          <div className="ap-fgrid">
            {[
              { ic: Shield, t: 'Per-File Encryption', p: 'Each file gets its own AES-256-GCM key. Compromise one file, the rest stay secure.', bg: 'linear-gradient(135deg, #0071e3, #5e5ce6)' },
              { ic: Lock, t: 'Smart Access Control', p: 'View-only, download, password, expiry, view limits — all on a single link.', bg: 'linear-gradient(135deg, #af52de, #bf5af2)' },
              { ic: Cpu, t: 'AI-Powered Intelligence', p: 'Summarize documents, search content, and get answers without leaving the app.', bg: 'linear-gradient(135deg, #34c759, #30d158)' },
              { ic: Server, t: 'Immutable Audit Trail', p: 'Every action logged with IP, timestamp, and device. Export for compliance.', bg: 'linear-gradient(135deg, #ff9500, #ff6482)' },
              { ic: FileCheck, t: 'Version Control', p: 'Every version preserved with its own key. Restore any point in time.', bg: 'linear-gradient(135deg, #06b6d4, #0071e3)' },
              { ic: Settings, t: 'Team Governance', p: 'Role-based access, session management, and admin overrides.', bg: 'linear-gradient(135deg, #ff375f, #af52de)' },
            ].map((f, i) => (
              <motion.div key={i} className="ap-fcard" {...fade} transition={{ delay: i * 0.06, duration: 0.5 }}>
                <div className="ap-fcard-ic" style={{ background: f.bg }}><f.ic size={20} /></div>
                <h3 className="ap-fcard-h">{f.t}</h3>
                <p className="ap-fcard-p">{f.p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: AI FEATURES SHOWCASE ═══ */}
      <section className="ap-sec ap-sec-light">
        <div className="ap-sec-inner">
          <motion.div {...fade}>
            <div className="ap-sec-eyebrow">Artificial Intelligence</div>
            <h2 className="ap-sec-h">Intelligence<br /><span className="ap-serif">meets security.</span></h2>
            <p className="ap-sec-p">Two AI-powered features that make working with files faster, smarter, and safer.</p>
          </motion.div>

          <div className="home-ai-grid">
            <motion.div className="home-ai-card home-ai-large" {...fade} transition={{ delay: 0.1 }}>
              <div className="home-ai-badge"><Sparkles size={12} /> AI Feature 1</div>
              <div className="home-ai-icon" style={{ background: 'linear-gradient(135deg, #af52de, #ff375f)' }}>
                <FileText size={28} />
              </div>
              <h3 className="home-ai-h">AI File Summary</h3>
              <p className="home-ai-p">One click reads any document — PDF, Word, spreadsheet, presentation — and generates a structured summary with title, key points, and extracted keywords. All processed ephemerally, never stored.</p>
              <div className="home-ai-demo">
                <div className="home-ai-demo-line" style={{ width: '85%' }} />
                <div className="home-ai-demo-line" style={{ width: '92%' }} />
                <div className="home-ai-demo-line" style={{ width: '78%' }} />
                <div className="home-ai-demo-line" style={{ width: '60%' }} />
              </div>
            </motion.div>

            <motion.div className="home-ai-card home-ai-large" {...fade} transition={{ delay: 0.2 }}>
              <div className="home-ai-badge"><Sparkles size={12} /> AI Feature 2</div>
              <div className="home-ai-icon" style={{ background: 'linear-gradient(135deg, #0071e3, #06b6d4)' }}>
                <MessageSquare size={28} />
              </div>
              <h3 className="home-ai-h">AI Assistant</h3>
              <p className="home-ai-p">A conversational assistant on every page. Ask about your storage, get help with features, or configure it with Groq, Google Gemini, or local Ollama models.</p>
              <div className="home-ai-chat">
                <div className="home-ai-msg home-ai-msg-user">How much storage do I have?</div>
                <div className="home-ai-msg home-ai-msg-bot">You\'ve used 2.3 GB of your 5 GB quota.</div>
              </div>
            </motion.div>

            <motion.div className="home-ai-card" {...fade} transition={{ delay: 0.3 }}>
              <div className="home-ai-icon-small" style={{ background: 'linear-gradient(135deg, #34c759, #30d158)' }}>
                <Search size={20} />
              </div>
              <h3 className="home-ai-h-small">Deep Search</h3>
              <p className="home-ai-p-small">Search inside document contents, not just filenames.</p>
            </motion.div>

            <motion.div className="home-ai-card" {...fade} transition={{ delay: 0.35 }}>
              <div className="home-ai-icon-small" style={{ background: 'linear-gradient(135deg, #ff9500, #ff6482)' }}>
                <Zap size={20} />
              </div>
              <h3 className="home-ai-h-small">Ctrl+K Search</h3>
              <p className="home-ai-p-small">Instant global search across files, folders, and users.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: DASHBOARD MOCKUP ═══ */}
      <section className="ap-sec">
        <div className="ap-sec-inner">
          <motion.div {...fade}>
            <div className="ap-sec-eyebrow">Beautifully built</div>
            <h2 className="ap-sec-h">Powerful. Elegant.<br /><span className="ap-serif">Effortless.</span></h2>
            <p className="ap-sec-p">An interface that feels as good as it looks. Every pixel considered.</p>
          </motion.div>

          <motion.div className="ap-mockup-wrap" {...fade} transition={{ delay: 0.2, duration: 0.9 }}>
            <div className="ap-mockup">
              <div className="ap-mock-bar">
                <div className="ap-mock-dot" style={{ background: '#ff5f57' }} />
                <div className="ap-mock-dot" style={{ background: '#febc2e' }} />
                <div className="ap-mock-dot" style={{ background: '#28c840' }} />
              </div>
              <div className="ap-mock-body">
                <div className="ap-mock-side">
                  <div className="ap-mock-item active"><BarChart3 size={14} /> Dashboard</div>
                  <div className="ap-mock-item"><Layers size={14} /> My Files</div>
                  <div className="ap-mock-item"><Shield size={14} /> Sharing</div>
                  <div className="ap-mock-item"><Activity size={14} /> Activity</div>
                  <div className="ap-mock-item"><Settings size={14} /> Settings</div>
                </div>
                <div className="ap-mock-main">
                  <div className="ap-mock-cards">
                    <div className="ap-mock-stat"><div className="ap-mock-stat-v">24</div><div className="ap-mock-stat-l">Total Files</div></div>
                    <div className="ap-mock-stat"><div className="ap-mock-stat-v">8</div><div className="ap-mock-stat-l">Active Links</div></div>
                    <div className="ap-mock-stat"><div className="ap-mock-stat-v">3</div><div className="ap-mock-stat-l">Direct Shares</div></div>
                  </div>
                  <div className="ap-mock-chart">
                    {[40,65,45,80,55,90,70,85,60,95,75,88].map((h, i) => (
                      <div key={i} className="ap-mock-bar-v" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 7: SECURITY DEEP DIVE ═══ */}
      <section className="ap-sec ap-sec-dark" id="security">
        <div className="ap-sec-inner">
          <motion.div {...fade}>
            <div className="ap-sec-eyebrow">Security Architecture</div>
            <h2 className="ap-sec-h">Zero-trust.<br /><span className="ap-serif">By design.</span></h2>
            <p className="ap-sec-p">Multiple layers of defense. Every layer independent. No single point of failure.</p>
          </motion.div>

          <div className="home-security-grid">
            {[
              { icon: Fingerprint, title: 'AES-256-GCM', desc: 'Military-grade authenticated encryption with 256-bit keys and 12-byte nonces.', color: '#0a84ff' },
              { icon: KeyRound, title: 'Per-File Keys', desc: 'Each file has its own unique key, wrapped by a master key with AAD binding.', color: '#bf5af2' },
              { icon: ShieldCheck, title: 'MFA + JWT', desc: 'Time-boxed access tokens with refresh rotation and email OTP verification.', color: '#30d158' },
              { icon: Database, title: 'In-Memory Decryption', desc: 'Files never written unencrypted to disk. Decrypted in RAM only when needed.', color: '#ff9500' },
              { icon: Activity, title: 'Immutable Audit', desc: 'Every action cryptographically logged. Complete forensic trail for compliance.', color: '#ff375f' },
              { icon: RefreshCw, title: 'Key Rotation', desc: 'Rotate encryption keys on demand without re-uploading files.', color: '#64d2ff' },
            ].map((s, i) => (
              <motion.div key={i} className="home-security-card" {...fade} transition={{ delay: i * 0.05 }}>
                <div className="home-security-icon" style={{ background: `${s.color}20`, color: s.color }}>
                  <s.icon size={20} />
                </div>
                <h3 className="home-security-h">{s.title}</h3>
                <p className="home-security-p">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8: HOW IT WORKS ═══ */}
      <section className="ap-sec ap-sec-light">
        <div className="ap-sec-inner">
          <motion.div {...fade}>
            <div className="ap-sec-eyebrow">How it works</div>
            <h2 className="ap-sec-h">Four steps to<br /><span className="ap-serif">total security.</span></h2>
          </motion.div>

          <div className="home-steps">
            {[
              { icon: Upload, num: '01', title: 'Upload', desc: 'Drag and drop any file. Automatic malware scan and type validation.' },
              { icon: Lock, num: '02', title: 'Encrypt', desc: 'Unique AES-256 key generated per file. Encrypted before storage.' },
              { icon: Share2, num: '03', title: 'Share', desc: 'Create controlled links with permissions, passwords, and expiry.' },
              { icon: Eye, num: '04', title: 'Track', desc: 'Real-time notifications and complete audit trail of every access.' },
            ].map((s, i) => (
              <motion.div key={i} className="home-step" {...fade} transition={{ delay: i * 0.1 }}>
                <div className="home-step-num">{s.num}</div>
                <div className="home-step-icon"><s.icon size={24} /></div>
                <h3 className="home-step-title">{s.title}</h3>
                <p className="home-step-desc">{s.desc}</p>
                {i < 3 && <div className="home-step-arrow"><ArrowRight size={18} /></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9: USE CASES ═══ */}
      <section className="ap-sec" id="usecases">
        <div className="ap-sec-inner">
          <motion.div {...fade}>
            <div className="ap-sec-eyebrow">Use Cases</div>
            <h2 className="ap-sec-h">Built for teams<br /><span className="ap-serif">that need trust.</span></h2>
          </motion.div>

          <div className="home-usecase-grid">
            {[
              { icon: Building2, title: 'Enterprises', desc: 'Board decks, financial reports, M&A documents shared with granular controls.', color: '#0071e3' },
              { icon: GraduationCap, title: 'Educational Institutions', desc: 'Research papers, student records, exam materials with compliance tracking.', color: '#af52de' },
              { icon: Scale, title: 'Legal Firms', desc: 'Client documents, case files, contracts with immutable audit for court admissibility.', color: '#ff375f' },
              { icon: Heart, title: 'Healthcare', desc: 'Patient records, imaging, research with HIPAA-ready encryption and access logs.', color: '#34c759' },
              { icon: Rocket, title: 'Startups', desc: 'Pitch decks, cap tables, IP documents shared with investors under strict controls.', color: '#ff9500' },
              { icon: Users, title: 'Remote Teams', desc: 'Cross-timezone collaboration with confidence that every share is monitored.', color: '#06b6d4' },
            ].map((u, i) => (
              <motion.div key={i} className="home-usecase-card" {...fade} transition={{ delay: i * 0.06 }}>
                <div className="home-usecase-icon" style={{ background: `${u.color}15`, color: u.color }}>
                  <u.icon size={22} />
                </div>
                <h3 className="home-usecase-h">{u.title}</h3>
                <p className="home-usecase-p">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 10: TECH STACK ═══ */}
      <section className="ap-sec ap-sec-dark">
        <div className="ap-sec-inner">
          <motion.div {...fade}>
            <div className="ap-sec-eyebrow">Under the hood</div>
            <h2 className="ap-sec-h">Enterprise stack.<br /><span className="ap-serif">Modern craft.</span></h2>
            <p className="ap-sec-p">Built with proven technologies chosen for reliability, performance, and developer experience.</p>
          </motion.div>

          <div className="home-tech-grid">
            {[
              { name: 'FastAPI', desc: 'Python async backend', color: '#009688' },
              { name: 'React 18', desc: 'Modern frontend framework', color: '#61dafb' },
              { name: 'PostgreSQL', desc: 'Enterprise database', color: '#336791' },
              { name: 'AES-256-GCM', desc: 'NIST-approved encryption', color: '#0a84ff' },
              { name: 'JWT + OAuth2', desc: 'Stateless authentication', color: '#bf5af2' },
              { name: 'Groq / Gemini / Ollama', desc: 'Multi-provider AI', color: '#30d158' },
              { name: 'Docker', desc: 'Container orchestration', color: '#2496ed' },
              { name: 'AWS Ready', desc: 'Cloud deployment', color: '#ff9900' },
            ].map((t, i) => (
              <motion.div key={i} className="home-tech-card" {...fade} transition={{ delay: i * 0.04 }}>
                <div className="home-tech-dot" style={{ background: t.color, boxShadow: `0 0 12px ${t.color}` }} />
                <div>
                  <div className="home-tech-name">{t.name}</div>
                  <div className="home-tech-desc">{t.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 11: COMPARISON TABLE ═══ */}
      <section className="ap-sec ap-sec-light">
        <div className="ap-sec-inner">
          <motion.div {...fade}>
            <div className="ap-sec-eyebrow">Why TrustShare</div>
            <h2 className="ap-sec-h">Compare and<br /><span className="ap-serif">decide.</span></h2>
          </motion.div>

          <motion.div className="home-compare" {...fade} transition={{ delay: 0.2 }}>
            <div className="home-compare-header">
              <div className="home-compare-cell"></div>
              <div className="home-compare-cell home-compare-us"><Shield size={16} /> TrustShare</div>
              <div className="home-compare-cell">Google Drive</div>
              <div className="home-compare-cell">Dropbox</div>
              <div className="home-compare-cell">Email</div>
            </div>
            {[
              ['AES-256 Encryption', true, true, true, false],
              ['Per-File Keys', true, false, false, false],
              ['Password-Protected Links', true, false, true, false],
              ['View-Only Enforcement', true, false, false, false],
              ['Time-Bounded Access', true, true, true, false],
              ['View Limit Controls', true, false, false, false],
              ['AI Document Summary', true, false, false, false],
              ['Immutable Audit Trail', true, false, false, false],
              ['MFA Required', true, true, true, false],
              ['Zero-Trust Architecture', true, false, false, false],
            ].map(([feat, ts, gd, db, em], i) => (
              <motion.div key={i} className="home-compare-row" {...fade} transition={{ delay: 0.3 + i * 0.03 }}>
                <div className="home-compare-cell home-compare-feat">{feat}</div>
                <div className="home-compare-cell home-compare-us">{ts ? <Check size={16} /> : <X size={16} />}</div>
                <div className="home-compare-cell">{gd ? <Check size={16} color="#34c759" /> : <X size={16} color="#ff3b30" />}</div>
                <div className="home-compare-cell">{db ? <Check size={16} color="#34c759" /> : <X size={16} color="#ff3b30" />}</div>
                <div className="home-compare-cell">{em ? <Check size={16} color="#34c759" /> : <X size={16} color="#ff3b30" />}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 12: TESTIMONIALS / TRUST BADGES ═══ */}
      <section className="ap-sec">
        <div className="ap-sec-inner">
          <motion.div {...fade}>
            <div className="ap-sec-eyebrow">Trusted worldwide</div>
            <h2 className="ap-sec-h">Loved by teams that<br /><span className="ap-serif">value security.</span></h2>
          </motion.div>

          <div className="home-testimonials">
            {[
              { quote: 'TrustShare replaced three tools for us. Encryption, sharing controls, and compliance — all in one beautiful platform.', name: 'Sarah Chen', role: 'CISO, TechCorp Global', avatar: 'SC' },
              { quote: 'The audit trail alone saved us in our SOC 2 audit. Every question the auditors had was answered by the logs.', name: 'Marcus Rivera', role: 'Compliance Lead, FinancePro', avatar: 'MR' },
              { quote: 'Finally, a security tool my team actually enjoys using. The AI summary feature is a game-changer for legal review.', name: 'Mark Cannes', role: 'Partner, Vanis & Associates', avatar: 'PP' },
            ].map((t, i) => (
              <motion.div key={i} className="home-testimonial" {...fade} transition={{ delay: i * 0.1 }}>
                <div className="home-testimonial-quote">"{t.quote}"</div>
                <div className="home-testimonial-author">
                  <div className="home-testimonial-avatar">{t.avatar}</div>
                  <div>
                    <div className="home-testimonial-name">{t.name}</div>
                    <div className="home-testimonial-role">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="home-badges" {...fade} transition={{ delay: 0.4 }}>
            {['SOC 2 Type II', 'GDPR Ready', 'HIPAA Compatible', 'ISO 27001', 'AES-256 Certified'].map((b, i) => (
              <div key={i} className="home-badge"><Award size={14} /> {b}</div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 13: FAQ ═══ */}
      <section className="ap-sec ap-sec-light">
        <div className="ap-sec-inner" style={{ maxWidth: 720 }}>
          <motion.div {...fade}>
            <div className="ap-sec-eyebrow">Frequently asked</div>
            <h2 className="ap-sec-h">Questions,<br /><span className="ap-serif">answered.</span></h2>
          </motion.div>

          <div className="home-faq">
            {faqs.map((f, i) => (
              <motion.div key={i} className="home-faq-item" {...fade} transition={{ delay: i * 0.05 }}>
                <button className="home-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <ChevronDown size={18} style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .3s' }} />
                </button>
                <motion.div
                  className="home-faq-a"
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 20px 20px' }}>{f.a}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 14: FINAL CTA ═══ */}
      <section className="ap-sec ap-sec-dark">
        <div className="ap-sec-inner">
          <motion.div {...fade}>
            <div className="home-cta-badge"><Sparkles size={12} /> Ready in 30 seconds</div>
            <h2 className="ap-sec-h" style={{ color: '#f5f5f7', fontSize: 'clamp(48px, 7vw, 80px)' }}>Start securing your<br /><span className="ap-serif">files today.</span></h2>
            <p className="ap-sec-p">Join thousands of teams already using TrustShare. No credit card required.</p>
            <div className="ap-cta-row" style={{ marginTop: 32 }}>
              <Link to={ROUTES.SIGNUP} className="ap-cta-btn">Create Free Account <ArrowRight size={14} /></Link>
              <Link to={ROUTES.LOGIN} className="ap-cta" style={{ color: '#64d2ff' }}>Sign in <span className="ap-cta-arrow">›</span></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 15: FOOTER ═══ */}
      <footer className="home-footer">
        <div className="home-footer-inner">
          <div className="home-footer-brand">
            <Link to="/" className="ap-logo" style={{ marginBottom: 12 }}>
              <img src="/logo.png" alt="" onError={e => e.target.style.display='none'} />
              TrustShare
            </Link>
            <p className="home-footer-tag">Zero-trust file sharing for teams that refuse to compromise.</p>
            <div className="home-footer-social">
              {/* GitHub */}
              <a href="#" className="home-footer-social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
              {/* Twitter */}
              <a href="#" className="home-footer-social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="home-footer-social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              {/* Email */}
              <a href="#" className="home-footer-social-link">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="home-footer-cols">
            <div className="home-footer-col">
              <div className="home-footer-col-h">Product</div>
              <a href="#features" className="home-footer-a">Features</a>
              <a href="#security" className="home-footer-a">Security</a>
              <a href="#usecases" className="home-footer-a">Use Cases</a>
              <Link to={ROUTES.SIGNUP} className="home-footer-a">Get Started</Link>
            </div>
            <div className="home-footer-col">
              <div className="home-footer-col-h">Company</div>
              <a href="#" className="home-footer-a">About</a>
              <a href="#" className="home-footer-a">Blog</a>
              <a href="#" className="home-footer-a">Careers</a>
              <a href="#" className="home-footer-a">Contact</a>
            </div>
            <div className="home-footer-col">
              <div className="home-footer-col-h">Legal</div>
              <a href="#" className="home-footer-a">Privacy</a>
              <a href="#" className="home-footer-a">Terms</a>
              <a href="#" className="home-footer-a">Compliance</a>
              <a href="#" className="home-footer-a">Security</a>
            </div>
            <div className="home-footer-col">
              <div className="home-footer-col-h">Resources</div>
              <a href="#" className="home-footer-a">Documentation</a>
              <a href="#" className="home-footer-a">API Reference</a>
              <a href="#" className="home-footer-a">Status</a>
              <a href="#" className="home-footer-a">Support</a>
            </div>
          </div>
        </div>

        <div className="home-footer-bottom">
          <div>© 2026 TrustShare. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <span>AES-256 · SOC 2 · GDPR</span>
          </div>
        </div>
      </footer>
    </div>
  );
}