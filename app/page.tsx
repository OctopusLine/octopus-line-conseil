"use client";

import { useEffect, useState } from "react";

export default function OctopusLineConseil() {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const missions = {
    fr: [
      { color: "#00bfff", label: "DSI de Transition", company: "Pharma multi-pays · 400M€", result: "+20% productivité IA documentés", desc: "Migration SAP, déploiement IA & automatisation. Opérationnel J+1." },
      { color: "#ff4d4d", label: "RSSI / CISO", company: "ETI Assurance · 150M€", result: "DPO désigné en 3 mois", desc: "Mise en conformité NIS2, ISO 27001, RGPD. Audit complet + PSSI." },
      { color: "#b86cff", label: "CDO · Post-Fusion M&A", company: "Immobilier · 300M€", result: "-30% délais de traitement", desc: "Harmonisation Data Hub 4 ERP, Cloud Azure, carve-out SI." },
      { color: "#ff9800", label: "Gestion de Crise", company: "Énergie · 65M€", result: "100M€ levés · Continuité garantie", desc: "Crise COVID, PRA déployé sous 48h, levée de capital réussie." },
      { color: "#00ffd5", label: "🤖 IA & Automatisation", company: "Pharma multi-pays · 400M€ · 600 collaborateurs", result: "+20% productivité documentés en 6 mois", desc: "Déploiement ChatGPT & Claude — cas d'usage métier (support, opérations, commercial). Automatisation 12 processus critiques via Make.com & n8n · API. LLM & copilots IA sur fonctions clés." },
      { color: "#00ffd5", label: "🤖 IA & Automatisation", company: "Promotion immobilière · 300M€", result: "+25% gain de temps documentés", desc: "Déploiement ChatGPT & Copilot sur fonctions support, opérations et commercial. Automatisation processus répétitifs via Make.com, Zapier & n8n · API. Conduite du changement incluse." },
      { color: "#ff9800", label: "⚙️ Migration ERP", company: "Assurance · 789M€", result: "DSI opérationnel J+1", desc: "Remplacement DSI en urgence. Gestion de crise managériale, reprise SI, restructuration organisation DSI. Stabilisation équipes en 30 jours." },
      { color: "#ff4d4d", label: "🚨 Gestion de Crise", company: "Assurance · 789M€", result: "Organisation restructurée · ITIL", desc: "Burn-out DSI sortant. Prise en main immédiate, catalogue de services, gouvernance SI. DSI repositionnée comme levier business." },
      { color: "#00bfff", label: "🎯 Pilotage Projet", company: "Assurance · 174M€", result: "Livraison dans les délais", desc: "Migration plateforme e-commerce & Extranet courtiers. Pilotage bout en bout, COPIL, reporting direction. Budget & délais respectés." },
    ],
    en: [
      { color: "#00bfff", label: "Interim CIO", company: "Pharma multi-country · €400M", result: "+20% AI productivity gains", desc: "SAP migration, AI & automation deployment. Operational day 1." },
      { color: "#ff4d4d", label: "CISO", company: "Insurance ETI · €150M", result: "DPO appointed in 3 months", desc: "NIS2, ISO 27001, GDPR compliance. Full audit + security policy." },
      { color: "#b86cff", label: "CDO · Post M&A", company: "Real Estate · €300M", result: "-30% processing delays", desc: "Data Hub harmonization across 4 ERPs, Azure Cloud, SI carve-out." },
      { color: "#ff9800", label: "Crisis Management", company: "Energy · €65M", result: "€100M raised · Continuity guaranteed", desc: "COVID crisis, DRP deployed within 48h, successful capital raise." },
      { color: "#00ffd5", label: "🤖 AI & Automation", company: "Pharma multi-country · €400M · 600 users", result: "+20% productivity documented in 6 months", desc: "ChatGPT & Claude deployment — business use cases (support, ops, commercial). 12 critical processes automated via Make.com & n8n · API. LLM & AI copilots on key functions." },
      { color: "#00ffd5", label: "🤖 AI & Automation", company: "Real Estate · €300M", result: "+25% time savings documented", desc: "ChatGPT & Copilot deployment on support, operations and commercial teams. Repetitive process automation via Make.com, Zapier & n8n · API. Change management included." },
      { color: "#ff9800", label: "⚙️ ERP Migration", company: "Insurance · €789M", result: "CIO operational day 1", desc: "Emergency CIO replacement. Management crisis, IT takeover, IT organization restructuring. Teams stabilized within 30 days." },
      { color: "#ff4d4d", label: "🚨 Crisis Management", company: "Insurance · €789M", result: "Restructured org · ITIL", desc: "Outgoing CIO burnout. Immediate takeover, service catalogue, IT governance. IT repositioned as business driver." },
      { color: "#00bfff", label: "🎯 Project Management", company: "Insurance · €174M", result: "On-time delivery", desc: "E-commerce & broker Extranet platform migration. End-to-end management, steering committee, exec reporting. Budget & deadlines met." },
    ]
  };

  const modes = {
    fr: [
      { icon: "🎯", color: "#00bfff", title: "Mission directe", desc: "Un expert senior de notre réseau intervient directement chez vous — DSI, CDO, CTO ou RSSI/CISO de transition. Opérationnel sous 48h, niveau CODIR/COMEX/DG." },
      { icon: "🤝", color: "#00ffd5", title: "Placement & Recrutement IT", desc: "Mise en relation entre entreprises et profils IT senior — DSI, CDO, RSSI/CISO, CTO, architectes, chefs de projet. Réseau qualifié, approche directe et ciblée." },
      { icon: "🔗", color: "#ff9800", title: "Partenariat & Apporteur d'affaires", desc: "Collaboration avec cabinets partenaires (Pharos, IMT, Valtus, Reactive Executive...) — co-traitance, chargé de mission, apport d'affaires." },
    ],
    en: [
      { icon: "🎯", color: "#00bfff", title: "Direct assignment", desc: "A senior expert from our network intervenes directly — interim CIO, CDO, CTO or CISO. Operational within 48h, Board level." },
      { icon: "🤝", color: "#00ffd5", title: "IT Placement & Recruitment", desc: "Connecting companies with senior IT profiles — CIO, CDO, CISO, CTO, architects, project managers. Qualified network, direct approach." },
      { icon: "🔗", color: "#ff9800", title: "Partnership & Business Introduction", desc: "Collaboration with partner firms (Pharos, IMT, Valtus, Reactive Executive...) — co-delivery, sub-contracting, business referrals." },
    ]
  };

  return (
    <>
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family: Inter, sans-serif; background: #020817; color: white; overflow-x: hidden; }
        html { scroll-behavior: smooth; }
        :root { --blue:#00bfff; --bg:#020817; --card:#071120; --border:rgba(0,191,255,0.15); --muted:rgba(255,255,255,0.6); }

        nav {
          position:fixed; top:0; left:0; right:0; z-index:100;
          display:flex; justify-content:flex-start; gap:24px; align-items:center;
          padding:14px 32px; width:100%; overflow:hidden;
          background:rgba(2,8,23,0.95); backdrop-filter:blur(12px);
          border-bottom:1px solid rgba(255,255,255,0.05);
        }
        .logo { display:flex; align-items:center; gap:10px; font-weight:800; font-size:clamp(0.9rem,1vw,1.05rem); white-space:nowrap; }
        .logo span { color:var(--blue); }
        .nav-links { display:flex; flex-wrap:wrap; gap:clamp(6px,0.7vw,14px); }
        .nav-links a { color:rgba(255,255,255,0.65); text-decoration:none; font-size:clamp(0.54rem,0.68vw,0.72rem); text-transform:uppercase; font-weight:700; transition:color 0.2s; }
        .nav-links a:hover { color:var(--blue); }

        .hero {
          width:100%; min-height:100vh; display:grid;
          grid-template-columns:minmax(0,1.3fr) minmax(320px,560px);
          align-items:center; gap:24px; padding:7vw 4vw 5vw;
          max-width:1680px; margin:0 auto; position:relative;
          background: radial-gradient(circle at top right, rgba(0,191,255,0.12), transparent 35%), linear-gradient(#020817,#020b18);
        }
        .grid-bg {
          position:absolute; inset:0; pointer-events:none;
          background-image: linear-gradient(rgba(0,191,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,0.04) 1px, transparent 1px);
          background-size:60px 60px;
        }
        .hero h1 { font-size:clamp(2.8rem,7vw,5rem); line-height:0.95; letter-spacing:-0.05em; font-weight:900; margin-bottom:24px; }
        .hero h1 em { color:var(--blue); font-style:normal; }
        .hero p { color:var(--muted); line-height:1.8; max-width:640px; margin-bottom:28px; }
        .buttons { display:flex; gap:16px; margin-top:28px; }
        .btn-primary { background:var(--blue); color:#000; padding:14px 24px; border-radius:4px; font-weight:800; text-decoration:none; border:none; cursor:pointer; }
        .btn-secondary { border:1px solid rgba(255,255,255,0.2); color:white; padding:14px 24px; border-radius:4px; text-decoration:none; }

        .hero-card { background:rgba(8,18,38,0.92); border:1px solid var(--border); border-radius:18px; padding:30px; position:relative; z-index:2; }
        .role-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:18px; margin-bottom:22px; }
        .role-box { border-radius:16px; padding:24px; min-height:220px; }
        .role-box h4 { font-size:1.1rem; margin-bottom:6px; font-weight:900; }
        .role-box p { font-size:0.8rem; margin:0; }
        .tag-list { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:22px; }
        .tag { border:1px solid rgba(255,255,255,0.12); padding:8px 12px; border-radius:20px; font-size:0.72rem; color:rgba(255,255,255,0.7); }

        section { padding:6vw 4%; width:100%; max-width:1680px; margin:0 auto; display:flex; flex-direction:column; align-items:flex-start; position:relative; }
        .section-title { font-size:clamp(2rem,5vw,3.4rem); line-height:1; font-weight:900; margin-bottom:18px; letter-spacing:-0.05em; }
        .section-label { color:var(--blue); text-transform:uppercase; letter-spacing:0.12em; font-size:0.95rem; font-weight:900; margin-bottom:16px; line-height:1.5; }
        .section-sub { color:rgba(255,255,255,0.6); max-width:760px; line-height:1.8; margin-bottom:42px; }

        .expertise-grid { width:100%; max-width:1280px; display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:1px; background:rgba(0,191,255,0.08); }
        .expertise-card { background:#071120; padding:34px 24px; }
        .expertise-card h3 { font-size:1.05rem; margin:14px 0; font-weight:900; }
        .expertise-card p { color:rgba(255,255,255,0.58); line-height:1.7; font-size:0.9rem; }

        .critical-grid { width:100%; max-width:1280px; display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1px; background:rgba(255,255,255,0.06); }
        .critical-card { background:#050d18; padding:28px; }
        .critical-card h3 { font-weight:900; margin-bottom:12px; }
        .critical-card p { color:rgba(255,255,255,0.6); line-height:1.7; font-size:0.88rem; }

        .cyber-grid { width:100%; max-width:1280px; display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:1px; background:rgba(255,255,255,0.06); }
        .cyber-card { background:#071120; padding:26px; }
        .cyber-card h4 { font-size:1rem; font-weight:900; margin-bottom:10px; }
        .cyber-card p { color:rgba(255,255,255,0.58); line-height:1.7; font-size:0.88rem; }

        /* METHODE */
        .methode-grid { width:100%; max-width:1280px; display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:start; }
        .step-item { display:flex; gap:1.5rem; padding:1.5rem 0; border-bottom:1px solid rgba(255,255,255,0.06); }
        .step-dot { width:10px; height:10px; border-radius:50%; background:var(--blue); flex-shrink:0; margin-top:4px; }
        .step-line { width:1px; flex:1; background:rgba(0,191,255,0.15); margin-top:4px; }
        .step-marker { display:flex; flex-direction:column; align-items:center; min-width:18px; }

        /* MISSIONS */
        .missions-grid { width:100%; max-width:1280px; display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:1rem; }
        .mission-card { background:#071120; border-radius:12px; padding:1.2rem; border:1px solid rgba(255,255,255,0.06); }

        /* MODES */
        .modes-grid { width:100%; max-width:1280px; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:1rem; margin-bottom:2rem; }
        .mode-card { border-radius:10px; padding:1.5rem; }

        footer { padding:2vw 4vw; border-top:1px solid rgba(255,255,255,0.06); display:flex; justify-content:flex-start; align-items:center; color:rgba(255,255,255,0.4); font-size:0.8rem; gap:2rem; flex-wrap:wrap; }

        .reveal { opacity:0; transform:translateY(30px); transition:all .7s ease; }
        .reveal.visible { opacity:1; transform:translateY(0); }

        @media(max-width:1100px){
          .hero { grid-template-columns:1fr; gap:48px; }
          .expertise-grid, .cyber-grid { grid-template-columns:1fr 1fr; }
          .methode-grid { grid-template-columns:1fr; gap:2rem; }
          .missions-grid { grid-template-columns:1fr 1fr; }
          .modes-grid { grid-template-columns:1fr; }
          .strategie-grid { grid-template-columns:1fr !important; }
          .diagnostic-grid { grid-template-columns:1fr !important; }
          .role-grid { grid-template-columns:1fr 1fr; }
        }
        @media(max-width:768px){
          .two-col-grid { grid-template-columns:1fr !important; }
          .expertises-grid { grid-template-columns:1fr 1fr !important; }
          nav { padding:12px 16px; flex-wrap:wrap; gap:8px; }
          .nav-links { display:none; }
          .nav-phone { display:none !important; }
          .hero, section { padding-left:4% !important; padding-right:4% !important; }
          .hero { padding-top:80px; }
          .hero h1 { font-size:2.4rem; }
          .buttons { flex-direction:column; width:100%; }
          .btn-primary, .btn-secondary { width:100%; text-align:center; display:block; }
          .expertise-grid, .critical-grid, .cyber-grid { grid-template-columns:1fr; }
          .role-grid { grid-template-columns:1fr; }
          .role-box { min-height:auto; }
          .missions-grid { grid-template-columns:1fr; }
          .modes-grid { grid-template-columns:1fr; }
          .methode-grid { grid-template-columns:1fr !important; gap:2rem !important; }
          .strategie-grid { grid-template-columns:1fr !important; }
          .diagnostic-grid { grid-template-columns:1fr !important; }
          .section-title { font-size:1.8rem !important; }
          .hero-card { padding:1rem !important; }
          .ia-cards-grid { grid-template-columns:1fr 1fr !important; }
          .badge-mobile { display:inline !important; }
          .badge-desktop { display:none !important; }
          .badge-mobile { display:none; }
          .badge-desktop { display:inline; }
          .kpi-row { grid-template-columns:1fr 1fr !important; }
          .kpi-row > div:nth-child(2) { border-right:none !important; }
          .kpi-row > div:nth-child(1),
          .kpi-row > div:nth-child(2) { border-bottom:1px solid rgba(0,191,255,0.08) !important; }
        }
        @media(max-width:480px){
          .hero h1 { font-size:2rem; }
          nav { padding:10px 12px; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 38 38" style={{flexShrink:0}}>
            <text x="19" y="30" fontSize="28" textAnchor="middle">🐙</text>
            <circle cx="14" cy="15" r="2.2" fill="#000" opacity="0.9"/>
            <circle cx="24" cy="15" r="2.2" fill="#000" opacity="0.9"/>
            <circle cx="14.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
            <circle cx="24.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
          </svg>
          <span style={{display:"flex",alignItems:"center",gap:"5px"}}>Octopus <span style={{color:"#00bfff"}}>Line</span> <strong style={{color:"#fff",fontWeight:800}}>Conseil</strong></span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"18px",marginLeft:"auto"}}>
          <div className="nav-links">
            <a href="#transition" onClick={(e)=>{e.preventDefault();document.getElementById('transition')?.scrollIntoView({behavior:'smooth'})}}><strong>{lang==="fr"?"DSI DE TRANSITION":"INTERIM CIO"}</strong></a>
            <a href="#expertises" onClick={(e)=>{e.preventDefault();document.getElementById('expertises')?.scrollIntoView({behavior:'smooth'})}}><strong>{lang==="fr"?"EXPERTISES":"EXPERTISE"}</strong></a>
            <a href="#strategie" onClick={(e)=>{e.preventDefault();document.getElementById('strategie')?.scrollIntoView({behavior:'smooth'})}}><strong>{lang==="fr"?"SCHÉMA DIRECTEUR SI":"IT MASTER PLAN"}</strong></a>
            <a href="#ai" onClick={(e)=>{e.preventDefault();document.getElementById('ai')?.scrollIntoView({behavior:'smooth'})}}><strong>{lang==="fr"?"IA & INNOVATION":"AI & INNOVATION"}</strong></a>
            <a href="#cyber" onClick={(e)=>{e.preventDefault();document.getElementById('cyber')?.scrollIntoView({behavior:'smooth'})}}><strong>{lang==="fr"?"CYBERSÉCURITÉ":"CYBERSECURITY"}</strong></a>
            <a href="#methode" onClick={(e)=>{e.preventDefault();document.getElementById('methode')?.scrollIntoView({behavior:'smooth'})}}><strong>{lang==="fr"?"MÉTHODE":"METHOD"}</strong></a>
            <a href="#contact" onClick={(e)=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}}><strong>CONTACT</strong></a>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
            <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.65)"}}>
              <span style={{color:"#00ff9d"}}>●</span> {lang==="fr"?"Disponible sous 48h":"Available within 48h"}
            </div>
            <a href="tel:+33623733484" className="nav-phone" style={{fontSize:"0.72rem",color:"#00bfff",fontWeight:700,textDecoration:"none",whiteSpace:"nowrap"}}>📞 +33 (0)6 23 73 34 84</a>
            <div style={{display:"flex",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"4px",overflow:"hidden"}}>
              <button onClick={()=>setLang("fr")} style={{background:lang==="fr"?"#00bfff":"transparent",color:lang==="fr"?"#000":"#fff",border:"none",padding:"8px 10px",fontWeight:800,cursor:"pointer"}}>FR</button>
              <button onClick={()=>setLang("en")} style={{background:lang==="en"?"#00bfff":"transparent",color:lang==="en"?"#000":"#fff",border:"none",padding:"8px 10px",fontWeight:800,cursor:"pointer"}}>EN</button>
            </div>
          </div>

        </div>
      </nav>

            {/* HERO */}
      <section id="transition" className="hero">
        <svg style={{position:"absolute",right:"4%",top:"50%",transform:"translateY(-50%)",width:"28vw",minWidth:"220px",maxWidth:"420px",opacity:0.08,zIndex:1}} viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="85" r="40" stroke="#00bfff" strokeWidth="1.5"/>
          <ellipse cx="100" cy="88" rx="22" ry="26" fill="rgba(0,191,255,0.08)" stroke="#00bfff" strokeWidth="1"/>
          <path d="M72 115 Q55 135 48 155" stroke="#00bfff" strokeWidth="1.2" fill="none"/>
          <path d="M80 120 Q68 145 65 168" stroke="#00bfff" strokeWidth="1.2" fill="none"/>
          <path d="M90 122 Q85 150 86 172" stroke="#00bfff" strokeWidth="1.2" fill="none"/>
          <path d="M100 123 Q100 152 102 174" stroke="#00bfff" strokeWidth="1.2" fill="none"/>
          <path d="M110 121 Q118 148 120 170" stroke="#00bfff" strokeWidth="1.2" fill="none"/>
          <circle cx="91" cy="82" r="4" fill="#00bfff"/>
          <circle cx="109" cy="82" r="4" fill="#00bfff"/>
        </svg>
        <div className="grid-bg"></div>
        <div style={{position:"relative",zIndex:2,maxWidth:"1280px",width:"100%",margin:"0 auto",textAlign:"left"}}>
          <div className="section-label" style={{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"0.4rem"}}>
            <svg width="24" height="24" viewBox="0 0 38 38" style={{flexShrink:0}}>
              <text x="19" y="30" fontSize="28" textAnchor="middle">🐙</text>
              <circle cx="14" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="24" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="14.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
              <circle cx="24.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
            </svg>
            <span style={{whiteSpace:"nowrap"}}>
              {lang==="fr"?"Manager de Transition":"Interim Management"}
            </span>
            <span style={{opacity:0.6}}>·</span>
            <span style={{whiteSpace:"nowrap"}}>
              {lang==="fr"?"DSI · CDO · RSSI / CISO":"CIO · CDO · CISO · CTO"}
            </span>
          </div>
          <h1>{lang==="fr"?"Transformation SI, gestion de crise & management de transition.":"IT transformation, crisis management & interim leadership."}<br/><em>{lang==="fr"?"Opérationnel dès le premier jour.":"Operational from day one."}</em></h1>
          <p>{lang==="fr"?"Pilotage DSI de transition, transformation IT, gestion de crise, carve-out & intégration SI. Alignement technologique et objectifs métiers dans les contextes sensibles.":"Interim CIO leadership, IT transformation, crisis management, carve-out & system integration. Technology aligned with business objectives in sensitive environments."}</p>
          <div className="buttons">
            <button className="btn-primary" onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>{lang==="fr"?"Échangez avec un expert →":"Talk with an expert →"}</button>
            <button className="btn-secondary" style={{border:"1px solid rgba(255,255,255,0.2)",color:"white",padding:"14px 24px",borderRadius:"4px",cursor:"pointer",background:"transparent"}} onClick={()=>document.getElementById('expertises')?.scrollIntoView({behavior:'smooth'})}>{lang==="fr"?"Découvrir les expertises":"Discover expertise"}</button>
          </div>
        </div>

        {/* HERO CARD */}
        <div className="hero-card reveal">
          <div style={{display:"flex",alignItems:"center",gap:"14px",marginBottom:"24px",paddingBottom:"18px",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
            <svg width="36" height="36" viewBox="0 0 38 38" style={{flexShrink:0}}>
              <text x="19" y="30" fontSize="28" textAnchor="middle">🐙</text>
              <circle cx="14" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="24" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="14.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
              <circle cx="24.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
            </svg>
            <div>
              <div style={{fontSize:"1rem",fontWeight:900,color:"#fff"}}>Octopus<span style={{color:"#00bfff"}}>Line</span> <strong>Conseil</strong></div>
              <div style={{fontSize:"0.65rem",fontWeight:700,color:"#00bfff",textTransform:"uppercase",letterSpacing:"0.1em"}}>{lang==="fr"?"Cabinet · Réseau d'Experts Opérationnels":"Cabinet · Executive IT Network"}</div>
            </div>
          </div>
          <div className="role-grid">
            <div className="role-box" style={{border:"1px solid rgba(0,191,255,0.25)",background:"linear-gradient(180deg,#071120,#06101d)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"}}><span style={{fontSize:"1.8rem"}}>👤</span><div><div style={{fontSize:"1.4rem",fontWeight:900,color:"#00bfff"}}>{lang==="fr"?"DSI / CIO":"CIO"}</div></div></div>
              <div style={{height:"2px",background:"rgba(0,191,255,0.5)",marginBottom:"12px"}}></div>
              <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.45)",lineHeight:1.5,marginBottom:"6px"}}>{lang==="fr"?"Transformation IT & Gouvernance · Alignement Business & Performance":"IT Transformation & Governance · Business & Performance Alignment"}</div>
              <div style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.3)",lineHeight:1.55}}>{lang==="fr"?"Alignement stratégie IT, gouvernance DSI, pilotage de la performance et gestion du portefeuille IT.":"IT strategy alignment, IT governance, performance management and IT portfolio."}</div>
            </div>
            <div className="role-box" style={{border:"1px solid rgba(255,80,80,0.3)",background:"linear-gradient(180deg,#071120,#06101d)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"}}><span style={{fontSize:"1.8rem"}}>🛡️</span><div><div style={{fontSize:"1.4rem",fontWeight:900,color:"#ff6060"}}>{lang==="fr"?"RSSI / CISO":"CISO"}</div></div></div>
              <div style={{height:"2px",background:"rgba(255,80,80,0.5)",marginBottom:"12px"}}></div>
              <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.45)",lineHeight:1.5,marginBottom:"6px"}}>{lang==="fr"?"Cybersécurité, Résilience & Risk Management":"Cybersecurity, Resilience & Risk Management"}</div>
              <div style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.3)",lineHeight:1.55}}>{lang==="fr"?"Stratégie cybersécurité, NIS2, ISO 27001, gestion des risques et réponse aux incidents.":"Cybersecurity strategy, NIS2, ISO 27001, risk management and incident response."}</div>
            </div>
            <div className="role-box" style={{border:"1px solid rgba(190,100,255,0.3)",background:"linear-gradient(180deg,#071120,#06101d)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"}}><span style={{fontSize:"1.8rem"}}>🗄️</span><div><div style={{fontSize:"1.4rem",fontWeight:900,color:"#c084fc"}}>CDO</div><div style={{fontSize:"0.65rem",fontWeight:700,color:"#a78bfa",textTransform:"uppercase"}}>DIGITAL & IA</div></div></div>
              <div style={{height:"2px",background:"rgba(190,100,255,0.5)",marginBottom:"12px"}}></div>
              <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.45)",lineHeight:1.5,marginBottom:"6px"}}>{lang==="fr"?"Data, IA & Automatisation · Valeur, Innovation & Pilotage":"Data, AI & Automation · Value, Innovation & Leadership"}</div>
              <div style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.3)",lineHeight:1.55}}>{lang==="fr"?"Valorisation donnée, stratégie data & IA, gouvernance, automatisation et création de valeur.":"Data valorization, data & AI strategy, governance, automation and value creation."}</div>
            </div>
            <div className="role-box" style={{border:"1px solid rgba(0,240,192,0.3)",background:"linear-gradient(180deg,#071120,#06101d)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"}}><span style={{fontSize:"1.8rem"}}>☁️</span><div><div style={{fontSize:"1.4rem",fontWeight:900,color:"#00f0c0"}}>CTO</div></div></div>
              <div style={{height:"2px",background:"rgba(0,240,192,0.5)",marginBottom:"12px"}}></div>
              <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.45)",lineHeight:1.5,marginBottom:"6px"}}>{lang==="fr"?"Architecture, Cloud & Delivery · Scalabilité, Intégration & Exécution":"Architecture, Cloud & Delivery · Scalability, Integration & Execution"}</div>
              <div style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.3)",lineHeight:1.55}}>{lang==="fr"?"Architecture moderne, cloud & infrastructure, intégration des systèmes et excellence opérationnelle.":"Modern architecture, cloud & infrastructure, systems integration and operational excellence."}</div>
            </div>
          </div>
          <div className="tag-list">
            <div className="tag" style={{borderColor:"rgba(0,191,255,0.3)",color:"#00bfff",background:"rgba(0,191,255,0.06)"}}>🔄 {lang==="fr"?"Management de Transition":"Interim Management"}</div>
            <div className="tag" style={{borderColor:"rgba(0,240,192,0.3)",color:"#00f0c0",background:"rgba(0,240,192,0.05)"}}>🚀 {lang==="fr"?"Transformation IT":"IT Transformation"}</div>
            <div className="tag" style={{borderColor:"rgba(0,240,192,0.3)",color:"#00f0c0",background:"rgba(0,240,192,0.05)"}}>🏛️ {lang==="fr"?"Organisation DSI":"IT Organization"}</div>
            <div className="tag" style={{borderColor:"rgba(0,191,255,0.3)",color:"#00bfff",background:"rgba(0,191,255,0.06)"}}>🎯 {lang==="fr"?"Pilotage de Projet":"Project Management"}</div>
            <div className="tag" style={{borderColor:"rgba(0,240,192,0.5)",color:"#00f0c0",background:"rgba(0,240,192,0.1)",fontWeight:700,border:"2px solid rgba(0,240,192,0.5)"}}>🤖 {lang==="fr"?"IA & Automatisation":"AI & Automation"}</div>
            <div className="tag" style={{borderColor:"rgba(0,240,192,0.5)",color:"#00f0c0",background:"rgba(0,240,192,0.1)",fontWeight:700,border:"2px solid rgba(0,240,192,0.5)"}}>📊 {lang==="fr"?"Data & Gouvernance":"Data & Governance"}</div>
            <div className="tag" style={{borderColor:"rgba(255,80,80,0.3)",color:"#ff7070",background:"rgba(255,80,80,0.05)"}}>🔒 {lang==="fr"?"Cybersécurité":"Cybersecurity"}</div>
            <div className="tag" style={{borderColor:"rgba(0,191,255,0.3)",color:"#00bfff",background:"rgba(0,191,255,0.06)"}}>🔀 {lang==="fr"?"Fusion & M&A":"M&A"}</div>
            <div className="tag" style={{borderColor:"rgba(255,80,80,0.3)",color:"#ff7070",background:"rgba(255,80,80,0.05)"}}>🚨 {lang==="fr"?"Gestion de Crise":"Crisis Management"}</div>
          </div>
          <div style={{background:"rgba(0,191,255,0.04)",border:"1px solid rgba(0,191,255,0.1)",borderRadius:12,padding:"18px"}}>
            <p style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.5)",lineHeight:1.7,marginBottom:"8px"}}>{lang==="fr"?"Missions directes ou via cabinets partenaires. Management de transition, transformation SI, gouvernance IT, cybersécurité, IA & Innovation.":"Direct assignments or partner firms. Interim management, IT transformation, IT governance, cybersecurity, AI & Innovation."}</p>
            <div style={{fontSize:"0.72rem",fontWeight:800,color:"#00bfff"}}>🌍 {lang==="fr"?"Sophia Antipolis · Monaco · Nice · Marseille · Suisse · Paris · International":"Sophia Antipolis · Monaco · French Riviera · Marseille · Switzerland · Paris · International"}</div>
          </div>
        </div>
      </section>

                  {/* COMMENT NOUS INTERVENONS */}
      <section id="modes" style={{background:"#030d1a",borderTop:"1px solid rgba(255,255,255,0.04)"}}>
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto 3rem"}}>
          <div className="section-label" style={{display:"flex",alignItems:"center"}}>
            <svg width="28" height="28" viewBox="0 0 38 38" style={{flexShrink:0,marginRight:"0.5rem"}}>
              <text x="19" y="30" fontSize="28" textAnchor="middle">🐙</text>
              <circle cx="14" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="24" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="14.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
              <circle cx="24.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
            </svg>
            {lang==="fr"?"COMMENT NOUS INTERVENONS":"HOW WE WORK"}
          </div>
          <h2 className="section-title">{lang==="fr"?"Trois façons d'intervenir,":"Three ways to engage,"}<br/><span style={{color:"#00bfff"}}>{lang==="fr"?"une seule exigence : l'impact.":"one single requirement: impact."}</span></h2>
        </div>
        <div className="modes-grid reveal" style={{maxWidth:"1280px",margin:"0 auto 3rem"}}>
          {modes[lang].map((m,i)=>(
            <div key={i} className="mode-card" style={{background:"rgba(8,18,38,0.8)",border:`1px solid ${m.color}33`,borderLeft:`3px solid ${m.color}`}}>
              <div style={{fontSize:"2rem",marginBottom:"1rem"}}>{m.icon}</div>
              <div style={{fontSize:"1rem",fontWeight:800,color:"#fff",marginBottom:"0.5rem"}}>{m.title}</div>
              <div style={{fontSize:"0.82rem",color:"rgba(255,255,255,0.55)",lineHeight:1.7}}>{m.desc}</div>
            </div>
          ))}
        </div>

              {/* EXPERTISES */}
      <section id="expertises" style={{alignItems:"center",background:"#020b18",borderTop:"1px solid rgba(255,255,255,0.04)"}}>
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem"}}>
            <svg width="52" height="52" viewBox="0 0 38 38" style={{flexShrink:0}}>
              <text x="19" y="30" fontSize="28" textAnchor="middle">🐙</text>
              <circle cx="14" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="24" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="14.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
              <circle cx="24.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
            </svg>
            <div>
              <div style={{fontSize:"1rem",fontWeight:800,color:"#fff"}}>Octopus <span style={{color:"#00bfff"}}>Line</span> <strong style={{color:"#fff"}}>Conseil</strong></div>
              <div style={{fontSize:"0.7rem",fontWeight:700,color:"#00bfff",textTransform:"uppercase",letterSpacing:"0.1em"}}>{lang==="fr"?"Cabinet · Réseau d'Experts Opérationnels":"Cabinet · Expert Network"}</div>
            </div>
          </div>
          <h2 className="section-title">{lang==="fr"?"Une pieuvre, huit tentacules.":"One octopus, eight tentacles."}<br/><span style={{color:"#00bfff"}}>{lang==="fr"?"Un interlocuteur unique.":"A single strategic partner."}</span></h2>
          <p style={{fontSize:"1rem",lineHeight:1.8,color:"rgba(255,255,255,0.7)",maxWidth:"1100px",marginBottom:"3rem"}}>
            {lang==="fr"?"DSI de transition, transformation IT, cybersécurité, gouvernance, ERP, IA & Innovation — une approche pragmatique centrée business.":"Interim CIO leadership, IT transformation, cybersecurity, governance, ERP, AI & Innovation — a pragmatic business-driven approach."}
          </p>
        </div>
        <div style={{maxWidth:"1280px",margin:"0 auto",width:"100%",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}} className="expertises-grid reveal">
          {(lang==="fr"?[
            {n:"01",t:"DSI de Transition",c:"#00bfff",i:"🏛️",d:"Transition de direction, restructuration, gouvernance DSI, pilotage de la performance et alignement business."},
            {n:"02",t:"Transformation SI",c:"#b86cff",i:"🚀",d:"Stratégie & feuille de route, modernisation SI, architecture, cloud, automatisation et amélioration continue."},
            {n:"03",t:"Cybersécurité",c:"#ff4d4d",i:"🔒",d:"Stratégie cybersécurité, conformité NIS2 & ISO 27001, gestion des risques et résilience."},
            {n:"04",t:"IA, Digital & Innovation",c:"#00ffd5",i:"🤖",d:"Cas d'usage IA, copilots, gouvernance IA, automatisation métier et transformation digitale."},
            {n:"05",t:"Pilotage Projet",c:"#ff9800",i:"📋",d:"Pilotage programmes complexes, maîtrise coûts, délais, qualité et création de valeur."},
            {n:"06",t:"Gestion de Crise",c:"#00ffd5",i:"⚠️",d:"Gestion de crise IT, situations d'urgence, remédiation, stabilisation rapide."},
            {n:"07",t:"Cabinets Partenaires",c:"#289cff",i:"🤝",d:"Réseau de cabinets partenaires, placement IT, missions stratégiques et management de transition."},
            {n:"08",t:"Réseau Executive IT",c:"#35ff9c",i:"🌐",d:"Experts CIO, CTO, CISO, directeurs de programme et leadership IT pour contextes complexes."}
          ]:[
            {n:"01",t:"Interim CIO",c:"#00bfff",i:"🏛️",d:"Interim leadership, IT governance, restructuring and business alignment."},
            {n:"02",t:"IT Transformation",c:"#b86cff",i:"🚀",d:"Roadmap, modernization, cloud, automation and continuous improvement."},
            {n:"03",t:"Cybersecurity",c:"#ff4d4d",i:"🔒",d:"Cybersecurity strategy, NIS2 compliance, risk management and resilience."},
            {n:"04",t:"AI, Digital & Innovation",c:"#00ffd5",i:"🤖",d:"AI use cases, copilots, AI governance, business automation and digital transformation."},
            {n:"05",t:"Program Management",c:"#ff9800",i:"📋",d:"Complex program delivery, cost control, deadlines and value creation."},
            {n:"06",t:"Crisis Management",c:"#00ffd5",i:"⚠️",d:"IT crisis management, rapid stabilization, remediation and executive support."},
            {n:"07",t:"Partner Firms",c:"#289cff",i:"🤝",d:"Executive partner firms, IT placement, strategic assignments and interim leadership."},
            {n:"08",t:"Executive IT Network",c:"#35ff9c",i:"🌐",d:"CIO, CTO, CISO and program leadership network for complex environments."}
          ]).map(card=>(
            <div key={card.n} style={{background:"linear-gradient(180deg,#071120,#04101d)",border:`1px solid ${card.c}55`,borderRadius:"16px",padding:"clamp(16px,3vw,32px)",minHeight:"auto",display:"flex",flexDirection:"column",boxShadow:`0 0 20px ${card.c}18`,wordBreak:"break-word",overflow:"hidden"}}>
              <div style={{display:"flex",justifyContent:"flex-start",marginBottom:"14px",gap:"10px"}}>
                <div style={{fontSize:"2rem"}}>{card.i}</div>
                <div style={{fontSize:"1.5rem",fontWeight:900,color:card.c}}>{card.n}</div>
              </div>
              <h3 style={{fontSize:"clamp(0.95rem,2vw,1.2rem)",fontWeight:900,color:"white",marginBottom:"12px",lineHeight:1.2}}>{card.t}</h3>
              <div style={{height:"2px",width:"100%",background:card.c,marginBottom:"14px"}}></div>
              <p style={{color:"rgba(255,255,255,0.75)",lineHeight:1.7,fontSize:"0.88rem"}}>{card.d}</p>
            </div>
          ))}
        </div>
      </section>

            {/* STRATÉGIE SI & GOUVERNANCE */}
      <section id="strategie" style={{background:"#030d1a",borderTop:"1px solid rgba(0,191,255,0.06)"}}>
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto 3rem"}}>
          <div className="section-label" style={{display:"flex",alignItems:"center"}}>
            <svg width="28" height="28" viewBox="0 0 38 38" style={{flexShrink:0,marginRight:"0.5rem"}}>
              <text x="19" y="30" fontSize="28" textAnchor="middle">🐙</text>
              <circle cx="14" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="24" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="14.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
              <circle cx="24.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
            </svg>
            {lang==="fr"?"STRATÉGIE SI & GOUVERNANCE":"IT STRATEGY & GOVERNANCE"}
          </div>
          <h2 className="section-title">
            {lang==="fr"?"Schéma Directeur SI &":"IT Master Plan &"}<br/>
            <span style={{color:"#00bfff"}}>{lang==="fr"?"Audit SI.":"IT Audit."}</span>
          </h2>
          <p className="section-sub">
            {lang==="fr"
              ?"Structurer vos projets en lien avec la stratégie d'entreprise — alignement IT/métiers, plan pluriannuel, feuilles de route et optimisation des processus."
              :"Structure your projects in line with business strategy — IT/business alignment, multi-year plan, roadmaps and process optimization."}
          </p>
        </div>

        <div className="two-col-grid reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"}}>

          {/* Schéma Directeur SI */}
          <div style={{background:"rgba(8,18,38,0.8)",border:"1px solid rgba(0,191,255,0.2)",borderRadius:"16px",padding:"2rem",borderTop:"3px solid #00bfff"}}>
            <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem"}}>
              <span style={{fontSize:"2rem"}}>🗺️</span>
              <div>
                <div style={{fontSize:"1.1rem",fontWeight:900,color:"#fff"}}>{lang==="fr"?"Schéma Directeur SI":"IT Master Plan"}</div>
                <div style={{fontSize:"0.65rem",fontWeight:700,color:"#00bfff",textTransform:"uppercase",letterSpacing:"0.08em"}}>{lang==="fr"?"Aligner votre SI sur votre stratégie business":"Align your IT with your business strategy"}</div>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
              {(lang==="fr"?[
                {t:"Définition du Schéma Directeur Informatique",d:"Assister la Direction pour définir le plan pluriannuel destiné à aligner le développement du Système d'Information sur la stratégie de l'entreprise."},
                {t:"Plan Directeur Informatique",d:"Transmettre une vision à 2 ou 3 ans des projets SI à planifier, assurer la cohérence fonctionnelle entre eux et la réalisation des feuilles de route."},
                {t:"Cohérence du Plan Directeur",d:"Proposer à la Direction la cohérence dans l'exécution du PDI — arbitrage, priorisation et gouvernance des projets."},
              ]:[
                {t:"IT Master Plan Definition",d:"Assist management in defining the multi-year plan to align IT system development with the company's strategy."},
                {t:"IT Directional Plan",d:"Provide a 2 to 3-year vision of IT projects to plan, ensure functional consistency between them and deliver roadmaps."},
                {t:"Master Plan Consistency",d:"Propose to management the consistency in PDI execution — arbitration, prioritization and project governance."},
              ]).map((item,i)=>(
                <div key={i} style={{display:"flex",gap:"0.8rem",alignItems:"flex-start",padding:"1rem",background:"rgba(0,191,255,0.04)",border:"1px solid rgba(0,191,255,0.1)",borderRadius:"8px"}}>
                  <span style={{color:"#00bfff",fontWeight:900,flexShrink:0,fontSize:"0.8rem"}}>→</span>
                  <div>
                    <div style={{fontSize:"0.82rem",fontWeight:700,color:"#fff",marginBottom:"0.25rem"}}>{item.t}</div>
                    <div style={{fontSize:"0.73rem",color:"rgba(255,255,255,0.45)",lineHeight:1.65}}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optimisation & Audit SI */}
          <div style={{background:"rgba(8,18,38,0.8)",border:"1px solid rgba(168,85,247,0.2)",borderRadius:"16px",padding:"2rem",borderTop:"3px solid #a855f7"}}>
            <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem"}}>
              <span style={{fontSize:"2rem"}}>🔍</span>
              <div>
                <div style={{fontSize:"1.1rem",fontWeight:900,color:"#fff"}}>{lang==="fr"?"Optimisation des processus & Audit SI":"Process Optimization & IT Audit"}</div>
                <div style={{fontSize:"0.65rem",fontWeight:700,color:"#a855f7",textTransform:"uppercase",letterSpacing:"0.08em"}}>{lang==="fr"?"Identifier les gains & structurer votre organisation":"Identify gains & structure your organization"}</div>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
              {(lang==="fr"?[
                {t:"Audit SI & diagnostic complet",d:"Évaluation complète du SI : maturité, risques, dette technique, conformité et recommandations d'amélioration priorisées."},
                {t:"Organisation cible & processus",d:"Définir l'organisation cible et les processus de gestion à partir des orientations DG & métiers, en se focalisant sur les enjeux majeurs."},
                {t:"Trajectoire & plan d'actions",d:"Préconiser une trajectoire validée par la DG et les métiers pour aboutir à l'amélioration recherchée, avec un plan d'actions concret."},
              ]:[
                {t:"IT Audit & full diagnostic",d:"Comprehensive IT assessment: maturity, risks, technical debt, compliance and prioritized improvement recommendations."},
                {t:"Target organization & processes",d:"Define the target organization and management processes based on executive and business direction, focusing on major challenges."},
                {t:"Trajectory & action plan",d:"Recommend a trajectory validated by management and business teams to achieve the desired improvement, with a concrete action plan."},
              ]).map((item,i)=>(
                <div key={i} style={{display:"flex",gap:"0.8rem",alignItems:"flex-start",padding:"1rem",background:"rgba(168,85,247,0.04)",border:"1px solid rgba(168,85,247,0.1)",borderRadius:"8px"}}>
                  <span style={{color:"#a855f7",fontWeight:900,flexShrink:0,fontSize:"0.8rem"}}>→</span>
                  <div>
                    <div style={{fontSize:"0.82rem",fontWeight:700,color:"#fff",marginBottom:"0.25rem"}}>{item.t}</div>
                    <div style={{fontSize:"0.73rem",color:"rgba(255,255,255,0.45)",lineHeight:1.65}}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* KPIs */}
        <div className="reveal kpi-row" style={{maxWidth:"1280px",width:"100%",margin:"2rem auto 0",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:0,background:"rgba(0,191,255,0.04)",border:"1px solid rgba(0,191,255,0.1)",borderRadius:"12px",overflow:"hidden"}}>
          {(lang==="fr"?[
            {v:"30j",l:"Audit flash & diagnostic"},
            {v:"2-3 ans",l:"Vision PDI"},
            {v:"CODIR/DG",l:"Niveau pilotage"},
            {v:"100%",l:"Alignement IT/Métiers"},
          ]:[
            {v:"30d",l:"Flash audit & diagnostic"},
            {v:"2-3 yrs",l:"Master Plan vision"},
            {v:"CODIR/DG",l:"Gov. level"},
            {v:"100%",l:"IT / Business alignment"},
          ]).map((s,i,arr)=>(
            <div key={i} style={{flex:1,padding:"1.5rem",textAlign:"center",borderRight:i<arr.length-1?"1px solid rgba(0,191,255,0.1)":"none"}}>
              <div style={{fontSize:"1.8rem",fontWeight:900,color:"#00bfff",lineHeight:1}}>{s.v}</div>
              <div style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.3)",textTransform:"uppercase",letterSpacing:"0.06em",marginTop:"0.3rem"}}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

            {/* IA & INNOVATION */}
      <section id="ai" style={{background:"#020b18",borderTop:"1px solid rgba(0,191,255,0.06)"}}>
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto 3rem"}}>
          <div className="section-label" style={{display:"flex",alignItems:"center",color:"#00ffd5"}}>
            <svg width="28" height="28" viewBox="0 0 38 38" style={{flexShrink:0,marginRight:"0.5rem"}}>
              <text x="19" y="30" fontSize="28" textAnchor="middle">🐙</text>
              <circle cx="14" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="24" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="14.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
              <circle cx="24.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
            </svg>
            {lang==="fr"?"IA & INNOVATION":"AI & INNOVATION"}
          </div>
          <h2 className="section-title">
            {lang==="fr"?"L'IA générative devient":"Generative AI becomes"}<br/>
            <span style={{color:"#00ffd5"}}>{lang==="fr"?"un levier stratégique":"a strategic driver"}</span><br/>
            {lang==="fr"?"de transformation.":"for transformation."}
          </h2>
          <p className="section-sub" style={{maxWidth:"900px"}}>
            {lang==="fr"
              ?"Accompagnement des directions générales et métiers sur les cas d'usage IA, copilots, gouvernance IA, IA générative & LLM, innovation métier et adoption entreprise."
              :"Supporting executive teams on AI use cases, copilots, AI governance, generative AI & LLM, business innovation and enterprise adoption."}
          </p>
          <div style={{display:"flex",flexWrap:"wrap",gap:"10px",marginBottom:"2rem"}}>
            {(lang==="fr"
              ?["🤖 Cas d'usage IA","✨ IA générative & LLM","🎯 Copilots IA","🏛️ Gouvernance IA","🚀 Innovation métier","🏢 Adoption entreprise","📊 Data & Analytics","🔄 Automatisation RPA"]
              :["🤖 AI Use Cases","✨ Generative AI & LLM","🎯 AI Copilots","🏛️ AI Governance","🚀 Business Innovation","🏢 Enterprise Adoption","📊 Data & Analytics","🔄 RPA Automation"]
            ).map((item,i)=>(
              <div key={i} style={{border:"1px solid rgba(0,255,213,0.2)",background:"rgba(0,255,213,0.05)",padding:"8px 14px",borderRadius:"999px",color:"#00ffd5",fontSize:"0.82rem",fontWeight:700}}>{item}</div>
            ))}
          </div>

          {/* Outils IA avec logos */}
          <div style={{marginBottom:"2rem"}}>
            <div style={{fontSize:"0.7rem",fontWeight:700,color:"rgba(255,255,255,0.35)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"0.8rem"}}>{lang==="fr"?"Outils & Plateformes IA":"AI Tools & Platforms"}</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:"0.6rem"}}>
              {[
                {name:"ChatGPT",logo:"https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",color:"rgba(16,163,127,0.15)",border:"rgba(16,163,127,0.3)",text:"#10a37f"},
                {name:"Claude",logo:"https://www.anthropic.com/favicon.ico",color:"rgba(204,120,92,0.15)",border:"rgba(204,120,92,0.3)",text:"#cc785c"},
                {name:"Copilot",logo:"https://www.microsoft.com/favicon.ico",color:"rgba(0,120,212,0.15)",border:"rgba(0,120,212,0.3)",text:"#0078d4"},
                {name:"Gemini",logo:"https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",color:"rgba(66,133,244,0.15)",border:"rgba(66,133,244,0.3)",text:"#4285f4"},
                {name:"n8n",logo:"https://n8n.io/favicon.ico",color:"rgba(234,76,137,0.15)",border:"rgba(234,76,137,0.3)",text:"#ea4c89"},
                {name:"Make.com",logo:"https://www.make.com/favicon.ico",color:"rgba(102,88,255,0.15)",border:"rgba(102,88,255,0.3)",text:"#6658ff"},
                {name:"Zapier",logo:"https://zapier.com/favicon.ico",color:"rgba(255,79,0,0.15)",border:"rgba(255,79,0,0.3)",text:"#ff4f00"},
                {name:"NotebookLM",logo:"https://notebooklm.google/favicon.ico",color:"rgba(66,133,244,0.15)",border:"rgba(66,133,244,0.3)",text:"#4285f4"},
              ].map((tool,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:"7px",padding:"7px 14px",borderRadius:"999px",background:tool.color,border:`1px solid ${tool.border}`}}>
                  <img src={tool.logo} alt={tool.name} style={{width:"16px",height:"16px",borderRadius:"3px",objectFit:"contain"}} onError={(e)=>{(e.target as HTMLImageElement).style.display="none"}}/>
                  <span style={{fontSize:"0.78rem",fontWeight:700,color:tool.text}}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ia-cards-grid reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1px",background:"rgba(0,255,213,0.06)"}}>
          {(lang==="fr"?[
            {t:"Data First",i:"📊",d:"Gouvernance & qualité de la donnée avant tout. Architecture data, Data Platform, BI & Analytics au service de la performance."},
            {t:"IA & LLM",i:"🤖",d:"Déploiement IA générative, LLM, copilots métier. Cas d'usage concrets, mesurés, +15 à 20% de productivité documentés."},
            {t:"Automatisation",i:"🔄",d:"RPA, n8n, workflows intelligents. Automatisation des processus métier répétitifs pour libérer la valeur humaine."},
            {t:"Gouvernance IA",i:"🏛️",d:"Cadre éthique, gestion des risques IA, conformité réglementaire et adoption responsable dans l'entreprise."}
          ]:[
            {t:"Data First",i:"📊",d:"Data governance & quality above all. Data architecture, Data Platform, BI & Analytics for business performance."},
            {t:"AI & LLM",i:"🤖",d:"Generative AI deployment, LLM, business copilots. Concrete, measured use cases — +15 to 20% productivity documented."},
            {t:"Automation",i:"🔄",d:"RPA, n8n, intelligent workflows. Automating repetitive business processes to unlock human value."},
            {t:"AI Governance",i:"🏛️",d:"Ethical framework, AI risk management, regulatory compliance and responsible enterprise adoption."}
          ]).map((c,i)=>(
            <div key={i} style={{background:"#071120",padding:"2rem 1.5rem"}}>
              <div style={{fontSize:"1.8rem",marginBottom:"0.8rem"}}>{c.i}</div>
              <h3 style={{fontSize:"1rem",fontWeight:900,color:"#00ffd5",marginBottom:"0.6rem"}}>{c.t}</h3>
              <p style={{fontSize:"0.82rem",color:"rgba(255,255,255,0.55)",lineHeight:1.7}}>{c.d}</p>
            </div>
          ))}
        </div>

        {/* Diagnostic IA + Stratégie IA */}
        <div className="two-col-grid reveal" style={{maxWidth:"1280px",width:"100%",margin:"2rem auto 0",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"}}>

          {/* Diagnostic IA */}
          <div style={{background:"rgba(8,18,38,0.8)",border:"1px solid rgba(0,191,255,0.2)",borderRadius:"16px",padding:"2rem",borderTop:"3px solid #00bfff"}}>
            <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem"}}>
              <span style={{fontSize:"2rem"}}>🔍</span>
              <div>
                <div style={{fontSize:"1.1rem",fontWeight:900,color:"#fff"}}>{lang==="fr"?"Diagnostic IA":"AI Diagnostic"}</div>
                <div style={{fontSize:"0.65rem",fontWeight:700,color:"#00bfff",textTransform:"uppercase",letterSpacing:"0.08em"}}>{lang==="fr"?"Où sont vos gains IA ?":"Where are your AI gains?"}</div>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"0.8rem"}}>
              {(lang==="fr"?[
                {t:"Évaluation de la maturité IA",d:"Audit des capacités data, SI et humaines. Positionnement sur l'échelle de maturité IA (0 → 5)."},
                {t:"Identification des quick wins",d:"Cartographie des processus à fort potentiel IA. ROI rapide vs projets structurants."},
                {t:"Qualité & disponibilité des données",d:"Cartographie data, niveau de qualité, gouvernance et prérequis techniques pour l'IA."},
              ]:[
                {t:"AI maturity assessment",d:"Audit of data, IT and human capabilities. Positioning on the AI maturity scale (0 → 5)."},
                {t:"Quick win identification",d:"Mapping processes with high AI potential. Fast ROI vs structural projects."},
                {t:"Data quality & availability",d:"Data mapping, quality level, governance and technical prerequisites for AI."},
              ]).map((item,i)=>(
                <div key={i} style={{display:"flex",gap:"0.8rem",alignItems:"flex-start",padding:"1rem",background:"rgba(0,191,255,0.04)",border:"1px solid rgba(0,191,255,0.1)",borderRadius:"8px"}}>
                  <span style={{color:"#00bfff",fontWeight:900,flexShrink:0}}>→</span>
                  <div>
                    <div style={{fontSize:"0.82rem",fontWeight:700,color:"#fff",marginBottom:"0.2rem"}}>{item.t}</div>
                    <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.45)",lineHeight:1.65}}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stratégie IA */}
          <div style={{background:"rgba(8,18,38,0.8)",border:"1px solid rgba(0,255,213,0.2)",borderRadius:"16px",padding:"2rem",borderTop:"3px solid #00ffd5"}}>
            <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem"}}>
              <span style={{fontSize:"2rem"}}>🗺️</span>
              <div>
                <div style={{fontSize:"1.1rem",fontWeight:900,color:"#fff"}}>{lang==="fr"?"Stratégie IA":"AI Strategy"}</div>
                <div style={{fontSize:"0.65rem",fontWeight:700,color:"#00ffd5",textTransform:"uppercase",letterSpacing:"0.08em"}}>{lang==="fr"?"Comment les atteindre en 12-36 mois":"How to achieve them in 12-36 months"}</div>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"0.8rem"}}>
              {(lang==="fr"?[
                {t:"Vision IA & ROI mesuré",d:"Définir la vision IA alignée sur la stratégie business. Objectifs de gains documentés et mesurables."},
                {t:"Feuille de route IA 12-36 mois",d:"Plan de déploiement priorisé, jalons, ressources, budget et KPIs de suivi."},
                {t:"Gouvernance IA & adoption",d:"Cadre éthique, gestion des risques IA, conformité réglementaire et conduite du changement."},
              ]:[
                {t:"AI vision & measured ROI",d:"Define AI vision aligned with business strategy. Documented and measurable gain objectives."},
                {t:"AI roadmap 12-36 months",d:"Prioritized deployment plan, milestones, resources, budget and tracking KPIs."},
                {t:"AI governance & adoption",d:"Ethical framework, AI risk management, regulatory compliance and change management."},
              ]).map((item,i)=>(
                <div key={i} style={{display:"flex",gap:"0.8rem",alignItems:"flex-start",padding:"1rem",background:"rgba(0,255,213,0.04)",border:"1px solid rgba(0,255,213,0.1)",borderRadius:"8px"}}>
                  <span style={{color:"#00ffd5",fontWeight:900,flexShrink:0}}>→</span>
                  <div>
                    <div style={{fontSize:"0.82rem",fontWeight:700,color:"#fff",marginBottom:"0.2rem"}}>{item.t}</div>
                    <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.45)",lineHeight:1.65}}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* KPIs IA */}
        <div className="reveal kpi-row" style={{maxWidth:"1280px",width:"100%",margin:"1.5rem auto 0",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:0,background:"rgba(0,255,213,0.04)",border:"1px solid rgba(0,255,213,0.1)",borderRadius:"12px",overflow:"hidden"}}>
          {(lang==="fr"?[
            {v:"30j",l:"Diagnostic flash"},
            {v:"12-36m",l:"Feuille de route"},
            {v:"CODIR/DG",l:"Niveau pilotage"},
            {v:"+20%",l:"Productivité documentée"},
          ]:[
            {v:"30d",l:"Flash diagnostic"},
            {v:"12-36m",l:"AI roadmap"},
            {v:"CODIR/DG",l:"Gov. level"},
            {v:"+20%",l:"Documented productivity"},
          ]).map((s,i,arr)=>(
            <div key={i} style={{padding:"1rem",textAlign:"center",borderRight:i<arr.length-1?"1px solid rgba(0,255,213,0.1)":"none"}}>
              <div style={{fontSize:"clamp(1rem,2.5vw,1.6rem)",fontWeight:900,color:"#00ffd5",lineHeight:1}}>{s.v}</div>
              <div style={{fontSize:"clamp(0.5rem,1.2vw,0.62rem)",color:"rgba(255,255,255,0.3)",textTransform:"uppercase",letterSpacing:"0.04em",marginTop:"0.3rem"}}>{s.l}</div>
            </div>
          ))}
        </div>

      </section>

            {/* CYBERSÉCURITÉ */}
      <section id="cyber" style={{background:"#020409",borderTop:"1px solid rgba(255,80,80,0.08)"}}>
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto 3rem"}}>
          <div className="section-label" style={{display:"flex",alignItems:"center",color:"#ff6b6b"}}>
            <svg width="28" height="28" viewBox="0 0 38 38" style={{flexShrink:0,marginRight:"0.5rem"}}>
              <text x="19" y="30" fontSize="28" textAnchor="middle">🐙</text>
              <circle cx="14" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="24" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="14.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
              <circle cx="24.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
            </svg>
            {lang==="fr"?"CYBERSÉCURITÉ & GOUVERNANCE":"CYBERSECURITY & GOVERNANCE"}
          </div>
          <h2 className="section-title">{lang==="fr"?"Cybersécurité & conformité":"Cybersecurity & compliance"}<br/><span style={{color:"#ff6b6b"}}>{lang==="fr"?"ne sont plus des options.":"are no longer optional."}</span></h2>
          <p className="section-sub">{lang==="fr"?"NIS2, RGPD, ISO 27001, PCA/PRA : chaque transformation SI doit intégrer la résilience et la gouvernance dès le premier jour.":"NIS2, GDPR, ISO 27001, BCP/DRP: every IT transformation must integrate resilience and governance from day one."}</p>
        </div>
        <div className="cyber-grid reveal" style={{maxWidth:"1280px",margin:"0 auto"}}>
          {(lang==="fr"?[
            {t:"Audit & PSSI",d:"Audit de sécurité complet, politique de sécurité SI, cartographie des risques."},
            {t:"Conformité NIS2 & RGPD",d:"Mise en conformité réglementaire, DPO, cartographie données, registre des traitements."},
            {t:"Résilience PCA/PRA",d:"Plan de Continuité et Reprise d'Activité. Tests, documentation, exercices de crise."},
            {t:"Gestion de crise cyber",d:"Intervention sur incident, coordination équipes, retour à la normale."}
          ]:[
            {t:"Audit & Security Policy",d:"Full security audit, information security policy, risk mapping."},
            {t:"NIS2 & GDPR Compliance",d:"Regulatory compliance, DPO, data mapping, processing register."},
            {t:"BCP/DRP Resilience",d:"Business Continuity and Disaster Recovery Plan. Tests, documentation, crisis exercises."},
            {t:"Cyber Crisis Management",d:"Incident response, team coordination, return to normal operations."}
          ]).map((c,i)=>(
            <div key={i} className="cyber-card">
              <div style={{fontSize:"1.5rem",marginBottom:"12px"}}>🔒</div>
              <h4>{c.t}</h4>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

            {/* RÉSEAU & PARTENAIRES */}
      <section id="network" style={{background:"#020b18",borderTop:"1px solid rgba(255,255,255,0.04)"}}>
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto 2rem"}}>
          <div className="section-label" style={{display:"flex",alignItems:"center"}}>
            <svg width="28" height="28" viewBox="0 0 38 38" style={{flexShrink:0,marginRight:"0.5rem"}}>
              <text x="19" y="30" fontSize="28" textAnchor="middle">🐙</text>
              <circle cx="14" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="24" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="14.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
              <circle cx="24.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
            </svg>
            {lang==="fr"?"CABINETS PARTENAIRES & RÉSEAU EXECUTIVE":"PARTNER FIRMS & EXECUTIVE NETWORK"}
          </div>
          <h2 className="section-title">{lang==="fr"?"Missions directes,":"Direct assignments,"}<br/><span style={{color:"#00bfff"}}>{lang==="fr"?"cabinets partenaires &":"executive partner firms &"}</span><br/>{lang==="fr"?"réseau executive IT.":"executive IT network."}</h2>
          <p className="section-sub">{lang==="fr"?"Octopus Line Conseil développe un réseau de managers de transition, experts CIO/CISO/CTO et cabinets partenaires pour répondre rapidement aux contextes stratégiques, critiques ou de transformation.":"Octopus Line Conseil develops a network of interim executives, CIO/CISO/CTO experts and executive partner firms for strategic, transformation and critical environments."}</p>
        </div>
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto",background:"rgba(0,191,255,0.05)",border:"1px solid rgba(0,191,255,0.18)",borderRadius:"20px",padding:"32px"}}>
          <h3 style={{fontSize:"1.4rem",fontWeight:900,marginBottom:"20px"}}>{lang==="fr"?"Nous rejoindre":"Join our network"}</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"14px"}}>
            <input placeholder={lang==="fr"?"Nom & prénom":"Full name"} style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}}/>
            <input placeholder="Email" style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}}/>
            <input placeholder={lang==="fr"?"Fonction / expertise":"Role / expertise"} style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}}/>
            <input placeholder={lang==="fr"?"TJM souhaité":"Expected daily rate"} style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}}/>
          </div>
          <textarea placeholder={lang==="fr"?"Résumé de profil, missions, secteurs, ERP, cybersécurité, transformation, management de transition...":"Profile summary, missions, ERP, cybersecurity, transformation, interim leadership..."} style={{width:"100%",minHeight:"120px",marginTop:"14px",padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white",resize:"vertical"}}/>
          <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"16px",flexWrap:"wrap",marginTop:"16px"}}>
            <div style={{color:"rgba(255,255,255,0.5)",fontSize:"0.85rem"}}>{lang==="fr"?"Managers de transition · CIO · CISO · CTO · ERP · Cyber · IA & Innovation":"Interim Executives · CIO · CISO · CTO · ERP · Cyber · AI & Innovation"}</div>
            <button className="btn-primary" type="button" onClick={(e)=>{
              const btn = e.currentTarget;
              btn.textContent = lang==="fr"?"✓ Profil envoyé !":"✓ Profile sent!";
              btn.style.background="#00f0c0";
              btn.style.color="#000";
              setTimeout(()=>{btn.textContent=lang==="fr"?"Envoyer mon profil":"Submit my profile";btn.style.background="";btn.style.color="";},3000);
            }}>{lang==="fr"?"Envoyer mon profil →":"Submit my profile →"}</button>
          </div>
        </div>
      </section>

            {/* MÉTHODE */}
      <section id="methode" style={{background:"#030d1a",borderTop:"1px solid rgba(255,255,255,0.04)"}}>
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto 3rem"}}>
          <div className="section-label" style={{display:"flex",alignItems:"center"}}>
            <svg width="28" height="28" viewBox="0 0 38 38" style={{flexShrink:0,marginRight:"0.5rem"}}>
              <text x="19" y="30" fontSize="28" textAnchor="middle">🐙</text>
              <circle cx="14" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="24" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="14.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
              <circle cx="24.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
            </svg>
            {lang==="fr"?"MÉTHODE & POSTURE":"METHOD & APPROACH"}
          </div>
          <h2 className="section-title">{lang==="fr"?"Notre méthode, votre impact.":"Our method, your impact."}</h2>
          <p className="section-sub">{lang==="fr"?"Une méthode éprouvée, dans des entreprises de 65M€ à 1,5Md€ de CA. Résultats tangibles dès les premières semaines.":"A proven method, across companies from €65M to €1.5B in revenue. Tangible results from the first weeks."}</p>
        </div>
        <div className="methode-grid reveal" style={{maxWidth:"1280px",margin:"0 auto"}}>
          <div>
            {(lang==="fr"?[
              {w:"Semaine 1",t:"Immersion & Audit Flash",b:"100% sur site. Rencontres IT & métiers, cartographie des dépendances critiques, signaux faibles."},
              {w:"Semaines 2–3",t:"Stabilisation & Quick Wins",b:"Nous rassurons et remobilisons les équipes. Gains rapides visibles dès J+10. Priorisation urgence/importance."},
              {w:"Semaine 4",t:"Roadmap & Reporting COMEX/DG",b:"Plan d'action priorisé Valeur × Effort. Roadmap 6–24 mois livrée au COMEX/DG. Préparation de la succession dès J+1."}
            ]:[
              {w:"Week 1",t:"Immersion & Flash Audit",b:"100% on-site. IT & business meetings, critical dependency mapping, early signals."},
              {w:"Weeks 2–3",t:"Stabilization & Quick Wins",b:"Reassure teams. Rapid gains visible from day 10. Urgency/importance prioritization."},
              {w:"Week 4",t:"Roadmap & Board Reporting",b:"Value × Effort action plan. 6–24 month roadmap delivered to the Board."}
            ]).map((s,i,arr)=>(
              <div key={i} className="step-item">
                <div className="step-marker"><div className="step-dot"></div>{i<arr.length-1&&<div className="step-line"></div>}</div>
                <div>
                  <div style={{fontSize:"0.65rem",fontWeight:700,color:"#00bfff",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"0.3rem"}}>{s.w}</div>
                  <div style={{fontSize:"0.95rem",fontWeight:700,color:"#fff",marginBottom:"0.3rem"}}>{s.t}</div>
                  <div style={{fontSize:"0.8rem",color:"rgba(255,255,255,0.5)",lineHeight:1.7}}>{s.b}</div>
                </div>
              </div>
            ))}
            <div style={{background:"rgba(0,191,255,0.05)",border:"1px solid rgba(0,191,255,0.15)",padding:"1.5rem",borderRadius:"8px",marginTop:"2rem"}}>
              <blockquote style={{fontSize:"0.95rem",fontStyle:"italic",color:"rgba(255,255,255,0.65)",lineHeight:1.8,marginBottom:"0.8rem"}}>
                &ldquo;{lang==="fr"?"La DSI ne doit pas être un centre de coûts — c'est un levier de croissance. Notre réseau transforme votre SI en avantage concurrentiel mesurable.":"IT should not be a cost center — it's a growth lever. Our network transforms your IT into measurable competitive advantage."}&rdquo;
              </blockquote>
              <div style={{fontSize:"0.72rem",color:"#00bfff",fontWeight:600}}>— Octopus Line Conseil · {lang==="fr"?"Cabinet de Conseil & Management de Transition IT":"IT Consulting & Interim Management"}</div>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
            {(lang==="fr"?[
              ["🎯 Pragmatiques","Toujours centrés sur l'enjeu business. Pas de technologie pour la technologie."],
              ["⚡ Disponibles sous 48h","Nos experts interviennent immédiatement. Sans courbe d'apprentissage."],
              ["🤝 Business Partners","Techniques avec les équipes, stratégiques avec la DG et le COMEX."],
              ["🔒 Sans langue de bois","Nous disons ce que nous voyons, avec diplomatie mais en toute franchise."],
              ["🏛️ Niveau CODIR/COMEX/DG","Nos experts sont rattachés CODIR/COMEX/DG sur toutes les missions."],
              ["🌍 Territoire","Sophia Antipolis · Monaco · Nice · Aix/Marseille · Suisse · Paris · International"]
            ]:[
              ["🎯 Pragmatic","Always focused on business impact. No technology for technology's sake."],
              ["⚡ Available within 48h","Our experts intervene immediately. No learning curve."],
              ["🤝 Business Partners","Technical with teams, strategic with the Board and COMEX."],
              ["🔒 Transparent","We say what we see, with diplomacy but full honesty."],
              ["🏛️ Board Level","Our experts operate at CODIR/COMEX/DG level on all assignments."],
              ["🌍 Territory","Sophia Antipolis · Monaco · Nice · Aix/Marseille · Switzerland · Paris · International"]
            ]).map(([h,p],i)=>(
              <div key={i} style={{padding:"1rem",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"8px"}}>
                <div style={{fontSize:"0.82rem",fontWeight:700,color:"#fff",marginBottom:"0.3rem"}}>{h}</div>
                <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.45)",lineHeight:1.6}}>{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


                        {/* EXEMPLES DE MISSIONS */}
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto"}}>
          <div className="section-label" style={{marginBottom:"1.5rem"}}>{lang==="fr"?"EXEMPLES DE MISSIONS":"MISSION EXAMPLES"}</div>
          <div className="missions-grid">
            {missions[lang].map((m,i)=>(
              <div key={i} className="mission-card">
                <div style={{fontSize:"0.62rem",fontWeight:700,color:m.color,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"0.4rem"}}>{m.label}</div>
                <div style={{fontSize:"0.85rem",fontWeight:700,color:"#fff",marginBottom:"0.3rem"}}>{m.company}</div>
                <div style={{height:"1px",background:`${m.color}44`,margin:"0.5rem 0"}}></div>
                <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.4)",lineHeight:1.6,marginBottom:"0.4rem"}}>{m.desc}</div>
                <div style={{fontSize:"0.72rem",fontWeight:700,color:"#00f0c0"}}>{m.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

                  {/* CONTACT */}
      <section id="contact" style={{background:"#020817",borderTop:"1px solid rgba(255,255,255,0.04)"}}>
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto 2rem"}}>
          <div className="section-label" style={{display:"flex",alignItems:"center"}}>
            <svg width="28" height="28" viewBox="0 0 38 38" style={{flexShrink:0,marginRight:"0.5rem"}}>
              <text x="19" y="30" fontSize="28" textAnchor="middle">🐙</text>
              <circle cx="14" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="24" cy="15" r="2.2" fill="#000" opacity="0.9"/>
              <circle cx="14.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
              <circle cx="24.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
            </svg>
            CONTACT
          </div>
          <h2 className="section-title">{lang==="fr"?"Un besoin critique,":"A critical need,"}<br/><span style={{color:"#00bfff"}}>{lang==="fr"?"un projet stratégique ?":"a strategic project?"}</span></h2>
          <p className="section-sub">{lang==="fr"?"Direction générale, DSI, cabinets partenaires ou contexte critique : échangeons rapidement sur votre situation, vos enjeux de transformation ou vos besoins en management de transition.":"Executive management, CIO office, partner firms or critical environments: let's discuss your transformation, governance or interim leadership needs."}</p>
        </div>
        <div className="reveal" style={{maxWidth:"1280px",width:"100%",margin:"0 auto",background:"rgba(0,191,255,0.04)",border:"1px solid rgba(0,191,255,0.15)",borderRadius:"18px",padding:"32px"}}>
          <h3 style={{fontSize:"1.4rem",fontWeight:900,marginBottom:"20px"}}>{lang==="fr"?"Échangez avec un expert":"Talk with an expert"}</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"14px"}}>
            <input placeholder={lang==="fr"?"Nom & prénom":"Full name"} style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}}/>
            <input placeholder="Email" style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}}/>
            <input placeholder={lang==="fr"?"Téléphone":"Phone"} style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}}/>
            <input placeholder={lang==="fr"?"Entreprise":"Company"} style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px",marginTop:"14px"}}>
            <select style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}}>
              <option value="">{lang==="fr"?"— Votre situation —":"— Your situation —"}</option>
              <option>{lang==="fr"?"DSI de Transition / Vacance managériale":"Interim CIO / Leadership vacancy"}</option>
              <option>{lang==="fr"?"Gestion de crise SI":"IT Crisis Management"}</option>
              <option>{lang==="fr"?"Cybersécurité & Conformité":"Cybersecurity & Compliance"}</option>
              <option>{lang==="fr"?"Migration ERP / Projet bloqué":"ERP Migration / Blocked project"}</option>
              <option>{lang==="fr"?"IA & Transformation Digitale":"AI & Digital Transformation"}</option>
              <option>{lang==="fr"?"Post-fusion / M&A":"Post-merger / M&A"}</option>
            </select>
            <select style={{padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white"}}>
              <option value="">{lang==="fr"?"— Délai souhaité —":"— Expected timeline —"}</option>
              <option>{lang==="fr"?"🔴 Urgence — sous 48h":"🔴 Urgent — within 48h"}</option>
              <option>{lang==="fr"?"🟡 Rapide — cette semaine":"🟡 Fast — this week"}</option>
              <option>{lang==="fr"?"🟢 Dans le mois":"🟢 Within the month"}</option>
              <option>{lang==="fr"?"⚪ À définir ensemble":"⚪ To be defined"}</option>
            </select>
          </div>
          <textarea placeholder={lang==="fr"?"Décrivez votre contexte, projet, urgence ou besoin de management de transition... Plus vous êtes précis, plus nous pourrons vous proposer une intervention adaptée.":"Describe your context, project, urgency or interim management needs... The more precise you are, the better we can propose an adapted intervention."} style={{width:"100%",minHeight:"160px",marginTop:"14px",padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",background:"#071120",color:"white",resize:"vertical"}}/>
          <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"16px",flexWrap:"wrap",marginTop:"20px"}}>
            <div style={{display:"flex",alignItems:"center",gap:"1rem",flexWrap:"wrap"}}>
              <a href="tel:+33623733484" style={{fontSize:"0.88rem",fontWeight:700,color:"#00bfff",textDecoration:"none"}}>📞 +33 (0)6 23 73 34 84</a>
              <a href="mailto:contact@octopus-line-conseil.com" style={{fontSize:"0.88rem",fontWeight:700,color:"#00bfff",textDecoration:"none"}}>✉️ contact@octopus-line-conseil.com</a>
              <div style={{fontSize:"0.82rem",color:"rgba(255,255,255,0.4)"}}>{lang==="fr"?"Sophia Antipolis · Monaco · Paris · International":"Sophia Antipolis · Monaco · Paris · International"}</div>
            </div>
            <button className="btn-primary" type="button" onClick={(e)=>{
              const btn = e.currentTarget;
              btn.textContent = lang==="fr"?"✓ Message envoyé !":"✓ Message sent!";
              btn.style.background="#00f0c0";
              btn.style.color="#000";
              setTimeout(()=>{btn.textContent=lang==="fr"?"Envoyer ma demande →":"Send request →";btn.style.background="";btn.style.color="";},3000);
            }}>{lang==="fr"?"Envoyer ma demande →":"Send request →"}</button>
          </div>
        </div>
      </section>

      <footer style={{maxWidth:"1680px",width:"100%",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <svg width="28" height="28" viewBox="0 0 38 38" style={{flexShrink:0}}>
            <text x="19" y="30" fontSize="28" textAnchor="middle">🐙</text>
            <circle cx="14" cy="15" r="2.2" fill="#000" opacity="0.9"/>
            <circle cx="24" cy="15" r="2.2" fill="#000" opacity="0.9"/>
            <circle cx="14.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
            <circle cx="24.7" cy="14.3" r="0.8" fill="white" opacity="0.95"/>
          </svg>
          <strong>Octopus <span style={{color:"#00bfff"}}>Line</span> <strong style={{color:"#fff"}}>Conseil</strong></strong>
        </div>
        <div>© 2025 Octopus Line Conseil · {lang==="fr"?"Tous droits réservés":"All rights reserved"}</div>
        <div style={{color:"rgba(255,255,255,0.3)"}}>DSI · CDO · CTO · RSSI · CISO · {lang==="fr"?"Sophia Antipolis · Monaco · Paris · International":"Sophia Antipolis · Monaco · Paris · International"}</div>
      </footer>
    </>
  );
}
