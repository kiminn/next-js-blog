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
                    <Link href={location} key={label} onClick={onClick}>
                        {label}
                    </Link>
                );
            })}
        </>
    );
}
