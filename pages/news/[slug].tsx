import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Footer from '@/components/Footer';

export async function getStaticPaths() {
  const files = fs.readdirSync('content/news');
  const paths = files.map((filename) => ({ params: { slug: filename.replace('.md', '') } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const fileContent = fs.readFileSync(`content/news/${params.slug}.md`, 'utf-8');
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);

  return {
    props: {
      title: data.title,
      img: data.img,
      content: processedContent.toString(),
      date: new Date(data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    },
  };
}

export default function NewsDetail({ title, img, content, date }: any) {
  return (
    <>
      <Navbar />
      <div className="news-detail-container">
        <h1 className="news-detail-title">{title}</h1>
        <div className="news-detail-date">{date}</div>
        <Image src={img} alt={title} width={800} height={400} className="news-detail-image" />
        <div className="news-detail-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <Footer />
    </>
  );
}
