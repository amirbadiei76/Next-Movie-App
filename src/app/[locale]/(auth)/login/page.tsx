import LoginBox from '@/src/components/not-shared/login/LoginBox'
import Container from '@/src/components/shared/container/Container'
import { Link } from '@/src/i18n/navigation'
import { getQueryClient } from '@/src/utils/QueryClient'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function Login() {
    const t = await getTranslations("Movies")
    const queryClient = getQueryClient();


    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <main className='w-full min-h-[90.1vh] py-9 transition-item-none transition-padding bg-light dark:bg-dark'>
                <Container >
                    <div className='flex flex-col gap-8 items-center'>
                        <LoginBox />
                        <Link className='font-roboto rtl:font-vazir text-theme-black dark:text-theme-white' href={'/'}>{t('auth.back-home-page')}</Link>
                    </div>
                </Container>
            </main>
        </HydrationBoundary>
    )
}
