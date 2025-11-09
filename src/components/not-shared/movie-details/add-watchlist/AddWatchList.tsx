"use client"

import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi'
import { FaHeart } from 'react-icons/fa'

export default function AddWatchList({ movie }: { movie: any }) {

    const t = useTranslations("Movies")

    const [movieSaved, setMovieSaved] = useState(false)

    function toggleSave () {
        setMovieSaved((save) => !save)
    }

    return (
        <div onClick={toggleSave} className={`rounded-full h-10 gap-2.5 bg-light-blue-between hover:dark:bg-other-blue-dark hover:bg-light-blue-between hover:cursor-pointer dark:bg-other-blue flex items-center px-5`}>
            {
                movieSaved ?
                <BiSolidBookmark className='text-2xl pointer-events-none text-theme-black dark:text-theme-white' /> :
                <BiBookmark className='text-2xl text-theme-black pointer-events-none dark:text-theme-white' />
            }
            <strong className={`ml-1 text-lg pointer-events-none text-theme-black dark:text-theme-white font-normal rtl:font-vazir font-roboto`}>{t('movie.add-watchlist')}</strong>
        </div>
    )
}
