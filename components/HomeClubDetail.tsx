import '@/styles/components.css';

export default function HomeCardsSection() {
    return (
        <section className="home-cards-wrapper">
            <h2 className="home-cards-title">Our Activities</h2>

            <div className="home-cards-section">
                <div className="home-card">
                    <h3 className="home-card-title">Workshops</h3>
                    <p className="home-card-text">
                        Discover and explore the latest AI tools through hands-on workshops.
                    </p>
                </div>
                <div className="home-card">
                    <h3 className="home-card-title">Knowledge sharing session</h3>
                    <p className="home-card-text">
                        Exchange ideas, share real-world experiences, and discuss emerging trends.
                    </p>
                </div>
                <div className="home-card">
                    <h3 className="home-card-title">Hackathon</h3>
                    <p className="home-card-text">
                        Challenge yourself in competitions to evaluate your creativity, collaboration, and coding expertise.
                    </p>
                </div>
            </div>
        </section>
    );
}
