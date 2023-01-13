
import React from "react";
import { render } from "react-dom";
import Cart from "./cart";
import CartItem from "./cartItem"
import NavBar from "./navbar";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import app from './index'

class App extends React.Component {

  constructor(){
    super()
    this.state={
        Products:[]
    }
}


componentDidMount () {
 
 
  const { getFirestore, collection, getDocs } = require('firebase/firestore');
  const db = getFirestore(app);
  const Products = collection(db, 'Products');
  const productSnapshot = getDocs(Products);

  // const productList = productSnapshot.docs.map(doc => doc.data());
  console.log("product",productSnapshot)
  console.log("Products",Products);
  

}
handleIncreaseQuantity=(Product)=>{
    console.log("hellooooo")
   const {Products} = this.state;
   const index= Products.indexOf(Product);
   Products[index].qty +=1;
   this.setState({
        Products:Products
   })
}
handleDecreaseQuantity=(Product)=>{
  
   const {Products} = this.state;
   const index= Products.indexOf(Product);
   Products[index].qty -=1;
   this.setState({
        Products:Products
   })
}

handleDeleteProduct=(id)=>{
    const {Products}=this.state;
    const items=Products.filter((item)=>
        item.id !== id
    )
    this.setState({
        Products:items
    })
}
getCount=()=>{
  const {Products} = this.state;
  let count=0;
  Products.forEach((item)=>{
    count += item.qty;
  })
  
  return count;
}
getCartPrice=()=>{
  const {Products} = this.state;
  let total_price=0;
  Products.forEach((item)=>{
    total_price = total_price+item.qty* item.price;
  })

  return total_price;
}
render(){
  const {Products}=this.state;
  console.log(Products,"hello");
  return (
    <div className="App">
      <NavBar count={this.getCount()}/>  

      <Cart 
      Products={Products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct} />
      <div>Total : {this.getCartPrice()}</div>
    </div>
  );
}
}

export default App;
