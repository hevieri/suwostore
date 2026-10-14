import { useState } from 'react'
import './FAQ.css'

const PREGUNTAS = [
  {
    q: '¿Quiénes somos?',
    a: 'Somos un grupo destinado a lo social: nos juntamos a charlar y pasar en compañía compartiendo el hobby que nos gusta.',
  },
  {
    q: '¿Cuáles son las reglas del grupo?',
    a: 'No se habla de política, sexo ni religión.',
  },
  {
    q: '¿Cuándo son los encuentros?',
    a: 'Nos juntamos todos los sábados en cercanías de lo de Charly, Caballito, CABA.',
  },
  {
    q: '¿Participar de los sorteos tiene algún costo?',
    a: 'No. Los sorteos son gratuitos y abiertos a todos los miembros de la comunidad. Algunos tienen requisitos simples, como compartir el sorteo o reaccionar de diferentes maneras.',
  },
  {
    q: '¿Puedo vender y cambiar al mismo tiempo?',
    a: 'En el grupo podés vender (mientras que no sean sellados) cualquier cosa de Pokémon, podés cambiar cartas y jugar TCG.',
  },
  {
    q: '¿Cómo vendo mis cartas?',
    a: 'Podés vender pocos productos desde el grupo de WhatsApp poniendo el precio en la foto. Si son muchos artículos, podés pedir hacer un claim (+100 cartas aprox.).',
  },
  {
    q: '¿Cómo se coordinan los envíos?',
    a: 'Los envíos van a cargo del comprador. Para no pagar un envío por una sola carta, podés acumular varias y recibirlas todas juntas.',
  },
  {
    q: '¿Hay algo para los miembros nuevos?',
    a: 'Sí: hay una carta gratis para los miembros nuevos, que podés elegir personalmente entre las disponibles en el barrio de Caballito, a cuadras de lo de Charly. Si sos de otra provincia, podés pagar el envío.',
  },
]

export default function FAQ() {
  const [abierta, setAbierta] = useState(0)

  return (
    <section className="faq seccion" id="faq">
      <div className="container">
        <span className="ojo">Preguntas frecuentes</span>

        <div className="faq__lista">
          {PREGUNTAS.map((p, i) => {
            const activa = abierta === i
            return (
              <div className={`faq__item ${activa ? 'is-open' : ''}`} key={p.q}>
                <button
                  type="button"
                  className="faq__pregunta"
                  aria-expanded={activa}
                  onClick={() => setAbierta(activa ? -1 : i)}
                >
                  <span>{p.q}</span>
                  <i aria-hidden="true">{activa ? '−' : '+'}</i>
                </button>
                <div className="faq__respuesta" hidden={!activa}>
                  <p>{p.a}</p>
                  <img
                    className="faq__personajeDentro"
                    src="/img/Sudowoodo pensativo minimalista.png"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
