import Container from '@/src/components/shared/container/Container'
import { Link } from '@/src/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function SendEmail() {
    const t = await getTranslations("Movies")
    return (
        <main className='w-full min-h-[90.1vh] py-9 transition-item-none transition-padding bg-light dark:bg-dark'>
            <Container >
                <div className='flex flex-col gap-8 items-center'>
                    <div 
                        className='flex overflow-hidden gap-3 max-w-[32.5rem]
                        mx-8 md:mx-0 px-8 md:px-12 py-12 min-w-[100%] md:min-w-130  
                        justify-center items-center flex-col bg-light-second dark:bg-dark-between rounded-2xl'>
                        <p className='font-roboto rtl:font-vazir text-theme-black dark:text-theme-white text-justify'>{t('auth.email-sended')}</p>
                        <p className='font-roboto rtl:font-vazir text-theme-black dark:text-theme-white text-justify'>{t('auth.email-not-send')}</p>
                        <button className='button-base px-3.5 py-1.5'>{t('auth.resend-email')}</button>
                    </div>
                    <Link className='font-roboto rtl:font-vazir text-theme-black dark:text-theme-white' href={'/'}>{t('auth.back-home-page')}</Link>
                </div>
            </Container>
        </main>
    )
}
