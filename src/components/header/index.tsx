import { FC } from 'react'

import ImageIcon from '../../assets/icons/ImageIcon'
import useGalleryContext from '../../hooks/useGalleryContext'
import useScrollDirection from '../../hooks/useScrollDirection'
import Menu from '../menu'

interface IHeader {
    handleOpenModal: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void
}
const Header: FC<IHeader> = ({ handleOpenModal }) => {
    const { selectedItems } = useGalleryContext()
    const scrollDirection = useScrollDirection()
    const bgColor =
        scrollDirection === 'no-paint' || scrollDirection === 'hide'
            ? 'bg-transparent'
            : 'bg-[var(--bg-header)]'

    return (
        <div
            className={`fixed z-[1000] flex items-center justify-between px-4 ${
                scrollDirection === 'hide' ? '-top-24' : 'top-0'
            } h-24 w-full transition-all duration-500 ${bgColor}`}
        >
            <div className="flex gap-2">
                <button
                    className="hover:bg-gary-100 focus-visible:bg-gary-100 left-2 top-2 flex aspect-square h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-dashed border-gray-200 p-2 text-sm transition-colors duration-300 hover:border-solid hover:border-green-400 hover:text-green-400 focus-visible:border-solid focus-visible:border-green-400 focus-visible:text-green-400"
                    onClick={handleOpenModal}
                    data-id="addImage"
                    title="Add image"
                >
                    <ImageIcon />
                </button>

                {selectedItems.length > 0 ? (
                    <button
                        onClick={handleOpenModal}
                        data-id="deleteImage"
                        title="Delete selected images"
                        className="left-20 top-2 z-[100] flex h-16 w-16 items-center justify-center rounded-full hover:text-red-500 hover:outline hover:outline-red-400 focus-visible:text-red-400 focus-visible:outline"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                        </svg>
                    </button>
                ) : null}
            </div>
            <Menu />
        </div>
    )
}

export default Header
