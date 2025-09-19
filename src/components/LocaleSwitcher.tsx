"use client"
import { useLocale, useTranslations } from 'next-intl'
import React, { useEffect, useRef, useState } from 'react'
import {Locale, routing} from '@/i18n/routing'
import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import ReactCountryFlag from 'react-country-flag';
import { FaAngleDown } from 'react-icons/fa';
import { useMovieContext } from '@/context/MovieContext';
import { useLocaleState, useSearchState, useThemeState } from '@/stores/StatesStore';

export default function LocaleSwitcher() {

    const singleLocaleRef = useRef<HTMLDivElement>(null)
    const localeViewRef = useRef<HTMLDivElement>(null)
    
    const locale: string = useLocale()
    const pathname = usePathname();
    const router = useRouter()
    const params = useParams();
    const t = useTranslations("Movies")
    

    const showLocales = useLocaleState((state) => state.showLocales)
    const toggleLocales = useLocaleState((state) => state.toggleShowLocales)
    const hiddenLocales = useLocaleState((state) => state.hiddenShowLocales)
    const hiddenSearch = useSearchState((state) => state.hiddenShowSearch)

    const themeState = useThemeState((state) => state.theme);
    const setDarkTheme = useThemeState((state) => state.setDarkTheme);

    function onChange(nextLocale: string) {
        router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
            { pathname, params },
            { locale: nextLocale as Locale }
        );
            // window.location.replace(router.)
            // router.replace(
            //     // { pathname, params },
            //     // { locale: nextLocale as Locale }
            //     params.locale + '',
                
            // );
            // console.log()
            // const newParams = pathname.replace(params.locale, nextLocale)
            // console.log(newParams)
            // window.location.href = newParams;
    }

    useEffect(() => {
        if (localStorage.getItem('theme') != null) {
            const theme = localStorage.getItem('theme')
            if (theme === 'dark') setDarkTheme()
        }
        else {
            localStorage.setItem('theme', 'light')        
        }
    }, [])

    useEffect(() => {
        if (themeState === 'dark' && !document.documentElement.classList.contains('dark')) setDarkTheme()
    }, [locale])

    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
    }, [])

    const handleClickOutside = (e: MouseEvent) => {
        if (localeViewRef && e.target instanceof Node && localeViewRef.current && !localeViewRef.current.contains(e.target)) {
            hiddenLocales()
        }
    }

    const singleLocaleLayout = (curr: string, key: string = 'fa', isAvailable: boolean = false): React.JSX.Element => {
        return (
            <div
                ref={singleLocaleRef}
                key={key}
                className={`w-30 flex p-2 justify-between items-center cursor-pointer pr-8 bg-light-second dark:bg-dark-second 
                    text-theme-black dark:text-theme-white ltr
                    ${curr === 'fa' ? 'font-vazir' : 'font-roboto'}
                    `}
                onClick={() => {
                    if (isAvailable) {
                        onChange(curr)
                        hiddenLocales()
                    }
                }}
            >
                <ReactCountryFlag
                    className={`text-xl mr-2 pointer-events-none`}
                    svg
                    countryCode={curr === 'fa' ? 'IR' : 'GB'}
                />
                {t(`nav.${curr}`)}
            </div>
        )
    }

    const availableLocales = () => {
        return routing.locales.filter(current => current !== locale).map((curr) => {
            return (
                singleLocaleLayout(curr, curr, true)
            )
        })   
    }

    return (
        <div className='relative w-max z-[2]' ref={localeViewRef}>

            <div
                onClick={() => {
                    toggleLocales()
                    hiddenSearch()
                }}
                className='flex relative gap-2 z-[2] rounded-md overflow-hidden cursor-pointer'
            >
                    
                <i className={`bi bi-chevron-down dark:text-light-between text-dark-between absolute top-1/4 right-1.5 ${showLocales ? 'rotate-180' : ''}`}></i>
                {singleLocaleLayout(locale)}
                
            </div>
            
            <div
                className={`top-12 rounded-md overflow-hidden left-auto right-auto absolute w-full flex flex-col`}
                style={{visibility: showLocales ? 'visible' : 'hidden', opacity: showLocales ? 1 : 0}}    
                >
                {availableLocales()}
            </div>
        </div>
            
    )
}
