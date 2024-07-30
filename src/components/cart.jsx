import Footer from "./footer";

function Cart({ cartItems }) {
  return (
    <>
      <div className="cart-container">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </div>
              </li>
            
            )
            )
            }
          </ul>
        )
      }
      </div>
      {/* ); */}
      <Footer />
    </>
  );
}
export default Cart;
