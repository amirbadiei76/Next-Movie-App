import ForgotPasswordBox from '@/src/components/not-shared/forgot-password/ForgotPasswordBox'
import Container from '@/src/components/shared/container/Container'
import React from 'react'

export default function ForgotPassword() {
    return (
        <main className='w-full min-h-[90.1vh] py-9 transition-item-none transition-padding bg-light dark:bg-dark'>
            <Container >
                <div className='flex flex-col gap-8 items-center'>
                    <ForgotPasswordBox />
                </div>
            </Container>
        </main>
    )
}
