import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../context/StoreContext.jsx';

export default function Checkout() {
  const location = useLocation();
  const { cartItems, clearCart } = useStore();
  const checkoutState = location.state ?? {};
  const checkoutItems = checkoutState.items?.length ? checkoutState.items : cartItems;
  const checkoutSource = checkoutState.source ?? 'cart';
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = useMemo(
    () =>
      checkoutItems.reduce(
        (sum, item) => sum + (item.quantity || 1) * item.price,
        0
      ),
    [checkoutItems]
  );

  const onPlaceOrder = (event) => {
    event.preventDefault();
    setOrderPlaced(true);
    if (checkoutSource !== 'buy-now') {
      clearCart();
    }
  };

  if (checkoutItems.length === 0) {
    return (
      <section className="container py-5">
        <div className="empty-state border bg-white p-4 text-center">
          <h1 className="h3">No items to checkout</h1>
          <p className="text-muted">Add books to cart or use Buy Now to continue.</p>
          <Link className="btn btn-primary" to="/shop">
            Go to Shop
          </Link>
        </div>
      </section>
    );
  }

  if (orderPlaced) {
    return (
      <section className="container py-5">
        <div className="empty-state border bg-white p-4 text-center">
          <h1 className="h3">Order Placed Successfully</h1>
          <p className="text-muted">
            Payment was processed and your delivery details were submitted.
          </p>
          <Link className="btn btn-primary" to="/shop">
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-5">
      <div className="mb-4">
        <p className="text-uppercase text-muted fw-semibold small mb-1">Secure Checkout</p>
        <h1 className="h2 mb-0">Address and Payment</h1>
      </div>
      <form className="row g-4" onSubmit={onPlaceOrder}>
        <div className="col-lg-8">
          <div className="bg-white border p-4 checkout-panel">
            <h2 className="h5 mb-3">Delivery Address</h2>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label" htmlFor="fullName">
                  Full Name
                </label>
                <input id="fullName" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input id="phoneNumber" className="form-control" required />
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="addressLine">
                  Address
                </label>
                <input id="addressLine" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="city">
                  City
                </label>
                <input id="city" className="form-control" required />
              </div>
              <div className="col-md-3">
                <label className="form-label" htmlFor="state">
                  State
                </label>
                <input id="state" className="form-control" required />
              </div>
              <div className="col-md-3">
                <label className="form-label" htmlFor="pinCode">
                  Pin Code
                </label>
                <input id="pinCode" className="form-control" required />
              </div>
            </div>
          </div>

          <div className="bg-white border p-4 checkout-panel mt-4">
            <h2 className="h5 mb-3">Payment Method</h2>
            <div className="d-flex flex-column gap-2">
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(event) => setPaymentMethod(event.target.value)}
                />
                <span className="form-check-label">Credit or Debit Card</span>
              </label>
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={(event) => setPaymentMethod(event.target.value)}
                />
                <span className="form-check-label">UPI</span>
              </label>
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={(event) => setPaymentMethod(event.target.value)}
                />
                <span className="form-check-label">Cash on Delivery</span>
              </label>
            </div>
            {paymentMethod === 'card' && (
              <div className="row g-3 mt-1">
                <div className="col-12">
                  <label className="form-label" htmlFor="cardNumber">
                    Card Number
                  </label>
                  <input id="cardNumber" className="form-control" required />
                </div>
                <div className="col-md-8">
                  <label className="form-label" htmlFor="cardName">
                    Name on Card
                  </label>
                  <input id="cardName" className="form-control" required />
                </div>
                <div className="col-md-4">
                  <label className="form-label" htmlFor="cardCvv">
                    CVV
                  </label>
                  <input id="cardCvv" className="form-control" required />
                </div>
              </div>
            )}
            {paymentMethod === 'upi' && (
              <div className="mt-3">
                <label className="form-label" htmlFor="upiId">
                  UPI ID
                </label>
                <input id="upiId" className="form-control" required />
              </div>
            )}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="bg-white border p-4 checkout-panel">
            <h2 className="h5 mb-3">Order Summary</h2>
            <div className="small text-muted mb-3">
              {checkoutSource === 'buy-now' ? 'Buy Now Order' : 'Cart Checkout'}
            </div>
            <div className="checkout-items">
              {checkoutItems.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between align-items-start gap-3 mb-2 pb-2 border-bottom"
                >
                  <div>
                    <div className="fw-semibold small">{item.title}</div>
                    <div className="text-muted small">Qty: {item.quantity || 1}</div>
                  </div>
                  <div className="small fw-semibold">
                    Rs. {(item.quantity || 1) * item.price}
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-between mt-3 mb-2">
              <span>Subtotal</span>
              <span>Rs. {total}</span>
            </div>
            <div className="d-flex justify-content-between text-muted mb-2">
              <span>Delivery</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>Rs. {total}</span>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Place Order
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
