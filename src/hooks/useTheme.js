import { useEffect, useState } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme) {
            setTheme(theme);
        }
    })
};
