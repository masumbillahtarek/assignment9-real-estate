import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";


const Login = () => {
   const[showPassword,setShowPassword]=useState(false)
  const{signIn,signInWithGoogle,signInWithGithub}=useContext(AuthContext)
  const navigate=useNavigate()
    const handleSubmit=(e)=>{
  e.preventDefault()
  const email=e.target.email.value
  const password=e.target.password.value
  console.log(email," | ",password)

  signIn(email,password)
  .then((result) => {
    const user = result.user;
console.log(user)
e.target.reset()
navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,' | ',errorMessage)
  });
    }
    const handleGoogleLogIn=()=>{
signInWithGoogle()
 .then((result) => {
    const user = result.user;
console.log(user)
navigate('/')
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
console.log(errorCode,' | ',errorMessage)
  });
    }
    const handleSignInWithGithub=()=>{
      signInWithGithub()
        .then((result) => {
    const user = result.user;
   console.log(user)
   navigate('/')
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  console.log(errorCode,' | ',errorMessage)
  });
    }
    return (
        <div className="hero bg-base-200 min-h-screen my-12 rounded-xl">
          
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-black my-4">Please Login Your Account</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
            <input type={showPassword?'text':'password'} name="password" placeholder="password" className="input input-bordered" required />
                 <p onClick={()=>setShowPassword(!showPassword)} className="absolute top-7 right-8 text-2xl">{showPassword?<FaEyeSlash />:<FaEye />}</p>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6 mx-auto">
          <input className="btn btn-secondary" type="submit" value="Login" />
        </div>
      </form>
      <button onClick={handleGoogleLogIn} className="btn btn-primary mb-4">Login With Google</button>
      <button onClick={handleSignInWithGithub} className="btn btn-primary">Login With Github</button>
    </div>
  </div>
</div>
    );
};

export default Login;