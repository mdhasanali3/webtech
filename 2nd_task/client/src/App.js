import React from "react";
import {BrowserRouter , Routes,  Route} from 'react-router-dom';
import Home from "./page/home";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/home" element={<Home/>} />
			</Routes>
		</BrowserRouter> 
	);
}
export default App;
