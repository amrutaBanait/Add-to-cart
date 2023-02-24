import "../App.css";

function CartList({ cart }) {
  return (
    <div>
      {cart.map((cartItem, cartIndex) => {
        return (
          <div>
            <img src={cartItem.url} width={50} />
            <span>{cartItem.name} </span>
            <button>-</button>
            <span>{cartItem.quantity}</span>
            <button>+</button>
            <span>Rs. {cartItem.price}</span>
          </div>
        );
      })
      }
      <p>
        {
            cart.map(item => item.price).reduce((total, value) => total + value, 0)
        }
      </p>
    </div>
  );
}

export default CartList;
