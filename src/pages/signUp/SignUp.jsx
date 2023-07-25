
import { Link } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
  const {signUp} = useContext(AuthContext);
  const handleSignUp=event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password);
    signUp(email,password)
    .then(result =>{
      const signUser = result.user;
      console.log(signUser);
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
        <form onSubmit={handleSignUp} className="card-body">
          <h1 className="text-3xl text-center font-bold">Sign Up</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
          </div>
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
          
          <div className="form-control mt-6">

            <input  className="btn btn-primary" type="submit" value="Login" />
          </div>
          <p><small>Already Have an account? <Link to="/login">Login</Link> </small></p>
        </form>
        
      </div>
    </div>
  </div>
  );
};

export default SignUp;