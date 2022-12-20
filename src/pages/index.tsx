import React, { useState } from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const IndexPage: React.FC<PageProps> = () => {
  const [menu] = useState([
    {
      label: 'Pokemons',
      image:
        'https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-HD-Quality.png',
      path: '/pokemons/1',
    },
  ])

  return (
    <div className='relative'>
      {/* Navbar */}
      <Navbar type='home' />
      {/* Main Div */}
      <div className='w-full h-screen flex justify-center items-center bg-gray-800 text-white'>
        {/* Menu Grid */}
        <div className='grid  gap-32'>
          {menu.map((item: any) => (
            <Card
              key={item.label}
              path={item.path}
              className='bg-gray-700 flex p-8 justify-between items-center rounded-xl space-x-8 shadow-xl'
            >
              <div className='text-white font-bold text-xl'>{item.label}</div>
              <img
                className='w-28 h-28'
                src={item.image}
                alt={`menu_section_${item.label}`}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Pokedex App</title>
