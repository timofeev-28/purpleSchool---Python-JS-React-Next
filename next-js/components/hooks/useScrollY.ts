'use client';

import { useEffect, useState } from 'react';

export const useScrollY = (): number => {
    // хотя можно и не проверять, что мы в браузере, тк useEffect только в браузере вызывается
    const isBrowser = typeof window !== 'undefined'; // если typeof window === 'undefined', то мы находимся на сервере

    const [scrollY, setScrollY] = useState<number>(0);

    const handleScroll = () => {
        const currentScrollY = isBrowser ? window.scrollY : 0;
        setScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
}
