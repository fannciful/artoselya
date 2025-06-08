import React, { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lightTheme, darkTheme } from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [mode, setMode] = useState(() => localStorage.getItem('appTheme') || 'light');

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('appTheme', newMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar toggleTheme={toggleTheme} mode={mode} />
        <Container maxWidth="lg" sx={{ mt: 10, minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
