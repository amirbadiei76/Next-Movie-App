import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function SiteFooter() {
    const t = await getTranslations("Movies")
    return (
        <footer className='bg-light lg:px-25 md:px-10 sm:px-10 px-5 md:pb-6 pb-22 dark:bg-dark transition-item-none transition-color transition-padding'>
            <hr
                className='border-dark dark:border-light'
            />
            <strong className='block tracking-wider font-normal mt-4 mx-8 font-roboto rtl:font-vazir text-theme-black dark:text-theme-white'>{t('movie.designed-by')} ????</strong>
        </footer>
    )
}
