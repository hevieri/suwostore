import './Comunidad.css'

const PILARES = [
  {
    icono: '🤝',
    titulo: 'Conectá con gente real',
    texto:
      'Foros, chats y encuentros para que hables con coleccionistas de tu zona y de todo el país. Acá nadie juega solo.',
  },
  {
    icono: '🛡️',
    titulo: 'Confianza primero',
    texto:
      'Perfiles verificados, reputación pública y historial de operaciones. Comprás, vendés y cambiás con la tranquilidad de saber con quién tratás.',
  },
  {
    icono: '🎉',
    titulo: 'Actividad constante',
    texto:
      'Sorteos, subastas, retos de mazo y ferias online. Siempre hay algo pasando en la comunidad SUWO.',
  },
]

export default function Comunidad() {
  return (
    <section className="comunidad seccion" id="comunidad">
      <div className="container">
        <div className="comunidad__encabezado">
          <div>
            <span className="ojo">La comunidad</span>
            <h2 className="titulo">Una comunidad para conectar personas</h2>
            <p className="bajada">
              SUWO Store nació para algo más que vender cartas: es el punto de encuentro de
              gente que comparte la misma pasión por el TCG Pokémon. Sumate, conocé gente,
              aprendé y disfrutá del hobby en buena compañía.
            </p>
          </div>
          <div className="comunidad__cita">
            <p>
              “Empecé buscando un intercambio simple y me quedé por la gente. Hoy armo
              torneos con amigos que conocí acá.”
            </p>
            <span>— Membros de la comunidad</span>
          </div>
        </div>

        <div className="comunidad__grid rejilla">
          {PILARES.map((p) => (
            <article className="tarjeta comunidad__card" key={p.titulo}>
              <span className="comunidad__icono" aria-hidden="true">
                {p.icono}
              </span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
