import { useState } from 'react'
import './Sorteos.css'

const PASOS = [
  { n: '01', t: 'Seguí la comunidad', d: 'Enterate del sorteo en el feed o en el canal de avisos.' },
  { n: '02', t: 'Participá gratis', d: 'Confirmá tu lugar con un click. Algunos sorteos premian más si compartís.' },
  { n: '03', t: 'Esperá el vivo', d: 'Sorteamos en vivo y publicamos el ganador con captura para todos.' },
  { n: '04', t: 'Recibí tu carta', d: 'Coordinamos el envío o el retiro, sin vueltas y sin comisiones.' },
]

export default function Sorteos() {
  const [participando, setParticipando] = useState(false)

  return (
    <section className="sorteos seccion" id="sorteos">
      <div className="container sorteos__grid">
        <div className="sorteos__contenido">
          <span className="ojo">Sorteos</span>
          <h2 className="titulo">Sorteos semanales para toda la comunidad</h2>
          <p className="bajada">
            Cada semana regalamos sobres, singles y lotes enteros. Entrar es gratis y
            abierto a cualquier miembro: porque si la comunidad crece, todos ganan.
          </p>

          <ul className="sorteos__lista">
            {PASOS.map((p) => (
              <li key={p.n}>
                <span className="sorteos__num">{p.n}</span>
                <div>
                  <strong>{p.t}</strong>
                  <p>{p.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="sorteos__cta">
            <button
              className={`btn ${participando ? 'btn-ghost' : 'btn-primario'}`}
              type="button"
              onClick={() => setParticipando(true)}
              disabled={participando}
            >
              {participando ? '¡Estás anotado! ✓' : 'Participar del próximo sorteo'}
            </button>
            <span className="sorteos__nota">
              {participando
                ? 'Te avisamos por mensaje cuando salga el ganador.'
                : 'Sin costo, sin compras mínimas.'}
            </span>
          </div>
        </div>

        <aside className="sorteos__card">
          <span className="sorteos__chip">Sorteo en curso</span>
          <h3>Sobre Pokémon 151 + 3 singles FT</h3>
          <p>
            Un sobre sellado de 151, tres cartas foil a elección y un starter pack de
            protecciones para tu colección.
          </p>
          <dl className="sorteos__meta">
            <div>
              <dt>Cierre</dt>
              <dd>Viernes 20:00 hs</dd>
            </div>
            <div>
              <dt>Participantes</dt>
              <dd>418</dd>
            </div>
            <div>
              <dt>Costo</dt>
              <dd>Gratis</dd>
            </div>
          </dl>
          <div className="sorteos__barra">
            <span style={{ width: '68%' }} />
          </div>
          <small>68% del tiempo restante</small>
        </aside>
      </div>
    </section>
  )
}
