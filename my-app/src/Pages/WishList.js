import React, { useContext } from "react";
import { createProductContext } from "../Context/ProductProvider";
import "./WishListStyle.css";
import { addToCartHandler } from "../services/CartService";
import { removeFromWishList } from "../services/WishListService"; 
import { toast } from "react-toastify";
export function WishList() {
  const { productState, dispatch } = useContext(createProductContext);
  let sortedData = productState.wishList;

  const token =  localStorage.getItem("token");

  const addToCart = (product) => {
    toast.success("Book Added to Cart!",{
      position:toast.POSITION.BOTTOM_RIGHT
    })
    addToCartHandler(token, product, dispatch); 
  };

  const removeFromWishlist = (id) => {
    toast.warning("Book Removed from wish list!",{
      position:toast.POSITION.BOTTOM_RIGHT
  })
    removeFromWishList(id, token, dispatch);
  };

  return (
    <div className="WLLeftRight">
      <div className="WLLeft">
        {sortedData.length === 0 ? (
          <h1 className="wishlistempty">Your wish list is empty 🥺</h1>
        ) : (
          <ul className="WLulList">
            {sortedData?.map((prods) => (
              <div className="WLcontainer">
                <li key={prods._id}>
                  <img src={prods.image} alt="loadingimg" className="WLcardImg" />
                  <div className="WLcardContent">
                    <p className="WLcardTitle"> {prods.title} </p>
                    <p className="WLcardAuthor"> {prods.author} </p>
                    <p className="WLcardPrice">
                      <b>₹ {prods.price}</b>
                    </p>
                  </div>
                </li>
                <hr></hr>
                <div className="WLMovetoCart">
                  <button onClick={() => addToCart(prods)}>Add to Cart</button>
                  <button onClick={() => removeFromWishlist(prods._id)}>Remove from Wishlist</button>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
