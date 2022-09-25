import React from 'react'

export default function Card({id, name, img, tipo}) {
  return (
    <div className='shadow-2xl border-8 border-slate-600 rounded-2xl overflow-hidden relative w-72'>
      
      <span className='font-semibold absolute top-2 right-2 bg-slate-600 text-slate-50 rounded-full h-10 w-10 flex justify-center items-center'>{id}</span>
      
      <img className='bg-red-200 w-full h-72' src={img} alt="" />

      <div className='bg-slate-200 p-4 flex gap-4 items-center'>
        <p className='text-slate-800 text-2xl font-bold'>{name}</p>
        <p className='bg-slate-600 text-slate-50 pt-1 pb-2 px-3 rounded-full font-semibold'>{tipo}</p>
      </div>

    </div>
  )
}
