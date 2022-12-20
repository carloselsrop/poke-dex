import { Link } from 'gatsby'
import React from 'react'

export interface FooterProps {
  pokemonName?: string
}

const Footer: React.FC<FooterProps> = ({ pokemonName }) => {
  return (
    <div className='w-full bg-gray-900 h-48 flex justify-center'>
      <div className='w-6/12 flex justify-between items-center'>
        {/* Home Button */}
        <Link
          to='/'
          className='flex justify-center cursor-pointer font-black text-xl text-white'
        >
          <img
            className='w-32 select-none'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'
          />
        </Link>
        {/* Social Media */}
        <div className='flex space-x-4'>
          <a
            href={`https://www.pokemon.com/es/pokedex/${pokemonName}`}
            target='_blank'
          >
            <img
              className='w-6 h-6'
              src='https://cdn-icons-png.flaticon.com/512/1169/1169608.png'
              alt=''
            />
          </a>
          <a href={`https://www.instagram.com/pokemon`} target='_blank'>
            <img
              className='w-6 h-6'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'
              alt=''
            />
          </a>
          <a href={`https://www.tiktok.com/tag/pokemon`} target='_blank'>
            <img
              className='w-6 h-6'
              src='https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png'
              alt=''
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
