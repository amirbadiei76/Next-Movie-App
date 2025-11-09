"use client"
import { useLocale } from 'next-intl'
import React from 'react'

interface IGenreItemProp {
    name: string,
    index: number
}

export default function GenreItem({name, index}: IGenreItemProp) {

    const locale = useLocale()
    
    return (
      <div className={`text-theme-black inline-block dark:text-theme-white px-3 ${index == 0 ? 'md:mr-2' : 'mr-2'} mb-2 py-0.5 tracking-wide rounded-sm hover:cursor-pointer hover:dark:bg-other-blue-dark hover:bg-light-blue-between bg-light-blue-second dark:bg-other-blue ${locale === 'fa' ? 'font-vazir' : 'font-roboto'}`}>
          {name}
      </div>
    )
}
