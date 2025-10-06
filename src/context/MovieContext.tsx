"use client"
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react"


type MovieContextProviderProps = {
    children: ReactNode
}

type TMovieContext = {
    theme: string,
    changeTheme: () => void
}

export type ThemeTypes = 'dark' | 'light' | 'system';

const MovieContext = createContext({} as TMovieContext)


export const useMovieContext = () => {
    return useContext(MovieContext)
}


export function MovieContextProvider ({children}: MovieContextProviderProps) {
    const [theme, setTheme] = useState<ThemeTypes>('light');
    
    const changeTheme = () => {
        // const root = document.documentElement;
        // if (theme === 'system') {
            // const sytemTheme = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'
        // }
        setTheme((prevTheme) => (prevTheme === 'dark') ? 'light' : 'dark')
        document.documentElement.classList.toggle('dark')
    }
    
    return (
        <MovieContext.Provider value={{theme, changeTheme}}>
            {children}
        </MovieContext.Provider>
    )
}