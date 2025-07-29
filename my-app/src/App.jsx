import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Description from './pages/Description';
import Reviews from './pages/Reviews';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />}>
        <Route path="description" element={<Description />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;