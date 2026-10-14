import './Venta.css'

const VENTAJAS = [
  {
    t: 'Publicá en minutos',
    d: 'Subí fotos, condición y precio. Tus cartas quedan visibles para toda la comunidad.',
  },
  {
    t: 'Precios de mercado',
    d: 'Referencias de precios actualizadas para que pongas valor justo y vendas rápido.',
  },
  {
    t: 'Pagos coordinados',
    d: 'Transferencia, billeteras virtuales o mano a mano en encuentros de la comunidad.',
  },
  {
    t: 'Envíos a todo el país',
    d: 'Guías armadas y protectores incluidos para que la carta llegue como se fue.',
  },
]

const DESTACADAS = [
  { nombre: 'Charizard ex', set: 'Obsidian Flames · LP', precio: '$ 42.500' },
  { nombre: 'Pikachu VMAX', set: 'Vivid Voltage · NM', precio: '$ 18.900' },
  { nombre: 'Lugia V', set: 'Silver Tempest · NM', precio: '$ 12.400' },
]

export default function Venta() {
  return (
    <section className="venta seccion" id="venta">
      <div className="container">
        <div className="venta__encabezado">
          <span className="ojo">Venta de cartas</span>
          <h2 className="titulo">Vendé tu colección sin complicaciones</h2>
          <p className="bajada">
            ¿Te sobran duplicados o querés darle un destino a tu colección? Publicá en
            SUWO y llegá a coleccionistas que buscan justo eso.
          </p>
        </div>

        <div className="venta__grid">
          <div className="venta__lista">
            {VENTAJAS.map((v, i) => (
              <article className="venta__item" key={v.t}>
                <span className="venta__check" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3>{v.t}</h3>
                  <p>{v.d}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="venta__panel">
            <div className="venta__panelTop">
              <h3>Publicaciones destacadas</h3>
              <span>Ejemplo</span>
            </div>
            <ul>
              {DESTACADAS.map((c) => (
                <li key={c.nombre}>
                  <div>
                    <strong>{c.nombre}</strong>
                    <span>{c.set}</span>
                  </div>
                  <em>{c.precio}</em>
                </li>
              ))}
            </ul>
            <a className="btn btn-primario" href="#contacto">
              Publicar una carta
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
