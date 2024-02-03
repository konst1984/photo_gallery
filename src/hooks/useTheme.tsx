import { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'

export const useTheme = () => {
    const [value, setItem] = useLocalStorage('theme')
    const [theme, setTheme] = useState(value)

    const onLightTheme = () => {
        setTheme('light')
    }

    const onDarkTheme = () => {
        setTheme('dark')
    }

    const onSystemTheme = () => {
        const isDarkSytemTheme = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches

        setTheme(isDarkSytemTheme ? 'dark' : 'light')
    }

    useEffect(() => {
        const isDark =
            theme === 'dark' &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(isDark ? 'dark' : 'light')
        document.documentElement.className = theme
    }, [])

    useEffect(() => {
        document.documentElement.className = theme
        setItem(theme)
    }, [theme])

    return {
        onLightTheme,
        onDarkTheme,
        onSystemTheme,
        theme,
    }
}
