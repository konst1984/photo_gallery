import { useContext } from 'react';

import { GalleryContext } from './galleryContext';

const useGalleryContext = () => {
    const data = useContext(GalleryContext);

    if (!data) {
        throw new Error(
            'Can not "useGalleryContext" outside of the "GalleryProvider"!'
        );
    }

    return data;
};

export default useGalleryContext;
