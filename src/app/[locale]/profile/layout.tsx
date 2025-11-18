import MobileBottomBar from '@/src/components/shared/mobile-bottom-bar/MobileBottomBar'
import ProfileNavigator from '@/src/components/not-shared/profile/navigator/ProfileNavigator'
import SiteFooter from '@/src/components/shared/footer/SiteFooter'
import React from 'react'
import Container from '@/src/components/shared/container/Container'
// import Navbar from './Navbar'

interface ILayoutProps {
    children: React.ReactNode
}

export default function Layout({children}: ILayoutProps) {
  return (
    
//     <div className='bg-light dark:bg-dark flex flex-col sm:flex-row transition-item-none py-8'>
//     <ProfileNavigator />
//     {children}
// </div>
    <div className='bg-light dark:bg-dark transition-item-none transition-padding transition-margin transition-color'>
        <Container >
            <div className='flex flex-col w-full py-8 relative'>
                <ProfileNavigator />
                {children}
            </div>
        </Container>
        <SiteFooter />
    </div>
  )
}