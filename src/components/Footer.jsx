import React, { useState, useEffect } from 'react'
import { personal } from '../data'

const year = new Date().getFullYear()

const socialLinks = [
  {
    label: 'GitHub',
    href: personal.github,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: personal.linkedin,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57A1.46 1.46 0 0 1 14.38 12.11A1.46 1.46 0 0 1 15.84 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: `mailto:${personal.email}`,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
]

const s = `
.footer {
  position: relative;
  z-index: 1;
  margin-top: 4rem;
  border-top: 1px solid rgba(255,255,255,.07);
}
.footer-glow-line {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(78,255,224,.3), transparent);
  pointer-events: none;
}
.footer-bottom-inner {
  max-width: min(calc(100% - 2rem), 1180px);
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 0;
}
.footer-copy {
  font-size: .74rem;
  color: rgba(237,240,255,.25);
  font-family: 'JetBrains Mono', monospace;
}
.footer-copy strong {
  color: rgba(237,240,255,.45);
  font-weight: 600;
}
.footer-social-row {
  display: flex;
  align-items: center;
  gap: .5rem;
}
.footer-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: .5rem;
  color: rgba(237,240,255,.3);
  text-decoration: none;
  transition: color .18s, background .18s;
}
.footer-social-link:hover {
  color: #4effe0;
  background: rgba(78,255,224,.08);
}
.footer-right {
  display: flex;
  justify-content: flex-end;
}
.footer-status {
  display: flex;
  align-items: center;
  gap: .45rem;
  font-size: .74rem;
  color: rgba(237,240,255,.3);
  font-family: 'JetBrains Mono', monospace;
}
.footer-status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4effe0;
  box-shadow: 0 0 8px #4effe0;
  animation: fpulse 2s infinite;
  flex-shrink: 0;
}
@keyframes fpulse {
  0%,100% { opacity: 1; }
  50% { opacity: .3; }
}
@media(max-width:600px) {
  .footer-bottom-inner {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: .7rem;
    padding: 1rem 0;
  }
  .footer-right {
    justify-content: center;
  }
}
`

export default function Footer() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata',
    })
  )

  useEffect(() => {
    const t = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Kolkata',
        })
      )
    }, 60000)
    return () => clearInterval(t)
  }, [])

  return (
    <footer className="footer">
      <style>{s}</style>
      <div className="footer-glow-line" />

      <div className="footer-bottom-inner">
        <span className="footer-copy">
          &copy; {year} <strong>Adil Saifi</strong>. All rights reserved.
        </span>

        <div className="footer-social-row">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="footer-social-link"
              aria-label={item.label}
              title={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="footer-right">
          <span className="footer-status">
            <span className="footer-status-dot" />
            Available · IST {time}
          </span>
        </div>
      </div>
    </footer>
  )
}