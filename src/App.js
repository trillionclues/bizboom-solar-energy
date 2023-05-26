import { BrowserRouter, Routes, Route } from 'react-router-dom';

// elements
import SharedLayouts from './components/SharedLayout';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <SharedLayouts>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/products' element={<Products />} />
          <Route path='products/:productId' element={<Products />} />
          {/* <Route path='batteries/:productId' element={<h1>battery</h1>} /> */}
          {/* <Route path='inverters/:productId' element={<h1>inverters</h1>} /> */}
          {/* <Route path='panels/:productId' element={<h1>panels</h1>} /> */}
          {/* <Route path='inverters/:productId' element={<h1>battery</h1>} /> */}
          <Route path='/about' element={<About />} />
          <Route path='*' element={<div>Error found...</div>} />
        </Routes>
      </SharedLayouts>
    </BrowserRouter>
  );
}

export default App;
