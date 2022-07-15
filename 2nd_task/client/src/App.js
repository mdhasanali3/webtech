import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./page/home";
import Login from "./page/login";
import Register from "./page/register";
import Create from "./page/createBlog";
import Profile from "./page/profile";
import Blog from "./page/blog";
import NotFound from "./page/notFound";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/Create" element={<Create />} />
        <Route path="*" element={<NotFound code={404} msg={"Page Not Found"} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
