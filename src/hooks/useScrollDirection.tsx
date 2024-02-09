import { useEffect, useState } from 'react';

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<string>('no-paint');

    useEffect(() => {
        let lastScrollY = 80;

        const updateScrollDirection = () => {
            const currentScrollTop = window.scrollY;

            const direction = lastScrollY > currentScrollTop ? 'show' : 'hide';

            if (
                currentScrollTop > lastScrollY &&
                direction !== scrollDirection
            ) {
                setScrollDirection('hide');
            } else if (currentScrollTop < 60) {
                setScrollDirection('no-paint');
            } else {
                setScrollDirection('show');
            }
            lastScrollY = currentScrollTop < 60 ? 60 : currentScrollTop;
        };
        window.addEventListener('scroll', updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener('scroll', updateScrollDirection); // clean up
        };
    }, []);

    return scrollDirection;
}

export default useScrollDirection;
