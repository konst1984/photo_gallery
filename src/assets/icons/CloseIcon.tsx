import { SVGProps } from 'react';

const CloseIcon = ({ width = '24', ...props }: SVGProps<SVGSVGElement>) => {
    const height = ((Number(width) * 24) / 24).toString();

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            {...props}
        >
            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
            <path
                d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default CloseIcon;
