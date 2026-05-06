import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { useStore } from '../context/StoreContext.jsx';

export default function BookCard({ book }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const navigate = useNavigate();
  const wished = isWishlisted(book.id);

  const buyNow = () => {
    navigate('/checkout', {
      state: {
        source: 'buy-now',
        items: [{ ...book, quantity: 1 }]
      }
    });
  };

  return (
    <div className="card book-card h-100">
      <Link to={`/books/${book.id}`} className="book-cover-link">
        <img src={book.image} className="card-img-top book-cover" alt={book.title} />
      </Link>
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between gap-2 mb-2">
          <span className="badge text-bg-light border">{book.category}</span>
          <span className="small text-muted d-flex align-items-center gap-1">
            <FaStar className="rating-star" /> {book.rating}
          </span>
        </div>
        <h2 className="h6 card-title mb-1">
          <Link className="text-dark text-decoration-none" to={`/books/${book.id}`}>
            {book.title}
          </Link>
        </h2>
        <p className="text-muted small mb-2">by {book.author}</p>
        <p className="fw-bold mb-3">Rs. {book.price}</p>
        <div className="mt-auto d-grid gap-2">
          <button className="btn btn-primary btn-sm" onClick={buyNow}>
            Buy Now
          </button>
          <div className="d-flex gap-2">
            <button
              className="btn btn-outline-primary btn-sm flex-grow-1"
              onClick={() => addToCart(book)}
            >
              <FaShoppingCart /> Add to Cart
            </button>
            <button
              className="btn btn-outline-secondary btn-sm icon-button"
              onClick={() => toggleWishlist(book)}
              aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
              title={wished ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              {wished ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
