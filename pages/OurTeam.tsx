import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import '@/styles/components.css';

export async function getStaticProps() {
  const teamDir = path.join(process.cwd(), 'content/team');
  const files = fs.readdirSync(teamDir).filter(file => file.endsWith('.md'));

  const members = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(teamDir, filename), 'utf-8');
    const { data } = matter(fileContent);
    return data;
  });

  const groupedByBatch = members.reduce((acc, member) => {
    const batch = member.batch || 'Unknown';
    if (!acc[batch]) acc[batch] = [];
    acc[batch].push(member);
    return acc;
  }, {});

  return {
    props: { groupedByBatch },
  };
}

export default function OurTeam({ groupedByBatch }: any) {
  return (
    <>
      <Navbar />
      <div className="our-team-container">
        <h1 className="our-team-heading">Our Team</h1>
        {Object.keys(groupedByBatch).sort((a, b) => Number(b) - Number(a)).map((batch) => (
          <div key={batch} className="batch-section">
            <h2 className="batch-title">Batch {batch}</h2>
            <div className="team-flex-wrap">
              {groupedByBatch[batch].map((member: any, idx: number) => (
                <div className="team-card" key={idx}>
                  <div className="team-image-wrapper">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="team-image"
                    />
                  </div>
                  <div className="team-info">
                    <h3>{member.name} ({member.nickname})</h3>
                    <p>{member.role}</p>
                    <p>Website: <a href={member.website} target="_blank" rel="noopener noreferrer">{member.website}</a></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
