"use client"

import { Link } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ProfileIcon } from './SVGIcons'
import { BiBookmark, BiEdit, BiLogOutCircle } from 'react-icons/bi'
import { PiArticle } from 'react-icons/pi'
import { CiSettings } from 'react-icons/ci'
import { FiLogOut } from 'react-icons/fi'

export default function ProfileNavigator() {

    const t = useTranslations("Movies")
    const pathname = usePathname()
    const locale = useLocale()
    
    const profileRoutes = [
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
        {
            id: 5,
            title: t('profile.log-out'),
            link: '/',
            image: <BiLogOutCircle height='1rem' className='text-2xl fill-theme-black dark:fill-theme-white' />
        }
    ]
    return (
            <div className={`flex flex-col gap-4 ${locale === 'fa' ? 'rounded-tl-2xl rounded-bl-2xl' : 'rounded-tr-2xl rounded-br-2xl'} overflow-hidden px-8 py-8 bg-light-second dark:bg-dark-between`}>
                <div className='flex items-center gap-6'>
                    <div className='rounded-full flex justify-center items-end overflow-hidden border border-dark dark:border-light w-15 h-15'>
                        {
                            <ProfileIcon height='70%' className='h-full fill-dark dark:fill-light' />
                        }
                    </div>
                    <p className='font-bold text-theme-black dark:text-theme-white textsm'>user_name</p>
                </div>
                {
                    profileRoutes.map((item, index) => {
                        return (
                            <Link
                                key={item.id}
                                href={item.link}
                                className={`flex font-roboto px-4 py-2.5 rounded-lg justify-start gap-4 items-center rtl:font-vazir text-theme-black dark:text-theme-white ${ item.link !== '/' ? 'hover:bg-light-between-70 hover:dark:bg-dark-second-50' : 'hover:bg-error-light-50 hover:dark:dark:bg-error-dark-50' }  ${ pathname === ('/' + locale + item.link) ? 'bg-light-50 dark:bg-dark-50' : ''}`}
                            >
                                {item.image}
                                {item.title}
                            </Link>
                        )
                    })
                }
            </div>
    )
}
