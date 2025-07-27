import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
const Register = () => {
  const{createUser}=useContext(AuthContext)
  const[showPassword,setShowPassword]=useState(false)
  const navigate=useNavigate()
       const handleSubmit=(e)=>{
  e.preventDefault()
  const name=e.target.name.value
  const photo=e.target.photo.value
  const email=e.target.email.value
  const password=e.target.password.value
  console.log(name,' | ',photo,' | ' ,email," | ",password)
    if(!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)){
alert('Password must contain at least 1 uppercase and 1 lowercase letter.')
  }else if(password.length!==8){
    alert('Password Must be Eight Character')
  }
 createUser(email,password)
 .then((result) => {
    const user = result.user;
    console.log(user)
   return updateProfile(user, {
  displayName: name, photoURL: photo
}).then(() => {
  console.log('Profile Updated')
  navigate('/')
}).catch((error) => {
console.log(error)
});
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,' | ',errorMessage)
  });
       }
    return (
              <div className="hero bg-base-200 min-h-screen my-12 rounded-xl">
                 
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-black my-4 p-8">Please Register Your Account</h2>
      <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
        </div>
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
        </div>
        <div className="form-control mt-6 mx-auto">
          <input className="btn btn-secondary" type="submit" value="Register" />
        </div>
      </form>
      
    </div>
  </div>
</div>
    );
};

export default Register;