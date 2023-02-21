import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Planes', href: '/planes' },
    { name: 'Acerca De', href: '/acercade' },
    { name: 'Contáctanos', href: '/contactanos' },
  ]


export default function NavBar(){
    return(
        <Popover as="header" className="relative">
        <div className="pt-6 bg-transparent">
          <nav
            className="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
              <h1
                    className="inline-flex items-center px-1 pt-1 font-medium text-black border-b-2 border-transparent text-l"
                  >
                    Alknos
                  </h1>
                <div className="flex items-center -mr-2 md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-black">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-base font-medium text-black hover:text-gray-300">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="/login" className="text-base font-medium text-black hover:text-gray-300">
                Inicia Sesión
              </a>
              <a
                href="/registro"
                className="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
              >
                ¡Regístrate!
              </a>
            </div>
          </nav>
        </div>
    
        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top transform md:hidden">
            <div className="overflow-hidden bg-black rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-black rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="px-5 mt-6">
                  <a
                    href="/registro"
                    className="block w-full px-4 py-3 font-medium text-center text-white bg-green-600 rounded-md shadow hover:bg-green-700"
                  >
                    ¡Regístrate!
                  </a>
                </div>
                <div className="px-5 mt-6">
                  <p className="text-base font-medium text-center text-gray-500">
                    Existing customer?{' '}
                    <a href="login" className="text-gray-900 hover:underline">
                      Inicia Sesión
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    )

}