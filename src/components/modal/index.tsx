import { FC, ReactElement, cloneElement, useEffect } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
    children: ReactElement
    nameModal: string
    handleClose: () => void
    modalId?: string
    style?: string
}

export const Modal: FC<ModalProps> = ({
    children,
    nameModal,
    handleClose,
    modalId,
}) => {
    if (modalId !== nameModal) return null

    const stl = {
        '--bg-color': 'rgba(26, 23, 27, 0.8)',
        backdropFilter: 'blur(20px)',
    }

    return (
        <>
            {createPortal(
                <>
                    <div
                        className="fixed inset-0 z-[1001] flex items-center justify-center overflow-hidden bg-[var(--bg-color)] transition-all duration-300 ease-in-out"
                        style={stl}
                        onClick={handleClose}
                    />
                    <div
                        className={`fixed left-1/2 top-1/2 z-[1002] w-[90%] min-w-[300px] max-w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-slate-50 p-2 font-semibold text-black`}
                    >
                        {cloneElement(children)}
                    </div>
                </>,
                document.body
            )}
        </>
    )
}

export default Modal
