import { Canvas } from '@react-three/fiber'
import {  Float,  Stars, Html, ScrollControls, Scroll } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import React, { Suspense } from "react";

import Atom from './Atom'

function Items() {
  return (
    <Scroll>    
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Atom position={[5, 0, 0]} r={1} g={10} b={1} rBall = {10} gBall = {7} bBall = {1}/>
      <Html  style={{ right: '15vh' }}>
        <h1 className='text-9xl text-white font-serif'>Alknos</h1>
        <h3 className='text-4xl text-white font-serif'>BY ELET</h3>
      </Html>
    </Float>

    <Float speed={4} rotationIntensity={0.2} floatIntensity={2}>
      <Atom position={[-7, -13, 0]} r={1} g={10} b={10} rBall = {1} gBall = {4} bBall = {4}/>    
      <Html style={{ top: '215vh' }}>
          <div className='w-96'>
            <h1  className='text-6xl text-white font-serif'>¿Cansado de no entender Química?</h1>
            <br/>
            <h3 className='text-2xl text-white font-serif'>Tranquilo, te traemos la solución</h3>
          </div>
      </Html>                                                             
    </Float>

    <Float speed={4} rotationIntensity={0.01} floatIntensity={2}>
      <Atom position={[7, -25, 0]} r={1} g={1} b={10} rBall = {4} gBall = {4} bBall = {10} /> 
      <Html style={{ top: '350vh', right: '10vh' }}>
        <div className='w-96'>
        <h1 className='text-6xl text-white'>Alknos te ofrece herramientas con:</h1>
        <br/>
          <ul>
            <li className='text-4xl text-white'>Visión Artificial</li>
            <li className='text-4xl text-white'>Realidad Aumentada</li>
            <li className='text-4xl text-white'>Inteligencia Artificial</li>
          </ul>
          </div>
      </Html>                                                                
    </Float>

    <Float speed={4} rotationIntensity={0.02} floatIntensity={2}>
      <Atom position={[-7, -37, 0]} r={3} g={1} b={8} rBall = {3} gBall = {1} bBall = {10}  />
      <Html style={{ top: '500vh', left: '10vh' }}>
      <div className='w-96'>
        <h1 className='text-6xl text-white'>Alknos cubrirá:</h1>
        <br/>
          <ul>
            <li className='text-4xl text-white'>Balanceo de ecuaciones Orgánicas e Inorgánicas</li>
            <li className='text-4xl text-white'>Información de Compuestos</li>
            <li className='text-4xl text-white'>Nomenclatura de Compuestos de Química Orgánica e Inorgánica</li>
          </ul>
          </div>
      </Html>                                                                 
    </Float>

    <Float speed={10} rotationIntensity={0.008} floatIntensity={1}>
      <Atom position={[7, -50, 0]} r={15} g={2} b={12} rBall = {9} gBall = {2} bBall = {16}  />
      <Html style={{ top: '700vh', right: '10vh' }}>
        <div className='w-96'>
          <a href='/registro'><h1 className='text-5xl text-white font-serif underline'> ¡Empieza Ya!</h1></a>
          <br/>
          <a href='/planes'><h3 className='text-3xl text-white font-serif underline'>O Consulta nuestros precios</h3></a>
        </div>
      </Html>                                               
    </Float>
    </Scroll> 
  )
}

function Landing() {
    return (
      <>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
        <color attach="background" args={['black']} />
        <ScrollControls pages={6} distance={1} >
          <Items/>
        </ScrollControls>  
  
        <Stars saturation={0} count={700} speed={0.5} />
          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
          </EffectComposer>
          
        </Suspense>
      </Canvas>
    </>
    )
  }

export default Landing