import { FC } from 'react'
import { ImageGalleryProps } from '../../data'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import CheckboxIcon from '../../assets/icons/CheckboxIcon'
import EmptyCheckboxIcon from '../../assets/icons/EmptyCheckboxIcon'

interface ImageCardProps extends ImageGalleryProps {
    className?: string
    slug: string
    onClick?: (id: number | string) => void | undefined
}

const ImageCard: FC<ImageCardProps> = ({
    slug,
    onClick,
    id,
    isSelected,
    className = '',
}) => {
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
        <div
            ref={setNodeRef}
            style={style}
            className={`group ${
                index === 0 && 'sm:col-span-2 sm:row-span-2'
            } relative z-0 aspect-square overflow-hidden rounded-lg border border-gray-300 focus-within:border-4 focus-within:border-amber-400 ${className} transition-all duration-300`}
        >
            <button
                {...listeners}
                {...attributes}
                className={`absolute inset-0 z-50 bg-black opacity-0 transition-all duration-300 group-focus-within:opacity-40 group-hover:opacity-40 
          ${isSelected && '!opacity-0'}`}
            />
            <button
                className={`absolute left-2 top-2 z-50 rounded-full transition-all duration-300 active:scale-125 group-focus-within:opacity-100 group-hover:opacity-100 ${
                    isSelected && '!opacity-100'
                } ${!isSelected && 'opacity-0'}`}
                onClick={onClick && (() => onClick(id))}
            >
                {isSelected ? (
                    <CheckboxIcon className="text-gray-600" />
                ) : (
                    <EmptyCheckboxIcon className="" />
                )}
            </button>
            <div
                className={`flex h-full w-full items-center justify-center ${
                    isSelected && 'opacity-60'
                }`}
            >
                <img
                    src={slug}
                    alt=""
                    className="block h-full w-full object-cover"
                />
            </div>
        </div>
    )
}

export default ImageCard
