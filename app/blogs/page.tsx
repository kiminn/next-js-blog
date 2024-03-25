import Link from 'next/link';

export type BlogProps = {
    blogs: Blog[];
};

export type Blog = {
    meta: {
        title: string;
        description: string;
        date: string;
    };
    slug: string;
};
export default function BlogPost({ blogs }: BlogProps) {
    return (
        <>
            {blogs?.map((blog) => (
                <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
                    <div className="py-2 flex justify-between align-middle gap-2">
                        <div>
                            <h3 className="text-lg font-bold transition duration-200 ease-in-out transform hover:text-blue-300 hover:fill-blue-300">
                                {blog.meta.title}
                            </h3>
                            <div>
                                <p className="text-gray-600">{blog.meta.description}</p>
                            </div>
                            <div className="my-auto text-gray-400">
                                <p>{blog.meta.date}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
}
