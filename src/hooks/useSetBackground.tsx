import { useEffect, useState } from 'react';

import useLocalStorage from './useLocalStorage';

const useSetBackground = () => {
    const { value, setItem, removeItem } = useLocalStorage('bg');
    const [bg, setBg] = useState(value);

    const handleSetBg = (e: MouseEvent) => {
        const target = e.target as HTMLButtonElement;
        const image = target.closest('[data-bg="set-bg"]')?.nextElementSibling;
        if (image) {
            const value = 'src' in image ? image?.src : '';

            setBg(value);
        }
    };

    const handleSetDefaultBg = (e: MouseEvent) => {
        const target = e.target as HTMLButtonElement;

        if (target.closest('[data-bg="default-bg"]')) {
            removeItem();

            setBg('');
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleSetBg);
        window.addEventListener('click', handleSetDefaultBg);
        window.addEventListener('click', removeItem);
        setItem(bg);
        return () => {
            window.removeEventListener('click', handleSetBg);
            window.removeEventListener('click', handleSetDefaultBg);
            window.removeEventListener('click', removeItem);
        };
    }, [bg]);

    return { bg, setBg };
};

export default useSetBackground;
