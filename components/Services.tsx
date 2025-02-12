import React from 'react'
import Tag from './Tag'
import { ServicesNavItems } from './ServicesNavItems'

function Services() {
  return (
    <section className="text-white py-24 px-4 h-screen">
      <div className="container flex-col space-y-10">
        <div className="flex justify-center">
          <Tag>Our services</Tag>
        </div>
        <h1 className="text-6xl md:text-8xl font-medium mt-6 max-w-7xl">
          <span className="text-lime-400">Pixora</span> | Elevate Your Digital
          Presence with Unique Web Solutions
        </h1>
        <ServicesNavItems />
      </div>
    </section>
  )
}

export default Services
