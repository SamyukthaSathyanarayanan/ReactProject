import React, { useContext } from "react";
import { createProductContext } from "../Context/ProductProvider";
import "./WishListStyle.css";

export function WishList() {
  const { productState, dispatch } = useContext(createProductContext);
  let sortedData = productState.wishList;

  return (
    <div className="WLLeftRight">
      <div className="WLLeft">
        {sortedData.length === 0 ? (
          <h1 className="wishlistempty">Your wishlist is empty 🥺</h1>
        ) : (
          <ul className="WLulList">
            {sortedData?.map((prods) => (
              <div className="WLcontainer">
                <li>
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
                  <button>Move to Cart</button>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
