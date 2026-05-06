import { FaBookOpen } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-top py-4 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-3">
        <div>
          <div className="fw-bold d-flex align-items-center gap-2">
            <FaBookOpen className="brand-icon" />
            PustakBhandar
          </div>
          <p className="text-muted mb-0 small">Traditional books, simple shopping, thoughtful reading.</p>
        </div>
        <div className="text-muted small">Copyright (c) 2026 Made with love by Team Asu</div>
      </div>
    </footer>
  );
}
