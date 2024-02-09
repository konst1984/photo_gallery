import { FC } from 'react';
import { closestCenter, DndContext, DragOverlay } from '@dnd-kit/core';

import useGalleryContext from '../../context/useGalleryContext';
import useActionsDnD from '../../hooks/useActionDnd';
import GalleryGrid from '../galleryGrid';
import ImageOverlayCard from '../ImageOverlayCard';
import Preloader from '../preloader';
import ButtonClearBg from '../ui/buttonClearBg';

const GallerySquare: FC = () => {
    const { galleryData, isError, isLoading } = useGalleryContext();

    const { activeItem, handleDragEnd, handleDragStart, sensors } =
        useActionsDnD();

    if (isLoading) {
        return <Preloader />;
    }
    if (isError) {
        return (
            <h1 className="text-clamp uppercase text-red-500">
                Something went wrong!
            </h1>
        );
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
                    <div className="relative mx-auto mb-5 grid max-w-[90%] animate-showOpacity gap-8 rounded-2xl bg-secondary p-8 sm:grid-cols-2 md:grid-cols-5">
                        <ButtonClearBg />

                        <GalleryGrid />

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
    );
};

export default GallerySquare;
