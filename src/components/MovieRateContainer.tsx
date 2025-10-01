"use client"

import React, { useState } from 'react'
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from 'react-icons/bi'

// replace any with type...
export default function MovieRateContainer({ movie }: { movie: any }) {

    const [liked, setLiked] = useState(movie.liked)
    const [disliked, setdisLiked] = useState(movie.liked)
    const [likedNumber, setLikedNumber] = useState(movie.ratings.site.like)
    const [dislikedNumber, setdisLikedNumber] = useState(movie.ratings.site.dislike)

    function toggleLike () {
        movie.liked = !movie.liked
        setLiked((liked: boolean) => !liked)

        setLikedNumber((likes: number) => !liked ? likes + 1 : likes - 1)
        // setLikedNumber((likes: number) => likes + 1)
        // movie.ratings.site.like = likedNumber;
        
        // if (!liked) {
        //     setLikedNumber((likes: number) => likes - 1)
        //     movie.ratings.site.like = likedNumber;
        // }

        if (disliked) {
            setdisLiked(false)
            setdisLikedNumber((dislikes: number) => dislikes - 1)
            movie.ratings.site.dislike--;
        }
        console.log(likedNumber)
        
        // if (disliked) {
        //     setdisLikedNumber((dislikes: number) => dislikes - 1)
        //     movie.ratings.site.dislike = dislikedNumber;
        //     console.log(dislikedNumber)
        // }


        console.log('liked: ' + liked + ', dis: ' + disliked)
    }

    function toggleDislike () {
        movie.disliked = !movie.disliked
        setdisLiked((disliked: boolean) => !disliked)

        setdisLikedNumber((dislikes: number) => !disliked ? dislikes + 1 : dislikes - 1)

        if (liked) {
            setLiked(false)
            setLikedNumber((likes: number) => likes - 1)
            movie.ratings.site.like--;
        }
        
        // setdisLikedNumber((dislikes: number) => dislikes + 1)
        // movie.ratings.site.dislike = dislikedNumber;
        // console.log(dislikedNumber)
        
        
        // setLiked(false)
        // if (liked) {
        //     setLikedNumber((likes: number) => likes - 1)
        //     movie.ratings.site.like = likedNumber;
        // }
        console.log(likedNumber)


        console.log('liked: ' + liked + ', dis: ' + disliked)
    }

    return (
        <div className={`rounded-full overflow-hidden w-42 h-10 mt-3 lg:mt-0 bg-light-blue-between dark:bg-other-blue flex items-center justify-between`}>
            <div onClick={toggleLike} className='flex w-1/2 h-full hover:dark:bg-other-blue-dark hover:bg-light-blue-between bg-light-blue-second dark:bg-other-blue px-2.5 hover:cursor-pointer gap-1.5 justify-center items-center rtl:pl-2.5 rtl:pr-5 pl-5 pr-2.5'>
                {   liked ?
                    <BiSolidLike className='text-2xl text-theme-black dark:text-theme-white pointer-events-none' /> :
                    <BiLike className='text-2xl text-theme-black dark:text-theme-white pointer-events-none' />
                }
                <label className='text-lg text-theme-black dark:text-theme-white rtl:font-vazir font-roboto pointer-events-none'>{likedNumber}</label>
            </div>
            <div className='bg-light-blue-between dark:bg-other-blue-dark w-[0.0625rem] h-full' ></div>
            <div onClick={toggleDislike} className='flex w-1/2 h-full hover:dark:bg-other-blue-dark hover:bg-light-blue-between bg-light-blue-second dark:bg-other-blue px-2.5 hover:cursor-pointer gap-1.5 justify-center items-center rtl:pl-5 rtl:pr-2.5 pl-2.5 pr-5'>
                {   disliked ?
                    <BiSolidDislike className='text-2xl text-theme-black dark:text-theme-white pointer-events-none' /> :
                    <BiDislike className='text-2xl text-theme-black dark:text-theme-white pointer-events-none' />
                }
                <label className='text-lg text-theme-black dark:text-theme-white rtl:font-vazir font-roboto pointer-events-none'>{dislikedNumber}</label>
            </div>
        </div>
    )
}
