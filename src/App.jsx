import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

const securityLinks = [
  { label: 'Join Discord', icon: '◌' },
  { label: 'Docs', icon: '▣' },
  { label: 'Security', icon: '✓' },
];

const copilotCards = [
  {
    title: 'AI Copilot',
    text: 'Turn natural-language requests into secure remediation plans, validated findings, and safe actions.',
  },
  {
    title: 'Asset Mapping',
    text: 'Continuously discover AI endpoints, toolchains, and data flows before drift or threats can exploit them.',
  },
  {
    title: 'Continuous Defense',
    text: 'Keep detection, validation, and recommendations synchronized across every model and workflow in production.',
  },
];

const featureCards = [
  {
    title: 'Autonomous Pentesting',
    text: 'PlanetA3 Agent plans, executes, and validates security assessments, CVE checks, and exploit workflows without manual orchestration.',
    icon: '✦',
  },
  {
    title: 'Tool Coordination',
    text: 'Coordinate more than 200 cybersecurity tools including Wireshark, John the Ripper, OpenVAS, and Nmap through a natural-language or point-and-click interface.',
    icon: '◎',
  },
  {
    title: 'Compliance & Reporting',
    text: 'Generate editable PDF and Markdown reports aligned to SOC 2, ISO/IEC 27001, and internal security review standards in seconds.',
    icon: '▣',
  },
  {
    title: 'Deployment Flexibility',
    text: 'Run in the cloud or on-premises with local execution and enterprise controls for regulated and hybrid environments.',
    icon: '⬢',
  },
];

function LandingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <div className="brand-block" aria-label="PlanetA3 Agent">
            <div className="pixel-logo" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="brand-text">
              <span className="brand-name">planetA3</span>
              <span className="brand-sub">agent</span>
            </div>

            <button type="button" className="menu-button" aria-label="Open menu">
              <span />
              <span />
              <span />
            </button>
          </div>

          <div className="nav-actions">
            <button type="button" className="ghost-btn">Sign in</button>
            <button type="button" className="primary-btn light">Get started</button>
          </div>
        </div>
      </header>

      <main className="landing-main">
        <section className="hero-section">
          <div className="stars" aria-hidden="true" />
          <div className="container hero-shell">
            <div className="eyebrow-row">
              <span className="eyebrow-box" aria-hidden="true" />
              <span>AGENT AI. AUTONOMOUS SECURITY.</span>
            </div>

            <h1>
              Security that plans,
              <br />
              tests, and reports on its own.
            </h1>

            <div className="accent-line">Built for modern AI and cloud operations.</div>

            <p className="hero-copy">
              PlanetA3 Agent is an AI-powered security partner that investigates risks,
              coordinates security tools, and turns findings into evidence your team can act on.
            </p>

            <div className="cta-row">
              <button type="button" className="primary-btn wide light">
                <span className="mini-icon"></span>
                Download for Mac
                <span className="arrow">↗</span>
              </button>

              <button type="button" className="secondary-btn wide">
                <span className="play-icon">▶</span>
                Explore the demo
              </button>
            </div>

            <div className="platform-note">Cloud and on-prem deployments available</div>

            <div className="security-links">
              {securityLinks.map((item) => (
                <a href="#" key={item.label} className="security-link">
                  <span className="security-icon">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="demo-window glass-panel">
              <div className="window-bar">
                <div className="window-title">
                  <span className="window-marker" aria-hidden="true" />
                  <span>PLANETA3</span>
                  <span className="slash">/</span>
                  <span className="window-muted">security agent</span>
                </div>
              </div>

              <div className="window-surface">
                <div className="window-header-row">
                  <div className="prompt-badge">AA</div>
                  <div className="prompt-title">planetA3.ai</div>
                  <div className="sync-badge" aria-label="Refresh">⟳</div>
                </div>

                <div className="window-actions">
                  <span className="nav-arrow">‹</span>
                  <span className="nav-arrow">›</span>
                  <span className="file-icon">✦</span>
                  <span className="book-icon">▣</span>
                  <span className="code-icon">▭</span>
                </div>

                <div className="window-viewport">
                  <div className="window-panel">
                    <div className="panel-head">
                      <div className="panel-status">
                        <span className="status-dot" />
                        <span>Autonomous pentest</span>
                      </div>
                      <span className="panel-tag">Live</span>
                    </div>

                    <div className="panel-grid">
                      <div className="window-stat">
                        <span>Findings</span>
                        <strong>36</strong>
                      </div>
                      <div className="window-stat">
                        <span>Scan coverage</span>
                        <strong>94%</strong>
                      </div>
                      <div className="window-stat">
                        <span>Tools coordinated</span>
                        <strong>200+</strong>
                      </div>
                      <div className="window-stat">
                        <span>Reports</span>
                        <strong>8</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="copilot-section">
          <div className="container section-head">
            <div className="section-kicker">Copilot</div>
            <h2>Operate with an AI copilot built for security and execution.</h2>
          </div>

          <div className="container copilot-cards">
            {copilotCards.map((card) => (
              <article key={card.title} className="copilot-card glass-panel">
                <div className="card-icon">✦</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-section">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Platform</div>
              <h2>Everything your security team needs in one AI operating layer.</h2>
            </div>

            <div className="feature-grid">
              {featureCards.map((card) => (
                <article key={card.title} className="feature-card glass-panel">
                  <div className="feature-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container faq-layout">
            <div className="faq-copy">
              <div className="section-kicker">FAQ</div>
              <h2>Built for AI teams that need evidence, not guesses.</h2>
            </div>

            <div className="faq-list">
              {[
                {
                  q: 'What does PlanetA3 Agent do?',
                  a: 'It helps security and engineering teams analyze AI systems, validate threats, and turn findings into operational actions across cloud and local deployments.',
                },
                {
                  q: 'How does the Copilot help?',
                  a: 'It turns natural-language requests into structured workflows, targeted scans, and evidence-backed remediation steps for the right tools and assets.',
                },
                {
                  q: 'Can it work in regulated environments?',
                  a: 'Yes. PlanetA3 Agent supports both cloud and on-premise/local deployment models, making it suitable for hybrid and compliance-heavy environments.',
                },
              ].map((item, index) => (
                <div key={item.q} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                  <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                    <span>{item.q}</span>
                    <span>{openFaq === index ? '−' : '+'}</span>
                  </button>
                  {openFaq === index && <p>{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">PlanetA3 Agent • AI Security Operations</div>
          <div className="footer-tag">Autonomous pentesting • Tool coordination • Compliance reporting</div>
        </div>
      </footer>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="brand-block sidebar-brand">
          <div className="pixel-logo" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="brand-text sidebar-brand-text">
            <span className="brand-name">PlanetA3</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a href="#">Overview</a>
          <a href="#">Agents</a>
          <a href="#">Copilot</a>
          <a href="#">Security</a>
        </nav>

        <Link to="/" className="ghost-btn sidebar-link">Back to landing</Link>
      </aside>

      <main className="dashboard-main">
        <h1>PlanetA3 Agent dashboard</h1>

        <div className="dashboard-grid">
          <div className="glass-panel stat-card">
            <span>AI system health</span>
            <strong>99.2%</strong>
          </div>

          <div className="glass-panel stat-card">
            <span>Open findings</span>
            <strong>18</strong>
          </div>

          <div className="glass-panel stat-card">
            <span>Resolved today</span>
            <strong>46</strong>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
