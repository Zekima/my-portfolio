'use client';

import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
    const { setTheme, resolvedTheme } = useTheme();

    const handleThemeChange = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button 
            className="theme-switcher focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary" 
            onClick={handleThemeChange}
        />
    )
}
