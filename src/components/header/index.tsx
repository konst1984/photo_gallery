import { FC } from 'react';

import DeleteIcon from '../../assets/icons/DeleteIcon';
import ImageIcon from '../../assets/icons/ImageIcon';
import useGalleryContext from '../../context/useGalleryContext';
import useScrollDirection from '../../hooks/useScrollDirection';
import Menu from '../menu';
import ButtonCircle from '../ui/buttonCircle';

interface IHeader {
    handleOpenModal: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}
const Header: FC<IHeader> = ({ handleOpenModal }) => {
    const { selectedItems } = useGalleryContext();
    const scrollDirection = useScrollDirection();
    const bgColor =
        scrollDirection === 'no-paint' || scrollDirection === 'hide'
            ? 'bg-transparent'
            : 'bg-[var(--bg-header)]';

    return (
        <div
            className={`fixed z-[1000] flex items-center justify-between px-4 ${
                scrollDirection === 'hide' ? '-top-24' : 'top-0'
            } h-24 w-full transition-all duration-500 ${bgColor}`}
        >
            <div className="flex gap-2">
                {/* <ButtonAddImage onClick={handleOpenModal} /> */}
                <ButtonCircle
                    onClick={handleOpenModal}
                    data-id="addImage"
                    title="Add image"
                    styles={
                        'hover:bg-gary-100 focus-visible:bg-gary-100 left-10 top-2 flex aspect-square h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-dashed border-gray-200 p-2 text-sm outline outline-2 outline-stone-500 transition-colors duration-300 hover:text-green-400 hover:outline-green-400 focus-visible:text-green-400 focus-visible:outline-green-400'
                    }
                >
                    <ImageIcon />
                </ButtonCircle>
                {selectedItems.length > 0 ? (
                    <ButtonCircle
                        onClick={handleOpenModal}
                        data-id="deleteImage"
                        title="Delete selected images"
                        styles={
                            'left-20 top-2 z-[100] flex h-16 w-16 items-center justify-center rounded-full outline outline-2 outline-stone-500 hover:text-red-500 hover:outline-red-400 focus-visible:text-red-400'
                        }
                    >
                        <DeleteIcon />
                    </ButtonCircle>
                ) : null}
            </div>
            <Menu />
        </div>
    );
};

export default Header;
