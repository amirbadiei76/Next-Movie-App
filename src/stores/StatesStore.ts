import { ThemeTypes } from '@/context/MovieContext'
import {create} from 'zustand'

type searchState = {
    showSearch: boolean,
    toggleShowSearch: () => void,
    hiddenShowSearch: () => void,
}

type localeState = {
    showLocales: boolean,
    toggleShowLocales: () => void,
    hiddenShowLocales: () => void,
}

type themeState = {
    theme: ThemeTypes,
    toggleTheme: () => void,
    setDarkTheme: () => void
}


export const useSearchState = create<searchState>((set) => ({
    showSearch: false,
    toggleShowSearch: () => {
        set((state) => ({showSearch: !state.showSearch}))
    },
    hiddenShowSearch: () => {
        set({showSearch: false})
    }
}))


export const useLocaleState = create<localeState>((set) => ({
    showLocales: false,
    toggleShowLocales: () => {
        set((state) => ({showLocales: !state.showLocales}))
    },
    hiddenShowLocales: () => {
        set({showLocales: false})
    }
}))


export const useThemeState = create<themeState>((set) => ({
    theme: 'light',
    toggleTheme: () => {
        set((state) => ({theme: state.theme === 'light' ? 'dark' : 'light'}))
        document.documentElement.classList.toggle('dark')
        localStorage.setItem('theme', useThemeState.getState().theme === 'dark' ? 'dark' : 'light')
    },
    setDarkTheme: () => {
        set({theme: 'dark'})
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }
}))