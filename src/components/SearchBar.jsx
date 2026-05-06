import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ searchTerm, onSearchChange, category, onCategoryChange, categories }) {
  return (
    <div className="search-panel bg-white border p-3 mb-4">
      <div className="row g-3 align-items-center">
        <div className="col-md-8">
          <label className="form-label fw-semibold" htmlFor="bookSearch">
            Search Books
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white">
              <FaSearch />
            </span>
            <input
              id="bookSearch"
              className="form-control"
              type="search"
              placeholder="Search by title or author"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </div>
        </div>
        <div className="col-md-4">
          <label className="form-label fw-semibold" htmlFor="categoryFilter">
            Category
          </label>
          <select
            id="categoryFilter"
            className="form-select"
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
