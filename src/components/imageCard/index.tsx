import { FC, memo, useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { ImageGalleryProps } from '../../data'
import ImageZoom from '../ImageZoom/imageZoom'
import ButtonSelectedImage from '../ui/buttonSelectedImage'
import ButtonZoomImage from '../ui/buttonZoom'

interface ImageCardProps extends ImageGalleryProps {
    slug: string
}

const ImageCard: FC<ImageCardProps> = ({ slug, id, isSelected }) => {
    const [zoom, setZoom] = useState<boolean>(false)

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
        index,
    } = useSortable({ id: id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? '100' : 'auto',
        opacity: isDragging ? 0.3 : 1,
        transformOrigin: '0 0',
    }

    return (
        <>
            <div
                ref={setNodeRef}
                style={style}
                className={`group ${
                    index === 0 && 'sm:col-span-2 sm:row-span-2'
                } relative z-0 aspect-square overflow-hidden rounded-lg outline transition-all duration-300 focus-within:outline-4 ${isSelected ? 'outline-green-700' : 'outline-gray-300'}`}
            >
                <button
                    {...listeners}
                    {...attributes}
                    className="absolute inset-0 z-50 bg-black opacity-0 transition-all duration-300 focus-visible:outline-amber-400 group-focus-within:opacity-40 group-hover:opacity-40"
                />
                <ButtonSelectedImage isSelected={isSelected} id={id} />
                <ButtonZoomImage onClick={setZoom} />
                <div
                    className={`relative flex h-full w-full animate-showOpacity items-center justify-center bg-gray-500 before:absolute before:bg-[url('/images/loading.webp')]${
                        isSelected && 'opacity-60'
                    }`}
                >
                    <div className="absolute inset-0 -z-0 animate-showOpacity bg-[url('/images/loading.webp')] bg-cover bg-center bg-no-repeat invert dark:invert-0"></div>
                    <img
                        src={slug}
                        alt=""
                        className="relative z-10 block h-full w-full object-cover italic"
                        loading="lazy"
                        width="640"
                        height="360"
                        onError={(e) =>
                            (e.currentTarget.src = 'images/err-image.webp')
                        }
                    />
                </div>
            </div>

            <ImageZoom slug={slug} setZoom={setZoom} state={zoom} />
        </>
    )
}

export default ImageCard
