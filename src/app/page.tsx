'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Zap, 
  MessageSquare, 
  Calendar,
  ArrowRight, 
  CheckCircle2, 
  Layers,
  ChevronRight,
  Globe,
  Bot,
  X,
  TrendingUp
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DashboardPreview from '@/components/DashboardPreview';

const logoSrc = '/logo.svg';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, delay: 0.2 }
    )
    .fromTo(subRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }, 
      '-=0.7'
    )
    .fromTo(ctaRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }, 
      '-=0.7'
    )
    .fromTo(previewRef.current, 
      { scale: 0.95, opacity: 0, y: 40 }, 
      { scale: 1, opacity: 1, y: 0, duration: 1.2 }, 
      '-=0.5'
    );

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current?.classList.add('scrolled');
      } else {
        navRef.current?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="main-wrapper">
      <div className="glow-mesh" />

      {/* ─── NAVBAR ────────────────────────────────────────────── */}
      <nav ref={navRef} className="nav-container">
        <div className="container">
          <div className="nav-inner glass">
            <div className="logo-section">
              <div className="logo-box">
                <img src={logoSrc} alt="Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              </div>
              <span className="logo-text">Lead Claw</span>
            </div>

            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#agents">Agents</a>
              <a href="#pricing">Pricing</a>
            </div>

            <button className="btn-primary nav-btn">
              Launch App <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* ─── HERO SECTION ──────────────────────────────────────── */}
      <section className="hero-section">
        <div className="container">
          <div className="badge">
            <Zap size={14} /> AI That Never Sleeps, Closes That Never Stop
          </div>
          
          <h1 ref={titleRef} className="hero-title">
            Your AI-Powered Lead <br />
            <span className="text-gradient">Command Center.</span>
          </h1>

          <p ref={subRef} className="hero-sub">
            The next-generation AI-First Omnichannel CRM. Connect WhatsApp, Instagram, and Messenger to a multi-agent brain that qualifies, follows up, and closes 24/7.
          </p>

          <div ref={ctaRef} className="hero-ctas">
            <button className="btn-primary">
              Get Started for Free <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">
              Book a Demo
            </button>
          </div>

          {/* 🖥️ Interactive Dashboard Preview */}
          <div ref={previewRef} className="preview-container">
            <DashboardPreview />
            <div className="blur-accent blur-1" />
            <div className="blur-accent blur-2" />
          </div>
        </div>
      </section>

      {/* ─── HOW LEAD CLAW SETS YOU UP FOR SUCCESS ─────────── */}
      <section className="success-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Here's how <span className="text-gradient">Lead Claw</span> sets you up for success</h2>
          </div>

          <div className="success-grid">
            {/* Card 1 */}
            <div className="success-card glass">
              <div className="success-icon-wrapper">
                <div className="success-icon primary-glow">
                  <Zap size={48} strokeWidth={1.5} />
                </div>
              </div>
              <h3>Lightning-Fast Response</h3>
              <p>Reply to every lead within 10 seconds, 24/7. Never lose a hot prospect to slow response times again.</p>
            </div>

            {/* Card 2 */}
            <div className="success-card glass">
              <div className="success-icon-wrapper">
                <div className="success-icon secondary-glow">
                  <Bot size={48} strokeWidth={1.5} />
                </div>
              </div>
              <h3>AI-Powered Intelligence</h3>
              <p>Advanced AI agents qualify leads, detect intent, and autonomously book meetings while you focus on closing deals.</p>
            </div>

            {/* Card 3 */}
            <div className="success-card glass">
              <div className="success-icon-wrapper">
                <div className="success-icon accent-glow">
                  <Globe size={48} strokeWidth={1.5} />
                </div>
              </div>
              <h3>Omnichannel Mastery</h3>
              <p>Unify WhatsApp, Instagram, Facebook, and web leads into one intelligent command center. No more tab juggling.</p>
            </div>

            {/* Card 4 */}
            <div className="success-card glass">
              <div className="success-icon-wrapper">
                <div className="success-icon green-glow">
                  <TrendingUp size={48} strokeWidth={1.5} />
                </div>
              </div>
              <h3>Scale Without Limits</h3>
              <p>Handle 10,000+ leads with automated follow-ups, smart scheduling, and zero manual effort. Growth made effortless.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES: THE TRIPLE AGENT CORE ─────────────────── */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The <span className="text-gradient">Triple-Agent</span> Ecosystem</h2>
            <p className="section-sub">Lead Claw isn't just a database. It's an army of AI agents working in perfect harmony to grow your business.</p>
          </div>

          <div className="feature-grid">
            {/* AGENT 1 */}
            <div className="feature-card glass">
              <div className="feature-icon-box primary-gradient">
                <Bot size={24} />
              </div>
              <h3>The Sentry</h3>
              <p>The first line of defense. Responds to new leads within 10 seconds, qualifying intent and capturing vital info before they cool off.</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={14} /> Instant Qualification</li>
                <li><CheckCircle2 size={14} /> Name & Need Extraction</li>
                <li><CheckCircle2 size={14} /> 24/7 Response Time</li>
              </ul>
            </div>

            {/* AGENT 2 */}
            <div className="feature-card glass">
              <div className="feature-icon-box primary-gradient" style={{ filter: 'hue-rotate(45deg)' }}>
                <Zap size={24} />
              </div>
              <h3>The Persistent Nudger</h3>
              <p>Most leads die in the follow-up. Lead Claw’s second agent manages human-like follow-up cycles across 7 days without being spammy.</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={14} /> Staggered Nudge Logic</li>
                <li><CheckCircle2 size={14} /> Natural Language Tone</li>
                <li><CheckCircle2 size={14} /> Multi-Channel Continuity</li>
              </ul>
            </div>

            {/* AGENT 3 */}
            <div className="feature-card glass">
              <div className="feature-icon-box primary-gradient" style={{ filter: 'hue-rotate(90deg)' }}>
                <Calendar size={24} />
              </div>
              <h3>The Auditor</h3>
              <p>Your silent closer. It audits every conversation, detects when a lead is ready to book, and autonomously syncs them to your calendar.</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={14} /> Intent-Based Booking</li>
                <li><CheckCircle2 size={14} /> Automated Reminders</li>
                <li><CheckCircle2 size={14} /> Seamless CRM Sync</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OMNICHANNEL NEXUS ───────────────────────────────── */}
      <section className="nexus-section">
        <div className="container">
            <div className="nexus-grid">
                <div className="nexus-text">
                    <div className="badge">Unified Intelligence</div>
                    <h2 className="section-title">One Inbox. <br /><span className="text-gradient">Every Channel.</span></h2>
                    <p className="section-sub" style={{ margin: '0 0 32px 0' }}>
                        Stop juggling tabs. Lead Claw unifies every lead from the world’s most popular messaging platforms into a single, high-speed command center.
                    </p>
                    <div className="nexus-features">
                        <div className="nexus-feat-item">
                            <div className="dot" />
                            <span>Real-time platform synchronization</span>
                        </div>
                        <div className="nexus-feat-item">
                            <div className="dot" />
                            <span>Zero-latency message delivery</span>
                        </div>
                        <div className="nexus-feat-item">
                            <div className="dot" />
                            <span>Native support for Media & Documents</span>
                        </div>
                    </div>
                </div>

                <div className="nexus-visual">
                    <div className="nexus-core">
                        <div className="core-inner glass-bright">
                            <img src={logoSrc} alt="Core" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                        </div>
                        <div className="core-orbit orbit-1" />
                        <div className="core-orbit orbit-2" />
                    </div>

                    {/* Floating Platforms */}
                    <div className="platform-icon p-whatsapp glass float-anim">
                        <MessageSquare className="text-green-500" />
                    </div>
                    <div className="platform-icon p-instagram glass float-anim-delayed">
                        <Bot className="text-pink-500" />
                    </div>
                    <div className="platform-icon p-facebook glass float-anim">
                        <Globe className="text-blue-500" />
                    </div>
                    <div className="platform-icon p-web glass float-anim-delayed">
                        <Zap className="text-yellow-500" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ─── AUTONOMOUS BOOKING ─────────────────────────────── */}
      <section id="booking" className="booking-section">
        <div className="container">
            <div className="booking-grid">
                <div className="booking-visual">
                    {/* Chat Side */}
                    <div className="chat-window glass">
                        <div className="chat-header">
                            <div className="status-dot" /> <span>AI Agent Online</span>
                        </div>
                        <div className="chat-body">
                            <div className="msg msg-user">"Hi, can we meet on Friday at 2 PM?"</div>
                            <div className="msg msg-ai glass-bright">"Sure! I've checked the calendar. Friday at 2 PM is perfect. Should I lock that in?"</div>
                            <div className="msg msg-user">"Yes, please!"</div>
                        </div>
                    </div>

                    {/* The Connection Line */}
                    <div className="connection-line">
                        <div className="claw-icon primary-gradient">
                            <Zap size={20} />
                        </div>
                    </div>

                    {/* Calendar Side */}
                    <div className="calendar-card glass-bright float-anim">
                        <div className="cal-header">
                            <Calendar size={18} className="text-primary" />
                            <span>Booking Confirmed</span>
                        </div>
                        <div className="cal-details">
                            <div className="cal-event">
                                <div className="event-time">FRI 14:00</div>
                                <div className="event-info">
                                    <strong>Lead Strategy Session</strong>
                                    <p>Lead: Sarah Jenkins</p>
                                </div>
                            </div>
                        </div>
                        <div className="cal-footer">
                            <CheckCircle2 size={14} className="text-green-500" /> Synced to Google Calendar
                        </div>
                    </div>
                </div>

                <div className="booking-text">
                    <div className="badge">Zero Human Touch</div>
                    <h2 className="section-title">From "Hi" to <br /><span className="text-gradient">"Confirmed."</span></h2>
                    <p className="section-sub" style={{ margin: '0 0 32px 0' }}>
                        Our AI doesn't just chat—it closes. Lead Claw automatically detects booking intent, checks your live availability, and secures the meeting before the lead can look elsewhere.
                    </p>
                    <div className="nexus-features">
                        <div className="nexus-feat-item">
                            <div className="dot" />
                            <span>Instant Calendar Synchronization</span>
                        </div>
                        <div className="nexus-feat-item">
                            <div className="dot" />
                            <span>Automatic Conflict Detection</span>
                        </div>
                        <div className="nexus-feat-item">
                            <div className="dot" />
                            <span>Email & SMS Confirmation Flow</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ─── LEAD SCALE ENGINE ──────────────────────────────── */}
      <section id="scale" className="scale-section">
        <div className="container">
            <div className="scale-grid">
                <div className="scale-text">
                    <div className="badge">Infinite Scale</div>
                    <h2 className="section-title">Upload 10,000 Leads. <br /><span className="text-gradient">Launch in Seconds.</span></h2>
                    <p className="section-sub" style={{ margin: '0 0 32px 0' }}>
                        Manual outreach is dead. With Lead Claw, you can drop a CSV of 10,000 leads and let our multi-agent workforce handle the greetings, qualification, and follow-ups.
                    </p>
                    <div className="nexus-features">
                        <div className="nexus-feat-item">
                            <CheckCircle2 size={16} className="text-primary" />
                            <span>Anti-Spam Staggered Delivery</span>
                        </div>
                        <div className="nexus-feat-item">
                            <CheckCircle2 size={16} className="text-primary" />
                            <span>Automated Duplication Cleansing</span>
                        </div>
                        <div className="nexus-feat-item">
                            <CheckCircle2 size={16} className="text-primary" />
                            <span>Real-time Conversion Analytics</span>
                        </div>
                    </div>
                </div>

                <div className="scale-visual">
                    <div className="upload-zone glass float-anim">
                        <div className="upload-icon">
                            <Layers size={32} className="text-primary" />
                        </div>
                        <div className="upload-details">
                            <strong>leads_june_campaign.csv</strong>
                            <p>12,450 leads detected</p>
                        </div>
                        <div className="upload-progress">
                            <div className="progress-bar-fill" />
                        </div>
                    </div>

                    <div className="threads-preview glass-bright">
                        <div className="thread-item">
                            <div className="avatar" />
                            <div className="thread-info">
                                <div className="bar-mid" />
                                <div className="status-tag">AI Active</div>
                            </div>
                        </div>
                        <div className="thread-item">
                            <div className="avatar" />
                            <div className="thread-info">
                                <div className="bar-mid" />
                                <div className="status-tag">AI Active</div>
                            </div>
                        </div>
                        <div className="thread-item">
                            <div className="avatar" />
                            <div className="thread-info">
                                <div className="bar-mid" />
                                <div className="status-tag">Closing...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ─── PRICING SECTION ─────────────────────────────────── */}
      <section id="pricing" className="pricing-section">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Ready to <span className="text-gradient">Scale?</span></h2>
                <p className="section-sub">Choose the claw that fits your business. No hidden fees, just pure growth.</p>
            </div>

            <div className="pricing-grid">
                {/* STARTER */}
                <div className="price-card glass">
                    <div className="price-header">
                        <h3>Starter</h3>
                        <div className="price-val">₹4,999<span>/mo</span></div>
                    </div>
                    <ul className="price-list">
                        <li><CheckCircle2 size={16} /> 500 Leads / month</li>
                        <li><CheckCircle2 size={16} /> WhatsApp Integration</li>
                        <li><CheckCircle2 size={16} /> The Sentry (Instant Reply)</li>
                        <li><X size={16} className="text-dim" /> Autonomous Booking</li>
                        <li><X size={16} className="text-dim" /> Instagram & Messenger</li>
                    </ul>
                    <button className="btn-secondary w-full">Start Free Trial</button>
                </div>

                {/* PROFESSIONAL */}
                <div className="price-card glass featured">
                    <div className="popular-badge">Most Popular</div>
                    <div className="price-header">
                        <h3>Professional</h3>
                        <div className="price-val">₹14,999<span>/mo</span></div>
                    </div>
                    <ul className="price-list">
                        <li><CheckCircle2 size={16} /> 5,000 Leads / month</li>
                        <li><CheckCircle2 size={16} /> Omnichannel (WA, IG, FB)</li>
                        <li><CheckCircle2 size={16} /> Full Triple-Agent Ecosystem</li>
                        <li><CheckCircle2 size={16} /> Autonomous Booking</li>
                        <li><CheckCircle2 size={16} /> Priority Processing</li>
                    </ul>
                    <button className="btn-primary w-full">Get Lead Claw Pro</button>
                </div>

                {/* ENTERPRISE */}
                <div className="price-card glass">
                    <div className="price-header">
                        <h3>Enterprise</h3>
                        <div className="price-val">₹49,999<span>/mo</span></div>
                    </div>
                    <ul className="price-list">
                        <li><CheckCircle2 size={16} /> Unlimited Leads</li>
                        <li><CheckCircle2 size={16} /> Custom AI Persona Training</li>
                        <li><CheckCircle2 size={16} /> Dedicated Account Manager</li>
                        <li><CheckCircle2 size={16} /> API Access & Webhooks</li>
                        <li><CheckCircle2 size={16} /> White-Glove Onboarding</li>
                    </ul>
                    <button className="btn-secondary w-full">Contact Sales</button>
                </div>
            </div>
        </div>
      </section>

      {/* ─── TRUST BAR ────────────────────────────────────────── */}
      <section className="trust-section">
        <div className="container">
          <p className="trust-label">Trusted by Intelligence-First Teams</p>
          <div className="trust-logos">
             <div className="trust-item">
                <Globe size={24} /> <span>META</span>
             </div>
             <div className="trust-item">
                <Zap size={24} /> <span>STRIPE</span>
             </div>
             <div className="trust-item">
                <MessageSquare size={24} /> <span>WHATSAPP</span>
             </div>
             <div className="trust-item">
                <Layers size={24} /> <span>AWS</span>
             </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────── */}
      <footer className="footer-section">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-brand">
                    <div className="logo-section" style={{ marginBottom: '24px' }}>
                        <img src={logoSrc} alt="Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                        <span className="logo-text">Lead Claw</span>
                    </div>
                    <p className="footer-tagline">
                        A premium AI-First Omnichannel CRM. Built for high-growth teams who never want to lose a lead again.
                    </p>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>
                        Developed by <strong>Elam AI</strong> - Business Development Consultants
                    </p>
                    <div className="footer-socials">
                        <div className="social-icon glass"><Globe size={18} /></div>
                        <div className="social-icon glass"><MessageSquare size={18} /></div>
                        <div className="social-icon glass"><Bot size={18} /></div>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Platform</h4>
                    <a href="#features">Features</a>
                    <a href="#agents">AI Agents</a>
                    <a href="#scale">Bulk Scale</a>
                    <a href="#pricing">Pricing</a>
                </div>

                <div className="footer-links">
                    <h4>Company</h4>
                    <a href="#">About Us</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact Support</a>
                </div>

                <div className="footer-contact glass">
                    <h4>Get in Touch</h4>
                    <p>Interested in a custom setup? Let's talk.</p>
                    <a href="mailto:hello@leadclaw.ai" className="contact-link">hello@leadclaw.ai</a>
                    <button className="btn-primary w-full" style={{ marginTop: '16px' }}>Book Demo</button>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Lead Claw AI. All rights reserved.</p>
                <div className="footer-legal">
                    <span>Built with ❤️ for Intelligence-First Teams</span>
                </div>
            </div>
        </div>
      </footer>
    </main>
  );
}
