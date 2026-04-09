import React, { useState } from 'react'
import { personal } from '../data'

const s = `
#contact { padding:6rem 0 4rem; position:relative; z-index:1; }
.contact-wrap { max-width:min(calc(100% - 2rem),1180px); margin-inline:auto; }
.contact-inner { display:grid; grid-template-columns:1.1fr .9fr; gap:1.5rem; align-items:start; }
.glass-card { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); border-radius:1.6rem; padding:1.8rem; backdrop-filter:blur(12px); }
.glass-card:hover { border-color:rgba(78,255,224,.18); }
.c-headline { font-family:'Cabinet Grotesk',sans-serif; font-size:var(--text-xl); letter-spacing:-.03em; margin-bottom:.8rem; }
.c-sub { color:rgba(237,240,255,.55); margin-bottom:2rem; line-height:1.7; }
.form-group { display:grid; gap:1rem; }
.form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
.field { display:flex; flex-direction:column; gap:.45rem; }
.field label { font-size:.78rem; text-transform:uppercase; letter-spacing:.14em; color:rgba(237,240,255,.5); }
.field input, .field textarea { background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.1); border-radius:.9rem; padding:.9rem 1rem; color:#edf0ff; font-family:'Satoshi',sans-serif; font-size:.9rem; outline:none; transition:border-color .2s,box-shadow .2s; resize:none; }
.field input:focus, .field textarea:focus { border-color:rgba(78,255,224,.4); box-shadow:0 0 0 3px rgba(78,255,224,.08); }
.btn-submit { width:100%; padding:1rem; border-radius:9999px; background:linear-gradient(135deg,#4effe0,#7cf8f0); color:#031615; font-weight:700; font-size:.95rem; transition:transform .22s,box-shadow .22s; margin-top:.5rem; }
.btn-submit:hover { transform:translateY(-2px); box-shadow:0 12px 40px rgba(78,255,224,.3); }
.btn-submit:disabled { opacity:.6; cursor:not-allowed; transform:none; }
.sent-msg { text-align:center; padding:2rem; color:#4effe0; font-size:1.1rem; }
.link-list { display:grid; gap:1rem; }
.link-item { display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:1rem 1.1rem; border-radius:1.1rem; background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.07); transition:all .22s; }
.link-item:hover { background:rgba(78,255,224,.06); border-color:rgba(78,255,224,.2); transform:translateX(4px); }
.link-item-left { display:flex; align-items:center; gap:.9rem; }
.link-icon { width:2.4rem; height:2.4rem; border-radius:.8rem; display:grid; place-items:center; font-size:.95rem; flex-shrink:0; }
.link-label { font-size:.7rem; color:rgba(237,240,255,.38); text-transform:uppercase; letter-spacing:.14em; display:block; margin-bottom:.2rem; }
.link-val { font-size:.88rem; font-weight:600; }
.link-arrow { color:rgba(237,240,255,.3); font-size:1.1rem; }
.link-item:hover .link-arrow { color:#4effe0; }
@media(max-width:900px) { .contact-inner{grid-template-columns:1fr} .form-row{grid-template-columns:1fr} }
`

const links = [
  { label: 'Email', val: personal.email, href: `mailto:${personal.email}`, color: '#ff6b2b', icon: '✉' },
  { label: 'Phone', val: personal.phone, href: `tel:+917248832390`, color: '#4effe0', icon: '✆' },
  { label: 'GitHub', val: 'github.com/Adil101010', href: personal.github, color: '#a78bfa', icon: '⌨', target: '_blank' },
  { label: 'LinkedIn', val: 'linkedin.com/in/adil-a40b11254', href: personal.linkedin, color: '#ffd166', icon: 'in', target: '_blank' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setSent(true); setLoading(false) }, 1200)
  }

  return (
    <section id="contact">
      <style>{s}</style>
      <div className="contact-wrap">
        <p className="sec-label" style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: '.2em', color: '#4effe0', marginBottom: '.5rem' }}>04 / Contact</p>
        <h2 style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: 'var(--text-2xl)', letterSpacing: '-.03em', marginBottom: '2.5rem' }}>Let's Connect</h2>
        <div className="contact-inner">
          <div className="glass-card">
            <h3 className="c-headline">Open to serious engineering opportunities</h3>
            <p className="c-sub">Available for Java full-stack roles, product engineering teams, backend-heavy projects, and ambitious startup builds where code quality and delivery both matter.</p>
            {sent ? (
              <div className="sent-msg">✓ Message received! I'll get back to you shortly.</div>
            ) : (
              <form onSubmit={submit} className="form-group">
                <div className="form-row">
                  <div className="field"><label>Name</label><input name="name" value={form.name} onChange={handle} placeholder="Your name" required /></div>
                  <div className="field"><label>Email</label><input type="email" name="email" value={form.email} onChange={handle} placeholder="you@company.com" required /></div>
                </div>
                <div className="field"><label>Subject</label><input name="subject" value={form.subject} onChange={handle} placeholder="Opportunity / Collaboration" /></div>
                <div className="field"><label>Message</label><textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Tell me about the role or project..." required /></div>
                <button className="btn-submit" type="submit" disabled={loading}>{loading ? 'Sending…' : 'Send Message →'}</button>
              </form>
            )}
          </div>
          <div className="glass-card">
            <p style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontWeight: 700, marginBottom: '1.2rem' }}>Direct Links</p>
            <div className="link-list">
              {links.map(l => (
                <a key={l.label} className="link-item" href={l.href} target={l.target} rel={l.target ? 'noopener noreferrer' : undefined}>
                  <div className="link-item-left">
                    <div className="link-icon" style={{ background: `${l.color}14`, color: l.color, border: `1px solid ${l.color}22` }}>{l.icon}</div>
                    <div><span className="link-label">{l.label}</span><span className="link-val">{l.val}</span></div>
                  </div>
                  <span className="link-arrow">→</span>
                </a>
              ))}
            </div>
            <a href={personal.resume} download style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.6rem', marginTop: '1.4rem', padding: '1rem', borderRadius: '9999px', background: 'rgba(78,255,224,.08)', border: '1px solid rgba(78,255,224,.25)', color: '#4effe0', fontWeight: 700, fontSize: '.9rem', transition: 'all .22s' }}>
              ⬇ Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}