// src/components/Layout.js

import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      {/* NavBar at the top */}
      <NavBar />

      {/* Main content */}
      <main>{children}</main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;