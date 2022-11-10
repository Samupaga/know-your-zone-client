import { useState } from "react";
import "./normalize.css";
import "./styles.css";
import { Container, InnerNav } from "./components";

function App() {
  return (
    <div>
      <InnerNav />
      <Container />
    </div>
  );
}

export default App;
