"use client";
import {getQueryClient} from '@/utils/QueryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react'

export default function QueryProvider({children}: {children: ReactNode}) {
    const queryClient = getQueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
