import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Servicios from './components/Servicios.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import QuienesSomos from './components/QuienesSomos.jsx'
import Resenias from './components/Resenias.jsx'
import Portfolio from './components/Portfolio.jsx'
import './App.css'

function App() {
  return (
    <>
      <section id='home'>
        <Navbar />
        <Hero />
      </section>
      <main>
        <section id='servicios'>
          <Servicios />
        </section>

        <section id='resenias'>
          <Resenias />
        </section>
        
        <section id='quienes-somos'>
          <QuienesSomos />
        </section>

        <section id='contacto'>
          <Contacto />
        </section>

        <section id='portfolio'>
          <Portfolio />
        </section>

      </main>
      <Footer />
    </>
  )
}

export default App
