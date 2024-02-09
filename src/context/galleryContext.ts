import { createContext, Dispatch, SetStateAction } from 'react';

import { ImageGalleryProps } from '../data';

interface IGalleryContext {
    isLoading: boolean;
    isError: boolean;
    galleryData: ImageGalleryProps[];
    handleDeleteItems: () => void;
    handleSelectItem: (id: string | number) => void;
    setGalleryData: Dispatch<SetStateAction<ImageGalleryProps[]>>;
    selectedItems: ImageGalleryProps[];
}

export const GalleryContext = createContext<IGalleryContext | null>(null);

export const GalleryProvider = GalleryContext.Provider;
