import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core'
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable'
import ImageOverlayCard from '../ImageOverlayCard'
import ImageCard from '../imageCard'
import useActionsDnD from '../../hooks/useActionDnd'
import { Dispatch, FC, SetStateAction } from 'react'
import { ImageGalleryProps } from '../../data'
import Preloader from '../preloader'

interface IGallerySquare {
    isLoading: boolean
    isError: boolean
    galleryData: ImageGalleryProps[]
    handleSelectItem: (id: string | number) => void
    activeItem: ImageGalleryProps | null
    setGalleryData: Dispatch<SetStateAction<ImageGalleryProps[]>>
    setActiveItem: Dispatch<SetStateAction<ImageGalleryProps | null>>
}

const GallerySquare: FC<IGallerySquare> = ({
    isLoading,
    galleryData,
    handleSelectItem,
    activeItem,
    setGalleryData,
    setActiveItem,
    isError,
}) => {
    const { handleDragEnd, handleDragStart, sensors } = useActionsDnD(
        galleryData,
        setGalleryData,
        setActiveItem
    )

    if (isLoading) {
        return <Preloader />
    }
    if (isError) {
        return (
            <h1 className="text-clamp uppercase text-red-500">
                Something went wrong!
            </h1>
        )
    }
    return (
        <>
            {galleryData.length ? (
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                >
                    <div className="animate-showOpacity mx-auto mb-5 grid max-w-[90%] gap-8 rounded-2xl bg-secondary p-8 sm:grid-cols-2 md:grid-cols-5">
                        <SortableContext
                            items={galleryData}
                            strategy={rectSortingStrategy}
                        >
                            {galleryData.map((imageItem) => (
                                <ImageCard
                                    key={imageItem.id}
                                    slug={imageItem.slug}
                                    id={imageItem.id}
                                    isSelected={imageItem.isSelected}
                                    onClick={handleSelectItem}
                                />
                            ))}
                        </SortableContext>

                        <DragOverlay adjustScale={true} wrapperElement="div">
                            {activeItem ? (
                                <ImageOverlayCard
                                    className="absolute z-50 h-full w-full"
                                    slug={activeItem.slug}
                                />
                            ) : null}
                        </DragOverlay>
                    </div>
                </DndContext>
            ) : null}
        </>
    )
}

export default GallerySquare
