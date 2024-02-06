import { FC } from 'react'
import { closestCenter,DndContext, DragOverlay } from '@dnd-kit/core'
import { rectSortingStrategy,SortableContext } from '@dnd-kit/sortable'

import useActionsDnD from '../../hooks/useActionDnd'
import useGalleryContext from '../../hooks/useGalleryContext'
import ImageCard from '../imageCard'
import ImageOverlayCard from '../ImageOverlayCard'
import Preloader from '../preloader'

const GallerySquare: FC = () => {
    const {
        galleryData,
        setGalleryData,
        setActiveItem,
        isError,
        isLoading,
        activeItem,
    } = useGalleryContext()

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
                    <div className="mx-auto mb-5 grid max-w-[90%] animate-showOpacity gap-8 rounded-2xl bg-secondary p-8 sm:grid-cols-2 md:grid-cols-5">
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
