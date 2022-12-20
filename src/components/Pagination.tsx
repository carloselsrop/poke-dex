import { Link } from 'gatsby'
import React from 'react'

export interface PageContextProps {
  currentPage: number
  limit: number
  numPages: number
  skip: number
}

export interface PaginationProps {
  pageContext: PageContextProps
  className?: string
}

const Pagination: React.FC<PaginationProps> = ({ pageContext, className }) => {
  return (
    <div className={`flex justify-center items-center space-x-2 ${className}`}>
      {pageContext.currentPage === 1 ? null : (
        <Link
          to={`/pokemons/${pageContext.currentPage - 1}`}
          className='bg-gray-800 text-white p-2 rounded-md'
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
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        </Link>
      )}
      <div className='px-3 py-1 font-bold rounded-full border-white border-2 text-white select-none bg-gray-800'>
        {pageContext.currentPage}
      </div>
      {pageContext.currentPage === pageContext.numPages ? null : (
        <Link
          to={`/pokemons/${pageContext.currentPage + 1}`}
          className='bg-gray-800 text-white p-2 rounded-md'
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
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </Link>
      )}
    </div>
  )
}

export default Pagination
