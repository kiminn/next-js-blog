import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Blog } from 'app/blogs/page';


export default function BlogPost() {
    const blogDir = 'blogs';

    // 파일 시스템에서 blogs 디렉토리에 있는 파일들을 읽어와서 배열을 생성
    const files = fs.readdirSync(path.join(blogDir));

    // 생성된 파일들로부터 meta 데이터와 slug를 추출하여 배열 생성
    const blogs = files.map((filename) => {
        const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');

        const { data: frontMatter } = matter(fileContent);
        return {
            meta: frontMatter,
            slug: filename.replace('.mdx', ''),
        } as Blog;
    });
    // 게시글을 날짜순으로 정렬
    const sortedBlogs = blogs.sort((a, b) => {
        const dateA = new Date(a.meta.date);
        const dateB = new Date(b.meta.date);
        return dateB.getTime() - dateA.getTime(); // 내림차순으로 정렬
    });

    return (
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {sortedBlogs?.map((blog) => (
                <Grid item key={blog.slug} xs={8} sm={6} md={4}>
                    <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
                        <Card
                            sx={{ maxWidth: 300, minHeight: 100 }}
                            className="mb-8 transition duration-100 ease-in-out transform hover:text-blue-300 hover:fill-blue-300 dark:bg-[#333333] dark:text-white dark:hover:text-blue-300 dark:hover:fill-blue-300"
                        >
                            <CardActionArea>
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        className="font-extrabold sm:text-2xl mt-2 transition"
                                    >
                                        {blog.meta.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        fontSize={16}
                                        className="text-lg transition dark:text-gray-400 mt-1"
                                    >
                                        {blog.meta.description}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        className="transition dark:text-gray-300"
                                    >
                                        {blog.meta.date}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
}
