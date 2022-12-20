import React from 'react'

export interface TypePokemonProps {
  type: string
}

const TypePokemon: React.FC<TypePokemonProps> = ({ type }) => {
  return (
    <div>
      {type === 'Grass' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810__480.png'
          alt=''
        />
      )}
      {type === 'Fire' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414807__340.png'
          alt=''
        />
      )}
      {type === 'Water' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/21/13/06/pokemon-3418257__340.png'
          alt=''
        />
      )}
      {type === 'Electric' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/18/15/43/pokemon-3411389__340.png'
          alt=''
        />
      )}
      {type === 'Psychic' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/20/21/01/pokemon-3416767__340.png'
          alt=''
        />
      )}
      {type === 'Fighting' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414806__340.png'
          alt=''
        />
      )}
      {type === 'Dark' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/18/15/43/pokemon-3411387__340.png'
          alt=''
        />
      )}
      {type === 'Dragon' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/18/15/43/pokemon-3411388__340.png'
          alt=''
        />
      )}
      {type === 'Fairy' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/18/15/43/pokemon-3411390__340.png'
          alt=''
        />
      )}
      {type === 'Flying' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414808__340.png'
          alt=''
        />
      )}
      {type === 'Ghost' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414809__340.png'
          alt=''
        />
      )}
      {type === 'Ground' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416762__340.png'
          alt=''
        />
      )}
      {type === 'Ice' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416763__340.png'
          alt=''
        />
      )}
      {type === 'Normal' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416764__340.png'
          alt=''
        />
      )}
      {type === 'Poison' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416765__340.png'
          alt=''
        />
      )}
      {type === 'Rock' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/21/13/06/pokemon-3418255__340.png'
          alt=''
        />
      )}
      {type === 'Steel' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/21/13/06/pokemon-3418256__340.png'
          alt=''
        />
      )}
      {type === 'Metal' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/21/13/06/pokemon-3418256__340.png'
          alt=''
        />
      )}
      {type === 'Bug' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/18/15/43/pokemon-3411386__340.png'
          alt=''
        />
      )}
      {type === 'Colorless' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416764__340.png'
          alt=''
        />
      )}
      {type === 'Lightning' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/18/15/43/pokemon-3411389__340.png'
          alt=''
        />
      )}
      {type === 'Darkness' && (
        <img
          className='w-6 h-6'
          src='https://cdn.pixabay.com/photo/2018/05/18/15/43/pokemon-3411387__340.png'
          alt=''
        />
      )}
    </div>
  )
}

export default TypePokemon
