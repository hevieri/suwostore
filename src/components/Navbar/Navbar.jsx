import { useEffect, useState } from 'react'
import './Navbar.css'

const LINKS = [{ id: 'faq', label: 'Preguntas frecuentes' }]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [abierto, setAbierto] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : ''

    const onResize = () => {
      if (window.innerWidth > 960) setAbierto(false)
    }
    window.addEventListener('resize', onResize)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('resize', onResize)
    }
  }, [abierto])

  const irA = (id) => {
    setAbierto(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`navbar ${scrolled || abierto ? 'navbar--scrolled' : ''}`}
    >
      <div className="container navbar__inner">
        <a className="navbar__logo" href="#top" onClick={() => irA('top')}>
          <img src="/img/mobile-header-logo.jpg" alt="SUWO Store" />
        </a>

        <nav className={`navbar__links ${abierto ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <button key={link.id} type="button" onClick={() => irA(link.id)}>
              {link.label}
            </button>
          ))}
          <button
            className="btn btn-primario navbar__cta"
            type="button"
            onClick={() => irA('contacto')}
          >
            Sumate
          </button>
        </nav>

        <button
          className={`navbar__burger ${abierto ? 'is-open' : ''}`}
          type="button"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
