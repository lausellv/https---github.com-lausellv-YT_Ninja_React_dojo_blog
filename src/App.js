import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <br></br>
        <a href={link}> Google Site </a>
      </div>
      
    </div>
  );
}

export default App;
