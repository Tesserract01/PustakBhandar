import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { books } from '../data/books.js';
import { useStore } from '../context/StoreContext.jsx';

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((item) => item.id === id);
  const { addToCart, toggleWishlist, isWishlisted } = useStore();

  if (!book) {
    return (
      <section className="container py-5">
        <div className="alert alert-warning">Book not found.</div>
        <Link to="/shop" className="btn btn-primary">
          Back to Shop
        </Link>
      </section>
    );
  }

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
    <section className="container py-5">
      <div className="row g-5">
        <div className="col-md-5">
          <img className="details-cover border" src={book.image} alt={book.title} />
        </div>
        <div className="col-md-7">
          <p className="text-uppercase text-muted fw-semibold small mb-1">{book.category}</p>
          <h1 className="h2 mb-2">{book.title}</h1>
          <p className="text-muted">by {book.author}</p>
          <p className="d-flex align-items-center gap-1 text-muted">
            <FaStar className="rating-star" /> {book.rating} reader rating
          </p>
          <p className="h4 fw-bold mb-4">Rs. {book.price}</p>
          <p className="details-description">{book.description}</p>
          <div className="d-flex gap-2 flex-wrap mt-4">
            <button className="btn btn-primary" onClick={buyNow}>
              Buy Now
            </button>
            <button className="btn btn-outline-primary" onClick={() => addToCart(book)}>
              <FaShoppingCart /> Add to Cart
            </button>
            <button className="btn btn-outline-secondary" onClick={() => toggleWishlist(book)}>
              {wished ? <FaHeart /> : <FaRegHeart />} {wished ? 'Wishlisted' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
