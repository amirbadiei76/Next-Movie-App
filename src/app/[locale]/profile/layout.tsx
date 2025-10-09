import MobileBottomBar from '@/components/MobileBottomBar'
import ProfileNavigator from '@/components/ProfileNavigator'
import SiteFooter from '@/components/SiteFooter'
import React from 'react'
// import Navbar from './Navbar'

interface ILayoutProps {
    children: React.ReactNode
}

export default function Layout({children}: ILayoutProps) {
  return (
    <div >
        <div className='bg-light dark:bg-dark flex flex-col sm:flex-row transition-item-none py-8'>
            {/* <Navbar /> */}
            <ProfileNavigator />
            {children}
        </div>
        <SiteFooter />
    </div>
  )
}