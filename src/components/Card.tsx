import React from 'react'
import { Link } from 'gatsby'

export interface ICardProps {
  className?: string
  children: React.ReactNode
  path?: string
}

const Card = ({ className, children, path }: ICardProps) => {
  return (
    <Link to={`${path}`} className={`${className}`}>
      {children}
    </Link>
  )
}

export default Card
