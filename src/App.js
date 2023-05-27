import { BrowserRouter, Routes, Route } from 'react-router-dom';

// elements
import SharedLayouts from './components/SharedLayout';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './components/ProductDetail';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <SharedLayouts>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/products' element={<Products />} />
          <Route path='products/:productId' element={<ProductDetail />} />
          <Route
            path='collection/batteries/:productId'
            element={<h1>battery</h1>}
          />
          <Route
            path='collection/inverters/:productId'
            element={<h1>inverters</h1>}
          />
          <Route
            path='collection/solar-panels/:productId'
            element={<h1>panels</h1>}
          />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<div>Error found...</div>} />
        </Routes>
      </SharedLayouts>
    </BrowserRouter>
  );
}

export default App;
