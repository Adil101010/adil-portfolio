import React from 'react'
import { personal, experience, education, certifications } from '../data'

const s = `
#about { padding:6rem 0; position:relative; z-index:1; }
.about-wrap { max-width:min(calc(100% - 2rem),1180px); margin-inline:auto; }
.sec-label { font-size:.72rem; text-transform:uppercase; letter-spacing:.2em; color:#4effe0; margin-bottom:.5rem; }
.sec-title { font-family:'Cabinet Grotesk',sans-serif; font-size:var(--text-2xl); letter-spacing:-.03em; margin-bottom:2.5rem; }
.about-grid { display:grid; grid-template-columns:1.1fr .9fr; gap:1.5rem; }
.glass-card { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); border-radius:1.6rem; padding:1.8rem; backdrop-filter:blur(12px); transition:border-color .3s,box-shadow .3s; }
.glass-card:hover { border-color:rgba(78,255,224,.18); box-shadow:0 0 40px rgba(78,255,224,.06); }
.card-title { font-family:'Cabinet Grotesk',sans-serif; font-size:1.1rem; font-weight:700; margin-bottom:1rem; color:#edf0ff; }
.bio-text { color:rgba(237,240,255,.62); line-height:1.75; margin-bottom:1.4rem; }
.chips { display:flex; flex-wrap:wrap; gap:.6rem; }
.chip { padding:.5rem .85rem; border-radius:9999px; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.08); font-size:.78rem; color:rgba(237,240,255,.65); transition:all .2s; }
.chip:hover { background:rgba(78,255,224,.08); border-color:rgba(78,255,224,.25); color:#4effe0; }
.timeline { display:grid; gap:1.1rem; }
.tl-item { display:grid; grid-template-columns:auto 1fr; gap:1rem; align-items:start; }
.tl-dot-wrap { display:flex; flex-direction:column; align-items:center; gap:0; padding-top:.35rem; }
.tl-dot { width:.9rem; height:.9rem; border-radius:50%; background:linear-gradient(135deg,#4effe0,#a78bfa); box-shadow:0 0 14px rgba(78,255,224,.5); flex-shrink:0; }
.tl-line { width:1px; background:rgba(255,255,255,.1); flex:1; min-height:1.5rem; margin-top:.3rem; }
.tl-role { font-weight:700; font-size:.95rem; margin-bottom:.2rem; }
.tl-company { color:#4effe0; font-size:.82rem; margin-bottom:.2rem; }
.tl-period { color:rgba(237,240,255,.4); font-size:.75rem; margin-bottom:.6rem; font-family:'JetBrains Mono',monospace; }
.tl-bullets { list-style:none; display:grid; gap:.35rem; }
.tl-bullets li { font-size:.82rem; color:rgba(237,240,255,.55); padding-left:1rem; position:relative; }
.tl-bullets li::before { content:'▸'; position:absolute; left:0; color:#ff6b2b; }
.cert-list { display:grid; gap:.75rem; margin-top:1rem; }
.cert-item { display:flex; justify-content:space-between; align-items:center; padding:.8rem 1rem; border-radius:1rem; background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.07); }
.cert-item strong { font-size:.85rem; }
.cert-item small { font-size:.72rem; color:rgba(237,240,255,.4); font-family:'JetBrains Mono',monospace; }
@media(max-width:900px) { .about-grid{grid-template-columns:1fr} }
`

export default function About() {
  return (
    <section id="about">
      <style>{s}</style>
      <div className="about-wrap">
        <p className="sec-label">01 / About</p>
        <h2 className="sec-title">Who am I</h2>
        <div className="about-grid">
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div className="glass-card">
              <p className="card-title">Profile</p>
              <p className="bio-text">{personal.bio}</p>
              <div className="chips">
                {['Spring Boot','REST APIs','MySQL','Hibernate','JPA','Docker','Git','Swagger','Postman','Maven'].map(c => <span key={c} className="chip">{c}</span>)}
              </div>
            </div>
            <div className="glass-card">
              <p className="card-title">Certifications</p>
              <div className="cert-list">
                {certifications.map(c => (
                  <div key={c.title} className="cert-item">
                    <div><strong>{c.title}</strong><br /><small>{c.issuer}</small></div>
                    <small>{c.date}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem', alignContent: 'start' }}>
            <div className="glass-card">
              <p className="card-title">Experience</p>
              <div className="timeline">
                {experience.map((e, i) => (
                  <div key={i} className="tl-item">
                    <div className="tl-dot-wrap"><div className="tl-dot" /><div className="tl-line" /></div>
                    <div>
                      <p className="tl-role">{e.role}</p>
                      <p className="tl-company">{e.company} · {e.location}</p>
                      <p className="tl-period">{e.period}</p>
                      <ul className="tl-bullets">
                        {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card">
              <p className="card-title">Education</p>
              <div className="timeline">
                {education.map((e, i) => (
                  <div key={i} className="tl-item">
                    <div className="tl-dot-wrap"><div className="tl-dot" />{i < education.length - 1 && <div className="tl-line" />}</div>
                    <div>
                      <p className="tl-role">{e.degree}</p>
                      <p className="tl-company">{e.institute}</p>
                      <p className="tl-period">{e.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}