import Card from './Card'
import { useState, useEffect } from 'react'
import getAll from '../services/getAll';
import { Link, useLocation } from "wouter";
import logo from '../../public/logo.png';

export default function PokemonList({params}) {

  const [pokemones, setPokemones] = useState([])
  const [path, setLocation ] = useLocation()

  useEffect(()=>{

    setPokemones([])
   
    getAll(params.pag)
    .then(res=>{

      res.map(async el => {
    
        const res = await fetch(el.url)
        const json = await res.json()
    
        const {id, name, sprites, types} = json
        const img = sprites.other.dream_world.front_default
        const { type } = types[0]
        const tipo = type.name
    
        const obj = {id, name, img, tipo}

        setPokemones(prev =>[...prev, obj])
      })
    })

  },[params.pag])


  const next = () => {
    if (Number(params.pag) >= 30) return
    setLocation(`/pokemon/${Number(params.pag) + 1}`)
  }
  const previous = () => {
    if (Number(params.pag) === 0) return
    setLocation(`/pokemon/${Number(params.pag) - 1}`)
  }

  return (

    <div className='bg-[#0E1F40]'>
      <div className='flex justify-center p-4 bg-slate-900'>
        <Link to='/'>
          <img className='w-48 cursor-pointer' src={logo} alt="" />
        </Link>
      </div>


      <ul className='flex flex-wrap gap-8 justify-center p-8'>
        {
          pokemones.map(({id, name, img, tipo})=>(
            <Card key={id} id={id} name={name} img={img} tipo={tipo} />
          ))
        }
      </ul>

      <div className='flex justify-around gap-2 pb-8'>
        <button onClick={previous} className='bg-sky-600 text-slate-50 py-2 hover:bg-sky-500 px-4 rounded-full'>Anterior</button>
        <button onClick={next} className='bg-sky-600 text-slate-50 py-2 px-4 hover:bg-sky-500 rounded-full'>Siguiente</button>
      </div>
      <footer className='bg-slate-900 p-8'>
      </footer>
    </div>
  )
}
