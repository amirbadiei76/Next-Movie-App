import RegisterBox from '@/src/components/not-shared/register/RegisterBox'
import { Link } from '@/src/i18n/navigation'
import { getQueryClient } from '@/src/utils/QueryClient'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function Signup() {
    const t = await getTranslations("Movies")

    const queryClient = getQueryClient();

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <main className='w-full min-h-[90.1vh] flex flex-col gap-8 items-center py-9 transition-item-none transition-padding bg-light dark:bg-dark'>
                <RegisterBox />
                <Link className='font-roboto rtl:font-vazir text-theme-black dark:text-theme-white' href={'/'}>{t('auth.back-home-page')}</Link>
            </main>
        </HydrationBoundary>
    )
}
