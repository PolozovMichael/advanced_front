import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <section className="text-white py-24 h-screen">
      <div className="container">
        <h1 className="text-6xl md:text-8xl font-medium mt-6 max-w-7xl">
        Unique Designs. Because Bland Templates Are for Amateurs.
        </h1>
        <form className="flex gap-2 p-2 mt-8 max-w-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-2 border-white bg-transparent px-4 md:flex-1"
          />
          <Button type="submit" variant="primary" className="whitespace-nowrap font-bold">
            FIX MY WEBSITE
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Hero
