import { Header } from "../components/Header";
import "./HomePage.css";
import "../index.css";

export function HomePage() {
  return (
      <main className="home-content">
        <Header />
        <div className="home-main-content-wrapper">
          <section className="home-main-content">
            <div className="text-section">
              <p className="intro-text">So, you want to travel to</p>
              <h1 className="main-heading">Space</h1>
              <p className="description">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>

            <div className="image-section">
              <button className="explore-btn">Explore</button>
            </div>
          </section>
        </div>
      </main>
  );
}
