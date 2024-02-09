import { memo } from 'react';

import ImageIcon from '../../../assets/icons/ImageIcon';

const ButtonChangeBg = memo(() => {
    return (
        <>
            <button
                data-bg="set-bg"
                aria-label="set background image"
                title="set background image"
                className="absolute bottom-2 right-2 z-50 rounded-full bg-transparent text-white opacity-0 transition-all duration-300 hover:scale-125 active:scale-125 group-focus-within:opacity-100 group-hover:opacity-100"
            >
                <ImageIcon />
            </button>
        </>
    );
});

export default ButtonChangeBg;
