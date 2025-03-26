import Link from 'next/link';
import Image from 'next/image';
import '@/styles/components.css';

export default function NewsCard({
  slug,
  title,
  intro,
  img,
  date
}: {
  slug: string;
  title: string;
  intro: string;
  img: string;
  date: string;
}) {
  return (
    <div className="news-card">
      <div className="news-image-wrapper">
        <Image src={img} alt={title} width={300} height={200} className="object-cover w-full h-full rounded" />

      </div>

      <div className="news-text">
        <h2 className="news-title">
          <Link href={`/news/${slug}`}>{title}</Link>
          <div className="news-date">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </h2>
        <p className="news-intro">{intro}</p>
      </div>
    </div>
  );
}
