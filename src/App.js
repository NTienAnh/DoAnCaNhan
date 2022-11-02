import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Book, Books, Login, Logout, Admin, ErrPage, Dashboard,Details } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/details" element={<Details />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/*" element={<ErrPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
