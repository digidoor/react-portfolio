import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome to the test site";
  const likes = 50;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{"String" + " " + "Concatenation"}</p>
        <p>{ Math.random()*100 }</p>
        <br/>
        <Home />
      </div>
    </div>
  );
}

export default App;
