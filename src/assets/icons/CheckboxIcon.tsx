import { SVGProps } from 'react'

const CheckboxIcon = ({ width = '24', ...props }: SVGProps<SVGSVGElement>) => {
    const height: number = (Number(width) * 24) / 24

    return (
        <svg
            width={width}
            height={height.toString()}
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
        </svg>
    )
}

export default CheckboxIcon
