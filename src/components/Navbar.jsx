import React, { useState } from 'react'
import { personal } from '../data'

const links = ['About', 'Projects', 'Skills', 'Contact']

const s = `
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  padding: .75rem 0;
  transition: all .4s cubic-bezier(.16,1,.3,1);
}
.nav.scrolled {
  padding: .45rem 0;
  background: rgba(6,7,13,.82);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(255,255,255,.06);
  box-shadow: 0 8px 32px rgba(0,0,0,.25);
}
.nav-inner {
  max-width: min(calc(100% - 2rem), 1180px);
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

/* BRAND */
.brand {
  display: flex;
  align-items: center;
  gap: .55rem;
  text-decoration: none;
  color: inherit;
  flex-shrink: 0;
}
.logo-mark {
  width: 32px; height: 32px;
  border-radius: .7rem;
  background: linear-gradient(135deg, rgba(78,255,224,.12), rgba(167,139,250,.12));
  border: 1px solid rgba(78,255,224,.22);
  display: grid;
  place-items: center;
  transition: all .3s;
}
.brand:hover .logo-mark {
  background: linear-gradient(135deg, rgba(78,255,224,.2), rgba(167,139,250,.2));
  border-color: rgba(78,255,224,.4);
  box-shadow: 0 0 20px rgba(78,255,224,.15);
}
.brand-name {
  font-family: 'Cabinet Grotesk', sans-serif;
  font-weight: 900;
  font-size: .92rem;
  letter-spacing: -.025em;
  color: #edf0ff;
}
.brand-name span {
  color: #4effe0;
}

/* CENTER PILL NAV */
.nav-pill {
  display: flex;
  align-items: center;
  gap: .1rem;
  padding: .3rem;
  border-radius: 9999px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(78,255,224,.15);
  backdrop-filter: blur(8px);
}
.nav-pill a {
  position: relative;
  padding: .38rem .9rem;
  border-radius: 9999px;
  font-size: .8rem;
  font-weight: 600;
  color: #4effe0;
  text-decoration: none;
  transition: color .2s, background .2s;
  white-space: nowrap;
  letter-spacing: .01em;
}
.nav-pill a:hover {
  color: #fff;
  background: rgba(78,255,224,.10);
}
.nav-pill a.active {
  color: #fff;
  background: rgba(78,255,224,.12);
}

/* RIGHT ACTIONS */
.nav-actions {
  display: flex;
  align-items: center;
  gap: .7rem;
  flex-shrink: 0;
}
.nav-status {
  display: flex;
  align-items: center;
  gap: .4rem;
  padding: .32rem .8rem;
  border-radius: 9999px;
  background: rgba(78,255,224,.06);
  border: 1px solid rgba(78,255,224,.15);
  font-size: .72rem;
  font-family: 'JetBrains Mono', monospace;
  color: rgba(78,255,224,.7);
  white-space: nowrap;
}
.nav-status-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: #4effe0;
  box-shadow: 0 0 6px #4effe0;
  animation: ndot 2s infinite;
  flex-shrink: 0;
}
@keyframes ndot {
  0%,100% { opacity:1 }
  50% { opacity:.3 }
}
.nav-cta {
  display: inline-flex;
  align-items: center;
  gap: .45rem;
  padding: .46rem 1.1rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(78,255,224,.12), rgba(167,139,250,.08));
  border: 1px solid rgba(78,255,224,.3);
  color: #4effe0;
  font-size: .8rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: all .25s cubic-bezier(.16,1,.3,1);
}
.nav-cta:hover {
  background: linear-gradient(135deg, rgba(78,255,224,.2), rgba(167,139,250,.14));
  border-color: rgba(78,255,224,.55);
  box-shadow: 0 0 28px rgba(78,255,224,.2);
  transform: translateY(-1px);
}
.nav-cta svg {
  transition: transform .25s;
}
.nav-cta:hover svg {
  transform: translateY(1px);
}

/* HAMBURGER */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: .4rem;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: .6rem;
  cursor: pointer;
  transition: background .2s;
}
.hamburger:hover {
  background: rgba(255,255,255,.08);
}
.hamburger span {
  width: 18px; height: 1.5px;
  background: rgba(237,240,255,.8);
  border-radius: 9999px;
  display: block;
  transition: all .3s cubic-bezier(.16,1,.3,1);
}

/* MOBILE OVERLAY */
.mobile-overlay {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 49;
  flex-direction: column;
  background: rgba(6,7,13,.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}
.mobile-overlay.open {
  display: flex;
}
.mobile-overlay-inner {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .4rem;
  padding: 2rem;
}
.mobile-overlay-inner a {
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: clamp(1.8rem, 6vw, 2.4rem);
  font-weight: 800;
  text-decoration: none;
  color: #4effe0;
  letter-spacing: -.03em;
  padding: .6rem 2rem;
  border-radius: 1rem;
  transition: all .2s;
  width: 100%;
  text-align: center;
}
.mobile-overlay-inner a:hover {
  color: #fff;
  background: rgba(78,255,224,.06);
}
.mobile-overlay-footer {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid rgba(255,255,255,.07);
}
.mobile-dl-btn {
  display: inline-flex;
  align-items: center;
  gap: .6rem;
  padding: .8rem 2rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(78,255,224,.12), rgba(167,139,250,.08));
  border: 1px solid rgba(78,255,224,.3);
  color: #4effe0;
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all .25s;
}
.mobile-dl-btn:hover {
  background: rgba(78,255,224,.18);
  border-color: rgba(78,255,224,.5);
}
.mobile-close {
  position: absolute;
  top: 1.2rem; right: 1.2rem;
  width: 36px; height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.1);
  display: grid;
  place-items: center;
  cursor: pointer;
  color: rgba(237,240,255,.6);
  transition: all .2s;
}
.mobile-close:hover {
  background: rgba(255,255,255,.1);
  color: #edf0ff;
}

@media(max-width:800px) {
  .nav-pill, .nav-status { display: none; }
  .hamburger { display: flex; }
}
@media(max-width:480px) {
  .nav-cta { display: none; }
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

export default function Navbar({ scrollY }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <style>{s}</style>

      <header className={scrollY > 40 ? 'nav scrolled' : 'nav'}>
        <div className="nav-inner">

          <a href="#home" className="brand">
            <span className="logo-mark">
              <svg
                width="14"
                height="14"
                viewBox="0 0 32 32"
                fill="none"
                stroke="#4effe0"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 24 16 6l10 18" />
                <path d="M11.5 17h9" />
              </svg>
            </span>
            <span className="brand-name">Adil <span>Saifi</span></span>
          </a>

          <nav className="nav-pill" aria-label="Primary">
            {links.map((l) => (
              <a key={l} href={'#' + l.toLowerCase()}>{l}</a>
            ))}
          </nav>

          <div className="nav-actions">
            <span className="nav-status">
              <span className="nav-status-dot" />
              Open to hire
            </span>

            <a
              className="nav-cta"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                downloadResume()
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v13M6 11l6 6 6-6M3 21h18" />
              </svg>
              Download CV
            </a>

            <button
              className="hamburger"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span style={open ? { transform:'rotate(45deg) translate(4.5px,4.5px)' } : {}} />
              <span style={open ? { opacity:0, transform:'scaleX(0)' } : {}} />
              <span style={open ? { transform:'rotate(-45deg) translate(4.5px,-4.5px)' } : {}} />
            </button>
          </div>
        </div>
      </header>

      <div className={open ? 'mobile-overlay open' : 'mobile-overlay'} style={{ position:'fixed' }}>
        <button className="mobile-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="mobile-overlay-inner">
          {links.map((l) => (
            <a key={l} href={'#' + l.toLowerCase()} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
        </div>

        <div className="mobile-overlay-footer">
          <a
            className="mobile-dl-btn"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              downloadResume()
              setOpen(false)
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v13M6 11l6 6 6-6M3 21h18" />
            </svg>
            Download CV
          </a>

          <span
            style={{
              fontSize: '.72rem',
              color: 'rgba(237,240,255,.25)',
              fontFamily: "'JetBrains Mono',monospace"
            }}
          >
            Adil Saifi · 2026
          </span>
        </div>
      </div>
    </>
  )
}