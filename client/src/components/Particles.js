import React from 'react'
import Particles from "react-particles-js";

const ParticlesJS = () => {
    return (
        <Particles 
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#5ea2dd"
            }
          }
        }
      }}
      />
    )
}

export default ParticlesJS
