import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookGrid from '../components/BookGrid.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { books, categories } from '../data/books.js';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFromQuery = searchParams.get('category');
  const validQueryCategory =
    selectedFromQuery && categories.includes(selectedFromQuery)
      ? selectedFromQuery
      : 'All';
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(validQueryCategory);

  useEffect(() => {
    setCategory(validQueryCategory);
  }, [validQueryCategory]);

  const handleCategoryChange = (nextCategory) => {
    setCategory(nextCategory);
    const nextParams = new URLSearchParams(searchParams);
    if (nextCategory === 'All') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', nextCategory);
    }
    setSearchParams(nextParams, { replace: true });
  };

  const filteredBooks = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return books.filter((book) => {
      const matchesCategory = category === 'All' || book.category === category;
      const matchesSearch =
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, category]);

  return (
    <section className="container py-5">
      <div className="mb-4">
        <p className="text-uppercase text-muted fw-semibold small mb-1">Book Collection</p>
        <h1 className="h2">Shop Books</h1>
      </div>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        category={category}
        onCategoryChange={handleCategoryChange}
        categories={categories}
      />
      <BookGrid books={filteredBooks} />
    </section>
  );
}
