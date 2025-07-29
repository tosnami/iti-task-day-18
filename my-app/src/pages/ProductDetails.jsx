import { useParams, Outlet, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="container py-4">
      <h2>Details for Product #{id}</h2>
      <nav className="mb-3">
        <Link to="description" className="btn btn-outline-primary me-2">Description</Link>
        <Link to="reviews" className="btn btn-outline-secondary">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProductDetails;