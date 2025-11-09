"use client"
import React, { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { ILink } from '../download-dropdown/DownloadFilesDropDown'

type TDropdownItem = {
    quality: '1080' | '720' | '480' | '360',
    links: ILink[],
}

export default function DownloadDropdownItem({quality, links}: TDropdownItem) {
    const [itemOpened, setItemOpened] = useState(false)
    const t = useTranslations("Movies")
    const locale = useLocale()

    return (
        <div
            // ${itemOpened ? 'max-h-300 md:max-h-250' : 'md:max-h-16 max-h-32'} 
            className={`flex mb-4 flex-col gap-4 overflow-hidden bg-light-blue-second dark:bg-light-blue-between px-5 pt-2.5 ${itemOpened ? 'pb-2.5' : 'pb-0'} rounded-md`}
            style={{transition: '0.6s ease all'}}
        >
            <div className='flex flex-col gap-2 md:flex-row justify-between md:items-center'>
                <div className='flex md:gap-10 md:flex-row flex-col gap-1'>
                    <strong className='rtl:font-vazir font-roboto font-normal text-dark dark:text-light min-w-25'>{t('movie.quality')}: <strong className='text-dark-blue-between dark:text-dark-blue-second font-normal'>{quality}<strong className='font-normal font-roboto'>p</strong></strong></strong>
                    <strong className='rtl:font-vazir font-roboto font-normal text-dark dark:text-light'>{t('movie.episode-counts')}: <strong className='text-theme-black dark:text-theme-white font-normal'>{links.length}</strong></strong>
                </div>
                <button
                    className='px-4 py-2 w-full md:w-auto border-b-3 cursor-pointer rtl:font-vazir font-roboto hover:border-light-blue hover:dark:border-other-blue border-light-blue-lighter dark:border-other-blue-light bg-light-blue-lighter dark:bg-other-blue-light rounded-md text-theme-black dark:text-theme-white'
                    onClick={() => setItemOpened((opened) => !opened)}
                >{t('movie.view-links')}</button>
            </div>
            <div
                className={`${itemOpened ? 'max-h-300' : 'max-h-0'} grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2`}
                // style={{opacity: itemOpened ? 1 : 0, visibility: itemOpened ? 'visible' : 'hidden', transition: '0.6s ease all'}}
            >
                {
                    links.map((link, index) => {
                        return (
                            <div
                                key={index}
                                // className='w-auto flex items-center justify-center align-middle min-h-12 rounded-md bg-light-blue-between dark:bg-light-blue hover:cursor-pointer
                                // border-b-2 border-light-blue-between dark:border-light-blue hover:border-dark-blue-second hover:dark:border-dark-blue'
                                className='w-auto flex items-center justify-center align-middle min-h-12 button-2-base'
                            >
                                {/* ????????? */}
                                <strong className='font-roboto rtl:font-vazir m-auto text-theme-black dark:text-theme-white font-normal'>{t('movie.episode')} {link.ep}</strong>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
