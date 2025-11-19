import React from 'react'

export interface IDashboardItem {
    id: number;
    title: string;
    icon: React.ReactNode;
    max: number;
    current: number
}

export default function DashboardItem({ item }: { item: IDashboardItem }) {
    return (
        <div>
            <p>{item.title}</p>
            <p>{item.max}</p>
            {item.icon}
        </div>
    )
}
