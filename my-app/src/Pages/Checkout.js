import { useContext } from "react";
import "./CheckoutStyle.css";
import { createProductContext } from "../Context/ProductProvider";
import { calculateTotalPrice } from "./CartUtils";
import { toast } from "react-toastify";

export function Checkout() {
  const { productState } = useContext(createProductContext);
  let sortedData = productState.cartList;

  const totalPriceData = calculateTotalPrice(sortedData);

  const handlePlaceOrder= ()=>{
    toast.success("Order Placed Successfully",{
      position:toast.POSITION.BOTTOM_RIGHT
  })
  }
  return (
    <>
      <div className="checkoutContainer">
        <div className="checkoutorderpricedetails">
          <hr />
          <h3>ORDER DETAILS</h3>
          <hr />
          <ul>
            <li>Item</li>
            <li>Qty</li>
          </ul>
          <ul>
            <li></li>
            <li></li>
          </ul>
          <hr />
          <h3>PRICE DETAILS</h3>
          <ul>
            <li>Price</li>
            <li>₹ {totalPriceData.totalPrice}</li>
          </ul>
          <ul>
            <li>Discount</li>
            <li>- ₹{totalPriceData.discount}</li>
          </ul>
          <ul>
            <li>Delivery Charges</li>
            <li>Free</li>
          </ul>
          <ul>
            <li><b>Total Amount</b></li>
            <li><b>₹ {totalPriceData.discountedPrice}</b></li>
          </ul>
          <button className="checkoutplaceorderbtn" onClick={handlePlaceOrder}>Place order</button>
        </div>
      </div>
    </>
  );
}
