import { useState } from "react";
import singup from "../img/logo.jpeg";
import { BiSolidShow } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useNavigate,useLocation} from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../context/auth";
import { Helmet } from "react-helmet";
// import { useAuth } from '../../context/auth'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')
  const [auth,setAuth] = useAuth()

  // const [auth,setAuth] =useAuth()
  const navigate = useNavigate();
  const location = useLocation()
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   phone: "",
  //   address: "",
  // });
  // console.log(data);
  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setData((preve) => {
  //     return {
  //       ...preve,
  //       [name]: value,
  //     };
  //   });
  // };
  // form fuction submit
  const hanleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password})
      if (res && res.data.success){
        toast.success(res.data && res.message) 
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        })   
        // toast.success("Login Sucessfully")
        // navigate("/")
        localStorage.setItem('auth',JSON.stringify(res.data))   
          navigate(location.state || "/")
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)      
      toast.error("this email id and password not singup")
      // toast.error("somthing went wrong please singup")
      
    }
    // const { email, password } = data;
    // if (email && password) {
    //   toast.success("successfull");
    //   navigate("/");
    // } else {
    //   toast.error("Please Signup");
    // }
  };
  return (
    <div className="p-3 md:p-4">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login - ASAN Graoup Shop</title>
                {/* <meta name="description" content="Discover how ASAN Group Shop combines innovation, excellence, and vision to drive your success. Explore our About Us page and join the journey to a brighter future." />
                <meta name="keywords" content="phone, laptop, watch,electronic" /> */}
            </Helmet>
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        <h1 className='text-center text-2xl'>Login</h1>
        {/* <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md flex m-auto">
          <img src={singup} className="w-full" />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 w-full text-center">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input type={"file"} id="profileImage" className="hidden"/>
          </label>
        </div> */}
        {/* form section start */}
        <form className="w-full py-3 flex flex-col" onSubmit={hanleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}
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
          <div>
            <Link to={"/forgot"} className="text-[#007bff] hover:text-gray-500 text-sm rounded underline flex justify-end">Forget Password</Link>
          </div>
          <button
            type="submit"
            className="w-full max-w-[150px] m-auto bg-gray-600 hover:bg-[#007bff] text-white rounded py-2 mt-5 text-xl font-medium"
          >
            Login
          </button>
        </form>
        <p className="text-sm mt-2">
          Don't have account ?{" "}
          <Link to={"/signup"} className="text-[#007bff] hover:text-gray-600 underline">
            Signup
          </Link>
        </p>
      </div>
      {/* form section end */}
    </div>
  );
};

export default Login;
