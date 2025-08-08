import React from 'react'

function Card({title, desc}){
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-3 text-slate-600 text-sm">{desc}</p>
    </div>
  )
}

export default function Features(){
  return (
    <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Feature A" desc="Short description of feature A to match the Figma." />
      <Card title="Feature B" desc="Short description of feature B to match the Figma." />
      <Card title="Feature C" desc="Short description of feature C to match the Figma." />
    </section>
  )
}