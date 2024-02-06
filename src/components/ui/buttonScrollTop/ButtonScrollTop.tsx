import { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

const ButtonScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        const handleVisible = () => {
            const position = document.documentElement.scrollTop
            if (position > 1000) {
                setIsVisible(true)
            } else setIsVisible(false)
        }
        const handleVisibleDebounce = debounce(handleVisible, 300)
        window.addEventListener('scroll', handleVisibleDebounce)
        return () => window.removeEventListener('scroll', handleVisibleDebounce)
    })

    return (
        <>
            {isVisible ? (
                <button
                    onClick={handleScrollTop}
                    className="fixed bottom-[3%] right-[2%] z-[1000] grid h-10 w-10 place-content-center rounded-md bg-orange-500 text-slate-900 outline outline-0 transition-all duration-200 hover:scale-125 hover:outline-2 active:scale-100 dark:text-slate-100 dark:hover:outline-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 18.75 7.5-7.5 7.5 7.5"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 7.5-7.5 7.5 7.5"
                        />
                    </svg>
                </button>
            ) : null}
        </>
    )
}

export default ButtonScrollTop
