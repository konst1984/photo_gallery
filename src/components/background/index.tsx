import { createPortal } from 'react-dom';

import useSetBackground from '../../hooks/useSetBackground';

const Backgroud = () => {
    const { bg } = useSetBackground();

    return (
        <>
            {createPortal(
                <div
                    id="bg-div"
                    style={{
                        background: `url(${bg}) center center/cover no-repeat`,
                    }}
                    className="absolute inset-0 -z-[1] blur-sm"
                ></div>,
                document.body
            )}
        </>
    );
};

export default Backgroud;
