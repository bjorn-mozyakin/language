import React from 'react';
import { Link } from 'react-router-dom';

export const MainMenu = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="numbers">Numbers</Link>
        <Link to="verbs">Verbs</Link>
      </nav>
    </div>
  );
};

export default MainMenu;
