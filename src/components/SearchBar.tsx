"use client"
import { useLocaleState, useSearchState } from '@/stores/StatesStore'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

export default function SearchBar() {

    // const [showSearch, setShowSearch] = useState(false)
    const pathname = usePathname()
    const showSearchInput = useSearchState((state) => state.showSearch)
    const toggleShowSearch = useSearchState((state) => state.toggleShowSearch)
    const hiddenShowSearch = useSearchState((state) => state.hiddenShowSearch)
    const hiddenLocales = useLocaleState((state) => state.hiddenShowLocales)
    const searchBarRef = useRef<HTMLDivElement>(null)

    const t = useTranslations("Movies")
    const locale = useLocale()
    const [inputValue, setInputValue] = useState('')

    const isInAuth = () => {
        return (pathname === ('/' + locale + '/send-email') || pathname === ('/' + locale + '/profile') || pathname === ('/' + locale + '/login') || pathname === ('/' + locale + '/signup') || pathname === ('/' + locale + '/forgot-password'))
    }

    const isInProfile = () => {
        return (pathname === ('/' + locale + '/profile') || pathname === ('/' + locale + '/profile/watch-list') || pathname === ('/' + locale + '/profile/articles') || pathname === ('/' + locale + '/profile/settings') || pathname === ('/' + locale + '/profile/edit-account'))
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
    }, [])

    const handleClickOutside = (e: MouseEvent) => {
        if (searchBarRef && e.target instanceof Node && searchBarRef.current && !searchBarRef.current.contains(e.target)) {
            hiddenShowSearch()
        }
    }


    return (
        <div
            className={`flex relativ justify-center items-center z-[2] ${isInAuth() || isInProfile() ? 'hidden' : ''} `}
            ref={searchBarRef}
        >
            <div
                onClick={() => {
                    toggleShowSearch()
                    hiddenLocales()
                }}
                className={`flex justify-center items-center relative cursor-pointer rounded-full bg-light-second dark:bg-dark-second rtl:ml-3 mr-3`}
            >
                <FaSearch
                    className='text-theme-black dark:text-theme-white hover:animate-pulse hover:duration-100 w-10 h-10 p-[0.7rem]'
                    size={17}
                />
            </div>
            
            <div
                style={{opacity: showSearchInput ? 1 : 0, visibility: showSearchInput ? 'visible' : 'hidden'}}
                // 
                className={`absolute top-16.5 rounded-md p-1.5 bg-light-second dark:bg-dark-second z-[4] ${locale === 'fa' ? 'left-[8%] sm:left-[14rem] md:left-[19rem] lg:left-[20.2rem] xl:left-[21.55rem]' : ''}`}
            >
                <div className='relative justify-start items-start'>
                    <input
                        className={`py-2 px-4 outline-0 border-2 border-dark-second dark:border-light-second w-70 rounded-xl text-theme-black dark:text-theme-white ${locale === 'fa' ? 'font-vazir pl-7.5' : 'font-roboto pr-7.5'}`}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className={`flex justify-between items-center absolute top-3 w-full px-4 pointer-events-none`}>
                        <p
                            style={{opacity: inputValue.length > 0 ? 0 : 0.6, visibility: inputValue.length > 0 ? 'hidden' : 'visible'}}
                            className={`text-sm text-theme-black dark:text-theme-white block pointer-events-none rtl:font-vazir font-roboto`}
                        >{t('nav.searchInputHolder')}</p>
                        <FaX
                            size={10}
                            onClick={() => setInputValue('')}
                            style={{opacity: inputValue.length > 0 ? 1 : 0, visibility: inputValue.length > 0 ? 'visible' : 'hidden'}}
                            className={`pointer-events-auto cursor-pointer text-theme-black dark:text-theme-white rtl:left-2 right-2`}
                        />
                    </div>
                </div>

                {
                    // inputValue.length > 0 ?
                    // <strong className='rtl:font-vazir py-1 font-normal font-roboto text-sm text-center block hover:cursor-pointer text-theme-black dark:text-theme-white'>{t('movie.view-all')}</strong>
                    // : null
                }
                
                {
                    inputValue.length > 0 ?
                    <strong className='rtl:font-vazir py-1 font-normal font-roboto text-sm text-center block hover:cursor-pointer text-theme-black dark:text-theme-white'>{t('movie.view-all')}</strong>
                    : null
                }
            </div>
        </div>
    )
}
