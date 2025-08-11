import React from 'react'
import logo from '../assets/hero-logo.png'
export default function Footer(){
  return (
    <section className="bg-[#2B2E35] text-white flex flex-col items-center justify-center py-10 px-4 text-center">
      <h2 className="text-sm md:text-base font-medium mb-6">Thank You For Your Valuable Time!</h2>
      <img
        src={logo}
        alt="Defence.Bug Logo"
        className="w-40 h-auto md:w-56"
      />
      
      <p className="mt-4 text-sm md:text-base text-gray-300 max-w-lg">
        A promise to secure our customers today & tomorrow...
      </p>
    </section>
  )
}