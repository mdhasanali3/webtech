import React from "react";
import {BrowserRouter , Routes,  Route} from 'react-router-dom';
import Home from "./page/home";
import Login from "./page/login";
import Register from "./page/register";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
				<Route path="/login" element={<Login/>} />
				
    
    	</Routes>
		</BrowserRouter> 
	);
}
export default App;
