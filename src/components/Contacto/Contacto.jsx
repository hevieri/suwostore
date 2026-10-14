import './Contacto.css'

export default function Contacto() {
  return (
    <section className="contacto seccion" id="contacto">
      <div className="container contacto__grid">
        <div className="contacto__contenido">
          <span className="ojo">Sumate</span>
          <h2 className="titulo">Entrá a la comunidad SUWO</h2>
          <p className="bajada">
            Dejanos tus datos y te mandamos la invitación al grupo, el calendario de
            sorteos y las publicaciones de la semana.
          </p>

          <ul className="contacto__beneficios">
            <li>Acceso a los sorteos semanales</li>
            <li>Alertas de cartas que estás buscando</li>
            <li>Encuentos y torneos de la comunidad</li>
          </ul>

          <div className="contacto__redes">
            <a href="#contacto">Instagram</a>
            <a href="#contacto">WhatsApp</a>
            <a href="#contacto">Discord</a>
          </div>
        </div>
      </div>
    </section>
  )
}
