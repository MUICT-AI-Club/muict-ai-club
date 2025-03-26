import fs from 'fs';
import matter from 'gray-matter';
import Navbar from '@/components/Navbar';
import NewsCard from '@/components/NewsCard';
import { useState } from 'react';
import '@/styles/components.css';
import Footer from '@/components/Footer';

const POSTS_PER_PAGE = 5;

export async function getStaticProps() {
  const files = fs.readdirSync('content/news').filter(file => file.endsWith('.md'));
  const news = files.map((filename) => {
    const fileContent = fs.readFileSync(`content/news/${filename}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      intro: data.intro,
      img: data.img,
      date: data.date,
    };
  });

  news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { props: { news } };
}

export default function NewsPage({ news }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(news.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentNews = news.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <>
      <Navbar />
      <div className="news-container">
        <h1 className="news-heading">Updates</h1>

        {currentNews.map((item: any) => (
          <NewsCard key={item.slug} {...item} />
        ))}

        <div className="pagination-nav">
          <div style={{ visibility: currentPage > 1 ? 'visible' : 'hidden' }}>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="nav-button"
            >
              ← Newer
            </button>
          </div>

          <div style={{ visibility: currentPage < totalPages ? 'visible' : 'hidden' }}>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="nav-button"
            >
              Older →
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
