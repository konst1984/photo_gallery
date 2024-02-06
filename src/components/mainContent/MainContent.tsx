import { FC } from 'react'

import GallerySquare from '../../components/gallerySquare'
import ModalAddImage from '../../components/modalAddImage'
import ModalDeleteImage from '../../components/modalDeleteImages'
import useActionsModals from '../../hooks/useActionsModals'
import Header from '../header'

const MainContent: FC = () => {
    const { handleOpenModal, handleCloseModalClick, ModalOpen } =
        useActionsModals()

    return (
        <>
            <Header handleOpenModal={handleOpenModal} />
            <GallerySquare />

            <ModalDeleteImage
                nameModal={ModalOpen}
                handleCloseModalClick={handleCloseModalClick}
            />

            <ModalAddImage
                nameModal={ModalOpen}
                handleCloseModalClick={handleCloseModalClick}
            />
        </>
    )
}

export default MainContent
