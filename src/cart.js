import React from "react";
import CartItem from "./cartItem";

const Cart = (props)=>{
    
        console.log("props",props.Products)
        const {Products}=props;
        console.log("hi",Products);
        return (
            <div className="cart">
                {Products.map((product)=>{
                    return <CartItem Product={product} 
                    key={product.id} 
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteProduct={props.onDeleteProduct}
                    />
                })}
                
               
            </div>
        )
    }


export default Cart;