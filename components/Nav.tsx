import Link from 'next/link';

export const nav: { title: string; location: string }[] = [
    { title: 'Home', location: '/' },
    { title: 'Blog', location: '/blog' },
    { title: 'About', location: '/about' },
  ];

interface NavProps {
  type: 'toggle' | 'normal';
  onClick?: () => void;
}

export default function Nav({ type, onClick }: NavProps) {
  const defaultStyleString =
    'dark:text-white dark:hover:text-green-500 text-center transition duration-250 hover:scale-125 hover:text-green-500';
  return (
    <>
      {nav.map((item) => {
        const { title, location } = item;
        return (
          <Link
            href={location}
            key={title}
            className={
              type === 'normal' ? defaultStyleString : defaultStyleString + ' text-lg py-4'
            }
            onClick={
              onClick
                ? onClick
                : () => {
                    return;
                  }
            }
          >
            {title}
          </Link>
        );
      })}
    </>
  );
}
