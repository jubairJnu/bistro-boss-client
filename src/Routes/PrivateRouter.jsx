
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Rings } from 'react-loader-spinner';

const PrivateRouter = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  if(user){
    return children;
  }
  if(loading){
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
  return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRouter;