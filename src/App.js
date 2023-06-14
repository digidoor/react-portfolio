import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';

function App() {
  const title = "Welcome to the test site";
  const likes = 50;

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokes' element={<Pokemon />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
