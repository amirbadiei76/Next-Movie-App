import { Link } from '@/src/i18n/navigation'
import React from 'react'

type TMovieCard = {
    image: string,
    type: 'series' | 'movie' | 'person',
    year: string,
    title: string,
    href: string
}



export default function SearchCard({image, title, href, type, year}: TMovieCard) {
    return (
        <Link href={href} className='flex justify-center items-center hover:cursor-pointer'>
            <div>
                <img src={image} alt={title} />
            </div>
        </Link>
    )
}
