import { useEffect, useState } from 'react'

export const useTheme = () => {
    const [theme, setTheme] = useState('dark')

    const onLightTheme = () => {
        setTheme('light')
    }

    const onDarkTheme = () => {
        console.log(theme)
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
            theme === 'dark' ||
            window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(isDark ? 'dark' : 'light')
        document.documentElement.className = theme
    }, [])

    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])

    return {
        onLightTheme,
        onDarkTheme,
        onSystemTheme,
        theme,
    }
}
