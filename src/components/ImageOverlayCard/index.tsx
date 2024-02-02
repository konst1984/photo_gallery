import { FC } from 'react'
import { ImageGalleryProps } from '../../data'

interface ImageOverlayCardProps extends Partial<ImageGalleryProps> {
    className?: string
    onClick?: (id: string | number) => void
}

const ImageOverlayCard: FC<ImageOverlayCardProps> = ({ className, slug }) => {
    return (
        <div
            className={`${className} group flex h-full items-center justify-center overflow-hidden rounded-lg border border-gray-300`}
        >
            <img
                src={slug}
                alt={slug}
                className="block h-full w-full object-cover"
            />
        </div>
    )
}

export default ImageOverlayCard
