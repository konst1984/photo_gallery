import useActions from './hooks/useActionsImage'
import useActionsModals from './hooks/useActionsModals'
import GallerySquare from './components/gallerySquare'
import Header from './components/header'
import ModalAddImage from './components/modalAddImage'
import ModalDeleteImage from './components/modalDeleteImages'

const App = () => {
    const {
        handleSelectItem,
        setGalleryData,
        handleDeleteItems,
        galleryData,
        activeItem,
        setActiveItem,
        isLoading,
        isError,
    } = useActions()

    const selectedItems = galleryData.filter((item) => item.isSelected)

    const { handleOpenModal, handleCloseModalClick, ModalOpen } =
        useActionsModals()

    return (
        <div className="min-h-sreen">
            <div className="flex flex-col items-center">
                <div className="my-8 grid max-w-5xl divide-y divide-dashed rounded-lg shadow">
                    <h1 className="text-clamp p-2 uppercase">images gallery</h1>
                </div>

                <Header
                    handleOpenModal={handleOpenModal}
                    selectedItems={selectedItems}
                />

                <GallerySquare
                    isLoading={isLoading}
                    isError={isError}
                    galleryData={galleryData}
                    handleSelectItem={handleSelectItem}
                    activeItem={activeItem}
                    setGalleryData={setGalleryData}
                    setActiveItem={setActiveItem}
                />

                <ModalDeleteImage
                    nameModal={ModalOpen}
                    handleCloseModalClick={handleCloseModalClick}
                    handleDeleteItems={handleDeleteItems}
                />

                <ModalAddImage
                    nameModal={ModalOpen}
                    handleCloseModalClick={handleCloseModalClick}
                    setGalleryData={setGalleryData}
                />
            </div>
        </div>
    )
}

export default App
