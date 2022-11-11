import { Navbar, SkylineContainer, London } from "../../components";

function HomePage() {
  return (
    <>
      <div className="hero-container">
        <h1 className="home-title">Know Your Zone</h1>
        <p>Everything you need to know about London Boroughs in one place</p>

        <SkylineContainer />
        <London />
      </div>
    </>
  );
}

export default HomePage;
