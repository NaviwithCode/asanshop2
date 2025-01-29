import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Forgot = () => {
  const[email, setEmail] = useState()
  // const[newPassword, setnewPassword] = useState()
  const navigate = useNavigate();
  // const handlesubmit= async (e)=>{
  //   e.preventDefault()
  //        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{email})
  
  // }
  const handlesubmit = async (e)=>{
    e.preventDefault()
  
    try {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{email})
        if(res.data.success){
            // toast.success(res.data.message)
            navigate("/login")
        }else{
            toast.success(res.data.message)
        }

    } catch (error) {
        console.log(error)
        toast.error("somthing went wronge")
        
    }
}
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        <h1 className="text-center text-2xl">Forgot Password</h1>
         <form className="w-full py-3 flex flex-col" onSubmit={handlesubmit}>
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-200 outline-none"
            required
          />
          {/* <label htmlFor="email">New Password</label>
          <input
            type={"newPassword"}
            value={newPassword}
            onChange={(e) => setnewPassword(e.target.value)}
            id="newPassword"
            name="newPassword"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-200 outline-none"
            required
          /> */}

          <button
            type="submit"
            className="w-full max-w-[150px] m-auto bg-gray-600 hover:bg-[#007bff] text-white rounded py-2 mt-5 text-xl font-medium"
          >
            Send Email
          </button>
        </form>
        <p className="text-sm mt-2">
          Don't have account ?{" "}
          <Link to={"/login"} className="text-[#007bff] hover:text-gray-600 underline">
            Login
          </Link>
        </p>
      </div>
      {/* form section end */}
    </div>
  );
};

export default Forgot;
