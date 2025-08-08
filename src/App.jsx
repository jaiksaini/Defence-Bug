import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Home from './Pages/Home'


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
     <Navbar />
      <Home/>
      <main className="flex-1 flex items-start justify-center py-12 px-6">
        <div className="container-max w-full mx-auto">
          <Hero />
          <Features />
        </div>
      </main>
      <Footer /> 
    </div>
  )
}