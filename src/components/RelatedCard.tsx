"use client"
import Image from 'next/image'
import React from 'react'
import { IMDBIcon, MicIcon, SubIcon } from './SVGIcons'
import { SlCalender } from 'react-icons/sl'

export type TRelatedCard = {
    id?: string,
    year: string,
    imdb: number,
    title: string,
    hasSub: boolean,
    hasDub: boolean,
    image: string
}

export default function RelatedCard({hasDub, hasSub, image, imdb, title, year}: TRelatedCard) {
    // const imagePath = require(image)
    return (
        <article className='scroll-snap-align-start h-90 rounded-xl mx-2.5 inline-block overflow-hidden shadow-md shadow-light-second-50 dark:shadow-dark w-53 bg-light-second dark:bg-dark-between cursor-pointer'>
            <div className='relative h-[85%]'>
                <img
                    src={image}
                    className='pointer-events-none w-full h-full object-cover'
                />
                
                {
                    hasSub ?
                    <div className={`pointer-events-none absolute top-4 rounded-full border dark:border-dark-second-70 border-light-second-70 bg-light-between-50 dark:bg-dark-between-50 w-9 h-9 z-[0] flex justify-center items-center rtl:left-4 rtl:right-auto right-4 left-auto`}>
                        <MicIcon
                            darkTopColor='#d9d9d9' lightTopColor='#1a1a1a'
                            darkBottomColor='#f2f2f2' lightBottomColor='#000099'
                        />
                    </div>
                    : null
                }
                                            
                {
                    hasDub ?
                    <div className={`pointer-events-none absolute top-4 rounded-full border dark:border-dark-second-70 border-light-second-70 bg-light-between-50 dark:bg-dark-between-50 w-9 h-9 z-[0] flex justify-center items-center rtl:left-4 rtl:right-auto right-4 left-auto  ${hasSub ? 'rtl:left-15 rtl:right-auto right-15 left-auto' : ''}`}>
                        <SubIcon
                            darkColor='#f2f2f2'
                            lightColor='#000033'
                        />
                    </div>
                    : null
                }

                <div className={`pointer-events-none rounded-full h-8 gap-0.5 bg-light-between-50 dark:bg-dark-between-50 dark:border-dark-second-70 border-light-second-70 border flex items-center px-2.5 ltr absolute bottom-3 rtl:left-3 rtl:right-auto right-3 left-auto`}>
                    <IMDBIcon height='58%' />
                    <strong className={`pointer-events-none ml-1 text-sm text-theme-black dark:text-theme-white rtl:font-vazir font-roboto`}>{imdb}</strong>
                </div>

                
                <div className={`pointer-events-none rounded-full h-8 gap-0.5 bg-light-between-50 dark:bg-dark-between-50 dark:border-dark-second-70 border-light-second-70 border flex items-center px-2.5 ltr absolute bottom-3 rtl:right-3 rtl:left-auto left-3 right-auto`}>
                    <strong className={`pointer-events-none ml-1 text-sm text-theme-black dark:text-theme-white rtl:font-vazir font-roboto`}>{year}</strong>
                </div>
            </div>
            <div className='h-[15%] flex justify-center items-center'>
                <strong className='pointer-events-none text-theme-black text-center text-sm dark:text-theme-white font-roboto tracking-wider'>{title}</strong>
            </div>
        </article>
    )
}
