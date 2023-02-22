import React from 'react';
import "../App.css"


function ProductList({product}){
    return(
        <div className="flex">
       {
        product.map((productItem, productIndex ) =>{
            returb(
                <div style={{width: "50%" }}>
                    <div>
                        <img src = {productItem.url} />
                    </div>
                </div>
            )
        })
       }
        </div>
    )
}

export default ProductList;