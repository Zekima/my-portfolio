'use client';

import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
    const { setTheme, resolvedTheme } = useTheme();

    const handleThemeChange = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return <button className="theme-switcher outline-none" onClick={handleThemeChange}/>
}
