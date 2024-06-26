'use client';
import Link from 'next/link';

export const nav: { label: string; location: string }[] = [
    { label: 'Home', location: '/' },
    { label: 'Blog', location: '/blogs' },
    { label: 'About', location: '/about' },
];

interface NavProps {
    onClick?: () => void;
}

export default function Nav({ onClick }: NavProps) {
    return (
        <>
            {nav.map((el) => {
                const { label, location } = el;
                return (
                    <Link
                        href={location}
                        key={label}
                        onClick={onClick}
                        className="transition duration-200 ease-in-out transform hover:text-blue-300 hover:fill-blue-300 dark:text-white dark:hover:text-blue-300 dark:hover:fill-blue-300"
                    >
                        {label}
                    </Link>
                );
            })}
        </>
    );
}
