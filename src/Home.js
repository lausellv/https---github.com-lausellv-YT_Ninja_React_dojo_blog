import { useState } from "react";  // it's a hook to create a reactive value 

const Home = () => {

 
  // let name = "Mario";  this is a non reactive variable 
  const [name, setName] = useState("Mario");  // [initial value, function to change that value set<valueName>]
  const [age, setAge] = useState(28);

  const handleClickAgain = (name, e)=>{
console.log('Hello '+ name, e.bubbles) 
  }

  const handleClick = function (e) {
    console.log('hello ninjas', e)
    setName("Luigi");
    setAge(45);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e)=>handleClickAgain('Victor', e)}>Click me again</button>
      <button onClick={(e)=>{console.log('hello', e.target)}}>Click me one more time</button>
    </div>
  );
};

export default Home;
