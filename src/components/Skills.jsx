import React, { useEffect, useRef, useState } from 'react'
import { skills } from '../data'

const colors = { teal: '#4effe0', fire: '#ff6b2b', gold: '#ffd166', purple: '#a78bfa' }

const s = `
#skills { padding:6rem 0; position:relative; z-index:1; }
.skills-wrap { max-width:min(calc(100% - 2rem),1180px); margin-inline:auto; }
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}
.sk-card { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); border-radius:1.6rem; padding:1.6rem; transition:border-color .3s,box-shadow .3s; }
.sk-card:hover { box-shadow:0 0 40px rgba(78,255,224,.06); }
.sk-icon { width:2.8rem; height:2.8rem; border-radius:1rem; display:grid; place-items:center; font-size:1.1rem; margin-bottom:1rem; border:1px solid rgba(255,255,255,.09); }
.sk-category { font-family:'Cabinet Grotesk',sans-serif; font-size:1.05rem; font-weight:700; margin-bottom:1.1rem; }
.sk-items { list-style:none; display:grid; gap:.65rem; }
.sk-item { display:flex; flex-direction:column; gap:.3rem; }
.sk-name { font-size:.82rem; color:rgba(237,240,255,.7); display:flex; justify-content:space-between; }
.sk-bar-bg { height:3px; border-radius:9999px; background:rgba(255,255,255,.08); overflow:hidden; }
.sk-bar-fill { height:100%; border-radius:9999px; transition:width 1.2s cubic-bezier(.16,1,.3,1); }
@media(max-width:900px) { .skills-grid{grid-template-columns:repeat(2,1fr)} }
@media(max-width:500px) { .skills-grid{grid-template-columns:1fr} }
`

const levelMap = {
  'Java': 90, 'Spring Boot': 88, 'Spring MVC': 82, 'Hibernate': 78, 'JPA': 78,
  'REST APIs': 90, 'OAuth2': 72, 'JWT': 80, 'JUnit': 70,
  'React': 78, 'HTML5': 88, 'CSS3': 85, 'JavaScript': 80, 'TypeScript': 68,
  'Tailwind CSS': 82, 'Bootstrap': 78, 'Flutter': 70, 'Responsive Design': 84, 'Vite': 72,
  'MySQL': 88, 'SQL': 88, 'MongoDB': 65, 'Elastic Search': 60, 'Joins & Indexes': 80, 'CRUD Operations': 90,
  'REST API Integration': 88, 'Third-party APIs': 80, 'Razorpay API': 82, 'WebHooks': 72,
  'OpenAI API': 65, 'Gemini API': 62, 'AI Chatbot Integration': 60, 'Prompt Engineering': 65,
  'Redis': 55, 'Apache Kafka': 50, 'RabbitMQ': 48,
  'Docker': 62, 'Git': 88, 'GitHub': 88, 'Maven': 75, 'Swagger': 85, 'Postman': 90,
  'IntelliJ IDEA': 88, 'VS Code': 85,
  'Microservices': 75, 'MVC Architecture': 85, 'OOP': 88, 'SOLID Principles': 80,
  'Exception Handling': 85, 'DSA Basics': 70,
}

function SkillBar({ name, color, visible }) {
  const pct = levelMap[name] || 65
  return (
    <div className="sk-item">
      <span className="sk-name">{name}</span>
      <div className="sk-bar-bg">
        <div
          className="sk-bar-fill"
          style={{
            width: visible ? `${pct}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}88)`
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true)
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref}>
      <style>{s}</style>
      <div className="skills-wrap">
        <p className="sec-label" style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: '.2em', color: '#4effe0', marginBottom: '.5rem' }}>
          03 / Skills
        </p>
        <h2 style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: 'var(--text-2xl)', letterSpacing: '-.03em', marginBottom: '2.5rem' }}>
          Technical Arsenal
        </h2>
        <div className="skills-grid">
          {skills.map(sk => {
            const c = colors[sk.color] || '#4effe0'
            return (
              <div key={sk.category} className="sk-card" style={{ borderColor: visible ? `${c}22` : undefined }}>
                <div className="sk-icon" style={{ background: `${c}12`, borderColor: `${c}22` }}>
                  <span style={{ color: c }}>{'{ }'}</span>
                </div>
                <p className="sk-category" style={{ color: c }}>{sk.category}</p>
                <ul className="sk-items">
                  {sk.items.map(item => (
                    <SkillBar key={item} name={item} color={c} visible={visible} />
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}