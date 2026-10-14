import './Sumarme.css'

export default function Sumarme() {
  return (
    <section className="sumarme seccion" id="sumarme">
      <div className="container">
        <div className="sumarme__banner">
          <div>
            <h3>¿Listo para sumarte?</h3>
            <p>
              En el grupo de WhatsApp hay ventas, sorteos y charlas. Todos los sábados
              nos juntamos.
            </p>
          </div>
          <a className="btn btn-claro" href="#contacto">
            Quiero unirme
          </a>
        </div>
      </div>
    </section>
  )
}
