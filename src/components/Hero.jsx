import React, { useState, useEffect } from 'react'
import { personal, stats } from '../data'

const roles = ['Java Full-Stack Developer', 'Spring Boot Architect', 'Flutter App Builder', 'Open to Hire']

const s = `
#home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 4.5rem;
  position: relative;
  z-index: 1;
}
.hero-wrap {
  max-width: min(calc(100% - 2rem), 1180px);
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  gap: 3rem;
  align-items: flex-start;
  padding: 1.5rem 0 2rem;
  width: 100%;
}
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  padding: .38rem .9rem;
  border: 1px solid rgba(78,255,224,.25);
  border-radius: 9999px;
  font-size: .72rem;
  text-transform: uppercase;
  letter-spacing: .18em;
  color: #4effe0;
  background: rgba(78,255,224,.06);
  margin-bottom: .8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
.hero-eyebrow-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #4effe0;
  animation: hpulse 2s infinite;
  flex-shrink: 0;
}
.hero-h1 {
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: clamp(2.4rem, 5.5vw, 4.2rem);
  line-height: .88;
  letter-spacing: -.045em;
  margin-bottom: .55rem;
}
.hero-h1 .gline {
  background: linear-gradient(135deg, #4effe0 0%, #a78bfa 60%, #ff6b2b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.type-wrap {
  font-size: clamp(.85rem, 1.1vw, 1rem);
  color: #4effe0;
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: .55rem;
  min-height: 1.6rem;
  display: flex;
  align-items: center;
  gap: .25rem;
}
.type-cursor {
  display: inline-block;
  width: 2px; height: 1.1em;
  background: #4effe0;
  animation: blink 1s step-end infinite;
}
.hero-lead {
  font-size: var(--text-base);
  color: rgba(237,240,255,.6);
  max-width: 52ch;
  margin-bottom: 1.2rem;
  line-height: 1.65;
}
.hero-btns {
  display: flex;
  flex-wrap: wrap;
  gap: .85rem;
  margin-bottom: 1.6rem;
}
.btn-fire {
  display: inline-flex;
  align-items: center;
  gap: .6rem;
  padding: .78rem 1.5rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, #ff6b2b, #ff9b6b);
  color: #1a0a00;
  font-weight: 700;
  font-size: .88rem;
  box-shadow: 0 8px 32px rgba(255,107,43,.3);
  transition: transform .22s, box-shadow .22s;
  cursor: pointer;
  border: none;
}
.btn-fire:hover { transform: translateY(-3px); box-shadow: 0 16px 48px rgba(255,107,43,.4); }
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: .6rem;
  padding: .78rem 1.5rem;
  border-radius: 9999px;
  border: 1px solid rgba(255,255,255,.12);
  color: #edf0ff;
  font-size: .88rem;
  font-weight: 600;
  transition: all .22s;
  background: rgba(255,255,255,.04);
  text-decoration: none;
}
.btn-ghost:hover { background: rgba(255,255,255,.09); transform: translateY(-2px); }
.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .75rem;
}
.stat-card {
  padding: .85rem .75rem;
  border-radius: 1rem;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.07);
  text-align: center;
}
.stat-card:hover { border-color: rgba(78,255,224,.25); }
.stat-card strong {
  display: block;
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 1.45rem;
  font-weight: 800;
  color: #4effe0;
}
.stat-card span {
  font-size: .7rem;
  color: rgba(237,240,255,.5);
  line-height: 1.3;
  display: block;
  margin-top: .15rem;
}
.hero-visual {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: .9rem;
  align-items: center;
  justify-content: flex-start;
  padding-top: .5rem;
}
.photo-orb-container {
  position: relative;
  width: 230px;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.orb-orbit {
  position: absolute;
  inset: -60px;
  border-radius: 50%;
  border: 1px dashed rgba(78,255,224,.12);
  animation: ospin 18s linear infinite;
  pointer-events: none;
  z-index: 0;
}
.orb-orbit:nth-child(2) {
  inset: -88px;
  animation: ospin 28s linear infinite reverse;
  border-color: rgba(167,139,250,.1);
}
.orb-dot {
  position: absolute;
  width: 7px; height: 7px;
  border-radius: 50%;
  top: -3.5px; left: 50%;
  transform: translateX(-50%);
}
.orb-orbit:nth-child(1) .orb-dot { background: #4effe0; box-shadow: 0 0 14px #4effe0; }
.orb-orbit:nth-child(2) .orb-dot { background: #a78bfa; box-shadow: 0 0 14px #a78bfa; }
.hero-photo-wrap {
  position: relative;
  width: 190px;
  height: 190px;
  flex-shrink: 0;
  z-index: 2;
  border-radius: 50%;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}
.hero-photo-ring {
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  border: 2.5px solid transparent;
  background: linear-gradient(135deg, #4effe0, #a78bfa, #ff6b2b) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  animation: ospin 6s linear infinite;
  z-index: 3;
  pointer-events: none;
}
.hero-photo {
  width: 190px;
  height: 190px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  display: block;
  position: relative;
  z-index: 2;
}
.hero-photo-fallback {
  width: 190px; height: 190px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(78,255,224,.15), rgba(167,139,250,.15));
  border: 3px solid rgba(78,255,224,.3);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 3.5rem; font-weight: 900; color: #4effe0;
  z-index: 2;
  position: relative;
}
.hero-name-badge { text-align: center; }
.hero-name-badge h3 {
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 1.2rem; font-weight: 800; color: #edf0ff; margin-bottom: .15rem;
}
.hero-name-badge p {
  font-size: .75rem;
  color: rgba(237,240,255,.4);
  font-family: 'JetBrains Mono', monospace;
}
.hero-console {
  width: 100%;
  padding: 1rem 1.1rem;
  border-radius: 1.2rem;
  background: rgba(16,18,28,.88);
  border: 1px solid rgba(255,255,255,.08);
  backdrop-filter: blur(16px);
}
.console-bar { display: flex; gap: .4rem; margin-bottom: .75rem; }
.console-bar span { width: 9px; height: 9px; border-radius: 50%; }
.cline {
  display: flex;
  gap: .8rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: .75rem;
  padding: .22rem 0;
  line-height: 1.5;
}
.cline .ln { color: rgba(237,240,255,.2); min-width: 1.2rem; }
.cline .kw { color: #ff6b2b; }
.cline .str { color: #4effe0; }
.cline .com { color: rgba(237,240,255,.35); }
.cline .fn { color: #ffd166; }
@keyframes hpulse { 0%,100%{opacity:1}50%{opacity:.3} }
@keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }
@keyframes ospin { to{transform:rotate(360deg)} }
@media(max-width:900px) {
  .hero-wrap {
    grid-template-columns: 1fr;
    padding: 2rem 0 2rem;
    align-items: center;
  }
  .hero-visual { padding-top: 0; }
  .hero-stats { grid-template-columns: repeat(2,1fr); }
}
@media(max-width:500px) {
  .hero-stats { grid-template-columns: 1fr 1fr; }
  .hero-btns { flex-direction: column; }
  .hero-eyebrow { font-size: .62rem; letter-spacing: .1em; }
  .photo-orb-container { width: 180px; height: 180px; }
  .hero-photo-wrap { width: 150px !important; height: 150px !important; }
  .hero-photo { width: 150px !important; height: 150px !important; }
  .hero-photo-fallback { width: 150px !important; height: 150px !important; }
  .hero-photo-ring { inset: -8px; }
}
`

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/Adil_Resume.pdf'
  link.download = 'Adil_Saifi_Resume.pdf'
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [photoError, setPhotoError] = useState(false)

  useEffect(() => {
    const target = roles[roleIdx]
    let timeout
    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      } else {
        setRoleIdx(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  return (
    <section id="home">
      <style>{s}</style>
      <div className="hero-wrap">

        {/* LEFT SIDE */}
        <div>
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Available for strong engineering roles
          </div>
          <h1 className="hero-h1">
            I build<br /><span className="gline">systems that</span><br />actually ship.
          </h1>
          <div className="type-wrap">
            &gt;&nbsp;{displayed}<span className="type-cursor" />
          </div>
          <p className="hero-lead">{personal.bio}</p>
          <div className="hero-btns">
            <button className="btn-fire" onClick={downloadResume}>
              ⬇ Download Resume
            </button>
            <a className="btn-ghost" href="#projects">View Projects →</a>
          </div>
          <div className="hero-stats">
            {stats.map(st => (
              <div className="stat-card" key={st.label}>
                <strong>{st.value}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">
          <div className="photo-orb-container">
            <div className="orb-orbit"><span className="orb-dot" /></div>
            <div className="orb-orbit"><span className="orb-dot" /></div>
            <div className="hero-photo-wrap">
              <div className="hero-photo-ring" />
              {!photoError
                ? (
                  <img
                    src="/photo.jpg"
                    alt="Adil Saifi"
                    className="hero-photo"
                    onError={() => setPhotoError(true)}
                    loading="eager"
                  />
                )
                : <div className="hero-photo-fallback">A</div>
              }
            </div>
          </div>

          <div className="hero-name-badge">
            <h3>Adil Saifi</h3>
            <p>@Adil101010 · Noida, India</p>
          </div>

          <div className="hero-console">
            <div className="console-bar">
              <span style={{ background: '#ff5f57' }} />
              <span style={{ background: '#ffbd2e' }} />
              <span style={{ background: '#28c940' }} />
            </div>
            <div className="cline">
              <span className="ln">1</span>
              <span className="kw">import</span>
              <span className="str"> SpringBoot, Flutter, MySQL</span>
            </div>
            <div className="cline">
              <span className="ln">2</span>
              <span className="fn">buildProduct</span>
              <span className="com">{'({ name: "FoodDelivery" })'}</span>
            </div>
            <div className="cline">
              <span className="ln">3</span>
              <span className="kw">deploy</span>
              <span className="str">('production')</span>
              <span className="com"> // live 🚀</span>
            </div>
            <div className="cline">
              <span className="ln">4</span>
              <span className="com">// Status: Available to hire ✓</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}