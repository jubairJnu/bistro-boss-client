
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocailLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {googleSignUp} = useContext(AuthContext);
  const handleSigInGoogle =()=>{
    googleSignUp()
    .then(result=>{
      const signedUser = result.user;
      console.log(signedUser);
      const savedUser = {name:signedUser.displayName, email: signedUser.email }
      fetch('http://localhost:5000/users',{
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(savedUser)
        })
        .then(res => res.json())
        .then(() =>{
          navigate(from, { replace: true });
          })

     
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div>
      <div className="divider divider-horizontal"></div>
      <div className="text-center my-4">
        <button onClick={handleSigInGoogle} className="btn btn-circle btn-outline">
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocailLogin;