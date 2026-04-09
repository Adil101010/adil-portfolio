import React from 'react'
import { projects } from '../data'

const badgeColors = {
  fire: { bg: 'rgba(255,107,43,.12)', color: '#ff6b2b', border: 'rgba(255,107,43,.25)' },
  teal: { bg: 'rgba(78,255,224,.1)', color: '#4effe0', border: 'rgba(78,255,224,.22)' },
  gold: { bg: 'rgba(255,209,102,.1)', color: '#ffd166', border: 'rgba(255,209,102,.22)' },
  purple: { bg: 'rgba(167,139,250,.1)', color: '#a78bfa', border: 'rgba(167,139,250,.22)' },
}

const s = `
#projects { padding:6rem 0; position:relative; z-index:1; }
.proj-wrap { max-width:min(calc(100% - 2rem),1180px); margin-inline:auto; }
.proj-grid { display:grid; grid-template-columns:repeat(12,1fr); gap:1.25rem; }
.pcard { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); border-radius:1.6rem; padding:1.8rem; position:relative; overflow:hidden; transition:transform .28s cubic-bezier(.16,1,.3,1),border-color .28s,box-shadow .28s; cursor:default; }
.pcard::before { content:''; position:absolute; inset:-1px; border-radius:1.6rem; background:linear-gradient(135deg,rgba(78,255,224,.06),rgba(167,139,250,.04),transparent); opacity:0; transition:opacity .3s; pointer-events:none; }
.pcard:hover { transform:translateY(-5px); border-color:rgba(78,255,224,.2); box-shadow:0 24px 70px rgba(0,0,0,.35); }
.pcard:hover::before { opacity:1; }
.pcard.featured { grid-column:span 12; }
.pcard.half { grid-column:span 6; }
.pcard.third { grid-column:span 4; }
.pcard-meta { font-size:.7rem; text-transform:uppercase; letter-spacing:.16em; color:rgba(237,240,255,.4); margin-bottom:.5rem; font-family:'JetBrains Mono',monospace; }
.pcard-title { font-family:'Cabinet Grotesk',sans-serif; font-size:1.5rem; font-weight:800; margin-bottom:.3rem; }
.pcard.featured .pcard-title { font-size:var(--text-xl); }
.pcard-badge { display:inline-flex; align-items:center; gap:.4rem; padding:.35rem .75rem; border-radius:9999px; font-size:.7rem; font-weight:600; border:1px solid; margin-bottom:1rem; }
.pcard-desc { color:rgba(237,240,255,.55); font-size:.88rem; line-height:1.7; margin-bottom:1.2rem; max-width:72ch; }
.pcard-tech { display:flex; flex-wrap:wrap; gap:.5rem; margin-bottom:1.2rem; }
.tech-chip { padding:.35rem .7rem; border-radius:9999px; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.07); font-size:.72rem; color:rgba(237,240,255,.55); font-family:'JetBrains Mono',monospace; }
.pcard-links { display:flex; gap:.75rem; flex-wrap:wrap; }
.plink { display:inline-flex; align-items:center; gap:.4rem; padding:.6rem 1rem; border-radius:9999px; border:1px solid rgba(255,255,255,.1); font-size:.8rem; color:rgba(237,240,255,.7); transition:all .2s; background:rgba(255,255,255,.03); text-decoration:none; }
.plink:hover { background:rgba(78,255,224,.08); border-color:rgba(78,255,224,.3); color:#4effe0; }
.plink.primary { background:rgba(78,255,224,.1); border-color:rgba(78,255,224,.3); color:#4effe0; }
.featured-inner { display:grid; grid-template-columns:1.1fr .9fr; gap:2rem; align-items:start; }
.highlights-list { list-style:none; display:grid; gap:.65rem; margin-top:1rem; }
.highlights-list li { display:flex; align-items:center; gap:.7rem; font-size:.85rem; color:rgba(237,240,255,.6); }
.highlights-list li::before { content:''; width:6px; height:6px; border-radius:50%; background:#4effe0; flex-shrink:0; box-shadow:0 0 8px #4effe0; }
.mini-stack-grid { display:grid; gap:.85rem; }
.mini-box { padding:1rem 1.1rem; border-radius:1.1rem; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.07); }
.mini-box strong { display:block; font-size:.85rem; margin-bottom:.4rem; color:#edf0ff; }
.mini-box span { font-size:.8rem; color:rgba(237,240,255,.5); }
.glow-fire { box-shadow:0 20px 80px rgba(255,107,43,.1); }
.cap-label { font-size:.7rem; color:rgba(237,240,255,.4); text-transform:uppercase; letter-spacing:.14em; margin-bottom:.6rem; margin-top:1.6rem; }
@media(max-width:900px) { .pcard.half,.pcard.third,.pcard.featured{grid-column:span 12} .featured-inner{grid-template-columns:1fr} }
`

export default function Projects() {
  return (
    <section id="projects">
      <style>{s}</style>
      <div className="proj-wrap">
        <p className="sec-label" style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: '.2em', color: '#4effe0', marginBottom: '.5rem' }}>02 / Projects</p>
        <h2 style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: 'var(--text-2xl)', letterSpacing: '-.03em', marginBottom: '2.5rem' }}>Signature Work</h2>
        <div className="proj-grid">
          {projects.map(p => {
            const bc = badgeColors[p.badgeColor] || badgeColors.teal
            if (p.featured) return (
              <div key={p.id} className="pcard featured glow-fire">
                <div className="featured-inner">

                  <div>
                    <p className="pcard-meta">{p.meta}</p>
                    <h3 className="pcard-title">{p.title}</h3>
                    <span className="pcard-badge" style={{ background: bc.bg, color: bc.color, borderColor: bc.border }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: bc.color, display: 'inline-block', boxShadow: `0 0 8px ${bc.color}` }} />
                      {p.badge}
                    </span>
                    <p className="pcard-desc">{p.description}</p>
                    <div className="pcard-tech">
                      {p.tech.map(t => <span key={t} className="tech-chip">{t}</span>)}
                    </div>
                    <div className="pcard-links">
                      {p.link && <a className="plink primary" href={p.link} target="_blank" rel="noopener noreferrer">GitHub →</a>}
                      <a className="plink" href="#contact">Request Demo</a>
                    </div>

                    <p className="cap-label">Key Capabilities</p>
                    <ul className="highlights-list">
                      {p.highlights.map(h => <li key={h}>{h}</li>)}
                    </ul>
                  </div>

                  <div>
                    <div className="mini-stack-grid">
                      <div className="mini-box">
                        <strong>Customer App</strong>
                        <span>Flutter mobile with cart, checkout, live order tracking & payments</span>
                      </div>
                      <div className="mini-box">
                        <strong>Delivery Partner App</strong>
                        <span>Flutter app with Google Maps, real-time route & order management</span>
                      </div>
                      <div className="mini-box">
                        <strong>Restaurant Dashboard</strong>
                        <span>Order management, menu control, analytics panel</span>
                      </div>
                      <div className="mini-box">
                        <strong>Admin Control Panel</strong>
                        <span>Full CRUD, user management, reports & analytics</span>
                      </div>
                      <div className="mini-box">
                        <strong>Backend Microservices (20+)</strong>
                        <span>Spring Boot APIs, JWT auth, Razorpay, WebSockets, Kafka & more</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )

            const cls = projects.filter(x => !x.featured).indexOf(p) < 2 ? 'half' : 'third'

            return (
              <div key={p.id} className={`pcard ${cls}`}>
                <p className="pcard-meta">{p.meta}</p>
                <h3 className="pcard-title" style={{ fontSize: '1.2rem' }}>{p.title}</h3>
                <span className="pcard-badge" style={{ background: bc.bg, color: bc.color, borderColor: bc.border }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: bc.color, display: 'inline-block' }} />
                  {p.badge}
                </span>
                <p className="pcard-desc">{p.description}</p>
                <div className="pcard-tech">
                  {p.tech.slice(0, 4).map(t => <span key={t} className="tech-chip">{t}</span>)}
                </div>
                <div className="pcard-links">
                  {p.link && <a className="plink" href={p.link} target="_blank" rel="noopener noreferrer">GitHub →</a>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}