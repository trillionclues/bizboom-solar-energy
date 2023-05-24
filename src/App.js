import { BrowserRouter, Routes, Route } from 'react-router-dom';

// elements
import SharedLayouts from './components/SharedLayout';
import LandingPage from './pages/LandingPage';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <SharedLayouts>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<div>Error found...</div>} />
        </Routes>
      </SharedLayouts>
    </BrowserRouter>
  );
}

export default App;
