"use client";

import { useEffect } from "react";

export default function OctopusLineConseil() {
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
          justify-content: space-between;
          align-items: center;
          padding: 18px 40px;
          background: rgba(2,8,23,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 1.1rem;
        }

        .logo span {
          color: var(--blue);
        }

        .nav-links {
          display: flex;
          gap: 28px;
        }

        .nav-links a {
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-size: 0.78rem;
          text-transform: uppercase;
          font-weight: 700;
        }

        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 520px;
          align-items: center;
          gap: 60px;
          padding: 120px 60px 80px;
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
          font-size: 5rem;
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
          font-size: 1rem;
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
          padding: 100px 60px;
          position: relative;
        }

        .section-title {
          font-size: 3.4rem;
          line-height: 1;
          font-weight: 900;
          margin-bottom: 18px;
          letter-spacing: -0.05em;
        }

        .section-label {
          color: var(--blue);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.78rem;
          font-weight: 900;
          margin-bottom: 14px;
        }

        .section-sub {
          color: rgba(255,255,255,0.6);
          max-width: 760px;
          line-height: 1.8;
          margin-bottom: 42px;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
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
          display: grid;
          grid-template-columns: repeat(5,1fr);
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
          display: grid;
          grid-template-columns: repeat(4,1fr);
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
          padding: 30px 60px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          justify-content: space-between;
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

        @media(max-width:1100px){
          .hero {
            grid-template-columns: 1fr;
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

        @media(max-width:768px){
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
        }
      `}</style>

      <nav>
        <div className="logo">
          🐙 Octopus <span>Line</span> Conseil
        </div>

        <div style={{display:"flex",alignItems:"center",gap:"24px"}}>
          <div className="nav-links">
            <a href="#transition"><strong>DSI DE TRANSITION</strong></a>
            <a href="#expertises"><strong>EXPERTISES</strong></a>
            <a href="#critical"><strong>SITUATIONS CRITIQUES</strong></a>
            <a href="#cyber"><strong>CYBERSÉCURITÉ & GOUVERNANCE</strong></a>
            <a href="#contact"><strong>CONTACT</strong></a>
          </div>

          <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.65)"}}>
              <span style={{color:"#00ff9d"}}>●</span> Disponible sous 48h
            </div>

            <div style={{display:"flex",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"4px",overflow:"hidden"}}>
              <button style={{background:"#00bfff",color:"#000",border:"none",padding:"8px 10px",fontWeight:800,cursor:"pointer"}}>FR</button>
              <button style={{background:"transparent",color:"#fff",border:"none",padding:"8px 10px",fontWeight:800,cursor:"pointer"}}>EN</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero">
        <svg
          style={{
            position: "absolute",
            right: "4%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "420px",
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

        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="section-label">
            MANAGER DE TRANSITION DSI · CDO · RSSI · CISO
          </div>

          <h1>
            Transformation SI,<br />
            gestion de crise &<br />
            management de<br />
            transition.<br />
            <em>Opérationnel dès<br />le premier jour.</em>
          </h1>

          <p>
            Pilotage DSI de transition, transformation IT, gestion de crise,
            carve-out & intégration SI. Alignement technologique et objectifs
            métiers dans les contextes sensibles.
          </p>

          <div className="buttons">
            <a className="btn-primary" href="#contact">
              Parlons de votre situation
            </a>

            <a className="btn-secondary" href="#expertises">
              Découvrir les expertises
            </a>
          </div>
        </div>

        <div className="hero-card reveal">
          <div className="hero-card-top">
            <div style={{ fontSize: "2rem" }}>🐙</div>

            <div>
              <h3>Octopus Line Conseil</h3>
              <p>Réseau d'experts opérationnels</p>
            </div>
          </div>

          <div className="role-grid">
            <div className="role-box" style={{padding:"28px",minHeight:"260px",border:"1px solid rgba(0,191,255,0.25)",background:"linear-gradient(180deg,#071120,#06101d)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"18px",marginBottom:"18px"}}>
                <div style={{fontSize:"2.4rem"}}>👤</div>
                <h4 style={{fontSize:"3rem",fontWeight:900,color:"#fff",margin:0,lineHeight:1}}>DSI / CIO</h4>
              </div>

              <div style={{height:"2px",background:"rgba(0,191,255,0.55)",margin:"18px 0 20px"}}></div>

              <p style={{fontSize:"1.05rem",lineHeight:1.7,color:"rgba(255,255,255,0.82)"}}>
                Transformation IT & Gouvernance<br/>
                Alignement Business & Performance
              </p>
            </div>

            <div className="role-box" style={{padding:"28px",minHeight:"260px",border:"1px solid rgba(255,80,80,0.3)",background:"linear-gradient(180deg,#071120,#06101d)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"18px",marginBottom:"18px"}}>
                <div style={{fontSize:"2.4rem"}}>🔒</div>
                <h4 style={{fontSize:"3rem",fontWeight:900,color:"#fff",margin:0,lineHeight:1}}>RSSI / CISO</h4>
              </div>

              <div style={{height:"2px",background:"rgba(255,80,80,0.55)",margin:"18px 0 20px"}}></div>

              <p style={{fontSize:"1.05rem",lineHeight:1.7,color:"rgba(255,255,255,0.82)"}}>
                Cybersécurité, Résilience &<br/>
                Risk Management
              </p>
            </div>

            <div className="role-box" style={{padding:"28px",minHeight:"260px",border:"1px solid rgba(190,100,255,0.3)",background:"linear-gradient(180deg,#071120,#06101d)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"18px",marginBottom:"18px"}}>
                <div style={{fontSize:"2.4rem"}}>🗄️</div>
                <div>
                  <h4 style={{fontSize:"2.8rem",fontWeight:900,color:"#fff",margin:0,lineHeight:1}}>CDO / CAIO</h4>
                  <div style={{fontSize:"1rem",fontWeight:800,color:"#b86cff",marginTop:"6px"}}>DIGITAL & IA</div>
                </div>
              </div>

              <div style={{height:"2px",background:"rgba(190,100,255,0.55)",margin:"18px 0 20px"}}></div>

              <p style={{fontSize:"1.05rem",lineHeight:1.7,color:"rgba(255,255,255,0.82)"}}>
                Data, IA & Automatisation<br/>
                Valeur, Innovation & Pilotage
              </p>
            </div>

            <div className="role-box" style={{padding:"28px",minHeight:"260px",border:"1px solid rgba(0,255,213,0.25)",background:"linear-gradient(180deg,#071120,#06101d)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"18px",marginBottom:"18px"}}>
                <div style={{fontSize:"2.4rem"}}>☁️</div>
                <h4 style={{fontSize:"3rem",fontWeight:900,color:"#fff",margin:0,lineHeight:1}}>CTO</h4>
              </div>

              <div style={{height:"2px",background:"rgba(0,255,213,0.55)",margin:"18px 0 20px"}}></div>

              <p style={{fontSize:"1.05rem",lineHeight:1.7,color:"rgba(255,255,255,0.82)"}}>
                Architecture, Cloud & Delivery<br/>
                Scalabilité, Intégration & Exécution
              </p>
            </div>
          </div>

          <div className="tag-list">
            <div className="tag">Management de Transition</div>
            <div className="tag">Transformation IT</div>
            <div className="tag">Organisation DSI</div>
            <div className="tag">Pilotage Projet</div>
            <div className="tag">IA & Data</div>
            <div className="tag">Cybersécurité</div>
            <div className="tag">Fusion & M&A</div>
            <div className="tag">Cloud</div>
            <div className="tag">Gestion de crise</div>
          </div>

          <div style={{background:"rgba(0,191,255,0.04)",border:"1px solid rgba(0,191,255,0.1)",borderRadius:12,padding:"18px"}}>
            <p style={{fontSize:"0.82rem",color:"rgba(255,255,255,0.55)",lineHeight:1.7,marginBottom:"10px"}}>
              Missions directes ou via cabinets partenaires. Intervention rapide sur contextes critiques,
              transformation SI, gouvernance DSI, IA & automatisation.
            </p>

            <div style={{fontSize:"0.72rem",fontWeight:800,color:"#00bfff"}}>
              Sud-Est · Paris · International
          </div>
         </div>
        </div>
      </section>
      <section id="expertises">
        <div className="reveal">
          <div className="section-label">EXPERTISES</div>

          <h2 className="section-title">
            Une pieuvre, huit tentacules.<br />
            <span style={{color:"#00bfff"}}>Un interlocuteur unique.</span>
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
            DSI de transition, transformation IT, cybersécurité, gouvernance, ERP, Data & IA —<br />
            Pilotage Projet, DSI de transition / Migration, ERP CRM, Data & IA, transformation IT,<br />
            carve-out & intégration SI., gestion de crise, et cybersécurité :<br />
            <span style={{color:"white"}}>une approche pragmatique centrée business.</span>
          </p>
        </div>

        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "32px",
            alignItems: "start"
          }}
        >
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px"
              }}
            >
              {[
                {
                  n:"01",
                  t:"DSI de transition",
                  c:"#00bfff",
                  i:"🏛️",
                  d:"Transition de direction, restructuration, gouvernance DSI, pilotage de la performance et alignement business."
                },
                {
                  n:"02",
                  t:"Transformation IT",
                  c:"#b86cff",
                  i:"🚀",
                  d:"Stratégie & feuille de route, modernisation SI, architecture, cloud, automatisation et amélioration continue."
                },
                {
                  n:"03",
                  t:"Cybersécurité",
                  c:"#ff4d4d",
                  i:"🔒",
                  d:"Stratégie de cybersécurité, conformité (NIS2, ISO 27001), gestion des risques, résilience et réponse aux incidents."
                },
                {
                  n:"04",
                  t:"Gouvernance ERP, Data & IA",
                  c:"#00ffd5",
                  i:"🗄️",
                  d:"Gouvernance SI & Data, ERP / CRM, valorisation de la donnée, IA & analytics au service de la performance."
                },
                {
                  n:"05",
                  t:"Pilotage Projet",
                  c:"#ff9800",
                  i:"📋",
                  d:"Pilotage de programmes et projets complexes, maîtrise des délais, coûts, qualité et bénéfices."
                },
                {
                  n:"06",
                  t:"DSI de transition / Migration",
                  c:"#28a8ff",
                  i:"🔄",
                  d:"Prise en charge opérationnelle rapide, continuité de service, migration d’équipes et de systèmes, stabilisation."
                },
                {
                  n:"07",
                  t:"ERP CRM, Data & IA",
                  c:"#d46cff",
                  i:"🧩",
                  d:"Sélection, implémentation et optimisation ERP / CRM, exploitation de la donnée, IA et automatisation des processus."
                },
                {
                  n:"08",
                  t:"Gestion de crise & cybersécurité",
                  c:"#00ffd5",
                  i:"⚠️",
                  d:"Gestion de crise IT, reprise d’activité, plan de continuité, remédiation et renforcement de la cybersécurité."
                }
              ].map((card) => (
                <div
                  key={card.n}
                  style={{
                    background:"linear-gradient(180deg,#071120,#04101d)",
                    border:`1px solid ${card.c}55`,
                    borderRadius:"20px",
                    padding:"26px",
                    minHeight:"320px",
                    position:"relative",
                    boxShadow:`0 0 25px ${card.c}22`
                  }}
                >
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:"18px"}}>
                    <div style={{fontSize:"2.5rem"}}>{card.i}</div>
                    <div style={{fontSize:"2rem",fontWeight:900,color:card.c}}>{card.n}</div>
                  </div>

                  <h3
                    style={{
                      fontSize:"2rem",
                      lineHeight:1,
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
                justifyContent:"space-between",
                alignItems:"center",
                gap:"20px",
                flexWrap:"wrap",
                background:"rgba(0,191,255,0.05)"
              }}
            >
              <div style={{fontSize:"1.8rem",fontWeight:900,color:"#00bfff"}}>
                🌐 Sud-Est • Paris • International
              </div>

              <div style={{color:"rgba(255,255,255,0.7)",fontSize:"1rem",lineHeight:1.7,maxWidth:"620px"}}>
                Missions directes ou via cabinets partenaires. Intervention rapide sur contextes critiques,
                transformation SI, gouvernance DSI, IA & automatisation.
              </div>
            </div>
          </div>

          </div>
      </section>

      <section id="critical">
        <div className="reveal">
          <div className="section-label">SITUATIONS CRITIQUES</div>

          <h2 className="section-title">
            Cinq situations<br />
            où chaque semaine<br />
            compte.
          </h2>

          <p className="section-sub">
            Les dirigeants nous appellent quand quelque chose ne peut plus
            attendre : vacance DSI, crise SI, cybersécurité, ERP ou gouvernance.
          </p>
        </div>

        <div className="critical-grid reveal">
          {[
            "Départ DSI",
            "Crise cyber",
            "Projet ERP bloqué",
            "DSI sans gouvernance",
            "Fusion & M&A"
          ].map((item, i) => (
            <div className="critical-card" key={i}>
              <div style={{ fontSize: "1.6rem", marginBottom: 16 }}>🚨</div>
              <h3>{item}</h3>
              <p>
                Intervention rapide, stabilisation, gouvernance et retour à la
                performance.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="cyber">
        <div className="reveal">
          <div className="section-label">
            CYBERSÉCURITÉ & GOUVERNANCE
          </div>

          <h2 className="section-title">
            Cybersécurité & conformité<br />
            ne sont plus des options.
          </h2>

          <p className="section-sub">
            NIS2, RGPD, ISO 27001, PCA/PRA : chaque transformation SI doit
            intégrer la résilience et la gouvernance dès le premier jour.
          </p>
        </div>

        <div className="cyber-grid reveal">
          {[
            "Conformité",
            "Résilience",
            "Gouvernance",
            "Protection"
          ].map((item, i) => (
            <div className="cyber-card" key={i}>
              <div style={{ fontSize: "1.5rem", marginBottom: 14 }}>🔒</div>
              <h4>{item}</h4>
              <p>
                Audit, gouvernance, PCA/PRA, conformité réglementaire et gestion
                des risques.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <div
          className="reveal"
          style={{
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
            <div className="section-label">CONTACT</div>
            <h2 style={{ fontSize: "2rem", fontWeight: 900 }}>
              Un besoin critique,<br />
              un projet stratégique ?
            </h2>
          </div>

          <a className="btn-primary" href="mailto:contact@octopus-line-conseil.com">
            Échangez avec un expert →
          </a>
        </div>
      </section>

      <footer>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <span style={{fontSize:"1.3rem"}}>🐙</span>
          <strong>Octopus <span style={{color:"#00bfff"}}>Line</span> Conseil</strong>
        </div>
        <div>© 2025 Octopus Line Conseil</div>
        <div>DSI · CDO · CTO · RSSI · CISO</div>
      </footer>
    </>
  );
}
