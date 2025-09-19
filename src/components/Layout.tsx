import React from 'react'
import Navbar from './Navbar'
import MobileBottomBar from './MobileBottomBar'

interface ILayoutProps {
    children: React.ReactNode
}

export default function Layout({children}: ILayoutProps) {

  
    return (
      <div>
          <Navbar />
          {children}
          <MobileBottomBar />
      </div>
    )
}
