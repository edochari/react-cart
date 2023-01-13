import React from 'react';


const CartItem=(props)=>{
   

  

   
        const {title,price,qty} = props.Product;

        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img src="" style={styles.image} />
                </div>
                <div className='right-block'>
                    <p>{title}</p> 
                    <p>rs {price}</p> 
                    <p>Qty:{qty}</p> 
                    <div className='cart-item-actions'>
                         <img alt="increase" onClick={()=>props.onIncreaseQuantity(props.Product)} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png"></img>
                         <img alt="decrease" onClick={()=>props.onDecreaseQuantity(props.Product)} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"></img>
                         <img alt="delete" onClick={()=>props.onDeleteProduct(props.Product.id)} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"></img>
                    </div>
                </div>
            </div>
        )
    
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4
    }
}
export default CartItem;