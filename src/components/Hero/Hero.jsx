import './Hero.css'

const DATOS = [
  { valor: '2.400+', texto: 'coleccionistas activos' },
  { valor: '350+', texto: 'cartas cambiadas al mes' },
  { valor: 'Semanal', texto: 'sorteos para la comunidad' },
]

export default function Hero() {
  const irA = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__contenido">
          <span className="ojo">Comunidad · Sorteos · Venta · Cambio</span>
          <h1 className="hero__titulo">
            El lugar donde los coleccionistas de <em>Pokémon TCG</em> se encuentran
          </h1>
          <p className="hero__bajada">
            SUWO Store es una comunidad para conectar personas: participá en sorteos,
            comprá y vendé cartas y armá el intercambio que tu colección necesitaba,
            siempre con gente de confianza.
          </p>

          <div className="hero__cta">
            <button className="btn btn-primario" type="button" onClick={() => irA('contacto')}>
              Unirme a la comunidad
            </button>
            <button className="btn btn-ghost" type="button" onClick={() => irA('sorteos')}>
              Ver sorteos →
            </button>
          </div>

          <ul className="hero__datos">
            {DATOS.map((d) => (
              <li key={d.texto}>
                <strong>{d.valor}</strong>
                <span>{d.texto}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__marco">
            <img src="/img/hero.jpg" alt="Sobre y cartas Pokémon sobre la mesa de SUWO Store" />
          </div>
          <div className="hero__badge">
            <span className="hero__badgeTitulo">Próximo sorteo</span>
            <span className="hero__badgeTexto">Sobre 151 · Viernes 20 hs</span>
          </div>
        </div>
      </div>
    </section>
  )
}
