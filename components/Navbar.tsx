import Link from 'next/link';
import Image from 'next/image';
import '@/styles/components.css';

export default function Navbar() {
  return (
    <nav className="navbar justify-center">
      <div className="navbar-content">
        <div className="navbar-left">
          <Link href="/" className="navbar-logo-link">
            <div className="navbar-logo">
              <Image src="/muict-ai-club/logo.png" alt="Logo" width={40} height={40} />
              <span className="navbar-logo-text">MUICT AI Club</span>
            </div>
          </Link>
        </div>
        <div className="navbar-menu text">
          <Link href="/news" className='navbar-menu-link'>NEWS</Link>
          <Link href="/OurTeam" className='navbar-menu-link'>OUR TEAM</Link>
        </div>
      </div>
    </nav>
  );
}
