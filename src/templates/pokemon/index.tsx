import React, { useState, useEffect } from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import Navbar from '../../components/Navbar'
import TypePokemon from '../../components/TypePokemon'
import Footer from '../../components/Footer'

const Pokemon: React.FC<PageProps<{ pokeApi: any }>> = ({ data }: any) => {
  const [pokemonImage, setPokemonImage] = useState('')

  useEffect(() => {
    const randomImage = Math.floor(Math.random() * 1000)
    setPokemonImage(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomImage}.png`
    )
  }, [])

  return (
    <div className='relative bg-gray-800 h-screen flex flex-col justify-between'>
      {/* Navbar */}
      <Navbar type='pokemon' pokemonName={data.pokeApi.card.name} />
      {/* Main Div */}
      <div className='pt-36 flex flex-col items-center justify-center w-full space-y-10'>
        <div className='w-6/12 flex justify-center items-start space-x-16 h-96'>
          {/* Pokemon Image */}
          <div
            style={{
              backgroundImage: `url("https://pbs.twimg.com/ext_tw_video_thumb/1506969310627045380/pu/img/XtjT3xcErgrqHuJN.jpg:large")`,
            }}
            className=' w-6/12 rounded-lg h-full bg-cover bg-center shadow-xl p-4 flex flex-col justify-between border-b-4 border-gray-900'
          >
            <div className='flex justify-between items-center'>
              <Link
                className='text-white font-bold select-none bg-gray-500 bg-opacity-80 p-0.5 rounded-full flex justify-center items-center border-2 border-white'
                to='/pokemons/1'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'
                  />
                </svg>
              </Link>
              <div className='space-x-2 flex'>
                {data.pokeApi.card.types?.map((type: any) => (
                  <TypePokemon type={type ? type : 'Normal'} key={type} />
                ))}
              </div>
              <div className='text-white font-bold select-none bg-gray-500 bg-opacity-80 py-1 w-16 rounded-lg text-center border-2 border-white'>
                #
                {data.pokeApi.card.dexId === null
                  ? '0'
                  : data.pokeApi.card.dexId}
              </div>
            </div>
            <div className='flex justify-center'>
              <img className='w-60 h-60' src={pokemonImage} alt='' />
            </div>
            <div></div>
          </div>
          {/* Pokemon Info & Description */}
          <div className=' w-6/12 flex flex-col justify-between items-center h-full'>
            {/* Pokemon Description */}
            <div className='w-full h-40 rounded-lg shadow-xl p-4 border-b-4 bg-gray-900 border-gray-900'>
              <div className='text-center font-bold text-white pb-2'>
                Description
              </div>
              <div className='text-sm font-semibold text-white'>
                {data.pokeApi.card.description === null
                  ? 'A Pokémon, is any of the 905 documented species of the eponymous collectible organisms that have evolved and inhabited the fictional Pokémon World with an innate connection to element-based supernatural powers.'
                  : data.pokeApi.card.description}
              </div>
            </div>
            {/* Pokemon Info */}
            <div className='w-full h-40 rounded-lg shadow-xl p-4 border-b-4 bg-gray-900 border-gray-900'>
              <div className='text-center font-bold text-white pb-6'>Info</div>
              <div className='text-sm font-semibold text-white flex justify-around w-full items-center'>
                {/* HP */}
                <div className='flex flex-col items-center space-y-2'>
                  <div className='text-xl font-bold'>
                    {data.pokeApi.card.hp ? data.pokeApi.card.hp : 'No HP'}
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6 text-red-500'
                  >
                    <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                  </svg>
                </div>
                {/* Category */}
                <div className='flex flex-col items-center space-y-2'>
                  <div className='text-lg font-bold'>
                    {data.pokeApi.card.category
                      ? data.pokeApi.card.category
                      : 'No Category'}
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6 text-blue-500'
                  >
                    <path
                      fillRule='evenodd'
                      d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer
        pokemonName={
          data.pokeApi.card.name ? data.pokeApi.card.name : 'pikachu'
        }
      />
    </div>
  )
}

export const pageQuery = graphql`
  query PokemonPageQuery($pokemonId: ID!) {
    pokeApi {
      card(id: $pokemonId) {
        id
        name
        dexId
        types
        hp
        description
      }
    }
  }
`

export default Pokemon
