import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Estados } from './components/context/DataContext';
import './index.css';
import App from './App';
import Home from './routes/Home'
import Productos from './routes/Productos';
import Contacto from './routes/Contacto'
import NotFound from './routes/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Estados>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='Home' element={<Home />} />
        <Route path='Productos' element={<Productos />}/>
        <Route path='Contacto' element={ <Contacto />} />
        <Route path='*' element={ <NotFound />} />
      </Route>
    </Routes>
    </Estados>
  </BrowserRouter>
);

