import { ProfileIcon } from '@/src/components/shared/svg-icons/SVGIcons'
import { Link } from '@/src/i18n/navigation';
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function MainInfoContainer() {
    const t = await getTranslations("Movies");

    return (
        <div className='flex flex-col sm:mt-0 md:flex-row w-full justify-between items-center gap-6 p-8 bg-light-second dark:bg-dark-between h-fit rounded-lg'>
            <div className='flex items-center gap-4 flex-col md:flex-row'>
                <div className='md:flex-0.3 rounded-full flex justify-center items-end overflow-hidden border border-dark dark:border-light w-25 h-25'>
                    <ProfileIcon height='70%' className='h-full fill-dark dark:fill-light' />
                </div>
                <div className='md:flex-1 flex flex-col gap-2'>
                    <h2 className='font-bold text-theme-black dark:text-theme-white text-sm'>user_name</h2>
                    <strong className='text-dark dark:text-light font-roboto rtl:font-vazir'>@ali_b23</strong>
                    <p className='text-theme-black dark:text-theme-white font-roboto rtl:font-vazir'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>

                </div>
            </div>

            <Link className='button-base font-roboto rtl:font-vazir px-4 py-1.5 text-nowrap' href={'/profile/edit-account'}>{t('profile.edit-info')}</Link>
        </div>
    )
}
