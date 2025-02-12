'use client'

import { MenuIcon } from 'lucide-react'
import Button from './Button'
import Link from 'next/link'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const navLinks = [
  {
    name: 'About',
    url: '/#about',
  },
  {
    name: 'Services',
    url: '/#services',
  },
  {
    name: 'Contacts',
    url: '/#contacts',
  },
]

function Navbar() {
  return (
    <section className="py-4 lg:py-2">
      <header className="container w-full">
        <div className="grid grid-cols-2 lg:grid-cols-3  p-2 px-4 md:pr-2 items-center">
          <div>
            <h1 className="text-white uppercase font-extrabold text-2xl">
              Pixora
            </h1>
          </div>
          <div className="lg:flex justify-center items-center hidden">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <Link
                  className="text-white text-xl uppercase font-extrabold"
                  key={link.name}
                  href={link.url}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex justify-end gap-4">
            <MenuIcon className="md:hidden" />

            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="bg-lime-400 text-neutral-950 border-lime-400text-white font-medium uppercase px-4 py-2">
                <SignInButton />
              </div>
              <div className="bg-lime-400 text-neutral-950 border-lime-400text-white font-medium uppercase px-4 py-2">
                <SignUpButton />
              </div>
            </SignedOut>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Navbar
