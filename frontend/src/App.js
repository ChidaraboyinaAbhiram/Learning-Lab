import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import ExperimentPage from './pages/ExperimentPage';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Leaderboard from './pages/Leaderboard';
import { ThemeProvider } from './context/ThemeContext';
import Profile from './pages/Profile';
import './App.css';
import './styles/global.css';
import './styles/DarkMode.css';

// Layout wrapper component for main app
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

function App() {
  return (
    <ThemeProvider>
    <AuthProvider>
      <Router>
        <Routes>
          {/* Auth routes (no layout) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Main app routes (with layout) */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/experiment/:id" element={<MainLayout><ExperimentPage /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path ="/leaderboard" element={<MainLayout><Leaderboard /></MainLayout>} />
          <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
        </Routes>
      </Router>
    </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
