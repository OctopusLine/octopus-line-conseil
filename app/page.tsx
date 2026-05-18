"use client";

import { useEffect, useState } from "react";

export default function OctopusLineConseil() {
  const [lang, setLang] = useState("fr");

  const t = {
    fr: {
      available: "Disponible sous 48h",
      contact: "CONTACT",
      transition: "DSI DE TRANSITION",
      expertise: "EXPERTISES",
      critical: "SITUATIONS CRITIQUES",
      cyber: "CYBERSÉCURITÉ & GOUVERNANCE",
      operational: "Leadership IT Exécutif · Transformation · Gestion de Crise · DSI de Transition / RSSI",
      directMissions: "Missions directes ou via cabinets partenaires. Management de transition, transformation SI, gouvernance IT, cybersécurité, IA & Innovation. Intervention rapide sur contextes stratégiques et situations critiques.",
      region: "Sophia Antipolis · Nice · Aix-Marseille · Monaco · Suisse · Paris",
      talk: "Parlons de votre situation",
      discover: "Découvrir les expertises",
      heroLabel: "MANAGER DE TRANSITION DSI · CDO · RSSI · CISO",
      heroTitle: "Transformation SI, gestion de crise & management de transition.",
      heroHighlight: "Opérationnel dès le premier jour.",
      heroText: "Pilotage DSI de transition, transformation IT, gestion de crise, carve-out & intégration SI. Alignement technologique et objectifs métiers dans les contextes sensibles."
    },
    en: {
      available: "Available within 48h",
      contact: "CONTACT",
      transition: "INTERIM CIO",
      expertise: "EXPERTISE",
      critical: "CRITICAL SITUATIONS",
      cyber: "CYBERSECURITY & GOVERNANCE",
      talk: "Let's discuss your situation",
      discover: "Discover expertise",
      heroLabel: "INTERIM CIO · CDO · CISO · CTO",
      heroTitle: "IT transformation, crisis management & interim leadership.",
      heroHighlight: "Operational from day one.",
      heroText: "Interim CIO leadership, IT transformation, crisis management, carve-out & system integration. Technology aligned with business objectives in sensitive environments.",
      expertisesLabel: "EXPERTISE",
      expertisesTitle: "One octopus, eight tentacles.",
      expertisesHighlight: "A single strategic partner.",
      expertisesText: "Interim CIO leadership, IT transformation, cybersecurity, governance, ERP, AI & Innovation — project leadership, migrations, ERP/CRM, crisis management and cybersecurity with a pragmatic business-driven approach.",
      criticalTitle: "Five situations where every week matters.",
      criticalText: "Executives call us when something can no longer wait: CIO departure, cyber crisis, ERP failure or governance issues.",
      cyberTitle: "Cybersecurity & compliance are no longer optional.",
      cyberText: "NIS2, GDPR, ISO 27001, BCP/DRP: every IT transformation must integrate resilience and governance from day one.",
      contactTitle: "A critical need or strategic project?",
      contactButton: "Talk with an expert →",
      operational: "Executive IT Leadership · Transformation · Crisis Management · Interim CIO / CISO",
      directMissions: "Direct assignments or partner firms. Interim management, IT transformation, IT governance, cybersecurity, AI & Innovation. Rapid intervention for strategic environments and critical situations.",
      region: "Sophia Antipolis · French Riviera · Aix-Marseille · Monaco · Switzerland · Paris"
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Inter, sans-serif;
          background: #020817;
          color: white;
          overflow-x: hidden;
        }

        html {
          scroll-behavior: smooth;
        }

        :root {
          --blue: #00bfff;
          --bg: #020817;
          --card: #071120;
          --border: rgba(0,191,255,0.15);
          --muted: rgba(255,255,255,0.6);
        }

        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          justify-content: flex-start;
          gap:24px;
          align-items: center;
          padding: 14px 32px;
          width:100%;
          overflow:hidden;
          background: rgba(2,8,23,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: clamp(0.9rem,1vw,1.05rem);
          white-space:nowrap;
        }

        .logo span {
          color: var(--blue);
        }

        .nav-links {
          display: flex;
          flex-wrap:wrap;
          gap: clamp(6px,0.7vw,14px);
        }

        .nav-links a {
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-size: clamp(0.54rem,0.68vw,0.72rem);
          text-transform: uppercase;
          font-weight: 700;
        }

        .hero {
          width:100%;
          min-height: 100vh;
          display: grid;
          grid-template-columns: minmax(0,1.3fr) minmax(320px,560px);
          align-items: center;
          gap: 24px;
          padding: 7vw 4vw 5vw;
          max-width: 1680px;
          margin: 0 auto;
          position: relative;
          background:
            radial-gradient(circle at top right, rgba(0,191,255,0.12), transparent 35%),
            linear-gradient(#020817, #020b18);
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,191,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,191,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .hero h1 {
          font-size: clamp(2.8rem, 7vw, 5rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 900;
          margin-bottom: 24px;
        }

        .hero h1 em {
          color: var(--blue);
          font-style: normal;
        }

        .hero p {
          color: var(--muted);
          line-height: 1.8;
          max-width: 640px;
          margin-bottom: 28px;
        }

        .buttons {
          display: flex;
          gap: 16px;
          margin-top: 28px;
        }

        .btn-primary {
          background: var(--blue);
          color: #000;
          padding: 14px 24px;
          border-radius: 4px;
          font-weight: 800;
          text-decoration: none;
        }

        .btn-secondary {
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          padding: 14px 24px;
          border-radius: 4px;
          text-decoration: none;
        }

        .hero-card {
          background: rgba(8,18,38,0.92);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 30px;
          position: relative;
          z-index: 2;
        }

        .hero-card-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .hero-card-top h3 {
          font-size: clamp(0.9rem,1vw,1rem);
          font-weight: 900;
        }

        .hero-card-top p {
          color: var(--blue);
          font-size: 0.72rem;
          margin: 0;
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .role-grid {
          display: grid;
          grid-template-columns: repeat(2,minmax(220px,1fr));
          gap: 18px;
          margin-bottom: 22px;
        }

        .role-box {
          border: 1px solid rgba(0,191,255,0.15);
          background: rgba(0,191,255,0.04);
          border-radius: 16px;
          padding: 24px;
          min-height: 220px;
        }

        .role-box h4 {
          word-break:break-word;
          color: var(--blue);
          font-size: 1.1rem;
          margin-bottom: 6px;
          font-weight: 900;
        }

        .role-box p {
          font-size: 0.8rem;
          margin: 0;
        }

        .tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 22px;
        }

        .tag {
          border: 1px solid rgba(255,255,255,0.12);
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.7);
        }

        section {
          padding: 6vw 4vw;
          width:100%;
          max-width:1680px;
          margin:0 auto;
          display:flex;
          flex-direction:column;
          align-items:flex-start;
          position: relative;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3.4rem);
          line-height: 1;
          font-weight: 900;
          margin-bottom: 18px;
          letter-spacing: -0.05em;
        }

        .section-label {
          color: var(--blue);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.95rem;
          font-weight: 900;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .nav-links a strong {
          font-size: clamp(0.68rem,0.9vw,0.88rem);
          letter-spacing: 0.06em;
        }

        .section-sub {
          color: rgba(255,255,255,0.6);
          max-width: 760px;
          line-height: 1.8;
          margin-bottom: 42px;
        }

        .expertise-grid {
          width:100%;
          max-width:1280px;
          display: grid;
          grid-template-columns: repeat(4,minmax(0,1fr));
          gap: 1px;
          background: rgba(0,191,255,0.08);
        }

        .expertise-card {
          background: #071120;
          padding: 34px 24px;
        }

        .expertise-card h3 {
          font-size: 1.05rem;
          margin: 14px 0;
          font-weight: 900;
        }

        .expertise-card p {
          color: rgba(255,255,255,0.58);
          line-height: 1.7;
          font-size: 0.9rem;
        }

        .critical-grid {
          width:100%;
          max-width:1280px;
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
          gap: 1px;
          background: rgba(255,255,255,0.06);
        }

        .critical-card {
          background: #050d18;
          padding: 28px;
        }

        .critical-card h3 {
          font-weight: 900;
          margin-bottom: 12px;
        }

        .critical-card p {
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          font-size: 0.88rem;
        }

        .cyber-grid {
          width:100%;
          max-width:1280px;
          display: grid;
          grid-template-columns: repeat(4,minmax(0,1fr));
          gap: 1px;
          background: rgba(255,255,255,0.06);
        }

        .cyber-card {
          background: #071120;
          padding: 26px;
        }

        .cyber-card h4 {
          font-size: 1rem;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .cyber-card p {
          color: rgba(255,255,255,0.58);
          line-height: 1.7;
          font-size: 0.88rem;
        }

        footer {
          padding: 2vw 4vw;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          justify-content: flex-start;
          align-items: center;
          color: rgba(255,255,255,0.4);
          font-size: 0.8rem;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all .7s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media(max-width:1200px){
          .hero {
            grid-template-columns: 1fr;
            text-align:left;
          }

          .hero-card {
            width:100%;
            max-width:100%;
          }
        }

        @media(max-width:1200px){
          .expertise-grid-custom-grid {
            grid-template-columns: repeat(2,minmax(0,1fr)) !important;
          }
        }

        @media(max-width:1100px){
          .hero {
            grid-template-columns: 1fr;
            gap: 48px;
            max-width: 100%;
          }

          .expertise-grid,
          .critical-grid,
          .cyber-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media(max-width:980px){
          .hero-card {
            width: 100%;
          }

          .role-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media(max-width:980px){
          nav {
            padding:12px 16px;
          }

          .logo {
            font-size:0.85rem;
          }

          .nav-links {
            gap:10px;
          }

          .nav-links a strong {
            font-size:0.7rem;
          }
        }

        @media(max-width:1400px){
          .hero-card {
            overflow:hidden;
          }
        }

        @media(max-width:1200px){
          .expertise-grid-custom-grid {
            grid-template-columns: repeat(2,minmax(0,1fr)) !important;
          }
        }

        @media(max-width:768px){
          .expertise-grid-custom-grid {
            grid-template-columns: 1fr !important;
          }

          body {
            overflow-x:hidden;
          }

          .buttons {
            flex-direction:column;
            width:100%;
          }

          .btn-primary,
          .btn-secondary {
            width:100%;
            text-align:center;
          }

          nav {
            padding: 16px 20px;
          }

          .nav-links {
            display: none;
          }

          .hero,
          section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .hero h1 {
            font-size: 3rem;
          }

          .section-title {
            font-size: 2.2rem;
          }

          .expertise-grid,
          .critical-grid,
          .cyber-grid {
            grid-template-columns: 1fr;
          }

          .role-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .role-box {
            min-height: auto;
            width: 100%;
          }
        }
      `}</style>

      <nav>
        <div className="logo">
          🐙 Octopus <span>Line</span> Conseil
        </div>

        <div style={{display:"flex",alignItems:"center",gap:"18px",marginLeft:"auto"}}>
          <div className="nav-links">
            <a href="#transition"><strong>{t[lang].transition}</strong></a>
            <a href="#expertises"><strong>{t[lang].expertise}</strong></a>
            <a href="#critical"><strong>{t[lang].critical}</strong></a>
            <a href="#cyber"><strong>{t[lang].cyber}</strong></a>
            <a href="#contact"><strong>CONTACT</strong></a>
            <a href="#network"><strong>{lang === "fr" ? "CABINETS & RÉSEAU" : "PARTNER NETWORK"}</strong></a>
          </div>

          <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
            <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.65)"}}>
              <span style={{color:"#00ff9d"}}>●</span> {t[lang].available}
            </div>

            <div style={{display:"flex",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"4px",overflow:"hidden"}}>
              <button
                onClick={() => setLang("fr")}
                style={{
                  background: lang === "fr" ? "#00bfff" : "transparent",
                  color: lang === "fr" ? "#000" : "#fff",
                  border:"none",
                  padding:"8px 10px",
                  fontWeight:800,
                  cursor:"pointer"
                }}
              >FR</button>
              <button
                onClick={() => setLang("en")}
                style={{
                  background: lang === "en" ? "#00bfff" : "transparent",
                  color: lang === "en" ? "#000" : "#fff",
                  border:"none",
                  padding:"8px 10px",
                  fontWeight:800,
                  cursor:"pointer"
                }}
              >EN</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="transition" className="hero">
        <svg
          style={{
            position: "absolute",
            right: "4%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "28vw",
            minWidth:"220px",
            maxWidth:"420px",
            opacity: 0.08,
            zIndex: 1
          }}
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="85" r="40" stroke="#00bfff" strokeWidth="1.5" />
          <ellipse cx="100" cy="88" rx="22" ry="26" fill="rgba(0,191,255,0.08)" stroke="#00bfff" strokeWidth="1" />
          <path d="M72 115 Q55 135 48 155" stroke="#00bfff" strokeWidth="1.2" fill="none" />
          <path d="M80 120 Q68 145 65 168" stroke="#00bfff" strokeWidth="1.2" fill="none" />
          <path d="M90 122 Q85 150 86 172" stroke="#00bfff" strokeWidth="1.2" fill="none" />
          <path d="M100 123 Q100 152 102 174" stroke="#00bfff" strokeWidth="1.2" fill="none" />
          <path d="M110 121 Q118 148 120 170" stroke="#00bfff" strokeWidth="1.2" fill="none" />
          <circle cx="91" cy="82" r="4" fill="#00bfff" />
          <circle cx="109" cy="82" r="4" fill="#00bfff" />
        </svg>
        <div className="grid-bg"></div>

        <div
          style={{
            position:"relative",
            zIndex:2,
            maxWidth:"1280px",
            width:"100%",
            margin:"0 auto",
            textAlign:"left"
          }}>
          <div className="section-label" style={{maxWidth:"1100px"}}>
            {t[lang].heroLabel}
          </div>

          <h1>
            {t[lang].heroTitle}<br />
            <em>{t[lang].heroHighlight}</em>
          </h1>

          <p>
            {t[lang].heroText}
          </p>

          <div className="buttons">
            <button
              className="btn-primary"
              type="button"
              onClick={() => {
                const section = document.getElementById('network');
                if(section){
                  section.scrollIntoView({ behavior:'smooth' });
                }
              }}
            >
              {lang === "fr" ? "Nous rejoindre / Parlons-en" : "Join our network / Let's talk"}
            </button>

            <a className="btn-secondary" href="#expertises">
              {t[lang].discover}
            </a>
          </div>
        </div>

        <div className="hero-card reveal">
          <div className="hero-card-top" style={{flexDirection:"column",alignItems:"flex-start",
                  textAlign:"left",border:"none",cursor:"pointer"}}>
            <div style={{ fontSize: "3.2rem",marginBottom:"18px" }}>🐙</div>

            <div style={{flex:1,width:"100%"}}>
              <h3 style={{
                fontSize:"1.55rem",
                fontWeight:900,
                marginBottom:"14px",
                color:"#fff",
                lineHeight:1.1
              }}>
                Octopus Line Conseil
              </h3>

              <div
                style={{
                  display:"flex",
                  flexDirection:"column",
                  justifyContent:"flex-start",
                  alignItems:"flex-start",
                  textAlign:"left",
                  gap:"8px",
                  width:"100%",
                  fontSize:"1.2rem",
                  fontWeight:900,
                  color:"#00bfff",
                  lineHeight:1.35,
                  textTransform:"uppercase",
                  letterSpacing:"0.02em"
                }}
              >
                {lang === "fr" ? (
                  <>
                    Leadership IT Exécutif<br/>
                    Transformation<br/>
                    Gestion de Crise<br/>
                    DSI de Transition / RSSI
                  </>
                ) : (
                  <>
                    Executive IT Leadership<br/>
                    Transformation<br/>
                    Crisis Management<br/>
                    Interim CIO / CISO
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="role-grid">
            <div className="role-box" style={{padding:"28px",minHeight:"260px",border:"1px solid rgba(0,191,255,0.25)",background:"linear-gradient(180deg,#071120,#06101d)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"18px",marginBottom:"18px"}}>
                <div style={{fontSize:"2.4rem"}}>👤</div>
                <h4 style={{fontSize:"clamp(2rem,4vw,3rem)",fontWeight:900,color:"#fff",margin:0,lineHeight:1}}>
                  {lang === "fr" ? (
                    <>
                      DSI
                    </>
                  ) : (
                    <>
                      CIO
                    </>
                  )}
                </h4>
              </div>

              <div style={{height:"2px",background:"rgba(0,191,255,0.55)",margin:"18px 0 20px"}}></div>

              <p style={{fontSize:"1.05rem",lineHeight:1.7,color:"rgba(255,255,255,0.82)"}}>
                {lang === "fr" ? "Transformation SI" : "IT Transformation"} & Gouvernance<br/>
                Alignement Business & Performance
              </p>
            </div>

            <div className="role-box" style={{padding:"28px",minHeight:"260px",border:"1px solid rgba(255,80,80,0.3)",background:"linear-gradient(180deg,#071120,#06101d)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"18px",marginBottom:"18px"}}>
                <div style={{fontSize:"2.4rem"}}>🔒</div>
                <h4 style={{fontSize:"clamp(2rem,4vw,3rem)",fontWeight:900,color:"#fff",margin:0,lineHeight:1}}>
                  {lang === "fr" ? (
                    <>
                      RSSI
                    </>
                  ) : (
                    <>
                      CISO
                    </>
                  )}
                </h4>
              </div>

              <div style={{height:"2px",background:"rgba(255,80,80,0.55)",margin:"18px 0 20px"}}></div>

              <p style={{fontSize:"1.05rem",lineHeight:1.7,color:"rgba(255,255,255,0.82)"}}>
                {lang === "fr" ? "Cybersécurité" : "Cybersecurity"}, Résilience &<br/>
                Risk Management
              </p>
            </div>

            <div className="role-box" style={{padding:"28px",minHeight:"260px",border:"1px solid rgba(190,100,255,0.3)",background:"linear-gradient(180deg,#071120,#06101d)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"18px",marginBottom:"18px"}}>
                <div style={{fontSize:"2.4rem"}}>🗄️</div>
                <div>
                  <h4 style={{fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:900,color:"#fff",margin:0,lineHeight:1}}>
                    CDO
                  </h4>
                  <div style={{fontSize:"1rem",fontWeight:800,color:"#b86cff",marginTop:"6px"}}>
                    DIGITAL & IA
                  </div>
                </div>
              </div>

              <div style={{height:"2px",background:"rgba(190,100,255,0.55)",margin:"18px 0 20px"}}></div>

              <p style={{fontSize:"1.05rem",lineHeight:1.7,color:"rgba(255,255,255,0.82)"}}>
                {lang === "fr" ? (
                  <>
                    IA, Digital & Innovation<br/>
                    Transformation Digitale, Valeur & Pilotage
                  </>
                ) : (
                  <>
                    AI, Digital & Innovation<br/>
                    Digital Transformation, Value & Leadership
                  </>
                )}
              </p>
            </div>

            <div className="role-box" style={{padding:"28px",minHeight:"260px",border:"1px solid rgba(0,255,213,0.25)",background:"linear-gradient(180deg,#071120,#06101d)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"18px",marginBottom:"18px"}}>
                <div style={{fontSize:"2.4rem"}}>☁️</div>
                <h4 style={{fontSize:"clamp(2rem,4vw,3rem)",fontWeight:900,color:"#fff",margin:0,lineHeight:1}}>CTO</h4>
              </div>

              <div style={{height:"2px",background:"rgba(0,255,213,0.55)",margin:"18px 0 20px"}}></div>

              <p style={{fontSize:"1.05rem",lineHeight:1.7,color:"rgba(255,255,255,0.82)"}}>
                {lang === "fr" ? (
                  <>
                    Architecture, Cloud & Delivery<br/>
                    Scalabilité, Intégration & Exécution
                  </>
                ) : (
                  <>
                    Architecture, Cloud & Delivery<br/>
                    Scalability, Integration & Execution
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="tag-list">
            <div className="tag">{lang === "fr" ? "Management de Transition" : "Interim Management"}</div>
            <div className="tag">{lang === "fr" ? "Transformation SI" : "IT Transformation"}</div>
            <div className="tag">{lang === "fr" ? "IT Governance" : "IT Governance"}</div>
            <div className="tag">{lang === "fr" ? "Project Management" : "Project Management"}</div>
            <div className="tag">{lang === "fr" ? "IA & Data" : "AI & Data"}</div>
            <div className="tag">{lang === "fr" ? "Cybersécurité" : "Cybersecurity"}</div>
            <div className="tag">{lang === "fr" ? "Fusion & M&A" : "Mergers & Acquisitions"}</div>
            <div className="tag">Cloud</div>
            <div className="tag">{lang === "fr" ? "Gestion de Crise" : "Crisis Management"}</div>
          </div>

          <div style={{background:"rgba(0,191,255,0.04)",border:"1px solid rgba(0,191,255,0.1)",borderRadius:12,padding:"18px"}}>
            <p style={{fontSize:"0.82rem",color:"rgba(255,255,255,0.55)",lineHeight:1.7,marginBottom:"10px"}}>
              {t[lang].directMissions}
            </p>

            <div style={{fontSize:"0.72rem",fontWeight:800,color:"#00bfff"}}>
              {t[lang].region}
            </div>
          </div>
        </div>
      </section>

      <section id="expertises" style={{alignItems:"center"}}>
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto",textAlign:"left"}}>
          <div className="section-label">{lang === "fr" ? "EXPERTISES" : t[lang].expertisesLabel}</div>

          <h2 className="section-title">
            {lang === "fr" ? "Une pieuvre, huit tentacules." : t[lang].expertisesTitle}<br />
            <span style={{color:"#00bfff"}}>{lang === "fr" ? "Un interlocuteur unique." : t[lang].expertisesHighlight}</span>
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "#d7f3ff",
              maxWidth: "1100px",
              marginBottom: "48px",
              fontWeight: 600
            }}
          >
            {lang === "fr" ? (
              <>
                DSI de transition, transformation IT, cybersécurité, gouvernance, ERP, IA & Innovation —<br />
                Pilotage Projet, DSI de transition / Migration, ERP CRM, IA & Innovation, transformation IT,<br />
                carve-out & intégration SI., gestion de crise, et cybersécurité :<br />
                <span style={{color:"white"}}>une approche pragmatique centrée business.</span>
              </>
            ) : (
              <>
                Interim CIO leadership, IT transformation, cybersecurity, governance, ERP, AI & Innovation —<br />
                Project management, migrations, ERP CRM, AI & Innovation, IT transformation,<br />
                carve-out & system integration, crisis management and cybersecurity:<br />
                <span style={{color:"white"}}>a pragmatic business-driven approach.</span>
              </>
            )}
          </p>
        </div>

        <div
          className="reveal expertise-grid-custom"
          style={{
            maxWidth:"1280px",
            margin:"0 auto",
            width:"100%",
            display:"flex",
            flexDirection:"column",
            alignItems:"flex-start",
            textAlign:"left"
          }}>
          <div style={{width:"100%",display:"block"}}>
            <div
              className="expertise-grid-custom-grid"
              style={{
                display:"grid",
                width:"100%",
                gridTemplateColumns:"repeat(4,1fr)",
                justifyItems:"stretch",
                alignItems:"stretch",
                gap:"24px"
              }}
            >
              {(lang === "fr"
              ? [
                  {
                    n:"01",
                    t:"DSI de Transition",
                    c:"#00bfff",
                    i:"🏛️",
                    d:"Transition de direction, restructuration, gouvernance DSI, pilotage de la performance et alignement business."
                  },
                  {
                    n:"02",
                    t:"Transformation SI",
                    c:"#b86cff",
                    i:"🚀",
                    d:"Stratégie & feuille de route, modernisation SI, architecture, cloud, automatisation et amélioration continue."
                  },
                  {
                    n:"03",
                    t:"Cybersécurité",
                    c:"#ff4d4d",
                    i:"🔒",
                    d:"Stratégie cybersécurité, conformité NIS2 & ISO 27001, gestion des risques et résilience."
                  },
                  {
                    n:"04",
                    t:"IA, Digital & Innovation",
                    c:"#00ffd5",
                    i:"🗄️",
                    d:"Cas d’usage IA, copilots, gouvernance IA, IA générative, automatisation métier et transformation digitale."
                  },
                  {
                    n:"05",
                    t:"Pilotage Projet",
                    c:"#ff9800",
                    i:"📋",
                    d:"Pilotage programmes complexes, maîtrise coûts, délais, qualité et création de valeur."
                  },
                  
                  
                  {
                    n:"06",
                    t:"Gestion de Crise",
                    c:"#00ffd5",
                    i:"⚠️",
                    d:"Gestion de Crise IT, situations d’urgence business, remédiation, stabilisation rapide et accompagnement des directions générales."
                  },
                  {
                    n:"07",
                    t:"Cabinets Partenaires",
                    c:"#289cff",
                    i:"🤝",
                    d:"Réseau de cabinets partenaires, executive search, missions stratégiques et management de transition."
                  },
                  {
                    n:"08",
                    t:"Réseau Executive IT",
                    c:"#35ff9c",
                    i:"🌐",
                    d:"Experts CIO, CTO, CISO, directeurs de programme et leadership IT pour contextes complexes."
                  }
                ]
              : [
                  {
                    n:"01",
                    t:"Interim CIO",
                    c:"#00bfff",
                    i:"🏛️",
                    d:"Interim leadership, IT governance, restructuring and business alignment."
                  },
                  {
                    n:"02",
                    t:"IT Transformation",
                    c:"#b86cff",
                    i:"🚀",
                    d:"Roadmap, modernization, cloud, automation and continuous improvement."
                  },
                  {
                    n:"03",
                    t:"Cybersecurity",
                    c:"#ff4d4d",
                    i:"🔒",
                    d:"Cybersecurity strategy, NIS2 compliance, risk management and resilience."
                  },
                  {
                    n:"04",
                    t:"AI, Digital & Innovation",
                    c:"#00ffd5",
                    i:"🗄️",
                    d:"AI use cases, copilots, AI governance, generative AI, business automation and digital transformation."
                  },
                  {
                    n:"05",
                    t:"Program Management",
                    c:"#ff9800",
                    i:"📋",
                    d:"Complex program delivery, cost control, deadlines and value creation."
                  },
                  
                  
                  {
                    n:"06",
                    t:"Crisis Management",
                    c:"#00ffd5",
                    i:"⚠️",
                    d:"IT crisis management, business emergency situations, remediation, rapid stabilization and executive support."
                  },
                  {
                    n:"07",
                    t:"Partner Firms",
                    c:"#289cff",
                    i:"🤝",
                    d:"Executive partner firms, strategic assignments, executive search and interim leadership."
                  },
                  {
                    n:"08",
                    t:"Executive IT Network",
                    c:"#35ff9c",
                    i:"🌐",
                    d:"CIO, CTO, CISO and program leadership network for complex transformation environments."
                  }
                ]).map((card) => (
                <div
                  key={card.n}
                  style={{
                    background:"linear-gradient(180deg,#071120,#04101d)",
                    border:`1px solid ${card.c}55`,
                    borderRadius:"20px",
                    padding:"42px",
                    minHeight:"320px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"flex-start",
                    overflow:"hidden",
                    position:"relative",
                    boxShadow:`0 0 25px ${card.c}22`
                  }}
                >
                  <div style={{display:"flex",justifyContent:"flex-start",marginBottom:"18px"}}>
                    <div style={{fontSize:"2.5rem"}}>{card.i}</div>
                    <div style={{fontSize:"2rem",fontWeight:900,color:card.c}}>{card.n}</div>
                  </div>

                  <h3
                    style={{
                      fontSize:"clamp(1.45rem,2vw,2rem)",
                      lineHeight:1.05,
                      marginBottom:"16px",
                      fontWeight:900,
                      color:"white"
                    }}
                  >
                    {card.t}
                  </h3>

                  <div
                    style={{
                      height:"2px",
                      width:"100%",
                      background:card.c,
                      marginBottom:"18px"
                    }}
                  ></div>

                  <p
                    style={{
                      color:"rgba(255,255,255,0.82)",
                      lineHeight:1.8,
                      fontSize:"1rem"
                    }}
                  >
                    {card.d}
                  </p>
                </div>
              ))}
            </div>

          <div
              style={{
                marginTop:"28px",
                border:"1px solid rgba(0,191,255,0.3)",
                borderRadius:"18px",
                padding:"24px",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center",
                gap:"20px",
                flexWrap:"wrap",
                background:"rgba(0,191,255,0.05)"
              }}
            >
              <div style={{fontSize:"1.15rem",fontWeight:800,color:"#00bfff",lineHeight:1.7,maxWidth:"520px"}}>
                {lang === "fr"
                  ? "🌐 Sophia Antipolis • Nice • Aix-Marseille • Monaco • Suisse • Paris"
                  : "🌐 Sophia Antipolis • French Riviera • Aix-Marseille • Monaco • Switzerland • Paris"}
              </div>

              <div style={{color:"rgba(255,255,255,0.7)",fontSize:"0.95rem",lineHeight:1.8,maxWidth:"620px"}}>
                {lang === "fr"
                  ? "Management de transition · Transformation SI · Cybersécurité · Gouvernance · IA & Innovation"
                  : "Interim Management · IT Transformation · Cybersecurity · Governance · AI & Automation"}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="critical" style={{alignItems:"center"}}>
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto 42px",textAlign:"left"}}>
          <div className="section-label">{lang === "fr" ? "SITUATIONS CRITIQUES" : "CRITICAL SITUATIONS"}</div>

          <h2 className="section-title">
            {lang === "fr" ? (
              <>
                Cinq situations<br />
                où chaque semaine<br />
                compte.
              </>
            ) : (
              <>
                Five situations<br />
                where every week<br />
                matters.
              </>
            )}
          </h2>

          <p className="section-sub">
            {lang === "fr"
              ? "Les dirigeants nous appellent quand quelque chose ne peut plus attendre : vacance DSI, crise SI, cybersécurité, ERP ou gouvernance."
              : "Executives call us when something can no longer wait: CIO departure, cyber crisis, ERP failure or governance issues."}
          </p>
        </div>

        <div className="critical-grid reveal" style={{maxWidth:"1280px",margin:"0 auto"}}>
          {(lang === "fr"
            ? [
                "Départ DSI",
                "Crise cyber",
                "Projet ERP bloqué",
                "DSI sans gouvernance",
                "Fusion & M&A"
              ]
            : [
                "CIO departure",
                "Cyber crisis",
                "Blocked ERP project",
                "Ungoverned IT",
                "Merger & Acquisition"
              ]).map((item, i) => (
            <div className="critical-card" key={i}>
              <div style={{ fontSize: "1.6rem", marginBottom: 16 }}>🚨</div>
              <h3>{item}</h3>
              <p>
                {lang === "fr"
                  ? "Intervention rapide, stabilisation, gouvernance et retour à la performance."
                  : "Rapid intervention, stabilization, governance and return to operational performance."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="ai" style={{paddingTop:"7vw",alignItems:"center"}}>
        <div
          className="reveal"
          style={{
            maxWidth:"1280px",
            width:"100%",
            margin:"0 auto",
            textAlign:"left"
          }}
        >
          <div className="section-label">
            {lang === "fr" ? "IA & INNOVATION" : "AI & INNOVATION"}
          </div>

          <h2 className="section-title">
            {lang === "fr" ? (
              <>
                L’IA générative devient<br />
                un levier stratégique<br />
                de transformation.
              </>
            ) : (
              <>
                Generative AI becomes<br />
                a strategic driver<br />
                for transformation.
              </>
            )}
          </h2>

          <p className="section-sub" style={{maxWidth:"1100px"}}>
            {lang === "fr"
              ? "Accompagnement des directions générales et métiers sur les cas d’usage IA, copilots, gouvernance IA, IA générative & LLM, innovation métier et adoption entreprise."
              : "Supporting executive teams on AI use cases, copilots, AI governance, generative AI & LLM, business innovation and enterprise adoption."}
          </p>

          <div
            style={{
              display:"flex",
              flexWrap:"wrap",
              gap:"14px",
              marginTop:"10px"
            }}
          >
            {(lang === "fr"
              ? [
                  "Cas d’usage IA",
                  "IA générative",
                  "Copilots IA",
                  "Gouvernance IA",
                  "Innovation métier",
                  "Adoption entreprise"
                ]
              : [
                  "AI Use Cases",
                  "Generative AI",
                  "AI Copilots",
                  "AI Governance",
                  "Business Innovation",
                  "Enterprise Adoption"
                ]).map((item, i) => (
              <div
                key={i}
                style={{
                  border:"1px solid rgba(0,191,255,0.18)",
                  background:"rgba(0,191,255,0.06)",
                  padding:"10px 16px",
                  borderRadius:"999px",
                  color:"white",
                  fontSize:"0.95rem",
                  fontWeight:700
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cyber" style={{paddingTop:"2vw",alignItems:"center"}}>
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto 42px",textAlign:"left"}}>
          <div className="section-label">
            {lang === "fr" ? "CYBERSÉCURITÉ & GOUVERNANCE" : "CYBERSECURITY & GOVERNANCE"}
          </div>

          <h2 className="section-title">
            {lang === "fr" ? (
              <>
                Cybersécurité & conformité<br />
                ne sont plus des options.
              </>
            ) : (
              <>
                Cybersecurity & compliance<br />
                are no longer optional.
              </>
            )}
          </h2>

          <p className="section-sub">
            {lang === "fr"
              ? "NIS2, RGPD, ISO 27001, PCA/PRA : chaque transformation SI doit intégrer la résilience et la gouvernance dès le premier jour."
              : "NIS2, GDPR, ISO 27001, BCP/DRP: every IT transformation must integrate resilience and governance from day one."}
          </p>
        </div>

        <div className="cyber-grid reveal" style={{maxWidth:"1280px",margin:"0 auto"}}>
          {(lang === "fr"
            ? ["Audit SI", "Conformité", "Résilience", "Gouvernance"]
            : ["IT Audit", "Compliance", "Resilience", "Governance"]).map((item, i) => (
            <div className="cyber-card" key={i}>
              <div style={{ fontSize: "1.5rem", marginBottom: 14 }}>🔒</div>
              <h4>{item}</h4>
              <p>
                {lang === "fr"
                  ? "Audit SI, gouvernance, PCA/PRA, conformité réglementaire, cybersécurité et gestion des risques."
                  : "IT audit, governance, DRP/BCP, cybersecurity, regulatory compliance and risk management."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="network" style={{alignItems:"center"}}>
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto 42px",textAlign:"left"}}>
          <div className="section-label">
            {lang === "fr" ? "CABINETS PARTENAIRES & RÉSEAU EXECUTIVE" : "PARTNER FIRMS & EXECUTIVE NETWORK"}
          </div>

          <h2 className="section-title">
            {lang === "fr" ? (
              <>
                Missions directes,<br />
                cabinets partenaires &<br />
                réseau executive IT.
              </>
            ) : (
              <>
                Direct assignments,<br />
                executive partner firms &<br />
                executive IT network.
              </>
            )}
          </h2>

          <p className="section-sub">
            {lang === "fr"
              ? "Octopus Line Conseil développe un réseau de managers de transition, experts CIO/CISO/CTO et cabinets partenaires pour répondre rapidement aux contextes stratégiques, critiques ou de transformation."
              : "Octopus Line Conseil develops a network of interim executives, CIO/CISO/CTO experts and executive partner firms for strategic, transformation and critical environments."}
          </p>
        </div>

        <div
          className="reveal"
          style={{
            maxWidth:"1280px",
            width:"100%",
            margin:"40px auto 0",
            background:"rgba(0,191,255,0.05)",
            border:"1px solid rgba(0,191,255,0.18)",
            borderRadius:"20px",
            padding:"32px",
            marginTop:"30px"
          }}
        >
          <h3 style={{fontSize:"1.6rem",fontWeight:900,marginBottom:"22px"}}>
            {lang === "fr" ? "Nous rejoindre" : "Join our network"}
          </h3>

          <div
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
              gap:"18px"
            }}
          >
            <input placeholder={lang === "fr" ? "Nom & prénom" : "Full name"} style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}} />
            <input placeholder="Email" style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}} />
            <input placeholder={lang === "fr" ? "Fonction / expertise" : "Role / expertise"} style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}} />
            <input placeholder={lang === "fr" ? "TJM souhaité" : "Expected daily rate"} style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}} />
          </div>

          <textarea
            placeholder={lang === "fr"
              ? "Résumé de profil, missions, secteurs, ERP, cybersécurité, transformation, management de transition..."
              : "Profile summary, missions, ERP, cybersecurity, transformation, interim leadership..."}
            style={{
              width:"100%",
              minHeight:"140px",
              marginTop:"18px",
              padding:"16px",
              borderRadius:"12px",
              border:"1px solid rgba(255,255,255,0.1)",
              background:"#071120",
              color:"white",
              resize:"vertical"
            }}
          />

          <div
            style={{
              marginTop:"18px",
              padding:"18px",
              border:"1px dashed rgba(0,191,255,0.35)",
              borderRadius:"14px",
              background:"rgba(0,191,255,0.04)",
              display:"flex",
              flexDirection:"column",
              gap:"12px"
            }}
          >
            <div style={{fontWeight:800,color:"#00bfff",fontSize:"0.95rem"}}>
              {lang === "fr" ? "CV / Profil LinkedIn" : "Resume / LinkedIn Profile"}
            </div>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              style={{
                padding:"12px",
                borderRadius:"10px",
                border:"1px solid rgba(255,255,255,0.1)",
                background:"#071120",
                color:"rgba(255,255,255,0.8)"
              }}
            />

            <div style={{fontSize:"0.82rem",color:"rgba(255,255,255,0.55)",lineHeight:1.6}}>
              {lang === "fr"
                ? "Formats acceptés : PDF, DOC, DOCX · CIO · CISO · CTO · ERP · Cyber · IA & Innovation."
                : "Accepted formats: PDF, DOC, DOCX · CIO · CISO · CTO · ERP · Cyber · AI & Innovation."}
            </div>
          </div>

          <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"20px",flexWrap:"wrap",marginTop:"20px"}}>
            <div style={{color:"rgba(255,255,255,0.6)",fontSize:"0.9rem"}}>
              {lang === "fr"
                ? "Managers de transition · CIO · CISO · CTO · Program Directors · ERP · Cyber · IA & Innovation"
                : "Interim Executives · CIO · CISO · CTO · Program Directors · ERP · Cyber · AI & Innovation"}
            </div>

            <button className="btn-primary">
              {lang === "fr" ? "Envoyer mon profil" : "Submit my profile"}
            </button>
          </div>
        </div>
      </section>

      <section id="contact" style={{alignItems:"center"}}>
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto 28px",textAlign:"left"}}>
          <div className="section-label">
            {lang === "fr" ? "CONTACT" : "CONTACT"}
          </div>

          <p className="section-sub" style={{maxWidth:"900px"}}>
            {lang === "fr"
              ? "Direction générale, DSI, cabinets partenaires ou contexte critique : échangeons rapidement sur votre situation, vos enjeux de transformation ou vos besoins en management de transition."
              : "Executive management, CIO office, partner firms or critical environments: let's discuss your transformation, governance or interim leadership needs."}
          </p>
        </div>
        <div
          className="reveal"
          style={{
            maxWidth:"1280px",
            width:"100%",
            margin:"0 auto",
            background: "rgba(0,191,255,0.06)",
            border: "1px solid rgba(0,191,255,0.15)",
            borderRadius: 18,
            padding: 40,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20
          }}
        >
          <div>
            <div className="section-label">{t[lang].contact}</div>
            <h2 style={{ fontSize: "2rem", fontWeight: 900 }}>
              {lang === "fr" ? (
                <>
                  Un besoin critique,<br />
                  un projet stratégique ?
                </>
              ) : (
                <>
                  A critical need,<br />
                  a strategic project?
                </>
              )}
            </h2>
          </div>

          <button
            className="btn-primary"
            type="button"
            onClick={() => {
              const section = document.getElementById('contact-form');
              if(section){
                section.scrollIntoView({ behavior:'smooth' });
              }
            }}
            style={{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"260px",textAlign:"center",border:"none",cursor:"pointer"}}
          >
            {lang === "fr" ? "Échangez avec un expert →" : t[lang].contactButton}
          </button>
        </div>
      <div
          id="contact-form"
          className="reveal"
          style={{
            maxWidth:"1280px",
            width:"100%",
            margin:"32px auto 0",
            textAlign:"left",
            background:"rgba(0,191,255,0.04)",
            border:"1px solid rgba(0,191,255,0.15)",
            borderRadius:"18px",
            padding:"32px"
          }}
        >
          <h3 style={{fontSize:"1.6rem",fontWeight:900,marginBottom:"24px"}}>
            {lang === "fr" ? "Échangez avec un expert" : "Talk with an expert"}
          </h3>

          <div
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
              gap:"18px"
            }}
          >
            <input placeholder={lang === "fr" ? "Nom & prénom" : "Full name"} style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}} />
            <input placeholder="Email" style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}} />
            <input placeholder={lang === "fr" ? "Entreprise" : "Company"} style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}} />
            <input placeholder={lang === "fr" ? "Sujet" : "Subject"} style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}} />
          </div>

          <textarea
            placeholder={lang === "fr"
              ? "Décrivez votre contexte, projet, urgence ou besoin de management de transition..."
              : "Describe your project, challenge, urgency or interim management needs..."}
            style={{
              width:"100%",
              minHeight:"160px",
              marginTop:"18px",
              padding:"16px",
              borderRadius:"12px",
              border:"1px solid rgba(255,255,255,0.1)",
              background:"#071120",
              color:"white",
              resize:"vertical"
            }}
          />

          <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"20px",flexWrap:"wrap",marginTop:"24px"}}>
            <div style={{color:"rgba(255,255,255,0.55)",fontSize:"0.9rem"}}>
              {lang === "fr"
                ? "Réponse rapide · Direction générale · DSI · CIO · CISO · Transformation · Crise"
                : "Rapid response · Executive management · CIO · CISO · Transformation · Crisis"}
            </div>

            <button className="btn-primary">
              {lang === "fr" ? "Envoyer ma demande" : "Send request"}
            </button>
          </div>
        </div>
      </section>

      <footer style={{maxWidth:"1680px",width:"100%",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <span style={{fontSize:"1.3rem"}}>🐙</span>
          <strong>Octopus <span style={{color:"#00bfff"}}>Line</span> Conseil</strong>
        </div>
        <div>© 2025 Octopus Line Conseil · {lang === "fr" ? "Tous droits réservés" : "All rights reserved"}</div>
        <div>DSI · CDO · CTO · RSSI · CISO</div>
      </footer>
    </>
  );
}
