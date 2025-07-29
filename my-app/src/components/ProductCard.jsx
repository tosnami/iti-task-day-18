import { Link } from 'react-router-dom';

function ProductCard({ product, onDelete }) {
  return (
    <div className="card bg-warning position-relative">
      {product.onSale && (
        <span className="badge bg-danger position-absolute top-0 end-0 m-2">OnSale</span>
      )}
      <div className="card-body">
        <h5 className="card-title">Prod Name: {product.name}</h5>
        <h6 className="card-subtitle mb-2">Prod Price: {product.price}</h6>
        <p className="card-text">Prod Desc: {product.desc}</p>
        <p className="card-text fw-bold">Counter: {product.counter}</p>
        <button onClick={() => onDelete(product.id)} className="btn btn-danger btn-sm">
          <i className="fas fa-trash-alt me-1"></i> Delete
        </button>
        <br />
        <Link to={`/products/${product.id}`} className="btn btn-link px-0 mt-2">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;