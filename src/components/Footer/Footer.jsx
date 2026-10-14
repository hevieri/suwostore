import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <span className="footer__logo">
          <img src="/img/header-logo.jpg" alt="SUWO Store" />
        </span>

        <p className="footer__desc">
          Comunidad de TCG Pokémon para conectar personas, sortear, vender y cambiar
          cartas con confianza.
        </p>

        <nav className="footer__links">
          <a href="#faq">Preguntas frecuentes</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>

      <div className="container footer__base">
        <span>© {new Date().getFullYear()} SUWO Store. Todos los derechos reservados.</span>
        <span>
          Sitio no afiliado a Nintendo, The Pokémon Company ni Wizards of the Coast.
        </span>
      </div>
    </footer>
  )
}
