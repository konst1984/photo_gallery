import React, { FC } from 'react'
import Modal from '../modal'
import CloseIcon from '../../assets/icons/CloseIcon'
import { ImageGalleryProps } from '../../data'
import { nanoid } from 'nanoid'
import { addImage } from '../../api/api'

interface IModalAddImage {
    handleCloseModalClick: () => void
    setGalleryData: React.Dispatch<React.SetStateAction<ImageGalleryProps[]>>
    nameModal: string
}

const ModalAddImage: FC<IModalAddImage> = ({
    setGalleryData,
    handleCloseModalClick,
    nameModal,
}) => {
    const handleImageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const imageUrl = event.currentTarget['image-url'].value

        if (!imageUrl) return

        const imageObj = {
            id: nanoid(),
            slug: imageUrl,
            isSelected: false,
        }

        addImage(imageObj)
        setGalleryData((prev) => [...prev, imageObj])

        handleCloseModalClick()
    }

    return (
        <Modal
            modalId="addImage"
            nameModal={nameModal}
            handleClose={handleCloseModalClick}
        >
            <>
                <form
                    className="relative w-full rounded bg-neutral-50 px-6 py-12"
                    onSubmit={handleImageSubmit}
                >
                    <h2 className="mb-8 text-center text-2xl font-semibold">
                        Add New Image URL
                    </h2>
                    <input
                        type="url"
                        name="image-url"
                        className="w-full rounded border border-gray-300 p-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600 "
                        placeholder="https://example.com/image.png"
                    />
                    <div className="mt-4 flex justify-end">
                        <button
                            type="submit"
                            className="rounded bg-emerald-600 px-8 py-2.5 text-white transition-colors duration-500 hover:bg-emerald-700"
                        >
                            Add Image
                        </button>
                    </div>
                </form>
                <button
                    onClick={handleCloseModalClick}
                    className="absolute right-4 top-4 flex cursor-pointer items-center justify-center bg-transparent fill-transparent text-red-600 transition-all hover:scale-125 hover:fill-red-600 hover:text-white focus-visible:scale-125 focus-visible:fill-red-600 focus-visible:text-white active:scale-100"
                >
                    <CloseIcon width={31} />
                </button>
            </>
        </Modal>
    )
}

export default ModalAddImage
