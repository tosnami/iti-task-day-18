import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Prod 1', price: 100, desc: 'desc 1', counter: 0, onSale: true },
    { id: 2, name: 'Prod 2', price: 200, desc: 'desc 2', counter: 3, onSale: false },
    { id: 3, name: 'Prod 3', price: 300, desc: 'desc 3', counter: 5, onSale: true },
    { id: 3, name: 'Prod 4', price: 300, desc: 'desc 4', counter: 7, onSale: true },
  ]);

  useEffect(() => {
    console.log('Component mounted');
  }, []);

  useEffect(() => {
    console.log('Products state changed', products);
  }, [products]);

  const deleteProduct = (id) => {
    setProducts(products.filter((prod) => prod.id !== id));
  };

  return (
    <>
      <Navbar />
      <div
        className="px-3 py-4"
        style={{
          width: '100vw',        
          minHeight: '100vh',    
          backgroundColor: '#f8f9fa',
        }}
      >
        <div className="row g-3">
          {products.map((prod) => (
            <div key={prod.id} className="col-md-4">
              <ProductCard product={prod} onDelete={deleteProduct} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;