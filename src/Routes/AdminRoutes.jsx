import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Rings } from "react-loader-spinner";



const AdminRoutes = ({children}) => {
  const {user , loading} = useAuth();
  const {isAdmin, isAdminLoading} = useAdmin();
  const location = useLocation();


  if(isAdminLoading || loading){
    return <Rings
    height="80"
    width="80"
    color="#4fa94d"
    radius="6"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="rings-loading"
  />
  }


if(user && isAdmin){
  return children;
}


  return <Navigate to ="/"  state={{from: location}} replace></Navigate>
};

export default AdminRoutes;