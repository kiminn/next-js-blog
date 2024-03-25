'use client';

import Nav from './Nav';

import Head from 'next/head';

export default function Header() {
    return (
        <>
            <Head>
                <title>Kimi.Log</title>
            </Head>
            <section className="my-10">
                <h1 className="first-letter:font-bold text-2xl sm:text-4xl">Kimi.Log</h1>
            </section>
            <header className="sticky top-0 left-0 w-full z-10 h-20 font-mono transition duration-500 bg-white ">
                <div className="flex-nowrap items-center justify-center gap-5 text-center hidden sm:flex">
                    <Nav type="normal" />
                </div>
            </header>
        </>
    );
}
