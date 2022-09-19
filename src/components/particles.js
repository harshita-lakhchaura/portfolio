import React from 'react'
import Particles from 'react-tsparticles'
import particleConfig from '../config/particle_config'


function Particle() {
  return (
    <Particles param={particleConfig}></Particles>
  )
}

export default Particle