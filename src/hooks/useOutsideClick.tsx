import { RefObject, useEffect, useRef } from 'react'

const useOutsideClick = (
    ref: RefObject<HTMLElement | null>,
    callback: () => void,
    state: boolean
) => {
    const callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        const handleCLick = (e: Event) => {
            if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
                setTimeout(() => callbackRef.current(), 500)
            }
        }

        document.addEventListener('mousedown', handleCLick)

        return () => document.removeEventListener('mousedown', handleCLick)
    }, [state])
}

export default useOutsideClick
