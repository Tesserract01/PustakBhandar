import { Link } from 'react-router-dom';
import BookGrid from '../components/BookGrid.jsx';
import { useStore } from '../context/StoreContext.jsx';

export default function Wishlist() {
  const { wishlist } = useStore();

  return (
    <section className="container py-5">
      <div className="mb-4">
        <p className="text-uppercase text-muted fw-semibold small mb-1">Saved Books</p>
        <h1 className="h2">Wishlist</h1>
      </div>
      {wishlist.length > 0 ? (
        <BookGrid books={wishlist} />
      ) : (
        <div className="empty-state border bg-white p-4 text-center">
          <h2 className="h4">No saved books yet</h2>
          <p className="text-muted">Use the heart button on a book to save it for later.</p>
          <Link className="btn btn-primary" to="/shop">
            Visit Shop
          </Link>
        </div>
      )}
    </section>
  );
}
