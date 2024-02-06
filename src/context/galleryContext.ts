import { createContext,Dispatch, SetStateAction } from 'react'

import { ImageGalleryProps } from '../data'

interface IGalleryContext {
    isLoading: boolean
    isError: boolean
    galleryData: ImageGalleryProps[]
    handleDeleteItems: () => void
    handleSelectItem: (id: string | number) => void
    activeItem: ImageGalleryProps | null
    setGalleryData: Dispatch<SetStateAction<ImageGalleryProps[]>>
    setActiveItem: Dispatch<SetStateAction<ImageGalleryProps | null>>
    selectedItems: ImageGalleryProps[]
}

export const GalleryContext = createContext<IGalleryContext | null>(null)

export const GalleryProvider = GalleryContext.Provider
