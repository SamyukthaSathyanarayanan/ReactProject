import { useParams } from "react-router-dom";
import { useContext } from "react";
import { createProductContext } from "../Context/ProductProvider";
import { Link } from "react-router-dom";
import "./IndividualPageStyle.css"
export function IndividualPage(){
  const { productId } = useParams();
  const {productState, dispatch} = useContext(createProductContext)

  let sortedData = productState.productList
  const newData = sortedData?.find(({ _id }) => _id === productId);

  return (
    <>
    <div className="IPcontainer">
      <div className="IPrightleft">
        <div className="IPLeftImage">
          <img src={newData?.image} alt="loadingimg" className="IPcardImg"/>
        </div>
        <div className="IPRightContent">
          <h3>{newData?.title}</h3>
          <p> {newData?.rating} <i class="fa-solid fa-star"></i></p>
          <p> ₹ {newData?.price}</p>
          <p className="IPhurry"><i class="fas fa-bolt"></i> Hurry, Only Few Left!</p>
          <hr></hr>
          <p className="IPtaggedItems"> <i class="fa-solid fa-tag"></i> Fastest Delivery</p>
          <p className="IPtaggedItems"> <i class="fa-solid fa-tag"></i> Inclusive of All Taxes</p>
          <p className="IPtaggedItems"> <i class="fa-solid fa-tag"></i> Cash On Delivery Available</p>
          <div className="IPaboutbook">
            <p class="IPbook">Author : <span class="IPbookdetails"> {newData?.author}</span> </p>
            <p class="IPbook">Category : <span class="IPbookdetails">{newData?.categoryName}</span>  </p>
            <p class="IPbook">Binding : <span class="IPbookdetails">{newData?.binding}</span></p>
            <p class="IPbook">Language :<span class="IPbookdetails"> {newData?.language}</span> </p>
          </div>
          
          <Link to="/cart" className="IPcartLink"> <i className="fa-solid fa-cart-shopping"></i> Go to Cart</Link > 
          <Link to="/wishlist" className="IPwishlistLink"> <i className="fa-regular fa-heart"/> Go to WishList</Link>
        </div>
      
      </div>
    </div>
    
      

    </>
  )
}
