import { useEffect, useState } from 'react'
import './Carrusel.css'

const SLIDES = [
  {
    src: '/img/Únete al grupo Pokémon de WhatsApp.png',
    alt: 'Únete al grupo Pokémon de WhatsApp de SUWO Store',
  },
  {
    src: '/img/hero.jpg',
    alt: 'SUWO Store, tu destino principal para JCC Pokémon',
  },
  {
    src: '/img/maqueta-horizontal.svg',
    alt: 'Tamaño sugerido: 1600 × 900 px, horizontal 16:9',
    maqueta: true,
  },
  {
    src: '/img/maqueta-vertical.svg',
    alt: 'Tamaño sugerido: 1200 × 1600 px, vertical 3:4',
    maqueta: true,
  },
]

export default function Carrusel() {
  const [actual, setActual] = useState(0)
  const [pausa, setPausa] = useState(false)
  const [enPc, setEnPc] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches,
  )

  const slides = enPc ? SLIDES : SLIDES.filter((s) => !s.maqueta)
  const total = slides.length

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = (e) => setEnPc(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    setActual((n) => (n >= total ? 0 : n))
  }, [total])

  useEffect(() => {
    if (pausa || total < 2) return
    const t = setTimeout(() => setActual((n) => (n + 1) % total), 4500)
    return () => clearTimeout(t)
  }, [actual, pausa, total])

  const irA = (n) => setActual((n + total) % total)

  return (
    <section
      className="carrusel"
      aria-label="Fotos de SUWO Store"
      onMouseEnter={() => setPausa(true)}
      onMouseLeave={() => setPausa(false)}
      onFocus={() => setPausa(true)}
      onBlur={() => setPausa(false)}
    >
      <div className="container carrusel__frame">
        <div
          className="carrusel__track"
          style={{ transform: `translateX(-${actual * 100}%)` }}
        >
          {slides.map((slide, n) => (
            <div className="carrusel__slide" key={slide.src} aria-hidden={n !== actual}>
              <img
                src={slide.src}
                alt={slide.alt}
                loading={n === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
          ))}
        </div>

        <button
          className="carrusel__flecha carrusel__flecha--izq"
          type="button"
          aria-label="Foto anterior"
          onClick={() => irA(actual - 1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M15 5l-7 7 7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className="carrusel__flecha carrusel__flecha--der"
          type="button"
          aria-label="Foto siguiente"
          onClick={() => irA(actual + 1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M9 5l7 7-7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="carrusel__puntos">
          {slides.map((slide, n) => (
            <button
              key={slide.src}
              type="button"
              className={n === actual ? 'is-on' : ''}
              aria-label={`Ir a la foto ${n + 1}`}
              aria-current={n === actual}
              onClick={() => irA(n)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
