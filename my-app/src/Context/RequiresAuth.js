import { Navigate,useLocation } from "react-router-dom";

export function RequiresAuth({children})
{
    const token = localStorage.getItem("token");
    const location = useLocation();
    return (<div>{token?children:<Navigate to="/signin" state={{from:location}}/>}</div>)
}