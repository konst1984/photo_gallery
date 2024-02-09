export const setOverflowHidden = (selector: string, state: boolean) => {
    const target = document.querySelector(selector) as HTMLElement;
    if (state) {
        target.style.overflow = 'hidden';
    } else {
        target.style.overflow = 'auto';
    }
};
