import LoginBox from '@/components/LoginBox'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function Login() {
    const t = await getTranslations("Movies")
    return (
        <main className='w-full min-h-[90.1vh] flex flex-col gap-8 items-center py-9 transition-item-none transition-padding bg-light dark:bg-dark'>
            <LoginBox />
            <Link className='font-roboto rtl:font-vazir text-theme-black dark:text-theme-white' href={'/'}>{t('auth.back-home-page')}</Link>
        </main>   
    )
}
