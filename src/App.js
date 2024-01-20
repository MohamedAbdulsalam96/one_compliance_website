import React from 'react';
import './App.css';

import Navbar from './components/header';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import Doc from './pages/doc';
import KeyFeatures from './pages/key_features';
import Pricing from './pages/pricing';


function App() {
	
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/doc' element={<Doc />} />
				<Route path='/key_features' element={<KeyFeatures />} />
				<Route path='/pricing' element={<Pricing />} />


			</Routes>
		</Router>
	);
}

export default App;
