import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Services from './components/Services';
const Lazyexperience = lazy(() => import('./components/Experience'));
const Lazyportfolio = lazy(() => import('./components/Portfolio'));


ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<App/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/experience" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Lazyexperience/>
          </Suspense>
        }/>
    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);


