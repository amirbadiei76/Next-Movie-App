"use client"
import { useLocale } from 'next-intl';
import { getLocale } from 'next-intl/server'
import React, { useEffect, useRef, useState } from 'react'
import { FaHeart } from 'react-icons/fa'

// replace any with type
export default function ShowMovieRate({ movie }: { movie: any }) {

    const locale = useLocale();
    const likedNumber = useRef<number>(movie.ratings.site.like)
    const dislikedNumber = useRef<number>(movie.ratings.site.dislike)
    const likesMean = useRef<number>((likedNumber.current + dislikedNumber.current) / 2)

    // useEffect(() => {
    //     setLikedNumber(movie.ratings.site.like)
    //     setdisLikedNumber(movie.ratings.site.dislike)
    //     console.log(movie.ratings.site.dislike, movie.ratings.site.like)
    //     // setLikesMean((movie.ratings.site.dislike + movie.ratings.site.like) / 2)
    // }, [movie.ratings])

    

    console.log(movie.ratings.site.dislike, movie.ratings.site.like)

    useEffect(() => {
    }, [])


    return (
        <div className={`rounded-full h-10 gap-2.5 bg-light-blue-between dark:bg-other-blue-dark flex items-center px-5 ltr ${locale === 'fa' ? 'ml-6' : 'mr-6'}`}>
            <FaHeart className='text-2xl text-theme-black dark:text-theme-white' />
            <strong className={`ml-1 text-lg text-theme-black dark:text-theme-white rtl:font-vazir font-roboto`}>{Math.round((likedNumber.current + dislikedNumber.current) / 2)}%</strong>
        </div>
    )
}
