import { FC, memo } from 'react'

import ZoomIcon from '../../../assets/icons/ZoomIcon'

interface IButtonZoomImage {
    onClick: (value: boolean) => void
}

const ButtonZoomImage: FC<IButtonZoomImage> = memo(({ onClick }) => {
    return (
        <button
            data-id="zoomImage"
            className="absolute right-2 top-2 z-50 rounded-full bg-transparent text-white opacity-0 transition-all duration-300 hover:scale-125 active:scale-125 group-focus-within:opacity-100 group-hover:opacity-100"
            onClick={() => onClick(true)}
            aria-label="Zoom Image"
        >
            <ZoomIcon />
        </button>
    )
})

export default ButtonZoomImage
