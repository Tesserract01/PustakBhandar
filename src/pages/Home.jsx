import { Link } from 'react-router-dom';
import BookGrid from '../components/BookGrid.jsx';
import HeroSection from '../components/HeroSection.jsx';
import { books } from '../data/books.js';

export default function Home() {
  const featuredBooks = books.filter((book) => book.featured);
  const newArrivals = [...books].slice(-4);

  return (
    <>
      <HeroSection />
      <section className="arrivals-section border-bottom">
        <div className="container arrivals-content py-5">
          <div className="text-light">
            <p className="arrivals-kicker text-uppercase fw-semibold small mb-2">Wisdom Shelves</p>
            <h2 className="h2 mb-0">New Arrivals</h2>
          </div>
          <div className="arrivals-grid mt-4">
            <BookGrid books={newArrivals} />
          </div>
        </div>
      </section>
      <section className="popular-section border-top">
        <div className="container popular-content py-5">
          <div className="d-flex justify-content-between align-items-end gap-3 mb-4">
            <div>
              <p className="popular-kicker text-uppercase fw-semibold small mb-1">Featured</p>
              <h2 className="h3 mb-0">Popular Books</h2>
            </div>
            <Link className="btn btn-outline-primary btn-sm" to="/shop">
              View All
            </Link>
          </div>
          <BookGrid books={featuredBooks} />
        </div>
      </section>
    </>
  );
}
