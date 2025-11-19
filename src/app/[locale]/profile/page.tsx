import DashboardItem, { IDashboardItem } from '@/src/components/not-shared/profile/dashboard/dashboard-item/DashboardItem'
import MainInfoContainer from '@/src/components/not-shared/profile/dashboard/main-info-container/MainInfoContainer'
import React from 'react'
import { FaClock } from 'react-icons/fa'

export default function Profile() {

    const dashboardOverviewItems: IDashboardItem[] = [
        {
            id: 1,
            title: 'فیلم‌های تماشا شده',
            icon: <FaClock />,
            max: 800,
            current: 20
        }
    ]

    return (
        <main className='md:rtl:pr-8 md:rtl:pl-0 md:pl-8 md:pr-0 mt-4 md:mt-0'>
            <MainInfoContainer />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    dashboardOverviewItems.map((item) => <DashboardItem key={item.id} item={item} />)
                }
            </div>
        </main>
    )
}
