import '@/styles/components.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-title">About us</h2>
          <p className="footer-description">
            MUICT AI Club<br />
            Faculty of Information and Communication Technology, Mahidol University<br />
            999 Phutthamonthon Sai 4 Road, Salaya,<br />
            Nakhon Pathom 73170, Thailand <br />
          </p>
        </div>
        <div className="footer-right">
          <h2 className="footer-title">Contact</h2>
          <p className="footer-description">
            <strong>Email</strong> <br />
            muictaiclub@gmail.com<br />
            <strong>Instagram</strong> <br />
            @muict_ai_club
          </p>
        </div>
      </div>
      {/* <div className="footer-bottom">
          <p className="footer-copyright">© 2025 MUICT AI Club. All rights reserved.</p>
        </div> */}
    </footer>
  );
}
