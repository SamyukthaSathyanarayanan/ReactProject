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

  export const removeFromWishList = async (id, token, dispatch) => {
    try {
      const { data: { wishlist } } = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: "wishlist", payload: wishlist }); 
    } catch (error) {
      console.log(error);
    }
  };

 
  