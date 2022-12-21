import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Navbar from '../../components/Navbar'
import TypePokemon from '../../components/TypePokemon'
import Card from '../../components/Card'
import Pagination from '../../components/Pagination'

const Pokemons: React.FC<PageProps<{ pokeApi: any }>> = ({
  data,
  pageContext,
}: any) => {
  console.log(pageContext)

  return (
    <div className='bg-gray-800 relative'>
      <Navbar type='pokedex' />
      {/* Main Div */}
      <div className='pt-40 px-16 pb-0.5'>
        {/* List */}
        <div className='grid grid-cols-4 gap-16'>
          {data?.pokeApi?.cards?.map((poke: any) => (
            <Card
              key={poke.id}
              path={`/pokemon/${poke.id}`}
              className='w-80 shadow-xl'
            >
              <div
                key={poke.id}
                className='bg-gray-900 h-40 w-80 rounded-lg p-4 relative '
              >
                {/* Pokedex ID */}
                <div className='text-lg text-white font-semibold  pb-2'>
                  #{poke.dexId === null ? '000' : `${poke.dexId}`}
                </div>
                {/* Name & Types */}
                <div className='px-4'>
                  <div className='font-semibold text-lg text-white pb-2'>
                    {poke.name}
                  </div>
                  <div className='space-x-2 flex'>
                    {poke.types?.map((type: any) => (
                      <TypePokemon key={type} type={type} />
                    ))}
                  </div>
                </div>
                {/* Pokemon Image */}
                <div className='absolute top-4 -right-6 w-32'>
                  <img
                    src='https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-HD-Quality.png'
                    alt=''
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {/* Pagination */}
      <Pagination pageContext={pageContext} className='pt-36 pb-4' />
    </div>
  )
}

export const pageQuery = graphql`
  query ($count: Float!, $page: Float!) {
    pokeApi {
      cards(pagination: { page: $page, count: $count }) {
        id
        dexId
        name
        types
        image
      }
    }
  }
`

export default Pokemons
