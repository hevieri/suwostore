import './ComoFunciona.css'

const PASOS = [
  {
    t: 'Creá tu cuenta',
    d: 'Gratis y en menos de un minuto. Subí una foto y contanos qué coleccionás.',
  },
  {
    t: 'Elegí qué querés hacer',
    d: 'Participar de sorteos, publicar cartas en venta o buscar un intercambio.',
  },
  {
    t: 'Coordiná con la comunidad',
    d: 'Charlá por mensaje, definí envío o encuentro y cerrá el trato.',
  },
  {
    t: 'Dejá tu reputación',
    d: 'Calificás y te califican. Así crece la confianza de todos.',
  },
]

export default function ComoFunciona() {
  return (
    <section className="como seccion" id="como-funciona">
      <div className="container">
        <div className="como__encabezado">
          <span className="ojo">Cómo funciona</span>
          <h2 className="titulo">Cuatro pasos y estás adentro</h2>
          <p className="bajada">
            No hace falta ser experto ni tener miles de cartas. Si te gusta el juego, acá
            hay lugar para vos.
          </p>
        </div>

        <ol className="como__pasos">
          {PASOS.map((p, i) => (
            <li className="como__paso" key={p.t}>
              <span className="como__punto">{i + 1}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </ol>

        <div className="como__banner">
          <div>
            <h3>¿Listo para sumarte?</h3>
            <p>Creá tu perfil y recibí el próximo sorteo directo en tu mensaje.</p>
          </div>
          <a className="btn btn-claro" href="#contacto">
            Quiero unirme
          </a>
        </div>
      </div>
    </section>
  )
}
