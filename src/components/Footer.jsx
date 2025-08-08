import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container-max mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center text-white font-bold">R</div>
          <div className="text-sm">© {new Date().getFullYear()} BrandName. All rights reserved.</div>
        </div>
        <div className="text-sm text-slate-600">Made with ❤️ — replicate your Figma assets into /src/assets</div>
      </div>
    </footer>
  )
}
