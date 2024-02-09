import { FC, useEffect, useRef } from 'react';

import CloseIcon from '../../assets/icons/CloseIcon';
import MinusIcon from '../../assets/icons/MinusIcon';
import PlusIcon from '../../assets/icons/PlusIcon';
import useImageZoomScaleAndMove from '../../hooks/useImageZoom';
import { useKeydown } from '../../hooks/useKeyDown';
import { setOverflowHidden } from '../../utils/setOverflowHidden';

interface IImageZoom {
    slug: string;
    setZoom: (value: boolean) => void;
    state: boolean;
}

const ImageZoom: FC<IImageZoom> = ({ slug, setZoom, state }) => {
    const ImageRef = useRef<HTMLImageElement | null>(null);
    const ImageWrapperRef = useRef<HTMLDivElement | null>(null);
    const ButtonRef = useRef<HTMLButtonElement | null>(null);

    const handleZoom = () => {
        setZoom(false);
    };

    useKeydown('Escape', handleZoom, state);

    const { handleScaleIn, handleScaleOut, position, scale, setPosition } =
        useImageZoomScaleAndMove(ImageRef, state);

    // Hidden scroll
    useEffect(() => {
        ButtonRef.current?.focus();
        setOverflowHidden('html', state);
        setPosition({ x: 0, y: 0 });
    }, [state]);

    if (!state || !slug) return null;

    return (
        <div className="fixed inset-0 z-[1002] flex h-full w-full items-center justify-center bg-gray-900">
            <img
                alt=""
                className="max-w-ful absolute inset-0 h-full max-h-full w-full object-cover opacity-50 blur-3xl"
                src={slug}
            />
            <div
                ref={ImageWrapperRef}
                className="relative mx-0 my-auto max-h-screen w-auto max-w-widthZoomImage overflow-hidden"
            >
                <img
                    ref={ImageRef}
                    alt=""
                    style={{
                        transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                    }}
                    draggable={false}
                    className={`transition-scale duration-250 relative m-auto block h-auto max-h-[90dvh] w-auto max-w-full cursor-move object-contain`}
                    src={slug}
                />
            </div>
            <div className="absolute left-2 top-2 z-10 flex flex-col gap-2 text-xl">
                <button
                    ref={ButtonRef}
                    className="grid h-12 w-12 place-content-center rounded-full p-2 outline-2 duration-300 hover:scale-110 hover:invert focus:scale-110 focus:outline focus:invert focus-visible:scale-110 focus-visible:invert"
                    onClick={handleScaleIn}
                >
                    <PlusIcon width={48} />
                </button>
                <button
                    className="grid h-12 w-12 place-content-center rounded-full p-2 outline-2 duration-300 hover:scale-110 hover:invert focus:scale-110 focus:outline focus:invert focus-visible:scale-110 focus-visible:invert"
                    onClick={handleScaleOut}
                >
                    <MinusIcon width={48} />
                </button>
            </div>
            <button
                className="absolute right-2 top-2 grid h-12 w-12 place-content-center rounded-full p-2 outline-2 duration-300 hover:scale-110 hover:invert focus:scale-110 focus:outline focus:invert focus-visible:scale-110 focus-visible:invert"
                onClick={handleZoom}
            >
                <CloseIcon fill="none" width={48} />
            </button>
        </div>
    );
};

export default ImageZoom;
