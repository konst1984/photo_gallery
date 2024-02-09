import { useEffect, useState } from 'react';

const useImageZoomScaleAndMove = (
    ref: { current: HTMLElement | null },
    state: boolean
) => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleScaleIn = () => {
        setScale((scale) => parseFloat((scale + 0.05).toFixed(2)));
    };

    const handleScaleOut = () => {
        setScale((scale) => parseFloat((scale - 0.05).toFixed(2)));
    };

    // Move image
    useEffect(() => {
        const image = ref.current;
        let isDragging = false;
        let prevPosition = { x: 0, y: 0 };

        // Mouse down for starting image drag
        const handleMouseDown = (e: MouseEvent) => {
            isDragging = true;
            prevPosition = { x: e.clientX, y: e.clientY };
        };

        // Mouse move for dragging
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;

            const deltaX = e.clientX - prevPosition.x;
            const deltaY = e.clientY - prevPosition.y;
            prevPosition = { x: e.clientX, y: e.clientY };
            setPosition((position) => ({
                x: position.x + deltaX,
                y: position.y + deltaY,
            }));
        };

        // Mouse up for ending drag

        const handleMouseUp = () => {
            isDragging = false;
        };

        image?.addEventListener('mousedown', handleMouseDown);
        image?.addEventListener('mousemove', handleMouseMove);
        image?.addEventListener('mouseup', handleMouseUp);

        return () => {
            image?.removeEventListener('mousedown', handleMouseDown);
            image?.removeEventListener('mousemove', handleMouseMove);
            image?.removeEventListener('mouseup', handleMouseUp);
        };
    }, [scale, state]);
    return {
        handleScaleIn,
        handleScaleOut,
        setPosition,
        position,
        scale,
    };
};

export default useImageZoomScaleAndMove;
