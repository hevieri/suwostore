import { useState } from 'react'
import './Cambio.css'

const BUSQUEDAS = [
  'Pokémon ex full art',
  'Vintage (WOTC)',
  'Cartas de energía ilustradas',
  'Tokens y dañadores',
  'Lotes de random rares',
  'ETB y sobres sellados',
]

const PASOS = [
  {
    t: 'Armá tu perfil de intercambio',
    d: 'Listá qué buscas y qué tenés para dar, con fotos y estado real de cada carta.',
  },
  {
    t: 'Match con otro coleccionista',
    d: 'El sistema te muestra con quién podés cerrar un cambio justo, carta por carta.',
  },
  {
    t: 'Coordiná y calificá',
    d: 'Definen envío o encuentro, y al cerrar el intercambio dejan su reputación.',
  },
]

export default function Cambio() {
  const [elegidas, setElegidas] = useState([BUSQUEDAS[0]])

  const alternar = (item) =>
    setElegidas((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )

  return (
    <section className="cambio seccion" id="cambio">
      <div className="container">
        <div className="cambio__encabezado">
          <span className="ojo">Cambio de cartas</span>
          <h2 className="titulo">El intercambio justo, carta por carta</h2>
          <p className="bajada">
            Ya sabés lo que es estar a una carta de completar el set. Contanos qué buscás y
            te conectamos con alguien que tiene exactamente lo que necesitás y busca lo
            tuyo.
          </p>
        </div>

        <div className="cambio__grid">
          <div className="cambio__buscador">
            <h3>¿Qué estás buscando hoy?</h3>
            <p>Tocá las categorías y armá tu pedido de intercambio.</p>
            <div className="cambio__chips">
              {BUSQUEDAS.map((b) => (
                <button
                  key={b}
                  type="button"
                  className={`cambio__chip ${elegidas.includes(b) ? 'is-on' : ''}`}
                  onClick={() => alternar(b)}
                  aria-pressed={elegidas.includes(b)}
                >
                  {elegidas.includes(b) ? '✓ ' : '+ '}
                  {b}
                </button>
              ))}
            </div>
            <div className="cambio__resumen">
              <strong>
                {elegidas.length} {elegidas.length === 1 ? 'categoría seleccionada' : 'categorías seleccionadas'}
              </strong>
              <span>
                {elegidas.length === 0
                  ? 'Elegí al menos una categoría para empezar.'
                  : 'Te mostramos coincidencias con otros miembros.'}
              </span>
            </div>
          </div>

          <ol className="cambio__pasos">
            {PASOS.map((p, i) => (
              <li key={p.t}>
                <span className="cambio__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4>{p.t}</h4>
                  <p>{p.d}</p>
                </div>
              </li>
            ))}
            <a className="btn btn-primario cambio__cta" href="#contacto">
              Buscar mi intercambio
            </a>
          </ol>
        </div>
      </div>
    </section>
  )
}
