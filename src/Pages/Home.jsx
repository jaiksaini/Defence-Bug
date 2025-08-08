import React from 'react'
import sample from '../assets/sample-hero.png' // Export from screenshot/Figma


export default function Home() {
  return (
    <section className="bg-[#0b0b14] text-white py-16 px-6">
      {/* Secure Code Review */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-orange-500 text-xl font-bold tracking-wide border-b-2 border-orange-500 inline-block pb-1">
          SECURE CODE REVIEW
        </h2>
        <p className="mt-6 text-gray-300 text-sm leading-relaxed">
          Secure Code Review is a process of identifying and patching coding errors before they turn into a high-level security risk. Reviewing security codes helps an organization in minimizing the overall maintenance and development cost by enhancing the effectiveness of the code lines and eliminating any kind of early-stage risks.
        </p>
        <div className="mt-10 flex justify-center">
          <img src={sample} alt="Secure Code Review Process" className="max-w-md w-full" />
        </div>
      </div>

      {/* Securing Technology */}
      <div className="text-center max-w-6xl mx-auto mt-16">
        <h2 className="text-red-500 text-xl font-bold tracking-wide border-b-2 border-red-500 inline-block pb-1">
          Securing Technology
        </h2>
        <p className="mt-6 text-gray-300 text-sm leading-relaxed max-w-4xl mx-auto">
          Under our VAPT service, we test the complete IT infrastructure (Mobile/Web App, Servers, Networks, Desktops/Laptops, APIs, CRM/ERP) of an organization. We recommend solutions against all the vulnerabilities and do re-testing after the organization's engineering team patches all those vulnerabilities.
        </p>

        {/* Wave icons row */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {[
            { img: sample, label: 'Red Teaming' },
            { img: sample, label: 'Application Security' },
            { img: sample, label: 'Cloud Security' },
            { img: sample, label: 'Network Security' },
            { img: sample, label: 'IoT Security' },
            { img: sample, label: 'Medical Device Security' },
            { img: sample, label: 'Secure Code Review' },
            { img: sample, label: 'Root Cause Analysis' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img src={item.img} alt={item.label} className="w-10 h-10 object-contain" />
              </div>
              <span className="mt-3 text-sm text-gray-300 max-w-[100px]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}