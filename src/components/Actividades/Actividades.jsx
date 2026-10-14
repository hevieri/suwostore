import './Actividades.css'

const ITEMS = ['Encuentros', 'Sorteos', 'Venta', 'Intercambios']

export default function Actividades() {
  return (
    <section className="actividades seccion" id="actividades">
      <div className="container">
        <span className="ojo">Actividades</span>

        <ul className="actividades__lista">
          {ITEMS.map((item, i) => (
            <li className="actividades__item" key={item}>
              <span className="actividades__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="actividades__texto">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
