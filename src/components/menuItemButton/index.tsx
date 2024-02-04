import React, { FC } from 'react'

interface IMenuItemButton {
    onClickHandler: () => void
    children: React.ReactNode
    styles?: string
    title?: string
}

const MenuItemButton: FC<IMenuItemButton> = ({
    children,
    onClickHandler,
    styles,
    title,
}) => {
    return (
        <button
            onClick={onClickHandler}
            title={title}
            aria-label={title}
            className={`fixed ${styles} z-[100] flex cursor-pointer items-center justify-center overflow-hidden rounded-full outline-2 hover:outline hover:outline-blue-400 focus-visible:outline focus-visible:outline-blue-400`}
        >
            <span className="grid w-full items-center justify-center">
                {children}
            </span>
        </button>
    )
}

export default MenuItemButton
