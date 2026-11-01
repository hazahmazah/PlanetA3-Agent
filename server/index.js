import express from 'express';
import cors from 'cors';
import path from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const capabilities = [
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
];

const pricing = [
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
];

const testimonials = [
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
];

const faqs = [
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
];

const demoMetrics = [
  { label: 'Pipeline velocity', value: '+3.4x' },
  { label: 'Team time saved', value: '19 hrs/week' },
  { label: 'Response accuracy', value: '96%' },
  { label: 'Qualified leads', value: '+42%' },
];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'PlanetA3 Agent API' });
});

app.get('/api/site-data', (req, res) => {
  res.json({
    capabilities,
    pricing,
    testimonials,
    faqs,
    metrics: demoMetrics,
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, company, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }

  return res.json({
    success: true,
    message: 'Thanks! Our team will reach out soon.',
    submission: { name, email, company: company || 'Not provided', message },
  });
});

app.post('/api/demo-request', (req, res) => {
  const { name, email, company, teamSize } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ success: false, message: 'Name and email are required.' });
  }

  return res.json({
    success: true,
    message: 'Demo request received. A PlanetA3 specialist will contact you shortly.',
    data: { name, email, company: company || 'Not provided', teamSize: teamSize || 'Not specified' },
  });
});

app.post('/api/auth/demo-login', (req, res) => {
  const { email } = req.body || {};

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required.' });
  }

  return res.json({
    success: true,
    token: 'planetA3-demo-token',
    user: {
      name: 'PlanetA3 Demo User',
      email,
      team: 'Growth',
      role: 'Operations Lead',
    },
  });
});

const distPath = path.resolve(__dirname, '../dist');

if (existsSync(distPath)) {
  app.use(express.static(distPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`PlanetA3 Agent API running on http://localhost:${PORT}`);
});
