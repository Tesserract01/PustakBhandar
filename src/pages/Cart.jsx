import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem.jsx';
import { useStore } from '../context/StoreContext.jsx';

export default function Cart() {
  const { cartItems, cartTotal } = useStore();

  if (cartItems.length === 0) {
    return (
      <section className="container py-5">
        <div className="empty-state border bg-white p-4 text-center">
          <h1 className="h3">Your cart is empty</h1>
          <p className="text-muted">Add books from the shop to see them here.</p>
          <Link className="btn btn-primary" to="/shop">
            Browse Books
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-5">
      <div className="mb-4">
        <p className="text-uppercase text-muted fw-semibold small mb-1">Shopping Cart</p>
        <h1 className="h2">Cart</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-8">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="col-lg-4">
          <div className="order-summary bg-white border p-4">
            <h2 className="h5 mb-3">Order Summary</h2>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className="d-flex justify-content-between mb-3 text-muted">
              <span>Delivery</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold h5">
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>
            <Link className="btn btn-primary w-100 mt-3" to="/checkout">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
