import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

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
    // 게시글을 날짜순으로 정렬
    const sortedBlogs = blogs.sort((a, b) => {
        const dateA = new Date(a.meta.date);
        const dateB = new Date(b.meta.date);
        console.log('dateA', dateA);
        return dateB.getTime() - dateA.getTime(); // 내림차순으로 정렬
    });

    console.log('sortedBlogs', sortedBlogs);
    return (
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {sortedBlogs?.map((blog) => (
                <Grid item key={blog.slug} xs={8} sm={6} md={4}>
                    <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
                        <Card
                            sx={{ maxWidth: 300, maxHeight: 150 }}
                            className="mb-8 transition duration-200 ease-in-out transform hover:text-blue-300 hover:fill-blue-300"
                        >
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {blog.meta.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" fontSize={16}>
                                        {blog.meta.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
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
