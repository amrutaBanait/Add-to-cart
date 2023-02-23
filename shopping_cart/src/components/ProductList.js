import React from 'react';
import "../App.css"


function ProductList({product}){
    return(
        <div className="flex">
       {
        product.map((productItem, productIndex ) =>{
            return (
                <div style={{width: "50%" }}>
                    <div>
                        <img src = {productItem.url} width="100%"/>
                        <p> {productItem.name} | {productItem.category} </p>
                        <p> {productItem.seller} </p>
                        <p> Rs. {productItem.price} /- </p>
                    </div>
                </div>
            )
        })
       }
        </div>
    )
}

export default ProductList;