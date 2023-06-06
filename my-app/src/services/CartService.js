import axios from "axios";

export const addToCartHandler = async (token, product, dispatch)=>{
  try{
    const {data:{cart}} = await axios.post("/api/user/cart",{product},
    {
        headers:{
        authorization: token,
        }
    }
    )
    dispatch({ type: "cart", payload: cart }); 
    console.log(cart)
  } catch(error){
    console.error("error")
  }
    
  }

  export const updatedQuantityinCart = async(id,dispatch,token,updateType)=>
{
    try{
        const {data:{cart}} = await axios.post(`api/user/cart/${id}`,{
            action:{
                type:updateType==="+"?"increment":"decrement",
            },
        },
        {
            headers:{
            authorization:token
        },
    }
        )
        dispatch({type:"cart",payload:cart});
    }
    catch(error){
        console.log(error);
    }
  }