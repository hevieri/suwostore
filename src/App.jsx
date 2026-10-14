import Navbar from './components/Navbar/Navbar.jsx'
import Carrusel from './components/Carrusel/Carrusel.jsx'
import Sumarme from './components/Sumarme/Sumarme.jsx'
import Actividades from './components/Actividades/Actividades.jsx'
import FAQ from './components/FAQ/FAQ.jsx'
import Contacto from './components/Contacto/Contacto.jsx'
import Footer from './components/Footer/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Carrusel />
        <Sumarme />
        <Actividades />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
