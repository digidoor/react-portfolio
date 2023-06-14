import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Contact from './pages/Contact';

function App() {
	const title = "Welcome to the test site";
	const likes = 50;

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/pokes' element={<Pokemon />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
