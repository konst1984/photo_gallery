import { FC } from 'react';

import CheckboxIcon from '../../../assets/icons/CheckboxIcon';
import EmptyCheckboxIcon from '../../../assets/icons/EmptyCheckboxIcon';
import useGalleryContext from '../../../context/useGalleryContext';

interface IButtonSelectedImage {
    isSelected: boolean;
    id: string | number;
}

const ButtonSelectedImage: FC<IButtonSelectedImage> = ({ isSelected, id }) => {
    const { handleSelectItem } = useGalleryContext();
    return (
        <button
            className={`absolute left-2 top-2 z-50 rounded-full transition-all duration-300 hover:scale-125 active:scale-125 group-focus-within:opacity-100 group-hover:opacity-100 dark:text-white ${
                isSelected && 'fill-green-700 text-white !opacity-100'
            } ${!isSelected && 'text-black opacity-0'}`}
            onClick={() => handleSelectItem(id)}
            aria-label="Check image for deleted"
            title="Check image for deleted"
        >
            {isSelected ? <CheckboxIcon /> : <EmptyCheckboxIcon />}
        </button>
    );
};

export default ButtonSelectedImage;
