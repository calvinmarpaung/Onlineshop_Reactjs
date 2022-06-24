import React, { useState } from 'react';

const Cart = (props) => {
    const {  cart } = props;
    
    return (
    <div className="relative ">
      <div className="absolute top-10 left-12 right-12 mt-9">

            <div className="font-serif">
                <h1>Cart</h1>
                <h1>List cart: {cart}</h1>
                
            </div>
        </div>
    </div>    
    );
}

export default Cart;
