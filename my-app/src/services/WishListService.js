import axios from "axios";

export const addToWishListHandler = async (token, product, dispatch)=>{
  try{
    const {data:{wishlist}} = await axios.post("/api/user/wishlist",{product},
    {
        headers:{
        authorization: token,
        }
    }
    )
    dispatch({ type: "wishlist", payload: wishlist }); 
    console.log(wishlist)
  } catch(error){
    console.error("error")
  }
    
  }