import MobileBottomBar from '@/src/components/shared/mobile-bottom-bar/MobileBottomBar'
import ProfileNavigator from '@/src/components/not-shared/profile/navigator/ProfileNavigator'
import SiteFooter from '@/src/components/shared/footer/SiteFooter'
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