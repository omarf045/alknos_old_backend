import NavBar from './Navbar'
import Footer from './footer'

export default function Contactanos() {
  return (
    <div className="bg-white w-full">
      <NavBar/>
      <main>
      <div className="relative mt-24 max-w-md mx-auto px-4 pb-32 sm:max-w-3xl sm:px-6 md:mt-32 lg:max-w-7xl lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-black md:text-5xl lg:text-6xl">Contáctanos</h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-gray-300">
          Hazlo si presentas un problema o necesitas contactarnos por cualquier asunto.<br/>
          Para esto, envíanos un correo electrónico a la siguiente dirección:
          <br/><span className="font-extrabold tracking-tight text-black">alknoselet@gmail.com</span>
          </p>
        </div>
    </main>
    <br/>
    <br/>
    <br/>
    <Footer/>
    </div>
  )
}
