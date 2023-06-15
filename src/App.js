import { Route, Routes, HashRouter } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Zelda from './pages/Zelda';

function App() {
	const title = "Welcome to the test site";
	const likes = 50;

	return (
		<HashRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/pokes' element={<Pokemon />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/zelda' element={<Zelda />} />
				<Route path='/resume' element={<Resume />} />
			</Routes>
			<Footer />
		</HashRouter>
	);
}

export default App;
