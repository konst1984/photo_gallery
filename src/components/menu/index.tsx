import { memo, useMemo, useRef, useState } from 'react';

import DarkThemeIcon from '../../assets/icons/DarkThemeIcon';
import LightThemeIcon from '../../assets/icons/LightThemeIcon';
import SettingIcon from '../../assets/icons/SettingIcon';
import SystemThemeIcon from '../../assets/icons/SystemThemeIcon';
import useOutsideClick from '../../hooks/useOutsideClick';
import { useTheme } from '../../hooks/useTheme';
import ButtonCircle from '../ui/buttonCircle';

const commonStyle =
    'outline outline-2 outline-stone-500 hover:outline hover:outline-blue-500 focus-visible:outline focus-visible:text-blue-500 hover:text-blue-500 focus-visible:outline-blue-500';

const Menu = memo(() => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const { onLightTheme, onDarkTheme, onSystemTheme } = useTheme();

    const menuRef = useRef<HTMLButtonElement | null>(null);

    useOutsideClick(menuRef, () => setOpenMenu(false), openMenu);

    const options = useMemo(
        () => [
            {
                icon: <LightThemeIcon />,
                title: 'light theme',
                animate: 'animate-onLightThemeDown sm:animate-onLightTheme',
                action: onLightTheme,
            },
            {
                icon: <DarkThemeIcon />,
                title: 'dark theme',
                animate: 'animate-onDarkThemeDown sm:animate-onDarkTheme',
                action: onDarkTheme,
            },
            {
                icon: <SystemThemeIcon />,
                title: 'system theme',
                animate: 'animate-onSystemThemeDown sm:animate-onSystemTheme',
                action: onSystemTheme,
            },
        ],
        []
    );

    const handleToggleMenu = () => {
        setOpenMenu((prev) => !prev);
    };

    return (
        <>
            {openMenu ? (
                <>
                    {options.map((item) => (
                        <ButtonCircle
                            key={item.title}
                            styles={`fixed w-12 h-12 top-6 right-6 z-[100] ${commonStyle} ${item.animate}`}
                            onClick={item.action}
                            title={item.title}
                            aria-label={item.title}
                        >
                            <span className="grid w-full items-center justify-center hover:scale-110">
                                {item.icon}
                            </span>
                        </ButtonCircle>
                    ))}
                </>
            ) : null}
            <ButtonCircle
                ref={menuRef}
                onClick={handleToggleMenu}
                title="Toggle theme"
                aria-label="Toggle theme"
                styles={`right-2 top-2 z-[100] h-16 w-16 ${commonStyle}`}
            >
                <SettingIcon />
            </ButtonCircle>
        </>
    );
});

export default Menu;
