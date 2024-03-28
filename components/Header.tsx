'use client';

import Link from 'next/link';
import Nav from './Nav';
import Head from 'next/head';
import { Cat } from 'lucide-react';
import { MUISwitch } from './MUISwitch';
import { useEffect, useRef, useState } from 'react';

type Theme = null | 'dark' | 'light';

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const [theme, setTheme] = useState<Theme>('light');

    const handleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        window.localStorage.setItem('theme', newTheme);
        document.body.className = newTheme;
    };

    // 스크롤이 내려가면 헤더 하단에 그림자 속성을 주기 위해서 사용
    const handleScroll = () => {
        if (window.scrollY > 0) {
            headerRef.current?.classList.add('shadow-[0_5px_7px_0px_#ececec]');
            return;
        }
        headerRef.current?.classList.remove('shadow-[0_5px_7px_0px_#ececec]');
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setTheme(document.body.className as Theme);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header ref={headerRef} className="sticky top-0 left-0 transition duration-500 z-30 mb-8">
            <Head>
                <title>Kimi.Log</title>
            </Head>
            <div className="max-w-screen-md min-w-[320px] mx-auto container flex justify-between  bg-white dark:bg-[#111111]">
                <section className="my-7">
                    <Link href="/" className="flex font-medium text-2xl sm:text-4xl cursor-pointer items-center">
                        <Cat size={40} className="items-center pt-1" />
                        Kimi.Log
                    </Link>
                </section>
                <div className="justify-end gap-5 text-center hidden sm:flex items-center">
                    <Nav />
                    <MUISwitch onClick={handleTheme} />
                </div>
            </div>
        </header>
    );
}
