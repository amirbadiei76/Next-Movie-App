"use client"
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation'
import React, { useRef } from 'react'
import { FaHome, FaSearch } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { GrMenu } from 'react-icons/gr';
import { ProfileIcon } from '../svg-icons/SVGIcons';
import { Link } from '@/src/i18n/navigation';

export default function MobileBottomBar() {
    const pathname = usePathname();
    const locale = useLocale();
    const homeRef = useRef(null);
    const cateRef = useRef(null);
    const t = useTranslations("Movies")

    const isInAuth = () => {
        return (pathname === ('/' + locale + '/send-email') || pathname === ('/' + locale + '/login') || pathname === ('/' + locale + '/signup') || pathname === ('/' + locale + '/forgot-password'))
    }

    const bottomItems = [
        {
            id: 1,
            img: <GoHome
                
                className={`text-xl  ${pathname === '/' + locale ? 'text-dark-blue-between dark:text-light-blue-second' : 'text-theme-black dark:text-theme-white'}`}
            />,
            href: '/',
            title: t('nav.home')
        },
        {
            id: 2,
            img: <GrMenu
                className={`text-xl text-theme-black dark:text-theme-white`}
            />,
            href: '',
            title: t('nav.categories')
        },
        {
            id: 3,
            img: <ProfileIcon
                height='1.25rem'
                className={` ${(pathname === '/' + locale + '/profile') ? 'fill-dark-blue-between dark:fill-light-blue-second' : 'fill-theme-black dark:fill-theme-white'}`}
            />,
            href: '/profile',
            title: t('nav.profile')
        }
    ]

    return (
        <nav className={`${isInAuth() ? 'hidden' : 'fixed'}  md:hidden flex bottom-0 left-0 right-0 w-full z-20 border-t-2 border-t-light-second dark:border-t-dark-between bg-light dark:bg-dark rounded-t-xl h-18`}>
            {
                bottomItems.map((item, index) => {
                    return (
                        <Link href={item.href} key={index} className={`w-full gap-0.5 hover:cursor-pointer hover:bg-linear-to-r hover:from-transparent hover:to-transparent hover:via-light-second-70 hover:dark:via-dark-between-50 flex flex-col items-center justify-center ${(item.id !== 2 && pathname === '/' + locale + ((item.href !== '/') ? item.href : '')) ? 'cursor-pointer bg-linear-to-r from-transparent to-transparent via-light-second-70 dark:via-dark-between-50' : ''}`}>
                            {item.img}
                            <strong className={`rtl:font-vazir mt-1 font-roboto text-sm font-normal ${(item.id !== 2 && pathname === '/' + locale + ((item.href !== '/') ? item.href : '')) ? 'text-dark-blue-between dark:text-light-blue-second' : 'text-theme-black dark:text-theme-white'}`}>{item.title}</strong>
                        </Link>
                    )
                })
            }
        </nav>
    )
}
