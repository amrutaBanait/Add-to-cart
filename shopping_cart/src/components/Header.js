import React from 'react';
import "../App.css"

const Header = (props) => {
    return (
        <div className="flex shopping-card">
          <div onClick = {()=> props.handleShow(true)}>Shopping Cart</div>
          <div onClick = {()=> props.handleShow(false)}>Cart
            <sup>{props.count}</sup>
          </div>
          </div>
      )
}

export default Header