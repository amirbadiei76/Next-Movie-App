"use client"
import { link } from 'fs'
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import DownloadDropdownItem from '../download-item/DownloadDropdownItem'
import { useLocale, useTranslations } from 'next-intl'

export interface ILink {
    ep?: string,
    url: string,
    size?: string,
}

export interface TLinks {
    q_1080?: ILink[],
    q_720?: ILink[],
    q_480?: ILink[],
    q_360?: ILink[]
}


export interface IDropdownProps2 {
    movieType: 'sub' | 'dub' | 'origin' | '',
    links: TLinks,
    title?: string,
}


export default function DownloadFilesDropDown({movieType, links, title}: IDropdownProps2) {

    const [dropdownOpened, setDropdownOpened] = useState(false)
    const t = useTranslations("Movies")
    const locale = useLocale()

    return (
        <div
        // ${dropdownOpened ? 'h-auto' : 'h-16'} 
            style={{transition: '0.5s ease all'}}
            className={`ease overflow-hidden rounded-xl bg-light-blue-between dark:bg-light-blue flex-col justify-start ${movieType === '' ? 'hidden' : 'flex'}`}
        >
            <div
                onClick={() => setDropdownOpened((opened) => !opened)}
                className='flex justify-between items-center w-full hover:cursor-pointer px-8 py-3'
            >
                <div className='flex justify-center md:gap-18 md:flex-row flex-col gap-1.5'>
                    <strong className='rtl:font-vazir font-semibold font-roboto text-theme-black dark:text-theme-white'>{title}{(movieType === 'dub' || movieType === 'sub') ? (locale === 'en' ? ' with' : ' با') : ''} {movieType === 'dub' ? t('movie.persian-dub') : ''}{movieType === 'sub' ? t('movie.sticky-sub') : ''}{movieType === 'origin' ? t('movie.original-ver') : ''}</strong>
                </div>
                <div className={`rounded-full flex justify-center items-center p-2.5 bg-light-blue-second dark:bg-light-blue-between`}>
                    <i
                        className={`bi bi-chevron-down font-extrabold text-dark dark:text-light flex justify-center items-center text-lg ${dropdownOpened ? 'rotate-180' : 'rotate-0'}`}
                        style={{transition: '0.5s ease all'}}
                    ></i>
                </div>
            </div>
            <div 
                className={`overflow-hidden px-8 ${dropdownOpened ? 'max-h-600 mb-3 p-2 pb-0' : 'max-h-0 pb-0 p-0'} `}
                style={{transition: '0.5s ease-in-out all'}}
            >
                {
                    links.q_1080 ? 
                    <DownloadDropdownItem
                        quality='1080'
                        links={links.q_1080}
                    />
                    : null
                }
                {
                    links.q_720 ? 
                    <DownloadDropdownItem
                        quality='720'
                        links={links.q_720}
                    />
                    : null
                }
                {
                    links.q_480 ? 
                    <DownloadDropdownItem
                        quality='480'
                        links={links.q_480}
                    />
                    : null
                }
                {
                    links.q_360 ? 
                    <DownloadDropdownItem
                        quality='360'
                        links={links.q_360}
                    />
                    : null
                }
            </div>
        </div>
    )
}
