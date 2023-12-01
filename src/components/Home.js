import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Abdenour");
  const HandleClick = () => {
    setName("Youcef");
  };

  return (
    <div className="Home">
      <h2>{name}</h2>
      <button onClick={HandleClick}>Click me</button>
    </div>
  );
};

export default Home;
