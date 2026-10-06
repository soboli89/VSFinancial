document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --bg: #081120;
      --panel: rgba(17, 25, 40, 0.78);
      --panel-strong: rgba(14, 22, 35, 0.96);
      --text: #eef4ff;
      --muted: #9bb0ce;
      --primary: #6ee7b7;
      --accent: #7c9cff;
      --shadow: 0 24px 60px rgba(7, 13, 23, 0.45);
      --radius: 22px;
    }

    * { box-sizing: border-box; }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      font-family: Inter, "Segoe UI", sans-serif;
      background:
        radial-gradient(circle at top left, rgba(124, 156, 255, 0.22), transparent 32%),
        radial-gradient(circle at right, rgba(110, 231, 183, 0.18), transparent 28%),
        var(--bg);
      color: var(--text);
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .page {
      min-height: 100vh;
      width: min(1200px, calc(100% - 32px));
      margin: 0 auto;
      padding: 24px 0 48px;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 22px;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 18px;
      background: rgba(10, 18, 31, 0.6);
      backdrop-filter: blur(12px);
      box-shadow: var(--shadow);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 800;
      letter-spacing: 0.04em;
    }

    .brand-mark {
      width: 34px;
      height: 34px;
      display: grid;
      place-items: center;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      color: #07121d;
      font-size: 1.1rem;
      font-weight: 900;
    }

    .nav-links {
      display: flex;
      flex: 1;
      justify-content: center;
      gap: 64px;
      color: var(--muted);
      font-size: 1.1rem;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.9rem 1.45rem;
      border-radius: 999px;
      font-weight: 700;
      border: 1px solid transparent;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      cursor: pointer;
    }

    .btn:hover {
      transform: translateY(-1px);
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--primary), #83f7d0);
      color: #071722;
      box-shadow: 0 18px 40px rgba(110, 231, 183, 0.35);
    }

    .btn-secondary {
      background: rgba(255,255,255,0.04);
      border-color: rgba(255,255,255,0.10);
      color: var(--text);
    }

    .hero {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      align-items: center;
      gap: 42px;
      padding: 56px 0 28px;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 0.52rem 0.8rem;
      border-radius: 999px;
      background: rgba(124, 156, 255, 0.1);
      border: 1px solid rgba(124, 156, 255, 0.2);
      color: #dce7ff;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    h1 {
      margin: 0;
      font-size: clamp(2.8rem, 5vw, 5rem);
      line-height: 1.02;
      letter-spacing: -0.06em;
    }

    .highlight {
      background: linear-gradient(135deg, var(--primary), #a4d2ff 65%, var(--accent));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .subtext {
      margin: 20px 0 26px;
      max-width: 620px;
      color: var(--muted);
      font-size: 1.12rem;
      line-height: 1.7;
    }

      .hero-visual {
      position: relative;
      min-height: 420px;
      padding: 18px;
    }

    .hero-art {
      position: relative;
      display: grid;
      place-items: center;
      min-height: 390px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 28px;
      background:
        radial-gradient(circle at 50% 45%, rgba(124,156,255,0.2), transparent 55%),
        linear-gradient(145deg, rgba(18,31,50,0.9), rgba(10,16,28,0.96));
      box-shadow: var(--shadow);
    }

    .hero-art svg {
      width: min(100%, 420px);
      height: auto;
      overflow: visible;
    }

    .hero-art-card {
      position: absolute;
      right: 12px;
      bottom: 28px;
      padding: 14px 18px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px;
      background: rgba(8,17,32,0.88);
      box-shadow: var(--shadow);
    }

    .hero-art-card span {
      display: block;
      color: var(--muted);
      font-size: 0.8rem;
    }

    .hero-art-card strong {
      display: block;
      margin-top: 4px;
      color: var(--primary);
      font-size: 1.25rem;
    }

    .dashboard {
      position: relative;
      border-radius: 28px;
      padding: 20px;
      background: linear-gradient(180deg, rgba(18, 31, 50, 0.9), rgba(10, 16, 28, 0.96));
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .dashboard::before {
      content: "";
      position: absolute;
      inset: -30% 35% auto -20%;
      height: 240px;
      background: radial-gradient(circle, rgba(110, 231, 183, 0.45), transparent 60%);
      filter: blur(20px);
    }

    .window-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 4px 16px;
    }

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(255,255,255,0.24);
    }

    .dot:nth-child(1) { background: #ff6b6b; }
    .dot:nth-child(2) { background: #ffd93d; }
    .dot:nth-child(3) { background: #6ee7b7; }

    .stats-card {
      position: absolute;
      right: -10px;
      bottom: 42px;
      width: 210px;
      padding: 18px 18px 16px;
      border-radius: 20px;
      background: rgba(8, 17, 32, 0.9);
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: 0 24px 50px rgba(0,0,0,0.38);
    }

    .stats-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;
      color: var(--muted);
      font-size: 0.8rem;
    }

    .trend {
      color: var(--primary);
      font-weight: 800;
    }

    .chart {
      height: 110px;
      display: flex;
      align-items: end;
      gap: 8px;
      padding-top: 10px;
    }

    .bar {
      flex: 1;
      border-radius: 8px 8px 0 0;
      background: linear-gradient(180deg, var(--accent), var(--primary));
      opacity: 0.88;
    }

    .bar:nth-child(1) { height: 35%; }
    .bar:nth-child(2) { height: 52%; }
    .bar:nth-child(3) { height: 63%; }
    .bar:nth-child(4) { height: 48%; }
    .bar:nth-child(5) { height: 80%; }
    .bar:nth-child(6) { height: 92%; }
    .bar:nth-child(7) { height: 78%; }

    .metrics {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      margin-top: 18px;
    }

    .metric {
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px;
      padding: 16px;
    }

    .metric-label {
      color: var(--muted);
      font-size: 0.8rem;
      margin-bottom: 8px;
    }

    .metric-value {
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: -0.04em;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
      margin-top: 24px;
    }

    .feature {
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: var(--radius);
      padding: 24px 20px;
      box-shadow: var(--shadow);
    }

    .icon {
      width: 48px;
      height: 48px;
      display: grid;
      place-items: center;
      border-radius: 14px;
      margin-bottom: 18px;
      background: linear-gradient(135deg, rgba(110,231,183,0.18), rgba(124,156,255,0.18));
      border: 1px solid rgba(110,231,183,0.25);
      font-size: 1.2rem;
    }

    .feature h3 {
      margin: 0 0 8px;
      font-size: 1.1rem;
    }

    .feature p {
      margin: 0;
      color: var(--muted);
      line-height: 1.7;
    }

    .about-section {
      margin-top: 46px;
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 28px;
      padding: 28px 30px;
      border-radius: 28px;
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.02);
      box-shadow: var(--shadow);
    }

    .about-copy h2 {
      margin: 0 0 12px;
      font-size: clamp(2rem, 3vw, 2.8rem);
      letter-spacing: -0.05em;
    }

    .about-copy p {
      margin: 0 0 18px;
      color: var(--muted);
      line-height: 1.8;
    }

    .about-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 12px;
    }

    .about-list li {
      position: relative;
      padding-left: 24px;
      color: var(--text);
      line-height: 1.7;
    }

    .about-list li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: var(--primary);
      font-weight: 800;
    }

    .about-panel {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
      align-content: center;
    }

    .about-stat {
      display: grid;
      gap: 8px;
      padding: 20px 18px;
      border-radius: 18px;
      background: linear-gradient(135deg, rgba(110, 231, 183, 0.08), rgba(124, 156, 255, 0.08));
      border: 1px solid rgba(255,255,255,0.06);
    }

    .about-stat strong {
      font-size: clamp(1.7rem, 2vw, 2.2rem);
      letter-spacing: -0.05em;
    }

    .about-stat span {
      color: var(--muted);
      line-height: 1.5;
    }

    .services-section {
      margin-top: 46px;
    }

    .services-heading {
      margin-bottom: 24px;
    }

    .services-heading h2 {
      margin: 0;
      font-size: clamp(2rem, 3vw, 2.8rem);
      letter-spacing: -0.05em;
    }

    .story-article {
      margin-top: 46px;
      padding: 28px 30px;
      border-radius: 28px;
      border: 1px solid rgba(255,255,255,0.08);
      background: linear-gradient(135deg, rgba(110, 231, 183, 0.06), rgba(124, 156, 255, 0.06));
      box-shadow: var(--shadow);
    }

    .story-article h2 {
      margin: 0 0 16px;
      font-size: clamp(2rem, 3vw, 2.8rem);
      letter-spacing: -0.05em;
    }

    .story-article p {
      margin: 0 0 18px;
      color: var(--muted);
      line-height: 1.8;
      font-size: 1.02rem;
    }

    .story-article p:last-child {
      margin-bottom: 0;
    }

    .cta-panel {
      margin-top: 46px;
      padding: 28px 30px;
      border-radius: 28px;
      border: 1px solid rgba(255,255,255,0.08);
      background: linear-gradient(135deg, rgba(110, 231, 183, 0.1), rgba(124, 156, 255, 0.1));
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }

    .cta-panel h2 {
      margin: 0 0 6px;
      font-size: clamp(1.8rem, 3vw, 2.7rem);
      letter-spacing: -0.05em;
    }

    .cta-panel p {
      margin: 0;
      color: var(--muted);
    }

    .contact-form {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
      width: min(100%, 520px);
    }

    .contact-form label {
      display: grid;
      gap: 6px;
      color: var(--muted);
      font-size: 0.9rem;
    }

    .contact-form label:nth-child(3),
    .contact-form button {
      grid-column: 1 / -1;
    }

    .contact-form input,
    .contact-form textarea {
      width: 100%;
      padding: 0.8rem 0.9rem;
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 12px;
      background: rgba(8, 17, 32, 0.65);
      color: var(--text);
      font: inherit;
    }

    .contact-form textarea {
      min-height: 100px;
      resize: vertical;
    }

    .contact-form input:focus,
    .contact-form textarea:focus {
      outline: 2px solid var(--primary);
      outline-offset: 2px;
    }

    @media (max-width: 900px) {
      .hero {
        grid-template-columns: 1fr;
      }

      .features {
        grid-template-columns: 1fr;
      }

      .about-section {
        grid-template-columns: 1fr;
      }

      .cta-panel {
        flex-direction: column;
        align-items: flex-start;
      }

      .contact-form {
        width: 100%;
      }
    }

    @media (max-width: 620px) {
      .nav {
        flex-wrap: wrap;
        gap: 16px;
      }

      .nav-links {
        flex-wrap: wrap;
        gap: 12px 18px;
      }

      .nav-actions {
        width: 100%;
        justify-content: space-between;
      }

      .btn {
        flex: 1;
      }
    }
  `;
  document.head.appendChild(style);

  document.body.innerHTML = `
    <div class="page">
      <header class="nav">
        <div class="brand">
          <div class="brand-mark">VS</div>
          VS Financial & Branding Consultants
        </div>

        <nav class="nav-links" aria-label="Main navigation">
          <a href="#">Main</a>
          <a href="#features">Services</a>
          <a href="#about">About</a>
        </nav>

        <div class="nav-actions">
          <a href="#start" class="btn btn-primary">Get started</a>
        </div>
      </header>

      <main>
        <section class="hero">
          <div>
            <div class="eyebrow">Built for ambitious teams</div>
            <h1>Turn bold ideas into <span class="highlight">momentum</span>.</h1>
            <p class="subtext">
              VS Financial & Branding Consultants helps startups and growing businesses launch faster, convert better,
              and scale smarter with a platform designed to keep execution simple and growth measurable.
            </p>
          </div>

          <div class="hero-visual" aria-hidden="true">
            <div class="hero-art">
              <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="210" cy="160" r="120" fill="url(#glow)" />
                <path d="M70 230C115 200 133 214 166 174C200 134 225 174 258 130C286 93 315 119 350 70"
                      stroke="url(#line)" stroke-width="5" stroke-linecap="round" />
                <path d="M70 250H350M70 205H350M70 160H350M70 115H350"
                      stroke="white" stroke-opacity=".09" />
                <rect x="95" y="180" width="24" height="70" rx="8" fill="#7c9cff" fill-opacity=".7" />
                <rect x="145" y="155" width="24" height="95" rx="8" fill="#6ee7b7" fill-opacity=".75" />
                <rect x="195" y="168" width="24" height="82" rx="8" fill="#7c9cff" fill-opacity=".7" />
                <rect x="245" y="125" width="24" height="125" rx="8" fill="#6ee7b7" fill-opacity=".75" />
                <rect x="295" y="100" width="24" height="150" rx="8" fill="#7c9cff" fill-opacity=".7" />
                <circle cx="350" cy="70" r="8" fill="#6ee7b7" />
                <defs>
                  <linearGradient id="line" x1="70" y1="230" x2="350" y2="70" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6ee7b7" />
                    <stop offset="1" stop-color="#7c9cff" />
                  </linearGradient>
                  <radialGradient id="glow" cx="0" cy="0" r="1" gradientTransform="translate(210 160) rotate(90) scale(120)">
                    <stop stop-color="#7c9cff" stop-opacity=".2" />
                    <stop offset="1" stop-color="#7c9cff" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>
              <div class="hero-art-card">
                <span>Growth in focus</span>
                <strong>Plan. Build. Grow.</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="features" class="features" aria-label="Key features">
         

          

          
        </section>

        <section id="services" class="services-section" aria-labelledby="services-title">
          <div class="services-heading">
            <div class="eyebrow">Our services</div>
            <h2 id="services-title">Practical expertise for your next stage.</h2>
          </div>

          <div class="features">
            <article class="feature">
              <div class="icon">🧭</div>
              <h3>Business strategy</h3>
              <p>Set clear priorities and make confident decisions with a strategy tailored to your goals.</p>
            </article>

            <article class="feature">
              <div class="icon">✦</div>
              <h3>Brand positioning</h3>
              <p>Clarify what makes your business distinct and communicate it consistently to your audience.</p>
            </article>

            <article class="feature">
              <div class="icon">📊</div>
              <h3>Growth consulting</h3>
              <p>Improve operations and build sustainable systems that support your business as it grows.</p>
            </article>

            <article class="feature">
            <div class="icon">🔒</div>
            <h3>Operate with confidence</h3>
            <p>Keep every financial decision strategic, reliable, and aligned with your long-term goals.</p>
          </article>

          <article class="feature">
            <div class="icon">📈</div>
            <h3>Grow with clarity</h3>
            <p>Build a stronger financial future with clarity, confidence, and expert guidance.</p>
          </article>

           <article class="feature">
            <div class="icon">⚡</div>
            <h3>Launch faster</h3>
            <p>Keep every financial decision strategic, reliable, and aligned with your long-term goals.</p>
          </article>
          </div>
        </section>




        <section id="about" class="about-section" aria-label="About us">
          <div class="about-copy">
            <div class="eyebrow">About us</div>
            <h2>Strategy that turns complexity into momentum.</h2>
            <p>
              VS Financial & Branding Consultants partners with founders and leadership teams to simplify decision-making,
              sharpen brand positioning, and build sustainable growth systems that support long-term success.
            </p>
            <ul class="about-list">
              <li>Hands-on advisory across finance, operations, and market positioning.</li>
              <li>Clear frameworks designed for founder-led businesses and scaling teams.</li>
              <li>Long-term partnerships focused on measurable, sustainable results.</li>
            </ul>
          </div>

          <div class="about-panel" aria-label="Business impact metrics">
            <div class="about-stat">
              <strong>8+ yrs</strong>
              <span>of strategic consulting experience</span>
            </div>
            <div class="about-stat">
              <strong>150+</strong>
              <span>businesses supported across growth stages</span>
            </div>
            <div class="about-stat">
              <strong>3x</strong>
              <span>average improvement in operational clarity</span>
            </div>
            <div class="about-stat">
              <strong>24/7</strong>
              <span>partnership mindset built around your goals</span>
            </div>
          </div>
        </section>

        <article class="story-article" aria-label="About the founder">
          <div class="eyebrow">About me</div>
          <h2>Hi, I’m Viktor Sobolevskyi.</h2>
          <p>
            I help businesses and individuals move forward with clarity, confidence, and smart strategic decisions.
            With over 10 years of experience in economics, accounting, and auditing, I provide businesses with a strategic approach to financial management and growth. My expertise combines financial insight, analytical thinking, and practical business experience to help clients make confident decisions, optimize performance, and build a stronger financial foundation. I focus on delivering clarity, precision, and tailored solutions designed to create sustainable, long-term value.

          </p>
          <p>
            My work is rooted in building meaningful results through practical guidance, trusted advice, and long-term thinking.
            My approach is built on precision, integrity, and a deep understanding of how financial decisions shape the future of a business. Throughout my career, I have worked with complex financial information, identified opportunities for improvement, and helped create more efficient and sustainable financial processes. My mission is to go beyond numbers—to become a trusted financial partner who brings clarity to complexity and helps clients turn financial insight into meaningful business growth.

          </p>
        
        </article>

        
        <section class="cta-panel" id="start">
          <div>
            <h2>Ready to move faster?</h2>
            <p>Turn financial challenges into opportunities with expert guidance built around your goals. Contact us!</p>
          </div>
           <form class="contact-form" action="https://formsubmit.co/vsfinbrand@gmail.com" method="POST"  enctype="text/plain"> 




          <!--<form class="contact-form" target="_blank" action="https://formsubmit.co/vsfinbrand@gmail.com" method="POST">-->
          <!--  <div class="form-group">
              <div class="form-row">
                <div class="col">
                  <input type="text" name="name" class="form-control" placeholder="Full Name" required>
                </div>
                <div class="col">
                  <input type="email" name="email" class="form-control" placeholder="Email Address" required>
                </div>
              </div>
            </div>
            <div class="form-group">
              <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
            </div>
            <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>-->
          
          
          
          
          
          
          
          
          
          <label for="contact-name">Name
            <input type="text" name="name" class="form-control" placeholder="Full Name" required>  
            <!-- input id="contact-name" name="name" type="text" autocomplete="name" required>-->
            </label>
            <label for="contact-email">Email
              <input type="email" name="email" class="form-control" placeholder="Email Address" required>  
              <!--  <input id="contact-email" name="email" type="email" autocomplete="email" required>-->

            </label>
            <label for="contact-message">How can we help?
              <!--<textarea id="contact-message" name="message" required></textarea>-->
              <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
            </label>
            <button type="submit" class="btn btn-primary">Send message</button>
          </form>
        
        </section>
      </main>
    </div>
  `;
});
