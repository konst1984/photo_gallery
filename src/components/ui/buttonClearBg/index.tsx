import useSetBackground from '../../../hooks/useSetBackground';

const ButtonClearBg = () => {
    const { bg } = useSetBackground();
    return (
        <>
            {bg ? (
                <button
                    aria-label="set default background"
                    title="set default background"
                    data-bg="default-bg"
                    className="absolute -top-5 left-1/2 flex w-max -translate-x-1/2 items-center justify-center rounded-2xl p-2 text-sm uppercase transition-all duration-300 hover:invert focus-visible:invert active:scale-90"
                >
                    default background
                </button>
            ) : null}
        </>
    );
};

export default ButtonClearBg;
