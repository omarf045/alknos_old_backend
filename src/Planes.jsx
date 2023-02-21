/* eslint-disable jsx-a11y/no-redundant-roles */

import {

  CheckIcon,

} from '@heroicons/react/outline'

import NavBar from './Navbar'
import Footer from './footer'

const pricing = {
  tiers: [
    {
      title: 'Alknos',
      price: 'Gratuito',
      frequency: '',
      description: 'Empieza con el plan basico.',
      features: ["Resolución de formulas 20 x mes", "Utilizar fotos para la resolución 20 x mes", "Acceso a reuniones privadas", "Registro de salas", "Consultar ejercicios para practicar"],
      cta: 'Plan Mensual',
      mostPopular: false,
    },
    {
      title: 'Alkenos',
      price: '49 MXN',
      frequency: '/mes',
      description: 'Plan para un mejor desempeño',
      features: ["Resolución de formulas 50xmes", "Utilizar fotos para la resolución 50xmes", "Acceso a reuniones privadas", "Registro de salas", "Consultar ejercicios para practicar"],
      cta: 'Plan Mensual',
      mostPopular: true,
    },
    {
      title: 'Alkinos',
      price: '79 MXN',
      frequency: '/mes',
      description: 'Plan para profesionales.',
      features:["Resolución de formulas ilimitadas", "Utilizar fotos para la resolución ilimitadas", "Acceso a reuniones privadas", "Registro de salas", "Consultar ejercicios para practicar"],
      cta: 'Plan Mensual',
      mostPopular: false,
    },
  ],
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white">
      {/* Header and Page Header */}
      <div className="relative">

<NavBar/>
        {/* Page Header */}
        <div className="relative max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8">
          <div className="relative">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
              Planes para cada necesidad
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-500">
            Contamos con 3 distintos planes de pago para que puedas elegir el que más se adecua a lo que necesitas.
            </p>
          </div>
        </div>
      </div>

      <main>
        {/* Pricing Section */}
        <section className="relative" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="sr-only">
            Pricing
          </h2>

          {/* Tiers */}
          <div className="max-w-2xl mx-auto px-4 space-y-12 sm:px-6 lg:max-w-7xl lg:space-y-0 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.title}
                className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
                  {tier.mostPopular ? (
                    <p className="absolute top-0 py-1.5 px-4 bg-green-600 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                      Más popular
                    </p>
                  ) : null}
                  <p className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">${tier.price}</span>
                    <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
                  </p>
                  <p className="mt-6 text-gray-500">{tier.description}</p>

                  {/* Feature list */}
                  <ul role="list" className="mt-6 space-y-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex">
                        <CheckIcon className="flex-shrink-0 w-6 h-6 text-green-500" aria-hidden="true" />
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="."
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-green-50 text-green-700 hover:bg-green-100',
                    'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                  )}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
    
  )
}
