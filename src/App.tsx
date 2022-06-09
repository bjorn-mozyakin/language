import './App.css';

import React from 'react';
import { BrowserRouter, Navigate, Routes, Route, Link } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Error404 from './pages/Error404/Error404';
import Home from './pages/Home/Home';
import Numbers from './pages/Numbers/Numbers';
import Verbs from './pages/Verbs/Verbs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="numbers" element={<Numbers />} />
            <Route path="verbs" element={<Verbs />} />
            <Route path="error404" element={<Error404 />} />
            <Route path="*" element={<Navigate to="/error404" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
