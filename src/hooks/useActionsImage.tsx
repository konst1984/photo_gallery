import { useEffect, useState } from 'react'
import { ImageGalleryProps } from '../data'
import { deleteImages, getImages } from '../api/api'

const useActions = () => {
    const [galleryData, setGalleryData] = useState<ImageGalleryProps[] | []>([])
    const [activeItem, setActiveItem] = useState<ImageGalleryProps | null>(null)
    const [isLoading, setLoading] = useState<boolean>(false)
    const [isError, setError] = useState<boolean>(false)

    const handleSelectItem = (id: string | number) => {
        const newGalleryData = galleryData.map((imageItem) => {
            if (imageItem.id === id) {
                return {
                    ...imageItem,
                    isSelected: !imageItem.isSelected,
                }
            }

            return imageItem
        })

        setGalleryData(newGalleryData)
    }

    const handleDeleteItems = () => {
        const items: ImageGalleryProps[] = []
        galleryData.forEach((item) => {
            if (item.isSelected) {
                deleteImages(item.id)
            } else {
                items.push(item)
            }
        })
        setGalleryData(items)
    }

    useEffect(() => {
        setLoading(true)
        setError(false)
        getImages()
            .then((data) => setGalleryData(data))
            .catch((err) => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return {
        handleSelectItem,
        handleDeleteItems,
        setGalleryData,
        setActiveItem,
        galleryData,
        activeItem,
        isLoading,
        isError,
    }
}

export default useActions
