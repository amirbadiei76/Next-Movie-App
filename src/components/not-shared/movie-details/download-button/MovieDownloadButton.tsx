import { useTranslations } from 'next-intl'
import React from 'react'

interface IDownloadButton {
    quality: string,
    url: string,
    size?: string
}


export default function MovieDownloadButton({quality, url, size}: IDownloadButton) {
    const t = useTranslations("Movies")
    return (
        <a
            href={url}
            className='w-full flex justify-center items-center py-3 button-3-base'
        >
            <strong className='font-normal text-theme-black dark:text-theme-white font-roboto rtl:font-vazir'>{t('movie.quality')} {quality}<strong className='font-normal font-roboto'>p</strong></strong>
        </a>
    )
}
