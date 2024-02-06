import { FC, useEffect, useRef } from 'react'

import { useKeydown } from '../../hooks/useKeyDown'
import useOutsideClick from '../../hooks/useOutsideClick'
import { setOverflowHidden } from '../../utils/setOverflowHidden'

interface IImageZoom {
    slug: string
    setZoom: (value: boolean) => void
    state: boolean
}

const ImageZoom: FC<IImageZoom> = ({ slug, setZoom, state }) => {
    const imageRef = useRef<HTMLImageElement | null>(null)

    const handleZoom = () => {
        setZoom(false)
    }

    useOutsideClick(imageRef, handleZoom, state)
    useKeydown('Escape', handleZoom, state)

    useEffect(() => {
        setOverflowHidden('html', state)
    }, [state])

    if (!state) return null

    return (
        <div className="fixed inset-0 z-[1002] flex h-full w-full items-center justify-center bg-gray-900">
            <img
                alt=""
                className="max-w-ful absolute inset-0 h-full max-h-full w-full object-cover opacity-50 blur-3xl"
                src={slug}
            />
            <div
                ref={imageRef}
                className="max-w-widthZoomImage relative mx-0 my-auto max-h-screen overflow-hidden"
            >
                <img
                    alt=""
                    className="relative block h-auto max-h-[90dvh] w-auto max-w-full object-contain"
                    src={slug}
                />
            </div>
        </div>
    )
}

export default ImageZoom
