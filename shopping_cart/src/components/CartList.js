import "../App.css"

function CartList({cart}){
    return(
        <div>
         {
         cart.map((cartItem, cartIndex) =>{
            return(
                <div>
                    <img src = {cartItem.url} width={50} />
                    <span>{cartItem.name} </span>
                    <span>{cartItem.quantity}</span>
                    <span>{cartItem.price}</span>
                </div>
            )
         })
         }
        </div>
    )
}

export default CartList;