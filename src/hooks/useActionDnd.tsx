import {
    DragEndEvent,
    DragStartEvent,
    KeyboardSensor,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { ImageGalleryProps } from '../data'
import { Dispatch, SetStateAction } from 'react'

const useActionsDnD = (
    galleryData: ImageGalleryProps[],
    setGalleryData: Dispatch<SetStateAction<ImageGalleryProps[]>>,
    setActiveItem: (item: ImageGalleryProps | null) => void
) => {
    const pointerSensor = useSensor(PointerSensor)
    const touchSensor = useSensor(TouchSensor)
    const keyboardSensor = useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
    })

    const sensors = useSensors(pointerSensor, touchSensor, keyboardSensor)

    const handleDragStart = (event: DragStartEvent) => {
        const { id } = event.active

        if (!id) return

        const currentItem = galleryData.find((item) => item.id === id)

        setActiveItem(currentItem || null)
    }

    const handleDragEnd = (event: DragEndEvent) => {
        setActiveItem(null)
        const { active, over } = event

        if (!over) {
            return
        }

        if (active.id !== over.id) {
            setGalleryData((items) => {
                const oldIndex = items.findIndex(
                    (item) => item.id === active.id
                )
                const newIndex = items.findIndex((item) => item.id === over.id)

                return arrayMove(items, oldIndex, newIndex)
            })
        }
    }
    return {
        handleDragEnd,
        handleDragStart,
        sensors,
    }
}

export default useActionsDnD
