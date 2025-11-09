import ForgotPasswordBox from '@/src/components/not-shared/forgot-password/ForgotPasswordBox'
import React from 'react'

export default function ForgotPassword() {
    return (
        <main className='w-full min-h-[90.1vh] flex flex-col gap-8 items-center py-9 transition-item-none transition-padding bg-light dark:bg-dark'>
            <ForgotPasswordBox />
        </main>
    )
}
