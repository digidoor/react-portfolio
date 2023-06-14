import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Pokemon from './pages/Pokemon';

function App() {
  const title = "Welcome to the test site";
  const likes = 50;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokes' element={<Pokemon />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
