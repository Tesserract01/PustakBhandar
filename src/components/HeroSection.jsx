import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="hero-section border-bottom">
      <div className="container hero-content">
        <p className="hero-kicker text-uppercase fw-semibold small mb-2">House of Books</p>
        <h1 className="hero-title fw-bold mb-3">PustakBhandar</h1>
        <p className="hero-subtitle mb-4">
           Discover books that shape knowledge,
          sharpen thinking, and deepen wisdom.
        </p>
        <div className="d-flex gap-2 flex-wrap">
          <Link className="btn btn-primary" to="/shop">
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
