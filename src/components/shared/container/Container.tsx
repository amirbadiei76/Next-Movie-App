import React, { ReactNode } from 'react'

interface IContainerProps {
    children: ReactNode
}

export default function Container({children}: IContainerProps) {
  return (
    <div className='container mx-auto px-5 sm:px-10 lg:px-15 xl:px-20'>
        {children}
    </div>
  )
}
