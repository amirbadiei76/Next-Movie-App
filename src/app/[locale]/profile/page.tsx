import { ProfileIcon } from '@/src/components/shared/svg-icons/SVGIcons'
import React from 'react'

export default function Profile() {
    return (
        <main>
            Profile
            <div className='flex justify-between sm:justify-baseline items-center gap-6'>
                <div className='rounded-full flex justify-center items-end overflow-hidden border border-dark dark:border-light w-15 h-15'>
                    {
                        <ProfileIcon height='70%' className='h-full fill-dark dark:fill-light' />
                    }
                </div>
                <h2 className='font-bold text-theme-black dark:text-theme-white textsm'>user_name</h2>
            </div>
        </main>
    )
}
