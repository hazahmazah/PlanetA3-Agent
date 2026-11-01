import { useEffect, useMemo, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const defaultData = {
  capabilities: [
    {
      name: 'AI workflow orchestration',
      description: 'Coordinate research, content, outreach, and CRM tasks in one operational layer.',
    },
    {
      name: 'Revenue automation',
      description: 'Launch personalized prospecting systems that shorten the path from signal to signed deal.',
    },
    {
      name: 'Brand intelligence',
      description: 'Track market activity, analyze customer sentiment, and spot opportunities earlier.',
    },
    {
      name: 'Knowledge copilot',
      description: 'Give every team instant access to institutional knowledge and product expertise.',
    },
    {
      name: 'Agent governance',
      description: 'Monitor performance, control permissions, and keep every workflow transparent and grounded.',
    },
    {
      name: 'Omnichannel execution',
      description: 'Coordinate email, chat, and internal operations through a single AI operating model.',
    },
  ],
  pricing: [
    {
      tier: 'Starter',
      price: '$49',
      description: 'For founders and lean teams launching AI workflows quickly.',
      features: ['1 workspace', '5 AI agents', 'Basic automations', 'Email support'],
      featured: false,
    },
    {
      tier: 'Growth',
      price: '$149',
      description: 'For scale-ups that want AI to accelerate team output and pipeline velocity.',
      features: ['Unlimited agents', 'CRM integrations', 'Advanced analytics', 'Priority support'],
      featured: true,
    },
    {
      tier: 'Enterprise',
      price: 'Custom',
      description: 'For organizations with governance, security, and multi-team rollout needs.',
      features: ['SSO & compliance', 'Custom deployment', 'Dedicated success manager', 'Full governance'],
      featured: false,
    },
  ],
  testimonials: [
    {
      quote:
        'PlanetA3 Agent gave our team an operational AI layer that reduced time to response by 62% in the first month.',
      author: 'Maya Chen',
      role: 'VP of Growth, Signal Forge',
    },
    {
      quote:
        'We replaced fragmented tools with one system that actually connects outreach, research, and internal workflows.',
      author: 'James Patel',
      role: 'COO, Northstar Labs',
    },
    {
      quote:
        'The ROI was immediate. Our team moved faster with fewer busywork loops and better decision support.',
      author: 'Alicia Gomez',
      role: 'Founder, Reframe Studio',
    },
  ],
  faqs: [
    {
      question: 'What is PlanetA3 Agent?',
      answer:
        'PlanetA3 Agent is an AI operations platform that lets teams deploy intelligent agents for research, customer engagement, internal knowledge access, and workflow automation.',
    },
    {
      question: 'Can it integrate with our existing tools?',
      answer:
        'Yes. The platform is designed to connect with CRM, knowledge bases, communication systems, and internal data sources through structured automation flows.',
    },
    {
      question: 'Is it built for non-technical teams?',
      answer:
        'Absolutely. The interface is designed for business teams while still offering technical controls and governance for administrators.',
    },
    {
      question: 'Do you offer implementation support?',
      answer:
        'Every plan includes onboarding guidance, and enterprise customers get dedicated support and rollout planning.',
    },
  ],
  metrics: [
    { label: 'Pipeline velocity', value: '+3.4x' },
    { label: 'Team time saved', value: '19 hrs/week' },
    { label: 'Response accuracy', value: '96%' },
    { label: 'Qualified leads', value: '+42%' },
  ],
};

function App() {
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/site-data')
      .then((response) => response.json())
      .then((payload) => {
        setData(payload);
        setLoading(false);
      })
      .catch(() => {
        setData(defaultData);
        setLoading(false);
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage data={data} loading={loading} />} />
      <Route path="/dashboard" element={<DashboardPage data={data} />} />
    </Routes>
  );
}

function LandingPage({ data, loading }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    });

    const result = await response.json();
    setStatus(result.message || 'Message sent');

    if (result.success) {
      setFormState({ name: '', email: '', company: '', message: '' });
    }
  };

  const heroMetrics = useMemo(() => data.metrics || defaultData.metrics, [data.metrics]);

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <Link to="/" className="brand" aria-label="PlanetA3 Agent home">
            <span className="brand-mark">P</span>
            PlanetA3 Agent
          </Link>

          <nav className="main-nav">
            <a href="#platform">Platform</a>
            <a href="#solutions">Solutions</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nav-actions">
            <Link to="/dashboard" className="ghost-btn">Dashboard</Link>
            <a href="#contact" className="primary-btn">Book a demo</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">AI operations platform</div>
              <h1>Deploy intelligent agents that move your business forward.</h1>
              <p className="hero-text">
                PlanetA3 Agent unifies strategy, research, outreach, and execution in one smart operating layer for fast-growing teams.
              </p>

              <div className="cta-row">
                <a href="#contact" className="primary-btn large-btn">Get started</a>
                <a href="#platform" className="secondary-btn large-btn">Explore platform</a>
              </div>

              <div className="powered-by">
                <span>Trusted by growth teams, operators, and AI-first leaders</span>
                <div className="logo-row">
                  <span>Nova</span>
                  <span>Northstar</span>
                  <span>Altitude</span>
                  <span>Synapse</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="dashboard-card glass-card">
                <div className="card-topline">
                  <span className="dot green" />
                  <span>System overview</span>
                  <span className="status-pill">Live</span>
                </div>

                <div className="metrics-grid">
                  {heroMetrics.map((metric) => (
                    <div key={metric.label} className="mini-metric">
                      <span>{metric.label}</span>
                      <strong>{metric.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="chart-panel">
                  <div className="chart-header">
                    <span>Workflow performance</span>
                    <span className="chart-trend">+28.4%</span>
                  </div>
                  <div className="bars">
                    <span style={{ height: '38%' }} />
                    <span style={{ height: '52%' }} />
                    <span style={{ height: '46%' }} />
                    <span style={{ height: '64%' }} />
                    <span style={{ height: '82%' }} />
                    <span style={{ height: '96%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="trust-band">
          <div className="container trust-inner">
            <p>Built for AI-native operations</p>
            <div className="trust-list">
              <span>Research agents</span>
              <span>CRM automation</span>
              <span>Content generation</span>
              <span>Lead qualification</span>
              <span>Knowledge retrieval</span>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="container section-header center">
            <div className="eyebrow">Why teams choose PlanetA3</div>
            <h2>Turn AI into a real operating system.</h2>
          </div>

          <div className="container feature-grid">
            {(data.capabilities || defaultData.capabilities).map((feature) => (
              <article key={feature.name} className="feature-card glass-card">
                <div className="feature-icon">✦</div>
                <h3>{feature.name}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="solutions" className="solution-section">
          <div className="container solution-grid">
            <div className="solution-body">
              <div className="eyebrow">From friction to flow</div>
              <h2>Every workflow becomes faster, clearer, and more measurable.</h2>
              <ul className="check-list">
                <li>Consolidate fragmented research, content, and outreach tasks into a single AI engine.</li>
                <li>Give decision-makers live insight into pipeline quality and workflow performance.</li>
                <li>Deploy repeatable playbooks without sacrificing governance or operational control.</li>
              </ul>
            </div>

            <div className="solution-panel glass-card">
              <div className="panel-row">
                <span className="label">Workflow</span>
                <span className="value">Outbound acceleration</span>
              </div>
              <div className="panel-row">
                <span className="label">Agents</span>
                <span className="value">3 active</span>
              </div>
              <div className="panel-row">
                <span className="label">Conversion lift</span>
                <span className="value">+31%</span>
              </div>
              <div className="panel-row">
                <span className="label">Lead response</span>
                <span className="value">2 mins</span>
              </div>
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <div className="container showcase-grid">
            <div className="showcase-panel glass-card">
              <div className="panel-header">
                <span className="dot orange" />
                <span>Agent actions</span>
              </div>
              <div className="activity-list">
                <div className="activity-item">
                  <span>Research market signals</span>
                  <strong>Done</strong>
                </div>
                <div className="activity-item">
                  <span>Find buying intent</span>
                  <strong>Running</strong>
                </div>
                <div className="activity-item">
                  <span>Draft inbound reply</span>
                  <strong>Queued</strong>
                </div>
              </div>
            </div>

            <div className="showcase-body">
              <div className="eyebrow">Operational clarity</div>
              <h2>See the work, not just the output.</h2>
              <p>
                PlanetA3 Agent gives teams a transparent view of every action, decision path, and business signal so AI feels like a partner, not a black box.
              </p>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container section-header center">
            <div className="eyebrow">Simple pricing</div>
            <h2>Flexible plans for every growth phase.</h2>
          </div>

          <div className="container pricing-grid">
            {(data.pricing || defaultData.pricing).map((plan) => (
              <article key={plan.tier} className={`pricing-card glass-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <span className="featured-badge">Most popular</span>}
                <h3>{plan.tier}</h3>
                <div className="price-line">
                  <span className="currency">{plan.price === 'Custom' ? '' : '$'}</span>
                  <strong>{plan.price}</strong>
                </div>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button type="button" className="primary-btn full-width">Choose plan</button>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonial-section">
          <div className="container section-header center">
            <div className="eyebrow">Customer stories</div>
            <h2>Teams see measurable business acceleration.</h2>
          </div>

          <div className="container testimonial-grid">
            {(data.testimonials || defaultData.testimonials).map((person) => (
              <article key={person.author} className="testimonial-card glass-card">
                <div className="quote-mark">“</div>
                <p>{person.quote}</p>
                <div className="person-meta">
                  <strong>{person.author}</strong>
                  <span>{person.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="container faq-layout">
            <div className="faq-copy">
              <div className="eyebrow">FAQ</div>
              <h2>Questions teams ask before they launch.</h2>
            </div>

            <div className="faq-list">
              {(data.faqs || defaultData.faqs).map((item, index) => (
                <div key={item.question} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                  <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                    <span>{item.question}</span>
                    <span>{openFaq === index ? '−' : '+'}</span>
                  </button>
                  {openFaq === index && <p>{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="eyebrow">Let’s build your AI layer</div>
              <h2>Book a strategy session with the PlanetA3 team.</h2>
              <p>
                Tell us what you want to automate, optimize, or scale. We’ll map the right AI workflows for your business.
              </p>
            </div>

            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <div className="field-row two-up">
                <label>
                  <span>Name</span>
                  <input type="text" name="name" value={formState.name} onChange={handleChange} required />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" value={formState.email} onChange={handleChange} required />
                </label>
              </div>

              <label>
                <span>Company</span>
                <input type="text" name="company" value={formState.company} onChange={handleChange} />
              </label>

              <label>
                <span>Message</span>
                <textarea name="message" rows="5" value={formState.message} onChange={handleChange} required />
              </label>

              <button type="submit" className="primary-btn full-width">
                Send request
              </button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <Link to="/" className="brand small">
              <span className="brand-mark">P</span>
              PlanetA3 Agent
            </Link>
          </div>

          <div className="footer-links">
            <a href="#platform">Platform</a>
            <a href="#solutions">Solutions</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>

          <p>© 2026 PlanetA3 Agent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function DashboardPage({ data }) {
  const [loginState, setLoginState] = useState({ email: 'hello@planeta3.ai' });
  const [loginStatus, setLoginStatus] = useState('');
  const [account, setAccount] = useState({ name: 'PlanetA3 Demo User', team: 'Growth' });

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/auth/demo-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: loginState.email }),
    });

    const result = await response.json();
    setLoginStatus(result.success ? 'Logged in successfully.' : result.message);

    if (result.success) {
      setAccount(result.user);
    }
  };

  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="brand sidebar-brand">
          <span className="brand-mark">P</span>
          PlanetA3 Agent
        </div>
        <nav className="sidebar-nav">
          <a className="active" href="#overview">Overview</a>
          <a href="#agents">Agents</a>
          <a href="#workflows">Workflows</a>
          <a href="#analytics">Analytics</a>
        </nav>
        <Link to="/" className="ghost-btn sidebar-link">Back to site</Link>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <div className="eyebrow">Operations dashboard</div>
            <h1>AI command center</h1>
          </div>

          <form className="demo-login" onSubmit={handleLogin}>
            <input
              type="email"
              value={loginState.email}
              onChange={(event) => setLoginState({ email: event.target.value })}
            />
            <button type="submit" className="primary-btn">Login demo</button>
          </form>
        </header>

        {loginStatus && <div className="login-status">{loginStatus}</div>}

        <section className="hero-kpi-grid">
          {(data.metrics || defaultData.metrics).map((metric) => (
            <div key={metric.label} className="kpi-card glass-card">
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </section>

        <section className="content-grid">
          <div className="glass-card activity-card">
            <div className="card-head">
              <h3>Workflow health</h3>
              <span>Live</span>
            </div>
            <div className="bars vertical-bars">
              <span style={{ height: '34%' }} />
              <span style={{ height: '52%' }} />
              <span style={{ height: '68%' }} />
              <span style={{ height: '72%' }} />
              <span style={{ height: '88%' }} />
              <span style={{ height: '96%' }} />
            </div>
          </div>

          <div className="glass-card profile-card">
            <div className="card-head">
              <h3>Team identity</h3>
              <span>Active</span>
            </div>
            <div className="profile-summary">
              <div className="avatar">A</div>
              <div>
                <strong>{account.name}</strong>
                <span>{account.team} team</span>
              </div>
            </div>
            <ul className="profile-stats">
              <li><span>Agents</span><strong>12</strong></li>
              <li><span>Signals monitored</span><strong>3.2k</strong></li>
              <li><span>Tasks completed</span><strong>861</strong></li>
            </ul>
          </div>
        </section>

        <section className="table-card glass-card">
          <div className="card-head">
            <h3>Active automations</h3>
            <span>Updated 2m ago</span>
          </div>

          <table>
            <thead>
              <tr>
                <th>Workflow</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Success</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lead enrichment</td>
                <td>Ops team</td>
                <td><span className="status success">Live</span></td>
                <td>96%</td>
              </tr>
              <tr>
                <td>Brand monitoring</td>
                <td>Marketing</td>
                <td><span className="status neutral">Review</span></td>
                <td>88%</td>
              </tr>
              <tr>
                <td>Proposal generation</td>
                <td>Sales</td>
                <td><span className="status success">Live</span></td>
                <td>94%</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;
