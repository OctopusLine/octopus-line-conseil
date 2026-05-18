"use client";
import { useEffect } from "react";

export default function OctopusLineConseil() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

    (window as any).setLang = function (lang: string) {
      document.querySelectorAll(".lang-btn").forEach((b: any) => b.classList.toggle("active", b.textContent === lang.toUpperCase()));
      const get = (id: string) => document.getElementById(id);
      if (lang === "en") {
        get("h-badge")!.innerHTML = "● First specialist CIO cabinet · South-East France";
        get("h-title")!.innerHTML = "IT & Digital<br/>Transformation<br/><em style='color:#00a8d4'>AI, Data & Automation</em><br/><span style='font-size:0.72em;font-weight:600;color:rgba(255,255,255,0.75)'>Cybersecurity · M&A · Carve-out</span>";
        get("h-sub")!.innerHTML = "<strong>Not a generalist firm. Not a technician.</strong><br/>A CIO who sits on the Executive Committee, speaks business, manages crises and delivers measurable results.";
        get("h-cta1")!.textContent = "Let's discuss your situation";
        get("h-cta2")!.textContent = "Discover our expertises";
        get("ct-title")!.innerHTML = "Let's talk about<br/>your situation";
        get("ct-sub")!.textContent = "Whether it's an emergency or a project to structure — available within 48h.";
      } else {
        get("h-badge")!.innerHTML = "● MANAGER DE TRANSITION DSI · CDO · RSSI · SUD-EST DE LA FRANCE · DISPONIBLE SOUS 48H";
        get("h-title")!.innerHTML = "Transformation SI,<br/>gestion de crise &amp;<br/>management de<br/>transition.<br/><em style='color:#00a8d4'>Opérationnel dès<br/>le premier jour.</em>";
        get("h-sub")!.innerHTML = "Pilotage DSI de transition, transformation IT, gestion de crise, carve-out &amp; intégration SI.<br/><br/>Alignement technologique et objectifs métiers dans les contextes sensibles.<br/><br/><strong>Business Partner à 360° · Disponible sous 48h.</strong>";
        get("h-cta1")!.textContent = "Parlons de votre situation";
        get("h-cta2")!.textContent = "Découvrir les expertises";
        get("ct-title")!.innerHTML = "Discutons de<br/>votre situation";
        get("ct-sub")!.textContent = "Que ce soit une urgence ou un projet à structurer — disponibles sous 48h.";
      }
    };

    (window as any).handleSubmit = function (e: Event) {
      e.preventDefault();
      const btn = document.getElementById("f-submit") as HTMLButtonElement;
      if (btn) { btn.textContent = "✓ Message envoyé !"; btn.style.background = "#00f0c0"; setTimeout(() => { btn.textContent = "Envoyer →"; btn.style.background = ""; }, 3000); }
    };

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        :root { --ink:#03060f; --deep:#060c1a; --navy:#0b1628; --aqua:#00a8d4; --bright:#00d4ff; --mint:#00f0c0; --white:#ffffff; --muted:rgba(255,255,255,0.45); --border:rgba(0,168,212,0.12); }
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        section[id]{scroll-margin-top:80px}
        body{font-family:'Inter',sans-serif;background:var(--ink);color:var(--white);overflow-x:hidden}
        nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;align-items:center;justify-content:space-between;padding:1.1rem 3.5rem;background:rgba(3,6,15,0.92);backdrop-filter:blur(16px);border-bottom:1px solid var(--border)}
        .nav-logo{display:flex;align-items:center;gap:0.6rem;text-decoration:none}
        .nav-logo-icon{font-size:1.4rem}
        .nav-logo-text{font-size:1.1rem;font-weight:800;letter-spacing:-0.02em;color:var(--white)}
        .nav-logo-text span{color:var(--aqua)}
        .nav-links{display:flex;gap:2rem;list-style:none}
        .nav-links a{font-size:0.78rem;font-weight:500;color:var(--muted);text-decoration:none;letter-spacing:0.04em;text-transform:uppercase;transition:color 0.2s}
        .nav-links a:hover{color:var(--aqua)}
        .nav-right{display:flex;align-items:center;gap:1rem}
        .nav-dispo{display:flex;align-items:center;gap:0.5rem;font-size:0.72rem;color:var(--muted)}
        .dispo-dot{width:6px;height:6px;border-radius:50%;background:#00e89a;animation:blink 2s infinite}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
        .lang-wrap{display:flex}
        .lang-btn{background:none;border:1px solid rgba(0,168,212,0.25);color:var(--muted);padding:0.28rem 0.65rem;font-size:0.72rem;font-weight:700;cursor:pointer;font-family:'Inter',sans-serif;transition:all 0.2s}
        .lang-btn:first-child{border-radius:2px 0 0 2px}
        .lang-btn:last-child{border-radius:0 2px 2px 0;border-left:none}
        .lang-btn.active,.lang-btn:hover{background:var(--aqua);border-color:var(--aqua);color:var(--ink)}
        #hero{min-height:100vh;position:relative;overflow:hidden;display:flex;align-items:center;background:var(--ink);padding:8rem 3.5rem 5rem}
        .hero-bg{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 65% 55% at 72% 45%,rgba(0,168,212,0.13) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 8% 80%,rgba(0,50,120,0.1) 0%,transparent 55%),linear-gradient(160deg,#03060f 0%,#060f20 100%)}
        .hero-grid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(0,168,212,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,168,212,0.035) 1px,transparent 1px);background-size:72px 72px}
        .hero-octopus{position:absolute;right:3rem;top:50%;transform:translateY(-50%);width:500px;height:500px;opacity:0.07;pointer-events:none;animation:floatY 8s ease-in-out infinite}
        @keyframes floatY{0%,100%{transform:translateY(-50%) rotate(-4deg)}50%{transform:translateY(-54%) rotate(4deg)}}
        .hero-eyebrow{display:inline-flex;align-items:center;gap:0.6rem;border:1px solid rgba(0,168,212,0.3);background:rgba(0,168,212,0.07);color:var(--aqua);padding:0.38rem 1rem;font-size:0.62rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;border-radius:2px;margin-bottom:1.8rem}
        .hero-eyebrow::before{content:'●';font-size:0.42rem;animation:blink 2s infinite}
        .hero-h1{font-size:clamp(2.4rem,4vw,3.8rem);font-weight:900;line-height:1.06;letter-spacing:-0.035em;margin-bottom:1rem}
        .hero-h1 em{font-style:normal;color:var(--aqua)}
        .hero-sub{font-size:1rem;color:var(--muted);line-height:1.8;max-width:580px;margin-bottom:1.5rem}
        .hero-sub strong{color:rgba(255,255,255,0.8);font-weight:600}
        .hero-ctas{display:flex;gap:1rem;margin-bottom:2rem;flex-wrap:wrap}
        .btn-primary{background:var(--aqua);color:var(--ink);padding:0.9rem 2.2rem;font-weight:700;font-size:0.88rem;border-radius:2px;text-decoration:none;transition:all 0.2s;display:inline-block;border:none;cursor:pointer}
        .btn-primary:hover{background:var(--bright);transform:translateY(-2px)}
        .btn-outline{background:transparent;color:var(--white);padding:0.9rem 2.2rem;font-weight:500;font-size:0.88rem;border:1px solid rgba(255,255,255,0.18);border-radius:2px;text-decoration:none;transition:all 0.2s;display:inline-block;cursor:pointer}
        .btn-outline:hover{border-color:var(--aqua);color:var(--aqua)}
        .section-label{font-size:0.68rem;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--aqua);margin-bottom:0.7rem}
        .section-h2{font-size:clamp(1.9rem,3.2vw,2.8rem);font-weight:900;letter-spacing:-0.025em;line-height:1.1;margin-bottom:0.9rem}
        .section-intro{font-size:0.92rem;color:var(--muted);line-height:1.8}
        #branches{background:var(--deep);padding:6rem 3.5rem;border-top:1px solid var(--border)}
        .branches-header{text-align:center;max-width:680px;margin:0 auto 4rem}
        .octopus-hub{display:flex;flex-direction:column;align-items:center;margin-bottom:3rem}
        .hub-core{width:120px;height:120px;border-radius:50%;background:radial-gradient(circle,rgba(0,168,212,0.2) 0%,rgba(0,168,212,0.05) 70%);border:1.5px solid rgba(0,168,212,0.3);display:flex;align-items:center;justify-content:center;font-size:2.8rem;margin-bottom:0.5rem;box-shadow:0 0 40px rgba(0,168,212,0.12);animation:pulse-glow 3s ease-in-out infinite}
        @keyframes pulse-glow{0%,100%{box-shadow:0 0 30px rgba(0,168,212,0.1)}50%{box-shadow:0 0 60px rgba(0,168,212,0.22)}}
        .hub-label{font-size:0.72rem;font-weight:700;color:var(--aqua);letter-spacing:0.1em;text-transform:uppercase}
        .branches-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5px;background:rgba(0,168,212,0.07);border:1px solid rgba(0,168,212,0.07);max-width:1200px;margin:0 auto}
        .branch-card{background:var(--deep);padding:2.2rem 2rem;position:relative;overflow:hidden;transition:background 0.3s;cursor:default}
        .branch-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--aqua),transparent);opacity:0;transition:opacity 0.3s}
        .branch-card:hover{background:#08111e}
        .branch-card:hover::before{opacity:1}
        .branch-tentacle{font-size:0.65rem;font-weight:700;color:rgba(0,168,212,0.4);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:0.8rem}
        .branch-icon{font-size:1.8rem;margin-bottom:0.8rem;display:block}
        .branch-card h3{font-size:0.95rem;font-weight:800;margin-bottom:0.5rem;color:var(--white)}
        .branch-card p{font-size:0.8rem;color:var(--muted);line-height:1.7}
        .branch-tags{display:flex;flex-wrap:wrap;gap:0.3rem;margin-top:1rem}
        .btag{font-size:0.65rem;padding:0.2rem 0.55rem;background:rgba(0,168,212,0.07);border:1px solid rgba(0,168,212,0.18);color:rgba(255,255,255,0.4);border-radius:2px}
        #crise{background:var(--ink);padding:6rem 3.5rem;border-top:1px solid rgba(255,255,255,0.04)}
        .crise-top{display:grid;grid-template-columns:1fr 1fr;gap:5rem;margin-bottom:3.5rem;align-items:end}
        .crise-h2{font-size:clamp(2.2rem,3.5vw,3.2rem);font-weight:900;line-height:1.08;letter-spacing:-0.03em}
        .crise-h2 em{font-style:normal;color:#ff5757}
        .crise-right p{font-size:0.92rem;color:var(--muted);line-height:1.8;margin-bottom:1.2rem}
        .unique-strip{padding:1rem 1.3rem;border-left:3px solid var(--aqua);background:rgba(0,168,212,0.05);font-size:0.82rem;color:var(--muted);line-height:1.7}
        .unique-strip strong{color:var(--aqua)}
        .situations{display:grid;grid-template-columns:repeat(5,1fr);gap:1.5px;background:rgba(255,255,255,0.04);margin-bottom:3rem}
        .sit{background:var(--ink);padding:1.8rem 1.5rem;transition:background 0.25s}
        .sit:hover{background:#070d1c}
        .sit-n{font-size:0.6rem;font-weight:700;color:rgba(255,255,255,0.18);letter-spacing:0.1em;margin-bottom:0.7rem}
        .sit-ico{font-size:1.4rem;display:block;margin-bottom:0.7rem}
        .sit h4{font-size:0.82rem;font-weight:800;color:var(--white);margin-bottom:0.4rem;line-height:1.3}
        .sit p{font-size:0.73rem;color:var(--muted);line-height:1.65}
        .sit-tag{display:block;margin-top:0.9rem;font-size:0.62rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--aqua);border-top:1px solid rgba(0,168,212,0.15);padding-top:0.7rem}
        .crise-bottom{display:flex;align-items:center;justify-content:space-between;gap:2rem;flex-wrap:wrap}
        .crise-stats{display:flex;gap:2.5rem}
        .cs-val{font-size:1.8rem;font-weight:900;color:var(--aqua)}
        .cs-lbl{font-size:0.65rem;color:rgba(255,255,255,0.28);text-transform:uppercase;letter-spacing:0.06em;margin-top:0.2rem}
        #cyber{background:#020409;border-top:1px solid rgba(255,80,80,0.08);padding:6rem 3.5rem}
        .cyber-layout{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start}
        .cyber-threat{background:rgba(255,60,60,0.04);border:1px solid rgba(255,60,60,0.12);padding:1.2rem 1.5rem;border-radius:3px;margin-bottom:2rem;display:flex;gap:1rem;align-items:flex-start}
        .threat-text{font-size:0.82rem;color:rgba(255,255,255,0.5);line-height:1.7}
        .threat-text strong{color:#ff6b6b;display:block;margin-bottom:0.2rem}
        .cyber-pillars{display:flex;flex-direction:column;gap:1rem}
        .cyber-pillar{display:flex;gap:1.2rem;align-items:flex-start;padding:1.2rem;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:3px;transition:border-color 0.2s}
        .cyber-pillar:hover{border-color:rgba(255,80,80,0.2)}
        .cp-icon{font-size:1.2rem;flex-shrink:0}
        .cp-text h4{font-size:0.85rem;font-weight:700;margin-bottom:0.3rem}
        .cp-text p{font-size:0.78rem;color:var(--muted);line-height:1.6}
        .cp-badge{display:inline-block;margin-top:0.4rem;font-size:0.62rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#ff6b6b;background:rgba(255,80,80,0.08);border:1px solid rgba(255,80,80,0.2);padding:0.18rem 0.55rem;border-radius:2px}
        .cert-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.5rem}
        .cert-card{padding:1.3rem;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:3px}
        .cert-name{font-size:0.78rem;font-weight:700;color:var(--white);margin-bottom:0.25rem}
        .cert-desc{font-size:0.72rem;color:rgba(255,255,255,0.35);line-height:1.55}
        #methode{background:var(--deep);padding:6rem 3.5rem;border-top:1px solid var(--border)}
        .methode-layout{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start}
        .steps-timeline{display:flex;flex-direction:column;gap:0}
        .step-item{display:flex;gap:1.5rem;padding:1.5rem 0;border-bottom:1px solid rgba(255,255,255,0.05)}
        .step-marker{display:flex;flex-direction:column;align-items:center;min-width:18px}
        .step-dot{width:10px;height:10px;border-radius:50%;background:var(--aqua);border:2px solid var(--deep);flex-shrink:0}
        .step-line{width:1px;flex:1;background:rgba(0,168,212,0.15);margin-top:4px}
        .step-week{font-size:0.62rem;font-weight:700;color:var(--aqua);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:0.3rem}
        .step-title{font-size:0.9rem;font-weight:700;color:var(--white);margin-bottom:0.35rem}
        .step-body{font-size:0.78rem;color:var(--muted);line-height:1.7}
        .conviction-box{background:rgba(0,168,212,0.05);border:1px solid rgba(0,168,212,0.15);padding:1.8rem;border-radius:3px;margin-top:2rem}
        .conviction-box blockquote{font-size:0.95rem;font-style:italic;color:rgba(255,255,255,0.65);line-height:1.8;margin-bottom:1rem}
        .conviction-box blockquote strong{font-style:normal;color:var(--white)}
        .conviction-source{font-size:0.72rem;color:var(--aqua);font-weight:600}
        .posture-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
        .posture-item{padding:1.2rem;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:3px}
        .posture-item h5{font-size:0.8rem;font-weight:700;margin-bottom:0.3rem}
        .posture-item p{font-size:0.75rem;color:var(--muted);line-height:1.6}
        #parcours{background:var(--ink);padding:6rem 3.5rem;border-top:1px solid rgba(255,255,255,0.04)}
        .parcours-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem}
        .timeline{position:relative;padding-left:1.5rem}
        .timeline::before{content:'';position:absolute;left:0;top:0;bottom:0;width:1px;background:linear-gradient(180deg,var(--aqua) 0%,transparent 100%)}
        .tl-item{position:relative;padding:0 0 2rem 1.5rem}
        .tl-item::before{content:'';position:absolute;left:-4.5px;top:5px;width:9px;height:9px;border-radius:50%;background:var(--aqua);border:2px solid var(--ink)}
        .tl-date{font-size:0.67rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--aqua);margin-bottom:0.25rem}
        .tl-role{font-size:0.88rem;font-weight:700;color:var(--white);margin-bottom:0.2rem}
        .tl-company{font-size:0.78rem;color:rgba(255,255,255,0.38);margin-bottom:0.6rem}
        .tl-tags{display:flex;flex-wrap:wrap;gap:0.3rem}
        .tl-tag{font-size:0.65rem;padding:0.18rem 0.55rem;background:rgba(0,168,212,0.06);border:1px solid rgba(0,168,212,0.15);color:rgba(255,255,255,0.45);border-radius:2px}
        .tl-kpi{font-size:0.65rem;padding:0.18rem 0.55rem;background:rgba(0,240,192,0.06);border:1px solid rgba(0,240,192,0.18);color:var(--mint);border-radius:2px;font-weight:600}
        .formation-row{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:3rem;padding-top:3rem;border-top:1px solid rgba(255,255,255,0.05)}
        .form-card{padding:1.1rem;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:3px}
        .form-school{font-size:0.7rem;font-weight:700;color:var(--aqua);text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.3rem}
        .form-title{font-size:0.78rem;color:rgba(255,255,255,0.6);line-height:1.5}
        .form-year{font-size:0.65rem;color:rgba(255,255,255,0.25);margin-top:0.3rem}
        #territoire{background:var(--deep);padding:4rem 3.5rem;border-top:1px solid var(--border)}
        .territoire-inner{display:flex;gap:0;background:rgba(0,168,212,0.05);border:1px solid var(--border)}
        .geo-zone{flex:1;padding:2rem 2.2rem;border-right:1px solid var(--border)}
        .geo-zone:last-child{border-right:none}
        .geo-flag{font-size:1.5rem;margin-bottom:0.6rem;display:block}
        .geo-name{font-size:0.88rem;font-weight:700;color:var(--white);margin-bottom:0.3rem}
        .geo-detail{font-size:0.75rem;color:var(--muted);line-height:1.6}
        #contact{background:var(--ink);padding:6rem 3.5rem;border-top:1px solid rgba(255,255,255,0.04)}
        .contact-layout{display:grid;grid-template-columns:1fr 1fr;gap:5rem}
        .contact-form{display:flex;flex-direction:column;gap:0.9rem}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:0.9rem}
        .form-group{display:flex;flex-direction:column;gap:0.35rem}
        .form-group label{font-size:0.68rem;font-weight:600;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.07em}
        .form-group input,.form-group select,.form-group textarea{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.09);color:var(--white);padding:0.75rem 1rem;font-size:0.88rem;font-family:'Inter',sans-serif;border-radius:2px;outline:none;transition:border-color 0.2s}
        .form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--aqua)}
        .form-group textarea{min-height:110px;resize:vertical}
        .form-group select option{background:var(--navy)}
        .contact-info{display:flex;flex-direction:column;gap:1.5rem}
        .ci-title{font-size:1.6rem;font-weight:900;letter-spacing:-0.02em}
        .ci-item{display:flex;gap:1rem;align-items:flex-start;padding:1.1rem;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:3px}
        .ci-ico{font-size:1.1rem;flex-shrink:0}
        .ci-text{font-size:0.82rem;color:rgba(255,255,255,0.5);line-height:1.6}
        .ci-text strong{color:var(--white);display:block;margin-bottom:0.15rem;font-size:0.84rem}
        .ci-text a{color:var(--aqua);text-decoration:none}
        footer{background:#020408;border-top:1px solid rgba(255,255,255,0.04);padding:1.8rem 3.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
        .footer-logo{font-size:0.95rem;font-weight:800;color:var(--white)}
        .footer-logo span{color:var(--aqua)}
        footer p{font-size:0.72rem;color:rgba(255,255,255,0.22)}
        .reveal{opacity:0;transform:translateY(28px);transition:opacity 0.7s ease,transform 0.7s ease}
        .reveal.visible{opacity:1;transform:none}
        #transition{background:#030810;padding:6rem 3.5rem;border-top:1px solid rgba(255,255,255,0.04)}
        @media(max-width:960px){
          nav{padding:1rem 1.5rem}
          .nav-links{display:none}
          #hero,#branches,#crise,#cyber,#methode,#parcours,#territoire,#contact,#transition{padding:4rem 1.5rem}
          #hero{padding-top:7rem}
          .crise-top,.cyber-layout,.methode-layout,.parcours-grid,.contact-layout{grid-template-columns:1fr;gap:2.5rem}
          .situations{grid-template-columns:1fr 1fr}
          .branches-grid{grid-template-columns:1fr 1fr}
          .territoire-inner{flex-direction:column}
          .geo-zone{border-right:none;border-bottom:1px solid var(--border)}
          .formation-row{grid-template-columns:1fr 1fr}
          .form-row{grid-template-columns:1fr}
          footer{flex-direction:column;align-items:flex-start}
          .hero-two-col{grid-template-columns:1fr !important}
        }
      `}</style>

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">
          <span className="nav-logo-icon">🐙</span>
          <span className="nav-logo-text">Octopus<span>Line</span> Conseil</span>
        </a>
        <ul className="nav-links">
          <li><a href="#transition">DSI de Transition</a></li>
          <li><a href="#branches">Expertises</a></li>
          <li><a href="#crise">Situations critiques</a></li>
          <li><a href="#cyber">Cybersécurité</a></li>
          <li><a href="#methode">Méthode</a></li>
          <li><a href="#parcours">Parcours</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-right">
          <div className="nav-dispo"><div className="dispo-dot"></div> Disponible sous 48h</div>
          <div className="lang-wrap">
            <button className="lang-btn active" onClick={() => (window as any).setLang('fr')}>FR</button>
            <button className="lang-btn" onClick={() => (window as any).setLang('en')}>EN</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <svg className="hero-octopus" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="85" r="40" stroke="#00a8d4" strokeWidth="1.5"/>
          <ellipse cx="100" cy="88" rx="22" ry="26" fill="rgba(0,168,212,0.08)" stroke="#00a8d4" strokeWidth="1"/>
          <path d="M72 115 Q55 135 48 155 Q50 165 58 160 Q60 150 70 138 Q78 128 80 120" stroke="#00a8d4" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M80 120 Q68 145 65 168 Q70 175 76 168 Q78 155 85 135 Q90 125 88 120" stroke="#00a8d4" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M90 122 Q85 150 86 172 Q92 178 97 170 Q95 155 95 132 Q96 126 94 121" stroke="#00a8d4" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M100 123 Q100 152 102 174 Q107 179 112 172 Q108 156 106 133 Q104 126 102 122" stroke="#00a8d4" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M110 121 Q118 148 120 170 Q126 175 130 167 Q124 153 118 132 Q114 124 112 120" stroke="#00a8d4" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M118 118 Q132 142 138 163 Q144 168 148 160 Q140 148 132 128 Q126 118 122 116" stroke="#00a8d4" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M125 112 Q143 130 152 150 Q158 154 160 146 Q150 135 140 118 Q132 108 128 108" stroke="#00a8d4" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M65 112 Q50 128 42 148 Q44 156 52 152 Q58 140 70 124 Q76 114 72 110" stroke="#00a8d4" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <circle cx="91" cy="82" r="4" fill="rgba(0,168,212,0.3)" stroke="#00a8d4" strokeWidth="1"/>
          <circle cx="109" cy="82" r="4" fill="rgba(0,168,212,0.3)" stroke="#00a8d4" strokeWidth="1"/>
          <circle cx="91" cy="82" r="1.5" fill="#00a8d4"/>
          <circle cx="109" cy="82" r="1.5" fill="#00a8d4"/>
        </svg>
        <div className="hero-two-col" style={{position:"relative",zIndex:2,width:"100%",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"center",maxWidth:"1200px",margin:"0 auto"}}>
          <div>
            <div className="hero-eyebrow" id="h-badge">● MANAGER DE TRANSITION DSI · CDO · RSSI · SUD-EST DE LA FRANCE · DISPONIBLE SOUS 48H</div>
            <h1 className="hero-h1" id="h-title" dangerouslySetInnerHTML={{__html:"Transformation SI,<br/>gestion de crise &amp;<br/>management de<br/>transition.<br/><em style='color:#00a8d4'>Opérationnel dès<br/>le premier jour.</em>"}}/>
            <p style={{fontSize:"0.95rem",fontWeight:600,color:"rgba(255,255,255,0.55)",marginBottom:"0.8rem"}}>Vision stratégique &amp; rigueur opérationnelle.</p>
            <p className="hero-sub" id="h-sub" dangerouslySetInnerHTML={{__html:"Pilotage DSI de transition, transformation IT, gestion de crise, carve-out &amp; intégration SI.<br/><br/>Alignement technologique et objectifs métiers dans les contextes sensibles.<br/><br/><strong>Business Partner à 360° · Disponible sous 48h.</strong>"}}/>
            <div className="hero-ctas">
              <a href="#contact" className="btn-primary" id="h-cta1" onClick={(e)=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}}>Parlons de votre situation</a>
              <a href="#branches" className="btn-outline" id="h-cta2" onClick={(e)=>{e.preventDefault();document.getElementById('branches')?.scrollIntoView({behavior:'smooth'})}}>Découvrir les expertises</a>
            </div>
            <div style={{display:"flex",borderTop:"1px solid rgba(255,255,255,0.06)",marginTop:"2rem",paddingTop:"1.5rem"}}>
              {[["25+","Années DSI"],["48h","Délai"],["27M€","Budget"],["8","Domaines"]].map(([v,l],i,a)=>(
                <div key={v} style={{flex:1,borderRight:i<a.length-1?"1px solid rgba(255,255,255,0.06)":"none",padding:i===0?"0 1.5rem 0 0":i===a.length-1?"0 0 0 1.5rem":"0 1.5rem"}}>
                  <div style={{fontSize:"2rem",fontWeight:900,color:"#00a8d4",lineHeight:1}}>{v}</div>
                  <div style={{fontSize:"0.62rem",color:"rgba(255,255,255,0.28)",textTransform:"uppercase",letterSpacing:"0.07em",marginTop:"0.3rem",lineHeight:1.4}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{background:"rgba(8,18,38,0.85)",border:"1px solid rgba(0,168,212,0.2)",borderRadius:"16px",padding:"2rem",backdropFilter:"blur(10px)"}}>
            <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem",paddingBottom:"1.2rem",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
              <div style={{display:"flex",gap:"0.3rem"}}>
                <div style={{width:32,height:32,borderRadius:8,background:"rgba(0,168,212,0.2)",border:"1px solid rgba(0,168,212,0.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem"}}>🐙</div>
                <div style={{width:32,height:32,borderRadius:8,background:"rgba(0,168,212,0.1)",border:"1px solid rgba(0,168,212,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.8rem"}}>+</div>
              </div>
              <div>
                <div style={{fontSize:"0.88rem",fontWeight:800,color:"#fff"}}>Octopus Line Conseil</div>
                <div style={{fontSize:"0.62rem",fontWeight:700,color:"#00a8d4",textTransform:"uppercase",letterSpacing:"0.1em"}}>Réseau d&apos;Experts Opérationnels</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.8rem",marginBottom:"1.2rem"}}>
              {[["DSI","Transformation & Gouvernance"],["CDO","Data & IA"],["CTO","Architecture & Cloud"],["RSSI","Cybersécurité & Risques"]].map(([t,s])=>(
                <div key={t} style={{background:"rgba(0,168,212,0.06)",border:"1px solid rgba(0,168,212,0.15)",borderRadius:8,padding:"1rem"}}>
                  <div style={{fontSize:"1rem",fontWeight:900,color:"#00a8d4",marginBottom:"0.2rem"}}>{t}</div>
                  <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.45)"}}>{s}</div>
                </div>
              ))}
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem",marginBottom:"1.2rem"}}>
              {[{t:"Management de Transition",c:"rgba(0,168,212,0.3)",tc:"#00a8d4",bg:"rgba(0,168,212,0.06)"},{t:"Transformation IT",c:"rgba(255,255,255,0.1)",tc:"rgba(255,255,255,0.55)",bg:"transparent"},{t:"Organisation DSI",c:"rgba(255,255,255,0.1)",tc:"rgba(255,255,255,0.55)",bg:"transparent"},{t:"Pilotage de Projet",c:"rgba(0,168,212,0.3)",tc:"#00a8d4",bg:"rgba(0,168,212,0.06)"},{t:"IA & Data",c:"rgba(0,240,192,0.3)",tc:"#00f0c0",bg:"rgba(0,240,192,0.05)"},{t:"Cybersécurité",c:"rgba(255,100,100,0.3)",tc:"#ff7070",bg:"rgba(255,80,80,0.05)"},{t:"Fusion & M&A",c:"rgba(0,168,212,0.3)",tc:"#00a8d4",bg:"rgba(0,168,212,0.06)"},{t:"Cloud",c:"rgba(255,255,255,0.1)",tc:"rgba(255,255,255,0.55)",bg:"transparent"},{t:"Gestion de Crise",c:"rgba(255,255,255,0.1)",tc:"rgba(255,255,255,0.55)",bg:"transparent"}].map(({t,c,tc,bg})=>(
                <span key={t} style={{fontSize:"0.68rem",padding:"0.3rem 0.8rem",borderRadius:20,border:`1px solid ${c}`,color:tc,background:bg}}>{t}</span>
              ))}
            </div>
            <div style={{background:"rgba(0,168,212,0.04)",border:"1px solid rgba(0,168,212,0.1)",borderRadius:8,padding:"1rem"}}>
              <p style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.5)",lineHeight:1.7,marginBottom:"0.5rem"}}>Missions directes ou via cabinets partenaires. Intervention rapide sur contextes critiques, transformation SI, gouvernance DSI, IA &amp; automatisation.</p>
              <div style={{fontSize:"0.72rem",fontWeight:700,color:"#00a8d4"}}>Sud-Est · Paris · International</div>
            </div>
          </div>
        </div>
      </section>

      {/* DSI TRANSITION */}
      <section id="transition">
        <div className="reveal" style={{textAlign:"center",maxWidth:"720px",margin:"0 auto 4rem"}}>
          <p className="section-label">Notre Cœur de Métier</p>
          <h2 className="section-h2">Pourquoi faire appel à un<br/>DSI de Transition ?</h2>
          <p className="section-intro">Certaines situations ne peuvent pas attendre un recrutement CDI de 3 à 6 mois. Vacance managériale, post-fusion, crise, migration ERP critique — ces contextes exigent un profil <strong style={{color:"rgba(255,255,255,0.8)"}}>immédiatement opérationnel, sans courbe d&apos;apprentissage.</strong></p>
        </div>
        <div className="reveal" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1.5px",background:"rgba(0,168,212,0.07)",border:"1px solid rgba(0,168,212,0.07)",maxWidth:"1200px",margin:"0 auto 4rem"}}>
          {[{ico:"🪑",t:"Vacance ou départ DSI",b:"Votre DSI est parti. Les projets sont en suspens. Prise en main immédiate, continuité garantie, équipes stabilisées dès J+1.",tag:"Opérationnel sous 48h"},{ico:"🔀",t:"Fusion M&A · Carve-in · Carve-out",b:"Harmonisation SI multi-entités, intégration post-acquisition, carve-out SI. Expérience Fr · It · Es · UK · Chili · USA.",tag:"M&A · Carve-in · Carve-out"},{ico:"🚨",t:"Crise & Résilience",b:"Cyberattaque, panne critique, non-conformité. Un DSI de crise — calme, rassurant, qui stabilise avant de transformer.",tag:"PCA · PRA · Cyber"},{ico:"⚙️",t:"Transformation & Migration SI",b:"ERP, CRM, Cloud, IA — pilotage de bout en bout, sans déstabiliser la production. SAP, Sage X3, Salesforce, CLEVA.",tag:"Budget · Délais · Qualité"}].map(({ico,t,b,tag})=>(
            <div key={t} style={{background:"#030810",padding:"2rem 1.8rem"}}>
              <div style={{fontSize:"1.6rem",marginBottom:"0.8rem"}}>{ico}</div>
              <h3 style={{fontSize:"0.95rem",fontWeight:800,color:"#fff",marginBottom:"0.6rem"}}>{t}</h3>
              <p style={{fontSize:"0.8rem",color:"rgba(255,255,255,0.45)",lineHeight:1.7}}>{b}</p>
              <div style={{marginTop:"1rem",fontSize:"0.65rem",fontWeight:700,color:"#00a8d4",textTransform:"uppercase",letterSpacing:"0.08em",borderTop:"1px solid rgba(0,168,212,0.15)",paddingTop:"0.7rem"}}>{tag}</div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{maxWidth:"1200px",margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"start"}}>
            <div>
              <p className="section-label" style={{marginBottom:"1rem"}}>Ce que j&apos;apporte — au-delà du management de transition</p>
              <div style={{display:"flex",flexDirection:"column",gap:"0.8rem"}}>
                {[{ico:"🏛️",t:"Urbanisation & Architecture SI",b:"Cartographie applicative, schéma directeur, as-is / to-be, RACI, KPI — une DSI structurée en 30 jours."},{ico:"🔒",t:"Cybersécurité & Conformité",b:"PSSI, NIS2, ISO 27001, RGPD, PCA/PRA — Master II Sécurité Informatique (EPITA). Référent DPO."},{ico:"🤖",t:"Data, IA & Automatisation",b:"Data First : gouvernance, qualité & architecture données. Puis IA & automatisation (LLM, RPA, n8n) — +15 à 20% de productivité documentés."},{ico:"👥",t:"Management & Conduite du changement",b:"Équipes jusqu'à 150 personnes. Fédérateur — certains collaborateurs me suivent d'une mission à l'autre."},{ico:"📐",t:"Organisation & Professionnalisation DSI",b:"Structuration DSI, catalogue de services, ITIL, ISO 9001, Lean IT — une DSI reconnue comme levier business."},{ico:"🗂️",t:"Direction de Projet & PMO",b:"Pilotage de portefeuilles projets complexes, COPIL, reporting CODIR, plans de charge, Agile/SAFe."}].map(({ico,t,b})=>(
                  <div key={t} style={{display:"flex",gap:"1rem",alignItems:"flex-start",padding:"1rem",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:3}}>
                    <span style={{fontSize:"1rem",flexShrink:0}}>{ico}</span>
                    <div><div style={{fontSize:"0.85rem",fontWeight:700,color:"#fff",marginBottom:"0.2rem"}}>{t}</div><div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",lineHeight:1.6}}>{b}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="section-label" style={{marginBottom:"1rem"}}>Ma conviction</p>
              <blockquote style={{fontSize:"1.05rem",fontStyle:"italic",color:"rgba(255,255,255,0.65)",lineHeight:1.8,borderLeft:"3px solid #00a8d4",paddingLeft:"1.5rem",marginBottom:"1.5rem"}}>&ldquo;La DSI doit être un <strong style={{color:"#fff",fontStyle:"normal"}}>moteur de croissance</strong> pour l&apos;entreprise, pas un simple support. Je casse les codes d&apos;une informatique centre de coûts pour la positionner comme <strong style={{color:"#fff",fontStyle:"normal"}}>levier de performance business.</strong>&rdquo;</blockquote>
              <div style={{fontSize:"0.72rem",color:"#00a8d4",fontWeight:600,marginBottom:"2rem"}}>— Woilide NAGMAR, Fondateur · Octopus Line Conseil</div>
              <div style={{background:"rgba(0,168,212,0.05)",border:"1px solid rgba(0,168,212,0.15)",padding:"1.5rem",borderRadius:3}}>
                <p style={{fontSize:"0.82rem",color:"rgba(255,255,255,0.5)",lineHeight:1.8,marginBottom:"1rem"}}>
                  <strong style={{color:"rgba(255,255,255,0.8)"}}>Je ne dis pas ce qu&apos;on veut entendre.</strong> Je dis ce que je vois, avec diplomatie mais sans langue de bois.<br/><br/>
                  <strong style={{color:"rgba(255,255,255,0.8)"}}>Je ne reste pas plus longtemps que nécessaire.</strong> Je livre une DSI plus solide que celle que j&apos;ai trouvée.<br/><br/>
                  <strong style={{color:"rgba(255,255,255,0.8)"}}>Je ne juge pas le passé.</strong> Je prends la situation telle qu&apos;elle est et je construis à partir de là.
                </p>
                <div style={{fontSize:"0.68rem",fontWeight:700,color:"#00a8d4",textTransform:"uppercase",letterSpacing:"0.1em"}}>ESSEC MBA · Saint-Cyr · EPITA M2 Sécurité · ISO 27001 · ITIL V3</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANCHES */}
      <section id="branches">
        <div className="branches-header reveal">
          <p className="section-label">Nos 8 Branches d&apos;Expertise</p>
          <h2 className="section-h2">Une pieuvre, huit tentacules.<br/>Un interlocuteur unique.</h2>
          <p className="section-intro">Comme l&apos;octopus, nous agissons sur plusieurs fronts simultanément — chaque branche pilotée par un expert senior, coordonnée par un DSI de niveau COMEX.</p>
        </div>
        <div className="octopus-hub reveal"><div className="hub-core">🐙</div><div className="hub-label">Octopus Line Conseil</div></div>
        <div className="branches-grid reveal">
          {[{n:"01",ico:"🔄",t:"DSI / CDO de Transition",p:"Vision stratégique et exécution opérationnelle. Pilotage CODIR, continuité IT, alignement technologique et objectifs métiers.",tags:["Interim CIO","CODIR","48h"]},{n:"02",ico:"🚨",t:"Gestion de Crise SI",p:"Vacance DSI, cyberattaque, panne critique, migration bloquée. Intervention d'urgence, stabilisation immédiate, zéro interruption.",tags:["Crisis Management","PCA/PRA"]},{n:"03",ico:"🔒",t:"Cybersécurité & Conformité",p:"NIS2, ISO 27001, RGPD, PSSI, audit sécurité. Protection du SI, mise en conformité réglementaire, gestion des risques cyber.",tags:["ISO 27001","NIS2","RGPD","EPITA M2"]},{n:"04",ico:"⚙️",t:"Migration ERP & Projets Critiques",p:"SAP, Sage X3, Salesforce, CLEVA. Pilotage bout en bout, budget, délais, qualité — sans déstabiliser la production.",tags:["SAP","Sage X3","Salesforce","CLEVA"]},{n:"05",ico:"🤖",t:"Data, IA & Automatisation",p:"Data First — gouvernance & qualité de la donnée avant tout. Puis déploiement IA & automatisation (LLM, RPA, n8n). +15 à 20% de productivité documentés.",tags:["Data Quality","Gouvernance Data","LLM","RPA","n8n"],ia:true},{n:"06",ico:"📐",t:"Gouvernance & Organisation SI",p:"Schéma directeur, RACI, KPI, ITIL, ISO 9001, Lean IT. DSI structurée, mesurée, reconnue comme levier business en 30 jours.",tags:["ITIL V3","ISO 9001","SDSI"]},{n:"07",ico:"📊",t:"Stratégie SI & Data",p:"Architecture cible, Data Platform, BI & Analytics, gouvernance de la donnée. Alignement IT / objectifs business.",tags:["Data Platform","BI","Architecture"]},{n:"08",ico:"🎯",t:"Recrutement & Placement IT",p:"Identification et placement de profils IT séniors : DSI, CDO, RSSI, architectes, chefs de projet. Réseau direct, approche ciblée.",tags:["Executive Search","DSI","RSSI"]}].map(({n,ico,t,p,tags,ia})=>(
            <div key={n} className="branch-card" style={ia?{borderTop:"2px solid rgba(0,240,192,0.4)",background:"rgba(0,240,192,0.03)"}:{}}>
              <div className="branch-tentacle" style={ia?{color:"rgba(0,240,192,0.5)"}:{}}>{`Tentacule ${n}${ia?" — IA":""}`}</div>
              <span className="branch-icon">{ico}</span>
              <h3 style={ia?{color:"#00f0c0"}:{}}>{t}</h3>
              <p>{p}</p>
              <div className="branch-tags">{tags.map(tag=><span key={tag} className="btag">{tag}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SITUATIONS */}
      <section id="crise">
        <div className="crise-top reveal">
          <h2 className="crise-h2">Cinq situations<br/>où chaque semaine<br/><em>compte.</em></h2>
          <div className="crise-right">
            <p>Les dirigeants ne nous appellent pas pour faire de la veille technologique.<br/>Ils nous appellent parce que <strong>quelque chose ne peut pas attendre.</strong></p>
            <div className="unique-strip">🗺️ <strong>Implanté dans le Sud-Est.</strong> Là où les cabinets parisiens envoient des managers en déplacement, Octopus Line Conseil intervient en local — ancré dans la région, niveau COMEX, disponible sous 48h. <strong>Missions directes ou via cabinets partenaires.</strong></div>
          </div>
        </div>
        <div className="situations reveal">
          {[{n:"01",ico:"🪑",t:"Vacance ou départ DSI",p:"Le DSI est parti. Les projets sont en suspens. Vous ne pouvez pas attendre 6 mois un recrutement CDI.",tag:"DSI de transition · 48h"},{n:"02",ico:"🚨",t:"Crise SI ou cyberattaque",p:"Ransomware, panne critique, non-conformité NIS2/RGPD. Il faut un pilote de crise — pas un technicien.",tag:"Gestion de crise · Cyber"},{n:"03",ico:"🔄",t:"Migration ERP bloquée",p:"Budget explosé, délais dépassés, équipes épuisées. Reprise en main, recadrage, livraison. SAP, Sage X3, Salesforce.",tag:"Pilotage projet · ERP"},{n:"04",ico:"🔀",t:"Post-fusion & M&A",p:"Deux SI à harmoniser. Des équipes à fusionner. Un actionnaire qui attend. Expérience confirmée en intégrations complexes.",tag:"M&A · Intégration SI"},{n:"05",ico:"📐",t:"DSI sans gouvernance",p:"Pas de schéma directeur, projets non priorisés, DSI perçue comme centre de coûts. Structurer, mesurer, valoriser.",tag:"Gouvernance · Organisation"}].map(({n,ico,t,p,tag})=>(
            <div key={n} className="sit"><div className="sit-n">{n}</div><span className="sit-ico">{ico}</span><h4>{t}</h4><p>{p}</p><span className="sit-tag">{tag}</span></div>
          ))}
        </div>
        <div className="crise-bottom reveal">
          <div className="crise-stats">{[["25+","Ans DSI/CDO"],["8","Groupes CODIR"],["400M€","CA max supervisé"],["+20%","Gains IA documentés"]].map(([v,l])=><div key={v}><div className="cs-val">{v}</div><div className="cs-lbl">{l}</div></div>)}</div>
          <a href="#contact" className="btn-primary" onClick={(e)=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}}>Votre situation nous concerne → Parlons-en</a>
        </div>
      </section>

      {/* CYBER */}
      <section id="cyber">
        <div className="reveal" style={{marginBottom:"3rem"}}>
          <p className="section-label">Cybersécurité, Conformité &amp; Gouvernance SI</p>
          <h2 className="section-h2">Cybersécurité &amp; Gouvernance<br/>ne sont pas des options.</h2>
          <p className="section-intro" style={{maxWidth:"560px"}}>Chaque transformation SI comporte des risques. Notre approche intègre la cybersécurité dès la conception — pas en rattrapage.</p>
        </div>
        <div className="cyber-layout reveal">
          <div>
            <div className="cyber-threat"><span style={{fontSize:"1.2rem",flexShrink:0}}>⚠️</span><div className="threat-text"><strong>Le risque cyber est devenu le risque n°1 des dirigeants.</strong>NIS2 est en vigueur. Le RGPD s&apos;applique. Une cyberattaque peut paralyser une entreprise en quelques heures.</div></div>
            <div className="cyber-pillars">
              {[{ico:"🛡️",t:"Audit & PSSI",p:"Audit de sécurité complet, définition et mise en œuvre de la Politique de Sécurité du SI.",b:"ISO 27001"},{ico:"📋",t:"Conformité NIS2 & RGPD",p:"Mise en conformité réglementaire, DPO, cartographie des données, registre des traitements.",b:"NIS2 · RGPD"},{ico:"🔄",t:"PCA / PRA & Résilience",p:"Plan de Continuité et de Reprise d'Activité. Tests, documentation, exercices de crise.",b:"PCA · PRA"},{ico:"🚨",t:"Gestion de crise cyber",p:"Intervention sur incident, coordination équipes, communication direction, retour à la normale.",b:"Crisis Response"}].map(({ico,t,p,b})=>(
                <div key={t} className="cyber-pillar"><span className="cp-icon">{ico}</span><div className="cp-text"><h4>{t}</h4><p>{p}</p><span className="cp-badge">{b}</span></div></div>
              ))}
            </div>
          </div>
          <div>
            <p className="section-label">Certifications &amp; Formations</p>
            <div className="cert-grid">
              {[["EPITA Master II","Sécurité Informatique — formation initiale spécialisée"],["ISO 27001","Système de Management de la Sécurité de l'Information"],["NIS2","Directive européenne cybersécurité — mise en conformité"],["RGPD / DPO","Référent DPO — expérience chez Entoria (500+ sal.)"],["ISO 20000","Management des services IT — continuité de service"],["PCA / PRA","CVE : PRA déployé en contexte COVID, levée 100M€"]].map(([n,d])=>(
                <div key={n} className="cert-card"><div className="cert-name">{n}</div><div className="cert-desc">{d}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section id="methode">
        <div className="reveal" style={{marginBottom:"3rem"}}>
          <p className="section-label">Méthode &amp; Posture</p>
          <h2 className="section-h2">L&apos;Impact 30 Jours.</h2>
          <p className="section-intro" style={{maxWidth:"520px"}}>Une méthode éprouvée sur 25 ans, dans des entreprises de 65M€ à 1,5Md€ de CA. Résultats tangibles dès les premières semaines.</p>
        </div>
        <div className="methode-layout">
          <div className="reveal">
            <div className="steps-timeline">
              {[{w:"Semaine 1",t:"Immersion & Audit Flash",b:"100% sur site. Rencontres individuelles IT & métiers, revue des contrats, cartographie des dépendances critiques."},{w:"Semaines 2–3",t:"Stabilisation & Quick Wins",b:"Rassurer et remobiliser les équipes. Gains rapides visibles dès J+10. Priorisation urgence/importance."},{w:"Semaine 4",t:"Roadmap & Reporting COMEX",b:"Plan d'action priorisé Valeur × Effort. Roadmap 6–24 mois livrée au COMEX. Préparation de la succession dès J+1."}].map(({w,t,b})=>(
                <div key={w} className="step-item"><div className="step-marker"><div className="step-dot"></div><div className="step-line"></div></div><div><div className="step-week">{w}</div><div className="step-title">{t}</div><div className="step-body">{b}</div></div></div>
              ))}
            </div>
            <div className="conviction-box">
              <blockquote>&ldquo;La DSI ne doit pas être un centre de coûts — c&apos;est un <strong>levier de croissance.</strong> Mon rôle : allier vision stratégique et rigueur opérationnelle pour transformer votre SI en avantage concurrentiel mesurable.&rdquo;</blockquote>
              <div className="conviction-source">— Woilide NAGMAR, Fondateur · Octopus Line Conseil</div>
            </div>
          </div>
          <div className="reveal">
            <p className="section-label" style={{marginBottom:"1rem"}}>Posture &amp; Valeurs</p>
            <div className="posture-grid">
              {[["🎯 Pragmatique","Je reviens toujours à l'enjeu business. Pas de technologie pour la technologie."],["⚡ Opérationnel 48h","Disponible immédiatement. Sans courbe d'apprentissage. Méthode éprouvée dès J+1."],["🤝 Business Partner","Technique avec les équipes, stratégie avec la DG, performance avec les actionnaires."],["🔒 Sans langue de bois","Je dis ce que je vois, avec diplomatie mais en toute franchise."],["🏛️ Niveau CODIR","Rattaché CODIR / COMEX sur toutes mes missions. Interlocuteur de direction."],["🌍 International","Anglais courant. Expérience France, Italie, Espagne, UK, Chili, USA."]].map(([h,p])=>(
                <div key={h} className="posture-item"><h5>{h}</h5><p>{p}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section id="parcours">
        <div className="reveal" style={{marginBottom:"3rem"}}>
          <p className="section-label">Parcours &amp; Track Record</p>
          <h2 className="section-h2">Des résultats prouvés,<br/>dans des secteurs exigeants.</h2>
        </div>
        <div className="parcours-grid reveal">
          <div className="timeline">
            {[{d:"2025 – Présent",r:"DSI Groupe / CDO — Transformation, Data & IA",c:"OLYOS · Pharma multi-pays · 600 sal. · CA 400M€",tags:["CODIR · 30p · 5,5M€"],kpis:["+15-20% productivité IA"],extra:["SAP · Salesforce · n8n","Fr/It/Es/UK/Chili"]},{d:"2021 – 2025",r:"DSI / CDO — Transformation IT & Digitale",c:"GROUPE CONSTRUCTA · Immobilier · 220 sal. · CA 300M€",tags:["CODIR · 30p · 3,5M€"],kpis:["-20% tickets support","-30% délais traitement"],extra:["Sage X3 · Azure · Data Hub"]},{d:"2020 – 2021",r:"DSI / CDO — Transformation IT",c:"CVE · Énergies renouvelables · 340 sal. · CA 65M€",tags:["CODIR · 40p · 6,5M€"],kpis:["Levée capital 100M€"],extra:["Azure · PRA · COVID"]},{d:"2019 – 2020",r:"Manager de Transition — Transformation SI",c:"GROUPE HENNER · Assurance · 1500+ sal. · CA 174M€",tags:["CODIR DSI · 65p · 8M€"],kpis:[],extra:["SAFe · API Gateway · Deloitte"]}].map(({d,r,c,tags,kpis,extra})=>(
              <div key={d} className="tl-item"><div className="tl-date">{d}</div><div className="tl-role">{r}</div><div className="tl-company">{c}</div><div className="tl-tags">{tags.map(t=><span key={t} className="tl-tag">{t}</span>)}{kpis.map(k=><span key={k} className="tl-kpi">{k}</span>)}{extra.map(e=><span key={e} className="tl-tag">{e}</span>)}</div></div>
            ))}
          </div>
          <div className="timeline">
            {[{d:"2017 – 2019",r:"Directeur des Systèmes d'Information",c:"ENTORIA · Assurance · 500+ sal. · CA 147M€",tags:["COMEX · 125p · 15M€"],kpis:[],extra:["CLEVA · Salesforce · DPO RGPD"]},{d:"2014 – 2017",r:"Directeur SI et des Processus",c:"APRIL INTERNATIONAL · Groupe April · 3800 sal. · CA 789M€",tags:["CODIR · 80p · 10M€"],kpis:["+50% digitalisation clients","-30% coûts IT"],extra:["PEGA · CLEVA · QlikView"]},{d:"2011 – 2014",r:"Directeur des Systèmes d'Information",c:"CITEO · Éco-organisme · 250 sal. · CA 680M€",tags:["CODIR · 70p · 9M€"],kpis:[],extra:["SAP · Salesforce · 50 000 clients"]},{d:"2006 – 2011",r:"Directeur des Systèmes d'Information",c:"EDF ENERGIES NOUVELLES · Filiale EDF · 2750 sal. · CA 1,47Md€",tags:["CODIR · 150p · 27M€"],kpis:["IPO 2006 · ×12 croissance","-20% coûts IT"],extra:["SAP · Magnitude"]}].map(({d,r,c,tags,kpis,extra})=>(
              <div key={d} className="tl-item"><div className="tl-date">{d}</div><div className="tl-role">{r}</div><div className="tl-company">{c}</div><div className="tl-tags">{tags.map(t=><span key={t} className="tl-tag">{t}</span>)}{kpis.map(k=><span key={k} className="tl-kpi">{k}</span>)}{extra.map(e=><span key={e} className="tl-tag">{e}</span>)}</div></div>
            ))}
          </div>
        </div>
        <div className="formation-row reveal">
          {[{s:"ESSEC Business School",t:"Executive AMP — Management Général",y:"2013–2015"},{s:"Saint-Cyr",t:"Leadership & Gestion de crises",y:"2014"},{s:"EPITA / IONIS",t:"Master II Sécurité Informatique",y:"2002–2003"},{s:"Mannheim · IMI Delhi",t:"Modules internationaux",y:"2014"}].map(({s,t,y})=>(
            <div key={s} className="form-card"><div className="form-school">{s}</div><div className="form-title">{t}</div><div className="form-year">{y}</div></div>
          ))}
        </div>
      </section>

      {/* TERRITOIRE */}
      <section id="territoire">
        <div className="reveal" style={{marginBottom:"2rem"}}>
          <p className="section-label">Territoire d&apos;intervention</p>
          <h2 className="section-h2" style={{fontSize:"1.6rem"}}>Le premier cabinet DSI / CDO / IA<br/>spécialisé dans le Sud-Est</h2>
        </div>
        <div className="territoire-inner reveal">
          {[{f:"🌊",n:"Région PACA",d:"Mougins · Nice · Marseille\nToulon · Aix-en-Provence"},{f:"🎰",n:"Monaco & Côte d'Azur",d:"Interventions sur demande\nPrincipauté & environs"},{f:"🏔️",n:"Suisse / Genève",d:"Arc lémanique\nZone franco-genevoise"},{f:"🗼",n:"Paris & IDF",d:"Missions longue durée\nDéplacements fréquents"},{f:"🌍",n:"International",d:"Italie · Espagne · UK\nChili · USA · Anglais courant"}].map(({f,n,d})=>(
            <div key={n} className="geo-zone"><span className="geo-flag">{f}</span><div className="geo-name">{n}</div><div className="geo-detail">{d}</div></div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-layout">
          <div className="contact-info reveal">
            <div>
              <p className="section-label">Contact</p>
              <h2 className="ci-title" id="ct-title">Discutons de<br/>votre situation</h2>
              <p style={{fontSize:"0.88rem",color:"var(--muted)",lineHeight:1.8,marginTop:"1rem"}} id="ct-sub">Que ce soit une urgence ou un projet à structurer — nous sommes disponibles sous 48h.</p>
            </div>
            <div className="ci-item"><span className="ci-ico">✉️</span><div className="ci-text"><strong>Email</strong><a href="mailto:contact@octopus-line-conseil.com">contact@octopus-line-conseil.com</a><br/><a href="mailto:wnagmar@octopus-line-conseil.com" style={{color:"rgba(255,255,255,0.3)",fontSize:"0.78rem"}}>wnagmar@octopus-line-conseil.com</a></div></div>
            <div className="ci-item"><span className="ci-ico">📍</span><div className="ci-text"><strong>Localisation</strong>Mougins (06) — PACA · Côte d&apos;Azur · Suisse · Paris · International</div></div>
            <div className="ci-item"><span className="ci-ico">⚡</span><div className="ci-text"><strong>Disponibilité</strong>Intervention possible sous 48h — Missions court, moyen et long terme</div></div>
            <div className="ci-item"><span className="ci-ico">🌐</span><div className="ci-text"><strong>Langues</strong>Français · English (courant)</div></div>
          </div>
          <div className="reveal">
            <form className="contact-form" onSubmit={(e)=>(window as any).handleSubmit(e)}>
              <div className="form-row">
                <div className="form-group"><label>Nom</label><input type="text" placeholder="Votre nom"/></div>
                <div className="form-group"><label>Société</label><input type="text" placeholder="Votre entreprise"/></div>
              </div>
              <div className="form-group"><label>Email</label><input type="email" placeholder="email@societe.com"/></div>
              <div className="form-group">
                <label>Sujet</label>
                <select defaultValue="">
                  <option value="">— Votre situation —</option>
                  <option>DSI de Transition / Vacance managériale</option>
                  <option>Gestion de crise SI</option>
                  <option>Cybersécurité & Conformité</option>
                  <option>Migration ERP / Projet bloqué</option>
                  <option>IA & Transformation Digitale</option>
                  <option>Gouvernance & Organisation SI</option>
                  <option>Post-fusion / M&A</option>
                  <option>Recrutement IT senior</option>
                </select>
              </div>
              <div className="form-group"><label>Message</label><textarea placeholder="Décrivez votre situation..."></textarea></div>
              <button type="submit" className="btn-primary" id="f-submit" style={{border:"none",cursor:"pointer",width:"100%",textAlign:"center"}}>Envoyer →</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div style={{display:"flex",alignItems:"center",gap:"0.6rem"}}>
          <span style={{fontSize:"1.1rem"}}>🐙</span>
          <span className="footer-logo">Octopus<span>Line</span> Conseil</span>
        </div>
        <p>© 2025 Octopus Line Conseil — Tous droits réservés</p>
        <p style={{fontSize:"0.68rem",color:"rgba(255,255,255,0.15)"}}>DSI · CDO · IA · Cybersécurité · Transformation Digitale · PACA · Côte d&apos;Azur · Suisse</p>
      </footer>
    </>
  );
}
