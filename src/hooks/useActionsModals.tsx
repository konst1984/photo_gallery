import React, { useEffect, useState } from 'react'

export default function useActionsModals() {
    const [ModalOpen, setModalOpen] = useState('')

    const handleCloseModalKeyDown = (e: KeyboardEvent) => {
        if (e.code === 'Escape') {
            setModalOpen('')
        }
    }

    const handleOpenModal = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        setModalOpen((e.currentTarget as HTMLElement).id)
    }

    const handleCloseModalClick = () => {
        setModalOpen('')
    }

    useEffect(() => {
        window.addEventListener('keydown', handleCloseModalKeyDown)
        return () =>
            window.removeEventListener('keydown', handleCloseModalKeyDown)
    }, [ModalOpen])

    return {
        setModalOpen,
        handleOpenModal,
        handleCloseModalClick,
        ModalOpen,
    }
}
