import React, { forwardRef } from 'react';

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    styles: string;
    children: React.ReactNode;
}

const ButtonCircle = forwardRef<HTMLButtonElement, IButtonProps>(
    (props: IButtonProps, ref) => {
        const { styles, children, ...rest } = props;
        return (
            <button
                ref={ref}
                className={`${styles} flex cursor-pointer items-center justify-center 
            overflow-hidden rounded-full transition-all duration-300 hover:scale-110 active:scale-110`}
                {...rest}
                type="button"
            >
                {children}
            </button>
        );
    }
);

export default ButtonCircle;
