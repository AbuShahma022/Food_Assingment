import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'; 
import CreatePage from './Pages/CreatePage';
import UpdatePage from './Pages/UpdatePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage/>} />
        <Route path="/update/:id" element={<UpdatePage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
