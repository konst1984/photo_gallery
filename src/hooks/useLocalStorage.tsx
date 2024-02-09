import { useCallback, useEffect, useState } from 'react';

const useLocalStorage = (key: string) => {
    const getItem = () => {
        try {
            const item: string | null = localStorage.getItem(key);

            return item ? JSON.parse(item) : '';
        } catch (error) {
            console.log(error);
        }
    };

    const removeItem = () => {
        localStorage.removeItem(key);
    };

    const setItem = useCallback((value: unknown) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    }, []);

    const [value] = useState(getItem);

    useEffect(() => {
        setItem(value);
    }, [setItem, value, key]);

    return { value, setItem, removeItem };
};

export default useLocalStorage;
