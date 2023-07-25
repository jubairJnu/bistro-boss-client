import { useEffect,  useState } from 'react';
import loginImg from '../../assets/others/authentication1.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [disable, setDisable] = useState(true);
  const {logIn}= useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])


  const handleValidate = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false)
    }
    else {
      setDisable(true);
    }
  }
// Log in

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email,password)
    .then(result=>{
      const loggedUser = result.user;
      // console.log(loggedUser);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from, { replace: true });
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left">
          <img className='w-[500px]' src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input type="text" onBlur={handleValidate} name='captcha' placeholder="Input the above captcha" className="input input-bordered" />
             
            </div>
            <div className="form-control mt-6">

              <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p><small>New to bistro boss? <Link to="/signUp">Sign UP</Link> </small></p>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;