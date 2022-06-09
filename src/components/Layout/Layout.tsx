import React from 'react';
import { Outlet } from 'react-router-dom';

import MainMenu from '../MainMenu/MainMenu';

export const Layout = () => {
  return (
    <div>
      <MainMenu />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
