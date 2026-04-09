import React, { useEffect, useRef } from 'react'

const style = `
.cursor { pointer-events:none; position:fixed; z-index:9999; mix-blend-mode:difference; }
.cursor-dot { width:8px; height:8px; background:#4effe0; border-radius:50%; transform:translate(-50%,-50%); transition:transform 0.1s; }
.cursor-ring { width:40px; height:40px; border:1.5px solid rgba(78,255,224,.55); border-radius:50%; transform:translate(-50%,-50%); transition:transform 0.18s cubic-bezier(.16,1,.3,1), width 0.25s, height 0.25s; }
body:has(a:hover) .cursor-ring, body:has(button:hover) .cursor-ring { width:60px; height:60px; border-color:rgba(78,255,224,.8); }
@media (pointer:coarse) { .cursor { display:none; } }
`

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const move = e => {
      if (dot.current) { dot.current.style.left = e.clientX + 'px'; dot.current.style.top = e.clientY + 'px' }
      if (ring.current) { ring.current.style.left = e.clientX + 'px'; ring.current.style.top = e.clientY + 'px' }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <style>{style}</style>
      <div className="cursor cursor-ring" ref={ring} />
      <div className="cursor cursor-dot" ref={dot} />
    </>
  )
}