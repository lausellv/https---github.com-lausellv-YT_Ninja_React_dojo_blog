const Home = () => {
  const handleClick = function (e) {
    console.log("hello ninjas", e);
  };


  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
