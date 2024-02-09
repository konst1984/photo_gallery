import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';

import useGalleryContext from '../../context/useGalleryContext';
import ImageCard from '../imageCard';

const GalleryGrid = () => {
    const { galleryData } = useGalleryContext();

    return (
        <SortableContext items={galleryData} strategy={rectSortingStrategy}>
            {galleryData.map((imageItem) => (
                <ImageCard
                    key={imageItem.id}
                    slug={imageItem.slug}
                    id={imageItem.id}
                    isSelected={imageItem.isSelected}
                />
            ))}
        </SortableContext>
    );
};

export default GalleryGrid;
