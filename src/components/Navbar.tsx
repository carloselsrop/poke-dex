import React from 'react'
import { Link } from 'gatsby'

export interface INavbarProps {
  type: 'home' | 'pokedex' | 'pokemon'
  pokemonName?: string
  className?: string
}

const Navbar = ({ className, type, pokemonName }: INavbarProps) => {
  return (
    <div
      className={`${className} flex items-center justify-between w-full border-b-2 border-gray-900 bg-gray-900 rounded-b-xl shadow-xl py-4 px-4 absolute z-50`}
    >
      <div className='flex justify-start'>{type === 'home' && <div></div>}</div>
      {/* Logo */}
      <Link
        to='/'
        className='flex justify-center cursor-pointer font-black text-xl text-white'
      >
        {type === 'home' && (
          <img
            className='w-32 select-none'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'
          />
        )}
        {type === 'pokedex' && 'Pokedex'}
        {type === 'pokemon' && pokemonName !== '' ? `${pokemonName}` : ''}
      </Link>
      {/* Icon */}
      <div className='flex justify-end'>
        {type === 'home' && <div></div>} {type === 'pokemon' && <div></div>}
      </div>
    </div>
  )
}

export default Navbar
