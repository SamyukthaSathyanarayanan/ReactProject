import React, { useContext } from "react";
import { createProductContext } from "../Context/ProductProvider";
import "./CartStyle.css";
import { updatedQuantityinCart } from "../services/CartService";

export function Cart() {
  const { productState, dispatch } = useContext(createProductContext);
  let sortedData = productState.cartList;
  const token = localStorage.getItem("token");
  console.log(sortedData);
  return (
    <div className="cartLeftRight">
      <div className="cartLeft">
        {sortedData.length === 0 ? (
          <h1 className="cartempty">Your cart is empty 🥺</h1>
        ) : (
          <ul className="cartulList">
            {sortedData?.map((prods) => (
              <div className="cartcontainer">
                <li>
                  <img src={prods.image} alt="loadingimg" className="cartcardImg" />
                  <div className="cartcardContent">
                    <p className="cartcardTitle"> {prods.title} </p>
                    <p className="cartcardAuthor"> {prods.author} </p>
                    <p className="cartcardPrice">
                      <b>₹ {prods.price}</b>
                    </p>
                    <button onClick={()=>updatedQuantityinCart(prods._id,dispatch,token,"+")}className="plusbtn"> + </button>
                    {prods.qty}
                    <button style={{background:prods.qty<=1&&"grey"}} disabled={prods.qty<=1} onClick={()=>updatedQuantityinCart(prods._id,dispatch,token,"-")}className="plusminus"> - </button>
                  </div>
                </li>
                <hr></hr>
                <div className="cartRemoveMoveto">
                  <button>Remove</button>
                  <button>Move to Wishlist</button>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
      {sortedData.length > 0 && (
        <div className="PriceDetailsRight">
          <hr></hr>
          <h3>Price Details</h3>
          <p> Price: </p>
          <p> Delivery Charges: </p>
          <p> Total Amount </p>
          <button> Checkout</button>
        </div>
      )}
    </div>
  );
}
