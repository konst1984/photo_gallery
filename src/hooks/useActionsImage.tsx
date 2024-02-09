import { useCallback, useEffect, useState } from 'react';

import { deleteImages, getImages } from '../api/api';
import { ImageGalleryProps } from '../data';

const useActions = () => {
    const [galleryData, setGalleryData] = useState<ImageGalleryProps[] | []>(
        []
    );

    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const handleSelectItem = useCallback(
        (id: string | number) => {
            const newGalleryData = galleryData.map((imageItem) => {
                if (imageItem.id === id) {
                    return {
                        ...imageItem,
                        isSelected: !imageItem.isSelected,
                    };
                }

                return imageItem;
            });

            setGalleryData(newGalleryData);
        },
        [galleryData]
    );

    const handleDeleteItems = useCallback(() => {
        const items: ImageGalleryProps[] = [];
        galleryData.forEach((item) => {
            if (item.isSelected) {
                deleteImages(item.id);
            } else {
                items.push(item);
            }
        });
        setGalleryData(items);
    }, [galleryData]);

    const selectedItems = galleryData.filter((item) => item.isSelected);

    useEffect(() => {
        setLoading(true);
        setError(false);
        getImages()
            .then((data) => {
                setGalleryData(data);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {
        handleSelectItem,
        handleDeleteItems,
        setGalleryData,
        selectedItems,
        galleryData,
        isLoading,
        isError,
    };
};

export default useActions;
