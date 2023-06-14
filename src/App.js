import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const title = "Welcome to the test site";
  const likes = 50;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
