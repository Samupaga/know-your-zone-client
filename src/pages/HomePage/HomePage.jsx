import { SkylineContainer, London } from "../../components";
import "./homepage.css";

function HomePage({ setBoroughName }) {
  return (
    <>
      <div className="hero-container">
        <h1 className="home-title">Know Your Zone</h1>
        <p>Everything you need to know about London Boroughs in one place</p>

        <SkylineContainer setBoroughName={setBoroughName} />
        <London />
      </div>
    </>
  );
}

export default HomePage;
