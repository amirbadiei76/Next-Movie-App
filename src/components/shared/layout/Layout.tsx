import React from 'react'
import Navbar from '../navbar/Navbar'
import MobileBottomBar from '../mobile-bottom-bar/MobileBottomBar'

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
