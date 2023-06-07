import React, { useContext } from "react";
import { createProductContext } from "../Context/ProductProvider";
import "./CartStyle.css";
import { updatedQuantityinCart } from "../services/CartService";
import { addToWishListHandler } from "../services/WishListService";
import { removeFromCart } from "../services/CartService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { calculateTotalPrice } from "./CartUtils";


export function Cart() {
  const { productState, dispatch } = useContext(createProductContext);
  let sortedData = productState.cartList;
  
  const token = localStorage.getItem("token");
  const addToWishlistHandler = (product) => {
    toast.success("Book Added to wishList!",{
      position:toast.POSITION.BOTTOM_RIGHT
  })
    addToWishListHandler(token, product, dispatch); 
  };

  const removefromcart = (id) => {
    toast.warning("Book Removed from cart!",{
      position:toast.POSITION.BOTTOM_RIGHT
  })
    removeFromCart(id, token, dispatch);
  };

  return (
    <div className="cartLeftRight">
      <div className="cartLeft">
        {sortedData.length === 0 ? (
          <h1 className="cartempty">Your cart is empty 🥺</h1>
        ) : (
          <ul className="cartulList">
            {sortedData?.map((prods) => (
              <div className="cartcontainer">
                <li key={prods._id}>
                  <img src={prods.image} alt="loadingimg" className="cartcardImg" />
                  <div className="cartcardContent">
                    <p className="cartcardTitle"> {prods.title} </p>
                    <p className="cartcardAuthor"> {prods.author} </p>
                    <p className="cartcardPrice">
                      <b>₹ {prods.price}</b>
                    </p>
                    <button onClick={()=>updatedQuantityinCart(prods._id,dispatch,token,"+")}className="plusbtn"> + </button>
                    {" "}{prods.qty}{" "}
                    <button disabled={prods.qty<=1} onClick={()=>updatedQuantityinCart(prods._id,dispatch,token,"-")}className="plusminus"> - </button>
                  </div>
                </li>
                <hr></hr>
                <div className="cartRemoveMoveto">
                  <button onClick={()=>removefromcart(prods._id)}>Remove</button>
                  <button onClick={()=>addToWishlistHandler(prods)}>Move to Wishlist</button>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
      {sortedData.length > 0 && (
        <div className="PriceDetailsRight">
          <div className="cartpricedetail">
            <h3 className="cartpricedetailname">Price Details</h3> 
            <ul>
              <li>Price : </li>
              <li><b>₹ {calculateTotalPrice(sortedData).totalPrice}</b></li>
            </ul>
            <ul>
              <li>Discount (Flat 10%) :</li>
              <li> <b>₹ -{calculateTotalPrice(sortedData).discount}</b></li>
            </ul>
            <ul>
              <li>Delivery Charges :</li>
              <li><b>Free</b></li>
            </ul>
            <ul>
              <li>Total Amount : </li>
              <li> <b>₹ {calculateTotalPrice(sortedData).discountedPrice}</b></li>
            </ul>
            <Link to="/checkout" className="cartcheckoutLink"><b>Checkout</b> </Link>
          </div>
        </div>
      )}
    </div>
  );
}
