import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useStore } from '../context/StoreContext.jsx';

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useStore();

  return (
    <div className="cart-item bg-white border p-3 mb-3">
      <div className="row g-3 align-items-center">
        <div className="col-3 col-md-2">
          <img className="cart-thumb" src={item.image} alt={item.title} />
        </div>
        <div className="col-9 col-md-4">
          <Link className="fw-semibold text-dark text-decoration-none" to={`/books/${item.id}`}>
            {item.title}
          </Link>
          <div className="text-muted small">by {item.author}</div>
          <div className="small">₹{item.price}</div>
        </div>
        <div className="col-6 col-md-3">
          <label className="form-label small text-muted" htmlFor={`qty-${item.id}`}>
            Quantity
          </label>
          <input
            id={`qty-${item.id}`}
            type="number"
            min="1"
            className="form-control form-control-sm"
            value={item.quantity}
            onChange={(event) => updateQuantity(item.id, event.target.value)}
          />
        </div>
        <div className="col-4 col-md-2 fw-bold">₹{item.price * item.quantity}</div>
        <div className="col-2 col-md-1 text-end">
          <button
            className="btn btn-outline-danger btn-sm icon-button"
            onClick={() => removeFromCart(item.id)}
            aria-label={`Remove ${item.title}`}
            title="Remove"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
