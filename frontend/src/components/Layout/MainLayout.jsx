import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
