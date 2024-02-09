import { FC, useEffect, useRef } from 'react';

import useGalleryContext from '../../context/useGalleryContext';
import Modal from '../modal';

interface IModalDeleteImage {
    handleCloseModalClick: () => void;
    nameModal: string;
}

const ModalDeleteImage: FC<IModalDeleteImage> = ({
    handleCloseModalClick,
    nameModal,
}) => {
    const { handleDeleteItems } = useGalleryContext();
    const ButtonRef = useRef<HTMLButtonElement | null>(null);
    const handleDeleteImages = () => {
        handleDeleteItems();
        handleCloseModalClick();
    };

    useEffect(() => {
        ButtonRef.current?.focus();
    }, [nameModal]);

    return (
        <Modal
            nameModal={nameModal}
            modalId="deleteImage"
            handleClose={handleCloseModalClick}
        >
            <div className="relative bg-[gainsboro] p-4 py-8 text-center">
                <>
                    <p className="text-2xl">
                        The selected images will be permanently deleted, are you
                        sure?
                    </p>
                    <div className="my-6 flex justify-center gap-4">
                        <button
                            onClick={handleDeleteImages}
                            className="rounded-lg bg-red-400 px-4  py-2 uppercase outline-2 duration-300 hover:scale-110 focus:outline focus-visible:scale-110"
                        >
                            Yes
                        </button>
                        <button
                            ref={ButtonRef}
                            onClick={handleCloseModalClick}
                            className="rounded-lg bg-blue-400 px-4  py-2 uppercase outline-2 duration-300 hover:scale-110 focus:scale-110 focus:outline focus-visible:scale-110"
                        >
                            No
                        </button>
                    </div>
                    <p className="py-2 text-lg text-gray-500">
                        To close the window, click the 'Cancel' or the 'ESC'
                        key.
                    </p>
                </>
            </div>
        </Modal>
    );
};

export default ModalDeleteImage;
