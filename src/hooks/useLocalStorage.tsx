import { useEffect, useState } from 'react'

const useLocalStorage = (key: string) => {
    const getItem = () => {
        try {
            const item: string | null = localStorage.getItem(key)

            return item ? JSON.parse(item) : undefined
        } catch (error) {
            console.log(error)
        }
    }

    const setItem = (value: unknown) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }

    const [value] = useState(getItem)

    useEffect(() => {
        setItem(value)
    }, [value])

    return [value, setItem]
}

export default useLocalStorage
