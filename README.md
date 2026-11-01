:root {
  --bg: #030914;
  --bg-2: #0a1625;
  --panel: rgba(10, 17, 28, 0.76);
  --panel-strong: rgba(13, 22, 38, 0.9);
  --line: rgba(255, 255, 255, 0.08);
  --text: #f3f5fa;
  --muted: rgba(231, 236, 247, 0.74);
  --muted-2: rgba(163, 177, 206, 0.8);
  --accent: #e6ebff;
  --accent-2: #e0b6ff;
  --accent-3: #7fe9ff;
  --success: #8ae6c8;
  --shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at 50% 20%, rgba(0, 180, 255, 0.12), transparent 20%),
    radial-gradient(circle at 25% 30%, rgba(124, 110, 247, 0.08), transparent 18%),
    linear-gradient(180deg, #020a12 0%, #030c13 100%);
  color: var(--text);
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(1.5px 1.5px at 35% 40%, rgba(255,255,255,0.8) 0, transparent 100%);
  background-size: 230px 230px;
  opacity: 0.55;
}

button,
input,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

#root {
  min-height: 100vh;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1240px, 92%);
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(18px);
  background: rgba(3, 9, 18, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 96px;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 58px;
}

.pixel-logo {
  display: grid;
  grid-template-columns: repeat(3, 5px);
  gap: 4px;
  width: 26px;
  height: 26px;
  padding: 3px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.pixel-logo span {
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
}

.brand-name {
  font-size: clamp(1.9rem, 2vw, 3rem);
  letter-spacing: -0.06em;
  font-weight: 700;
  color: var(--text);
}

.menu-button {
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  background: transparent;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-left: 10px;
}

.menu-button span {
  width: 18px;
  height: 2px;
  border-radius: 10px;
  background: var(--text);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.primary-btn,
.secondary-btn,
.ghost-btn {
  min-height: 52px;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 15px;
  padding: 0 1.5rem;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.primary-btn {
  background: rgba(255,255,255,0.86);
  color: #0d1422;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.2);
}

.primary-btn.light {
  background: rgba(255,255,255,0.9);
}

.secondary-btn {
  background: rgba(12, 18, 28, 0.75);
  color: var(--text);
}

.ghost-btn {
  background: rgba(255,255,255,0.03);
  color: var(--text);
}

.primary-btn:hover,
.secondary-btn:hover,
.ghost-btn:hover {
  transform: translateY(-2px);
}

.hero-section {
  position: relative;
  padding-top: 58px;
  padding-bottom: 90px;
}

.stars {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.8) 0, transparent 100%),
    radial-gradient(1px 1px at 30% 30%, rgba(255,255,255,0.7) 0, transparent 100%),
    radial-gradient(1.4px 1.4px at 60% 18%, rgba(255,255,255,0.7) 0, transparent 100%),
    radial-gradient(1px 1px at 75% 40%, rgba(255,255,255,0.7) 0, transparent 100%),
    radial-gradient(1.6px 1.6px at 84% 22%, rgba(255,255,255,0.8) 0, transparent 100%),
    radial-gradient(1.1px 1.1px at 22% 70%, rgba(255,255,255,0.7) 0, transparent 100%),
    radial-gradient(1.4px 1.4px at 45% 62%, rgba(255,255,255,0.7) 0, transparent 100%),
    radial-gradient(1.3px 1.3px at 68% 78%, rgba(255,255,255,0.7) 0, transparent 100%),
    radial-gradient(1.8px 1.8px at 88% 70%, rgba(255,255,255,0.8) 0, transparent 100%);
  opacity: 0.75;
  filter: blur(0.5px);
}

.hero-shell {
  position: relative;
  z-index: 1;
  padding-top: 36px;
}

.eyebrow-row {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: rgba(223, 241, 255, 0.82);
  margin-bottom: 26px;
}

.eyebrow-box {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background: linear-gradient(135deg, #7fe9ff 0%, #8ae6c8 100%);
  box-shadow: 0 0 16px rgba(127, 233, 255, 0.8);
}

.hero-section h1 {
  margin: 0;
  font-size: clamp(4rem, 7vw, 9rem);
  line-height: 0.9;
  letter-spacing: -0.08em;
  font-weight: 800;
  max-width: 1200px;
}

.accent-line {
  margin-top: 24px;
  font-size: clamp(2.1rem, 3vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
  color: #e8b1ff;
  font-weight: 500;
  font-style: italic;
}

.hero-copy {
  max-width: 980px;
  margin-top: 34px;
  font-size: clamp(1.25rem, 2vw, 2.05rem);
  line-height: 1.5;
  letter-spacing: -0.03em;
  color: rgba(236, 240, 248, 0.8);
}

.cta-row {
  display: flex;
  gap: 18px;
  margin-top: 34px;
  flex-wrap: wrap;
}

.wide {
  min-width: 320px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding-inline: 1.6rem;
}

.mini-icon {
  font-size: 1.6rem;
  line-height: 1;
}

.arrow,
.play-icon {
  font-size: 1.55rem;
  line-height: 1;
}

.platform-note {
  margin-top: 14px;
  color: rgba(223, 232, 248, 0.62);
  font-size: 1.1rem;
  letter-spacing: -0.02em;
}

.security-links {
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
  margin-top: 30px;
}

.security-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: rgba(236, 240, 248, 0.9);
  font-size: 1.08rem;
}

.security-icon {
  width: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.9);
}

.glass-panel {
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(12, 21, 32, 0.76);
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
}

.demo-window {
  margin-top: 42px;
  border-radius: 18px;
  overflow: hidden;
}

.window-bar {
  padding: 18px 18px 12px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  background: rgba(16,24,35,0.95);
}

.window-title {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255,255,255,0.84);
  font-size: 0.92rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.window-marker {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background: linear-gradient(135deg, #7fe9ff, #e0b6ff);
}

.slash,
.window-muted {
  color: rgba(255,255,255,0.48);
}

.window-surface {
  padding: 18px 18px 12px;
  background: rgba(10, 18, 27, 0.9);
}

.window-header-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 18px;
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(17, 23, 34, 0.85);
  border: 1px solid rgba(255,255,255,0.07);
}

.prompt-badge {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: 700;
  background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03));
}

.prompt-title {
  font-size: 2rem;
  letter-spacing: -0.05em;
  color: rgba(255,255,255,0.9);
}

.sync-badge {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.8);
}

.window-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 18px 0 12px;
  color: rgba(255,255,255,0.8);
}

.nav-arrow {
  font-size: 2.2rem;
  line-height: 1;
  opacity: 0.7;
}

.file-icon,
.book-icon,
.code-icon {
  font-size: 2rem;
}

.window-viewport {
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.05));
}

.viewport-resize {
  height: 180px;
  background: linear-gradient(180deg, rgba(125,136,255,0.08), rgba(255,255,255,0.02));
  position: relative;
}

.viewport-resize::before {
  content: '';
  position: absolute;
  inset: 18px 24px 18px 24px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.08);
  background: linear-gradient(180deg, rgba(142, 229, 255, 0.05), rgba(255,255,255,0.02));
}

.copilot-section,
.faq-section {
  padding-top: 100px;
}

.section-head {
  margin-bottom: 28px;
}

.section-kicker {
  display: inline-block;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(127, 233, 255, 0.85);
  margin-bottom: 18px;
}

.section-head h2,
.faq-copy h2 {
  margin: 0;
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 1.02;
  letter-spacing: -0.065em;
}

.copilot-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.copilot-card {
  padding: 28px 22px;
  border-radius: 20px;
}

.card-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #8fe9ff;
  background: rgba(127, 233, 255, 0.08);
  border: 1px solid rgba(127, 233, 255, 0.2);
  margin-bottom: 18px;
}

.copilot-card h3 {
  margin: 0 0 14px;
  font-size: 1.55rem;
  letter-spacing: -0.05em;
}

.copilot-card p {
  margin: 0;
  color: rgba(236, 240, 248, 0.75);
  line-height: 1.7;
}

.faq-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 28px;
  align-items: start;
}

.faq-list {
  display: grid;
  gap: 14px;
}

.faq-item {
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(15, 20, 30, 0.66);
  border-radius: 16px;
  overflow: hidden;
}

.faq-item button {
  width: 100%;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: none;
  border: none;
  color: var(--text);
  font-weight: 600;
  text-align: left;
}

.faq-item p {
  margin: 0;
  padding: 0 20px 20px;
  color: rgba(236, 240, 248, 0.72);
  line-height: 1.7;
}

.site-footer {
  padding: 48px 0 30px;
  border-top: 1px solid rgba(255,255,255,0.05);
  margin-top: 90px;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: rgba(223, 232, 248, 0.72);
}

.footer-brand {
  font-size: 0.96rem;
}

.footer-tag {
  color: rgba(255,255,255,0.92);
  font-weight: 600;
}

.dashboard-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 260px 1fr;
}

.dashboard-sidebar {
  background: rgba(8, 15, 25, 0.8);
  border-right: 1px solid rgba(255,255,255,0.05);
  padding: 26px 18px;
}

.sidebar-brand {
  margin-bottom: 28px;
}

.sidebar-nav {
  display: grid;
  gap: 10px;
  margin-top: 20px;
}

.sidebar-nav a {
  padding: 0.9rem 0.8rem;
  border-radius: 12px;
  color: rgba(236, 240, 248, 0.75);
}

.sidebar-nav a:hover {
  background: rgba(255,255,255,0.04);
}

.sidebar-link {
  margin-top: 30px;
}

.dashboard-main {
  padding: 34px 28px;
}

.dashboard-main h1 {
  margin: 0 0 24px;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.06em;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.stat-card {
  padding: 22px 18px;
  border-radius: 18px;
}

.stat-card span {
  display: block;
  color: rgba(236,240,248,0.65);
}

.stat-card strong {
  display: block;
  margin-top: 12px;
  font-size: clamp(2rem, 2.5vw, 3rem);
  letter-spacing: -0.06em;
}

@media (max-width: 900px) {
  .copilot-cards,
  .dashboard-grid,
  .faq-layout {
    grid-template-columns: 1fr;
  }

  .dashboard-shell {
    display: block;
  }

  .dashboard-sidebar {
    border-right: none;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
}

@media (max-width: 700px) {
  .nav-wrap {
    flex-wrap: wrap;
    justify-content: center;
    padding: 16px 0;
    gap: 12px;
  }

  .brand-block {
    width: 100%;
    justify-content: center;
  }

  .nav-actions {
    width: 100%;
    justify-content: center;
  }

  .cta-row {
    flex-direction: column;
    align-items: stretch;
  }

  .wide {
    width: 100%;
    min-width: 0;
  }

  .window-header-row {
    grid-template-columns: auto 1fr auto;
  }

  .prompt-title {
    font-size: 1.2rem;
  }
}
