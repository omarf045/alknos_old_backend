import * as React from 'react';
import PlanCard from './PlanCard';

export default function Precios() {
    return (
    <div className="flex flex-col items-center bg-black p-4">
      <div className="mb-2 mt-12 text-center">
        <h1 className='mb-4 text-7xl font-black text-white'>Precios</h1>
        <p className='text-lg text-white'>
          Escoge el plan que mejor se acomode a tus necesidades y comienza a disfrutar
        </p>
      </div>
      <div className='flex flex-col gap-8 p-10 xl:flex-row'>
      <PlanCard 
       color="#209416"
       name="Alknos" 
       description="Empieza con el plan basico"
       features={["Resolución de formulas 20xmes", "Utilizar fotos para la resolución 20xmes", "Acceso a reuniones privadas", "Registro de salas", "Consultar ejercicios para practicar"]}
       btnText="Plan gratis"
       />
      <PlanCard 
      color="#209416"
      name="Alkenos" 
      description="Plan para un mejor desempeño"
      price='49 MXN'
      features={["Resolución de formulas 50xmes", "Utilizar fotos para la resolución 50xmes", "Acceso a reuniones privadas", "Registro de salas", "Consultar ejercicios para practicar"]}
      btnText="Plan intermedio"
      />
      <PlanCard 
      color="#209416"
      name="Alkinos" 
      description="Plan para profesionales"
      price='79 MXN'
      features={["Resolución de formulas ilimitadas", "Utilizar fotos para la resolución ilimitadas", "Acceso a reuniones privadas", "Registro de salas", "Consultar ejercicios para practicar"]}
      btnText="Plan avamzado"
      />
      </div>
    </div>
    )
}
    