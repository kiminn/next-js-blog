import Image from 'next/image';
import Head from 'next/head';
import BlogPost from 'components/BlogPost';
import { FC } from 'react';

// Meta 컴포넌트의 프로퍼티 타입 정의
interface Props {
    title: string;
    type: string;
    description: string;
    url: string;
    image: string;
}

// Meta 컴포넌트 정의
const Meta: FC<Props> = ({ title, type, description, url, image }) => (
    <Head>
        <meta property="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
    </Head>
);

export default function Home() {
    return (
        <div className="max-w-screen-md min-w-[320px] mx-auto ">
            <Meta
                title="Kimi's Blog"
                type="website"
                description="함께 성장하는 개발자 입니다."
                url="https://next-js-blog-three.vercel.app/"
                image=""
            />
            <section className="flex gap-8 items-center flex-wrap">
                <Image src="/prof.jpeg" alt="profile" width={300} height={300} className="rounded-full justify-start" />
                <div className="min-w-[250] max-w-[300px]">
                    <h2 className="font-bold text-xl dark:text-blue-300">Developing Together!</h2>
                    <br />
                    <p>스터디를 진행하며 나누고 싶은 주제들을 </p>
                    <p>공유하기 위해 만든 블로그입니다 🩵</p>
                    <div className="flex gap-5 items-center mt-4">
                        <a
                            href="mailto:808010x@gmail.com"
                            className="flex gap-2 items-center transition duration-200 ease-in-out transform hover:text-blue-300 hover:fill-blue-300  dark:fill-white dark:hover:fill-blue-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
                            </svg>
                            <p>Mail</p>
                        </a>
                        <a
                            href="https://github.com/kiminn"
                            className="flex gap-2 items-center transition duration-200 ease-in-out transform hover:text-blue-300 hover:fill-blue-300  dark:fill-white  dark:hover:fill-blue-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <p>GitHub</p>
                        </a>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <hr />
            <section className="mt-12 mb-10">
                <h1 className="font-semibold text-2xl sm:text-2xl font-mono  text-gray-700 dark:text-white">
                    🌿 Recent Posts
                </h1>
            </section>
            <div className="py-2">
                <BlogPost />
            </div>
        </div>
    );
}
