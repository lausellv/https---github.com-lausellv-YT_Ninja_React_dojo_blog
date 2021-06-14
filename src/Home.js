import { useState } from "react";
const Home = () => {
  // let name = "Mario";
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(27);
  const handleClick = function () {
    setName("luigi");
    setAge(45);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
