import { Search, Skyline } from "../index";

function SkylineContainer({ setBoroughName }) {
  return (
    <div className="skyline-container">
      <Skyline />
      <Search setBoroughName={setBoroughName} />
    </div>
  );
}

export default SkylineContainer;
