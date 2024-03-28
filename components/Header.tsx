import Link from 'next/link';
import Nav from './Nav';
import Head from 'next/head';
import { Cat } from 'lucide-react';
import { MUISwitch } from './MUISwitch';

export default function Header() {
    return (
        <div className="container flex justify-between items-center py-2">
            <Head>
                <title>Kimi.Log</title>
            </Head>
            <section className="my-10">
                <Link href="/" className="flex font-medium text-2xl sm:text-4xl cursor-pointer">
                    <Cat size={40} className="items-center pt-1" />
                    Kimi.Log
                </Link>
            </section>
            <MUISwitch />
            <header className="sticky top-0 left-0 w-full z-10 h-20 font-mono transition duration-500 ">
                <div className="justify-end gap-5 text-center hidden sm:flex pt-7  ">
                    <Nav />
                </div>
            </header>
        </div>
    );
}
