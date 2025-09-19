import React, { ReactNode } from 'react'

interface IContainerProps {
    children: ReactNode
}

export default function Container({children}: IContainerProps) {
  return (
    <div className='container mx-auto'>
        {children}
    </div>
  )
}
