'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
    const { setTheme, resolvedTheme } = useTheme();

    const handleThemeChange = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button className="theme-switcher" onClick={handleThemeChange}>
            {/* Button content is now handled by CSS (no need for SVG in JSX) */}
        </button>
    );
}
