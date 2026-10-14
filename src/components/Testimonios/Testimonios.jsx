import './Testimonios.css'

const VOCES = [
  {
    nombre: 'Lucía M.',
    rol: 'Colectora desde 2019',
    texto:
      'Conseguí la última carta que me faltaba para cerrar el set por un cambio acá. La persona con la que traté me mandó fotos de todo antes de enviar.',
    destello: '★★★★★',
  },
  {
    nombre: 'Facundo R.',
    rol: 'Vendedor frecuente',
    texto:
      'Publico mis duplicados todas las semanas y siempre hay alguien interesado. La comunidad es activa y muy respetuosa.',
    destello: '★★★★★',
  },
  {
    nombre: 'Sofi A.',
    rol: 'Jugadora de torneos',
    texto:
      'Los sorteos son lo más divertido: entré por un regalo y me quedé por la gente. Ahora armo torneos con amigos de la comunidad.',
    destello: '★★★★★',
  },
]

export default function Testimonios() {
  return (
    <section className="testimonios seccion">
      <div className="container">
        <div className="testimonios__encabezado">
          <span className="ojo">Voces de la comunidad</span>
          <h2 className="titulo">Gente que ya forma parte de SUWO</h2>
        </div>

        <div className="testimonios__grid rejilla">
          {VOCES.map((v) => (
            <figure className="tarjeta testimonios__card" key={v.nombre}>
              <span className="testimonios__estrellas" aria-hidden="true">
                {v.destello}
              </span>
              <blockquote>“{v.texto}”</blockquote>
              <figcaption>
                <span className="testimonios__avatar" aria-hidden="true">
                  {v.nombre.charAt(0)}
                </span>
                <div>
                  <strong>{v.nombre}</strong>
                  <em>{v.rol}</em>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
