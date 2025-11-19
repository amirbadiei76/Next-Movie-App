"use client"

import { Link, useRouter } from '@/src/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ProfileIcon } from '../../../shared/svg-icons/SVGIcons'
import { BiBookmark, BiEdit, BiLogOutCircle } from 'react-icons/bi'
import { PiArticle } from 'react-icons/pi'
import { CiSettings } from 'react-icons/ci'
import { Locale } from '@/src/i18n/routing'

interface IProfileItem {
    id: number,
    title: string,
    link: string,
    image: React.JSX.Element
}

export default function ProfileNavigator() {

    const t = useTranslations("Movies")
    const pathname = usePathname()
    const router = useRouter()
    const locale = useLocale();

    const [currentSelected, setCurrentSelected] = useState(0);
    const [showProfileItems, setShowProfileItems] = useState(false);

    if (typeof window !== 'undefined') {
        window.onresize = () => {
            if (showProfileItems) setShowProfileItems(false)
        }
    }

    useEffect(() => {
    }, [])
    

    const profileRoutes: IProfileItem[] = [
        {
            id: 0,
            title: t('profile.dashboard'),
            link: '/profile',
            image: <ProfileIcon height='1.5rem' className='fill-theme-black dark:fill-theme-white' />
        },
        {
            id: 1,
            title: t('profile.watch-list'),
            link: '/profile/watch-list',
            image: <BiBookmark height='1rem' className='text-2xl fill-theme-black dark:fill-theme-white' />
        },
        {
            id: 2,
            title: t('profile.articles'),
            link: '/profile/articles',
            image: <PiArticle height='1rem' className='text-2xl fill-theme-black dark:fill-theme-white' />
        },
        {
            id: 3,
            title: t('profile.settings'),
            link: '/profile/settings',
            image: <CiSettings height='1rem' className='text-2xl fill-theme-black dark:fill-theme-white' />
        },
        {
            id: 4,
            title: t('profile.edit-info'),
            link: '/profile/edit-account',
            image: <BiEdit height='1rem' className='text-2xl fill-theme-black dark:fill-theme-white' />
        },
        
    ];

    const setProfileItem = (item: IProfileItem, isList: boolean) => {
        if (isList) {
            onChange(item.link)
            setCurrentSelected(item.id)
        }
        setShowProfileItems(show => !show)
    }

    const singleProfileItem = (item: IProfileItem, isList: boolean) => {
        return (
            <div
                onClick={() => setProfileItem(item, isList)}
                key={item.id}
                className={`flex ${ item.link !== '/' ? 'hover:bg-light-between-70 hover:dark:bg-dark-50' : 'hover:bg-error-light-50 hover:dark:dark:bg-error-dark-50' } font-roboto overflow-hidden px-5 py-3 w-full justify-start gap-4 items-center rtl:font-vazir text-theme-black dark:text-theme-white`}
            >
                {item.image}
                {item.title}
            </div>
        )
    }

    const  onChange = (nextPage: string) => {
        if (nextPage !== '/') {
            router.push(nextPage)
        }
        else router.replace(nextPage)
    }


    return (
        <aside className={`flex flex-col h-fit md:min-w-67.5 gap-4 ${locale === 'fa' ? 'md:rounded-lg md:right-0 md:left-auto' : 'md:rounded-lg md:left-0 md:right-auto'} md:overflow-hidden px-0 md:px-8 py-0 md:py-8 md:bg-light-second md:dark:bg-dark-between`}>
            
            <div className='hidden md:flex flex-col gap-4'>
                {
                    profileRoutes.map((item, index) => {
                        return (
                            <Link
                                key={item.id}
                                href={item.link}
                                className={`flex font-roboto px-5 py-3 w-full rounded-lg justify-start gap-4 items-center rtl:font-vazir text-theme-black dark:text-theme-white ${ item.link !== '/' ? 'hover:bg-light-between-70 hover:dark:bg-dark-50' : 'hover:bg-error-light-50 hover:dark:dark:bg-error-dark-50' }  ${ pathname === ('/' + locale + item.link) ? 'bg-light-50 dark:bg-dark-70' : ''}`}
                            >
                                {item.image}
                                {item.title}
                            </Link>
                        )
                    })
                }
            </div>


            <div
                className='flex md:hidden rounded-lg relative bg-light-second dark:bg-dark-between hover:cursor-pointer md:rounded-none md:bg-transparent'
                >
                <div
                    // onClick={() => setShowProfileItems(show => !show)}
                    className='w-full rounded-lg overflow-hidden'
                >
                    <i className={`bi bi-chevron-down dark:text-light-between text-dark-between absolute top-1/2 -translate-y-1/2 right-4 left-auto rtl:right-auto rtl:left-4 ${showProfileItems ? 'rotate-180' : ''}`}></i>
                    {
                        singleProfileItem(profileRoutes[currentSelected], false)
                    }
                </div>

                
                <div
                    style={{visibility: showProfileItems ? 'visible' : 'hidden', opacity: showProfileItems ? 1 : 0}} 
                    className='flex flex-col w-full overflow-hidden absolute top-[120%] md:hidden bg-light-second dark:bg-dark-between rounded-lg hover:cursor-pointer md:rounded-none md:bg-transparent'
                >
                    {
                        profileRoutes
                        .filter((item, index) => index !== currentSelected)
                        .map((item, index) => singleProfileItem(item, true))
                    }
                </div>
                
            </div>

            
        </aside>
    )
}
