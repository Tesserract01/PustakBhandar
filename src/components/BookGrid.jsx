import BookCard from './BookCard.jsx';

export default function BookGrid({ books }) {
  if (books.length === 0) {
    return <div className="alert alert-light border">No books found for the selected search.</div>;
  }

  return (
    <div className="row g-4">
      {books.map((book) => (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={book.id}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
}
