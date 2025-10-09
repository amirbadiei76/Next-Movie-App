"use client"
import Head from "next/head"
import { useMovieContext } from '@/context/MovieContext';
import { redirect, useParams, usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaMoon, FaRegMoon, FaRegSun, FaSun } from 'react-icons/fa6';
import LocaleSwitcher from "./LocaleSwitcher";
import { Locale, useLocale, useTranslations } from "next-intl";
import {Link} from '@/i18n/navigation'
import SearchBar from "./SearchBar";
import { useLocaleState, useSearchState, useThemeState } from "@/stores/StatesStore";
// import Link from 'next/link'
// import Container from './Container';
// import { useShoppingCartContext } from '@/context/ShoppingCartContext';
// import Cookies from 'js-cookie'; 
// import { cookies } from 'next/headers';

export default function Navbar() {

    const loginView = useRef<HTMLAnchorElement>(null)
    
    const pathname = usePathname();
    const locale = useLocale();
    const [showCategories, setShowCategories] = useState(false)

    const hiddenLocales = useLocaleState((state) => state.hiddenShowLocales)
    const hiddenSearch = useSearchState((state) => state.hiddenShowSearch)

    // const {theme, changeTheme} = useMovieContext()
    const theme = useThemeState((state) => state.theme)
    const toggleTheme = useThemeState((state) => state.toggleTheme)
    const t = useTranslations("Movies")

    const themeRef = useRef<HTMLButtonElement>(null)

    // const {cartTotalQty} = useShoppingCartContext();

    const navLinks = [
        {
            id: 1,
            href: '/',
            title: t('nav.home')
        },
        {
            id: 2,
            href: '',
            title: t('nav.categories')
        },
        {
            id: 3,
            href: '/persons',
            title: t('nav.persons')
        },
        // {
        //     id: 4,
        //     href: '/login',
        //     title: 'Login'
        // }
    ]
    
    // console.log("theme on lang Navbar: " + theme)

    // useEffect(() => {
    //     console.log(theme)
    // }, [theme])

    useEffect(() => {
        if (themeRef !== null) {
            console.log(themeRef.current?.clientHeight)
        }
    }, [themeRef])

    const isInAuth = () => {
        return (pathname === ('/' + locale + '/send-email') || pathname === ('/' + locale + '/login') || pathname === ('/' + locale + '/register') || pathname === ('/' + locale + '/forgot-password'))
    }

    const isInProfile = () => {
        return (pathname === ('/' + locale + '/profile') || pathname === ('/' + locale + '/profile/watch-list') || pathname === ('/' + locale + '/profile/articles') || pathname === ('/' + locale + '/profile/settings') || pathname === ('/' + locale + '/profile/edit-account'))
    }

    return (
        //  bg-light dark:bg-dark
        //  bg-light dark:bg-dark transition-item-none
        <header
            className={`px-5 relative sm:px-10 lg:px-15 xl:px-20 transition-padding py-3 h-18 flex justify-between items-center bg-light dark:bg-dark transition-item-none`}
        >
            <div className='flex justify-center items-center relative'>
                <div className={`bg-amber-200 ${locale === 'fa' ? 'ml-10' : 'mr-10'}`}>Logo</div>
                <div className={`${isInAuth() ? 'md:hidden' : ''} md:flex justify-center items-center gap-10 hidden`}>
                    {
                        navLinks.map((link) => {
                            return (
                                <Link
                                    key={link.id}
                                    className={`hover:text-dark-blue-second dark:hover:text-light-blue-lighter  
                                        ${(link.id !== 2 && pathname === '/' + locale + ((link.href !== '/') ? link.href : '')) ? 'text-dark-blue-second dark:text-light-blue-lighter' : 'text-theme-black dark:text-theme-white'}
                                        ${locale === 'fa' ? 'font-vazir': 'font-roboto'}` }
                                    href={link.href ? link.href : ''}
                                    onClick={() => {
                                        hiddenLocales()
                                        hiddenSearch()
                                    }}
                                    onMouseEnter={() => link.id === 2 ? setShowCategories(true) : {}}
                                    onMouseLeave={() => link.id === 2 ? setShowCategories(false) : {}}
                                >
                                    {link.title}
                                </Link>
                            )
                        })
                    }
                </div>
                <div
                    className={`absolute w-10 h-3 z-[4] top-14 left-18 bg-amber-700 transition-all ease-in duration-200`}
                    style={{visibility: showCategories ? 'visible' : 'hidden', opacity: showCategories ? 1 : 0}}
                >

                </div>

            </div>

            <div className='flex justify-center items-center h-full'>
                
                <SearchBar />
                

                <LocaleSwitcher />
                
                <Link
                    href={'/profile'}
                    ref={loginView}
                    className={`md:block hidden px-5 py-2 button-base
                    ${isInAuth() || isInProfile() ? 'md:hidden' : ''} 
                    ${locale === 'fa' ? 'font-vazir mr-3' : 'font-roboto ml-3'}`}
                >
                    {t('nav.login')}
                </Link>

                <button
                    onClick={toggleTheme}
                    ref={themeRef}
                    className={`cursor-pointer flex justify-center items-center relative rounded-full bg-light-second dark:bg-dark-second ${locale === 'fa' ? 'mr-3' : 'ml-3'}`}
                >
                    {
                        theme === 'dark' ?
                        <FaRegSun size={16} className='text-light hover:animate-pulse hover:duration-100 w-10 h-10 p-[0.7rem]' />
                        : <FaRegMoon size={16} className='text-dark hover:animate-pulse hover:duration-100 w-10 h-10 p-[0.7rem]' />
                    }
                </button>
            </div>

        </header>
    )
}
