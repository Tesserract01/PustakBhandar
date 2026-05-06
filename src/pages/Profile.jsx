import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaHeart,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaTrash,
  FaUser
} from 'react-icons/fa';
import { useStore } from '../context/StoreContext.jsx';

export default function Profile() {
  const { wishlist, addToCart, toggleWishlist } = useStore();

  return (
    <section className="container py-5">
      <div className="mb-4">
        <p className="text-uppercase text-muted fw-semibold small mb-1">Account</p>
        <h1 className="h2">Profile</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="bg-white border p-4 text-center profile-card">
            <div className="profile-avatar mx-auto mb-3">
              <FaUser />
            </div>
            <h2 className="h5 mb-1">Reader Account</h2>
            <p className="text-muted mb-0">PustakBhandar customer</p>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="bg-white border p-4">
            <h2 className="h5 mb-3">Basic Information</h2>
            <div className="list-group list-group-flush">
              <div className="list-group-item px-0 d-flex align-items-center gap-3">
                <FaEnvelope className="text-muted" />
                reader@example.com
              </div>
              <div className="list-group-item px-0 d-flex align-items-center gap-3">
                <FaMapMarkerAlt className="text-muted" />
                India
              </div>
            </div>
            <button className="btn btn-outline-primary mt-3">Edit Profile</button>
          </div>
          <div className="bg-white border p-4 mt-4">
            <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
              <h2 className="h5 mb-0 d-flex align-items-center gap-2">
                <FaHeart className="brand-icon" /> Wishlist
              </h2>
              <span className="badge text-bg-secondary rounded-pill">{wishlist.length} Saved</span>
            </div>
            {wishlist.length === 0 ? (
              <div className="text-muted small">
                No books in wishlist right now. Browse the shop and save books to track them here.
              </div>
            ) : (
              <div className="wishlist-panel-list">
                {wishlist.slice(0, 6).map((book) => (
                  <div className="wishlist-panel-item border rounded-2 p-2 mb-2" key={book.id}>
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div>
                        <Link className="text-dark text-decoration-none fw-semibold small" to={`/books/${book.id}`}>
                          {book.title}
                        </Link>
                        <div className="text-muted small">{book.author}</div>
                        <div className="small fw-semibold">₹{book.price}</div>
                      </div>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => addToCart(book)}
                        >
                          <FaShoppingCart /> Add
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary icon-button"
                          onClick={() => toggleWishlist(book)}
                          aria-label={`Remove ${book.title} from wishlist`}
                          title="Remove"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {wishlist.length > 6 && (
              <div className="small text-muted mt-2">Showing first 6 saved books.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
