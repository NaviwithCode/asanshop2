import React, { useState } from "react";
import { BiSolidShow } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import logo from '../img/logo.jpeg'
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  //   form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name,email,password,phone,address)
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wronge");
    }
  };

  //   const [data, setData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     phone: "",
  //     address: "",
  //   });
  //   console.log(data);
  //   const handleOnChange = (e) => {
  //     const { name, value } = e.target;
  //     setData((preve) => {
  //       return {
  //         ...preve,
  //         [name]: value,
  //       };
  //     });
  //   };
  //   // form fuction submit
  // //   console.log(process.env.REACT_APP_API)
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const { name, email, password, phone, address } = data;
  //     if (name && email && password && phone && address){

  //         const fetchData = await fetch(`${process.env.REACT_APP_API}/api/v1/auth/register`,{
  //     method: "POST",
  //     headers: {
  //         "conten-type":"application/jso"
  //     },
  //     body : JSON.stringify(data)
  //         })
  //         const dataRes =await fetchData.json()
  //         console.log(dataRes)
  //     //     alert("successfull");
  //     // navigate("/login");
  //     }
  //   };
  // console.log(process.env.REACT_APP_API)
  return (
    <div className="p-3 md:p-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign Up - ASAN Graoup Shop</title>
        {/* <meta name="description" content="Discover how ASAN Group Shop combines innovation, excellence, and vision to drive your success. Explore our About Us page and join the journey to a brighter future." />
                <meta name="keywords" content="phone, laptop, watch,electronic" /> */}
      </Helmet>
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        <h1 className="text-center text-2xl">Sign up</h1>
        {/* <div className="w-20 h-20 rounded-full drop-shadow-md shadow-md flex m-auto"> */}
        {/* <img src={logo} className="w-full" /> */}
        {/* <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3  w-full text-center">
              <p className="text-sm p-1 text-black">Upload</p>
            </div>
            <input type={"file"} id="profileImage" accept="image/*" className="hidden" />
          </label>
        </div> */}
        {/* form section start */}
        {/* <div class="w-20 h-20 rounded-full mt-10 drop-shadow-md shadow-md flex m-auto">
  <label htmlFor="profileImage" >
    <div className="absolute bottom-5  h-1/3  w-full text-center">
    <p className="text-sm p-1 text-black">Upload file</p>
    </div>
    
  <input id="profileImage" type="file" accept="image/*" className="hidden" />
  </label>
</div> */}
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            name="name"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-200 outline-none"
            required
          />

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

          <label htmlFor="password">Password</label>
          <div
            className=" flex bg-slate-200 mt-1 mb-2 px-2 py-1 outline-none
            focus-within:outline-blue-200 rounded"
          >
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              className=" w-full bg-slate-200  border-none outline-none "
              required
            />
            <span
              className="flex text-xl items-center"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiSolidShow /> : <GrFormViewHide />}
            </span>
          </div>

          <label htmlFor="phone">Phone</label>
          <input
            type={"phone"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            name="phone"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-200 outline-none"
            required
          />
          <label htmlFor="address">Address</label>
          <input
            type={"address"}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            id="address"
            name="address"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-200 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full max-w-[150px] m-auto bg-gray-600 hover:bg-[#007bff] text-white rounded py-2 mt-3 text-xl font-medium"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm mt-2">
          Already have account ?{" "}
          <Link
            to={"/login"}
            className="text-[#007bff] hover:text-gray500 underline"
          >
            Login
          </Link>
        </p>
      </div>
      {/* form section end */}
    </div>
  );
};

export default Signup;
