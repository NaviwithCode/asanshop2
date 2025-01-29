import React, { useState } from "react";
import logo from "../img/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Head from "../pages/Auth/head";
import ResponsiveMenu from "./Responsiv";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { LogOut } from "lucide-react";
import SearchFrom from "./form/SearchFrom";
import { useCart } from "../context/cart";
import { Badge } from "antd";
import { useSearch } from "../context/search";
import axios from "axios";
import UseCategory from "../hooks/UseCategory";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Header = () => {
  const categories = UseCategory();
  const [values, setValues] = useSearch();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    // setShow(!show);
  };
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("LogOut Successfully");
  };
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // <header
    //   className=" fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white
    // "
    // >
    //   {/* desktop */}
    //   <div className="flex items-center h-full justify-between">
    //     <Link to={"/"}>
    //       <div className="h-12 overflow-hidden rounded-full drop-shadow-md shadow-md ">
    //         <img src={logo} className="h-full" />
    //       </div>
    //     </Link>
    //     <div className="flex items-center gap-4 md:gap-7">
    //       <div className="hidden md:flex">
    //         <nav className="flex items-center gap-4 md:gap-6 text-base md:text-lg text-slate-500 ">
    //           <SearchFrom/>
    //           <Link to={"/"}>Home</Link>
    //           <Link to={"about"}>About</Link>
    //           <Link to={"product"}>Product</Link>
    //           <Link to={"contact"}>Contact</Link>
    //         </nav>
    //       </div>
    //       <a href="/cart">
    //         <Badge count={cart.length} showZero offset={[10, -5]}>
    //       <div className="text-2xl text-slate-600 relative cursor-pointer">
    //         <FaShoppingCart />
    //         <div className="absolute right-1 text-white h-4 w-3 rounded-full m-0 p-0 text-sm text-center">
    //           {/* {cart?.length} */}
    //         </div>
    //       </div>
    //               </Badge>
    //       </a>
    //       {!auth.user ? (
    //         <>
    //           <Menu as="div" className="relative inline-block text-left">
    //             <MenuButton
    //               onClick={handleShowMenu}
    //               className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    //             >
    //               <FaUserCircle />
    //               <ChevronDownIcon
    //                 aria-hidden="true"
    //                 className="-mr-1 h-5 w-5 text-gray-400"
    //               />
    //               {/* <div className=" text-slate-600" onClick={handleShowMenu}>
    //             <div className="cursor-pointer">
    //               {" "}
    //             </div> */}
    //               {showMenu && (
    //                 <MenuItems
    //                   transition
    //                   className="absolute right-0 z-10 mt-9 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    //                 >
    //                   <div className="py-1">
    //                     {/* <div className="absolute right-2 py-2 bg-white px-2 shadow drop-shadow-md flex flex-col"> */}
    //                     <MenuItem>
    //                       <Link
    //                         to={"/login"}
    //                         className="block px-3 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
    //                       >
    //                         Login
    //                       </Link>
    //                     </MenuItem>
    //                     <MenuItem>
    //                       <Link
    //                         to={"/signup"}
    //                         className="block px-3 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
    //                       >
    //                         Signup
    //                       </Link>
    //                     </MenuItem>
    //                   </div>
    //                   {/* </div> */}
    //                 </MenuItems>
    //               )}
    //               {/* </div> */}
    //             </MenuButton>
    //           </Menu>
    //         </>
    //       ) : (
    //         <>
    //           {/* <Menu as="div" className="relative inline-block text-left">
    //               <MenuButton
    //                 onClick={handleShowMenu}
    //                 className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
    //               > */}
    //           {/* {auth?.user?.name} */}
    //           {/* <ChevronDownIcon
    //                   aria-hidden="true"
    //                   className="-mr-1 h-5 w-5 text-gray-400"
    //                 /> */}
    //           {/* <div
    //                 className="text-2xl text-slate-600"

    //               >
    //                 <div className="cursor-pointer">
    //                 </div> */}
    //           {showMenu &&
    //             // <MenuItems
    //             //   transition
    //             //   className="absolute right-0 z-10 mt-7 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    //             // >
    //             //   <div className="py-1">
    //             {
    //               /* <div className="absolute right-2 py-2 bg-white px-2 shadow drop-shadow-md flex flex-col"> */
    //             }
    //             //   <MenuItem onClick={handleShowMenu}>
    //             //     <Link
    //             //       onClick={handleLogout}
    //             //       to={"/login"}
    //             //       className="block px-3 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
    //             //     >
    //             //       LogOut
    //             //     </Link>
    //             //   </MenuItem>
    //             //   <MenuItem onClick={handleShowMenu}>
    //             //     <Link
    //             //       to={`/dashboard/${
    //             //         auth?.user?.role === 1 ? "admin" : "user"
    //             //       }`}
    //             //       className="block px-3 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
    //             //     >
    //             //       Dashboard
    //             //     </Link>
    //             //   </MenuItem>
    //             // </div>
    //             // {/* </div> */}
    //             // </MenuItems>
    //           }
    //           {/* </div> */}
    //           {/* </MenuButton>
    //             </Menu> */}
    //           <button>
    //             <Link
    //               onClick={handleLogout}
    //               to={"/login"}
    //               className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
    //             >
    //               <LogOut/>
    //               LogOut
    //             </Link>
    //           </button>
    //         </>
    //       )}
    //       <div className="flex items-center gap-4 md:hidden">
    //         {show ? (
    //           <MdClose onClick={toggleMenu} className=" size-6" />
    //         ) : (
    //           <HiMenuAlt3 onClick={toggleMenu} className=" size-6" />
    //         )}
    //       </div>
    //       {/* <Head/> */}
    //     </div>
    //   </div>

    //   {/* moblie */}
    //   <ResponsiveMenu show={show} />
    // </header>
    //   <header class='shadow-lg font-[sans-serif] tracking-wide relative z-50'>
    //     <section
    //       class='flex items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[70px] max-lg:min-h-[60px]'>
    //       <a href="/" class="h-12 overflow-hidden rounded-full drop-shadow-md shadow-md shrink-0"><img
    //         src={logo} alt="logo" class='h-full' />

    //       </a>
    //       {/* <a href="/" class="h-12 overflow-hidden rounded-full drop-shadow-md shadow-md hidden max-sm:block"><img src={logo} alt="logo" class='h-full' />
    //       </a> */}

    //       <div class='flex flex-wrap w-full items-center'>
    //         {/* <input type='text' placeholder='Search something...'
    //           class='xl:w-80 max-lg:hidden lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-gray-100 border focus:bg-transparent px-4 rounded h-10 outline-none text-sm transition-all' /> */}
    //           <SearchFrom/>
    //         <div class="ml-auto">

    //           <ul class='flex items-center'>
    //             <a href="/cart">
    //             <li class='max-lg:py-2 px-4 cursor-pointer'>
    //           <Badge count={cart.length} showZero offset={[10, -5]} className="mr-1">
    //               <span class="relative">
    //                 <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline" viewBox="0 0 512 512">
    //                   <path
    //                     d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
    //                     data-original="#000000"></path>
    //                 </svg>
    //                 {/* <span
    //                   class="absolute left-auto -ml-1 -top-2 rounded-full bg-red-500 px-1 py-0 text-xs text-white">3</span> */}
    //               </span>
    //             </Badge>
    //             </li>
    //             </a>
    //             {!auth.user ? (
    //               <>
    //             <li class='flex text-[15px] max-lg:py-2 px-4 hover:text-[#007bff] hover:fill-[#007bff]'>
    //               <button
    //                 class='px-4 py-2 text-sm font-semibold text-gray-800 border border-[#333] bg-transparent'><a href="/login">Sign
    //                 In</a></button>
    //             </li>
    //             <li id="toggleOpen" class='lg:hidden'>
    //               <button>
    //                 <svg class="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //                   <path fill-rule="evenodd"
    //                     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //                     clip-rule="evenodd"></path>
    //                 </svg>
    //               </button>
    //             </li>
    //               </>
    //               ) : (
    //                 <>

    //                 <FaUserCircle  className="text-2xl flex items-center mr-3 "/>
    //                    <button>
    //                             <Link
    //                                  onClick={handleLogout}
    //                                  to={"/login"}
    //                                  className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
    //                                >
    //                                  <LogOut/>
    //                                  LogOut
    //                                </Link>
    //                              </button>   </>
    //             )}
    //           </ul>
    //         </div>
    //       </div>
    //     </section>

    //     <div id="collapseMenu"
    //       class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
    //       <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
    //         <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
    //           <path
    //             d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
    //             data-original="#000000"></path>
    //           <path
    //             d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
    //             data-original="#000000"></path>
    //         </svg>
    //       </button>

    //       <ul
    //         class='lg:flex lg:flex-wrap lg:items-center lg:justify-center px-10 py-3 bg-[#999999] min-h-[46px] gap-4 max-lg:space-y-4 max-lg:fixed max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-lg max-lg:overflow-auto z-50'>

    //         {/* <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
    //           class='hover:text-yellow-300 text-yellow-300 text-[15px] font-medium block'>All</a></li> */}
    //    <Menu as="div" className="relative inline-block text-left">
    //     <div>
    //       {/* <MenuButton className=" max-lg:border-b max-lg:py-3 px-3">
    //         All
    //         <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
    //       </MenuButton> */}
    //        <li class='group max-lg:border-b max-lg:py-3 relative'>
    //             <a href='javascript:void(0)'
    //               class='hover:text-yellow-300 text-yellow-300 text-[15px] font-bold block'>All<svg
    //                 xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block"
    //                 viewBox="0 0 24 24">
    //                 <path
    //                   d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
    //                   data-name="16" data-original="#000000" />
    //               </svg>
    //             </a>
    //             <ul
    //               class='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
    //                 {categories?.map((c)=>(
    //               <li class='border-b py-2 '><a  href={`category/${c.slug}`}
    //                 class='hover:text-black text-gray-600 text-[15px] font-bold block'>{c.name}</a></li>
    //                 ))}
    //                 </ul>
    //             </li>
    //     </div>

    //     <MenuItems
    //       transition
    //       className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    //       >
    //       <div className="py-1">
    //         <MenuItem>
    //           <a
    //           href=""
    //           className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
    //           >
    //             All categories
    //              <div className="absolute right-2 py-2 bg-white px-2 shadow drop-shadow-md flex flex-col">
    //             </div>
    //           </a>

    //         </MenuItem>
    //         </div>
    //       {categories?.map((c)=>(
    //       <div className="py-1">
    //         <MenuItem>

    //           <a
    //           href={`category/${c.slug}`}
    //           className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
    //           >
    //             {c.name}
    //           </a>
    //         </MenuItem>
    //         </div>
    //           ))}
    //         </MenuItems>
    //         </Menu>
    //           {/* {categories?.map((c)=>(
    //   <div key={c._id} className="">
    //     <a href={`/category/${c.slug}`}>{c.name}</a>

    //   </div>
    // ))} */}
    //  {categories?.map((c)=>(
    //         <li class='max-lg:border-b max-lg:py-3 px-3'><a href={`/category/${c.slug}`}
    //           class='hover:text-yellow-300 text-white text-[15px] font-medium block'>{c.name}</a></li>
    //         ))}
    //         {/* <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
    //           class='hover:text-yellow-300 text-white text-[15px] font-medium block'>Makeup</a></li>
    //         <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
    //           class='hover:text-yellow-300 text-white text-[15px] font-medium block'>Hair</a></li>
    //         <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
    //           class='hover:text-yellow-300 text-white text-[15px] font-medium block'>Tools & Brushes</a></li>
    //         <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
    //           class='hover:text-yellow-300 text-white text-[15px] font-medium block'>Bath & body</a></li>
    //         <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
    //           class='hover:text-yellow-300 text-white text-[15px] font-medium block'>Clean Body</a></li>
    //         <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
    //           class='hover:text-yellow-300 text-white text-[15px] font-medium block'>Gifts</a></li>
    //         <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
    //           class='hover:text-yellow-300 text-white text-[15px] font-medium block'>Skincare</a></li> */}
    //       </ul>
    //     </div>
    //   </header>
    <div className="sticky top-0 z-[1000]">
      <section class="bg-[#004d66] min-h-[40px] px-4 py-2 sm:px-10 flex items-center max-sm:flex-col">
        <button type="button" class="text-white text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            fill="#fff"
            class="mr-3 inline-block"
            viewBox="0 0 482.6 482.6"
          >
            <path
              d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
              data-original="#000000"
            ></path>
          </svg>
          <a href="tel:+971542035714">+971542035714</a>
        </button>
        <span class="border-l h-3 mx-6 max-sm:hidden"></span>
        <button type="button" class="text-white text-sm max-sm:my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            fill="#fff"
            class="mr-3 inline-block"
            viewBox="0 0 479.058 479.058"
          >
            <path
              d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
              data-original="#000000"
            ></path>
          </svg>
          <a href="mailto:nabiullahansari4321@gmail.com">
            nabiullahansari4321@gmail.com
          </a>
        </button>
      </section>
      <header class="shadow-md bg-white font-[sans-serif] tracking-wide relative z-50">
        <section
          // class='flex items-center flex-wrap lg:justify-center gap-4 py-2.5 sm:px-10 px-4 border-gray-200 border-b min-h-[70px]'
          className="flex items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[70px] max-lg:min-h-[60px]"
        >
          <Link
            to={"/"}
            class="h-12 overflow-hidden rounded-full drop-shadow-md shadow-md shrink-0"
          >
            <img src={logo} alt="logo" class="h-full" />
          </Link>
          {/* <a href="javascript:void(0)" class="hidden max-sm:block"><img src="https://readymadeui.com/readymadeui-short.svg" alt="logo" class='w-9' />
        </a> */}

          <div class="">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904"
            class="cursor-pointer fill-gray-400 mr-2.5 inline-block w-[18px] h-[18px]">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
          <input type='text' placeholder='Search...' class="outline-none bg-transparent w-full text-sm" /> */}
            <SearchFrom />
          </div>

          <div class="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">
            {/* <span class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px"
              class="cursor-pointer fill-gray-800 hover:fill-[#007bff] inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000" />
            </svg>
            <span class="absolute left-auto -ml-1 top-0 rounded-full bg-blue-600 px-1 py-0 text-xs text-white">1</span>
          </span> */}
            <Link to={"cart"}>
              <Badge
                count={cart.length}
                showZero
                offset={[10, -5]}
                className="mr-1"
              >
                <span class="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    class="cursor-pointer fill-gray-800 hover:fill-[#007bff] inline-block"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    ></path>
                  </svg>
                  {/* <span class="absolute left-auto -ml-1 top-0 rounded-full bg-blue-600 px-1 py-0 text-xs text-white">4</span> */}
                </span>
              </Badge>
            </Link>
            <div class="inline-block cursor-pointer border-gray-300">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"
              class="hover:fill-[#007bff]">
              <circle cx="10" cy="7" r="6" data-original="#000000" />
              <path
                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                data-original="#000000" />
            </svg> */}
              {!auth.user ? (
                <>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"
              class="hover:fill-[#007bff]">
              <circle cx="10" cy="7" r="6" data-original="#000000" />
              <path
                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                data-original="#000000" />
            </svg>
              <li id="toggleOpen" class='lg:hidden'>
                <button>
                  <svg class="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"></path>
                  </svg>
                </button>
              </li> */}
                  <li class="flex text-[15px] max-lg:py-2 px-4 hover:text-[#007bff] hover:fill-[#007bff]">
                    <button class="px-4 py-2 text-sm font-semibold text-gray-800 border border-[#333] bg-transparent">
                      <Link to={"login"}>Sign In</Link>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  {/* <FaUserCircle  className="text-2xl flex items-center mr-3 "/> */}
                  <div class="group max-lg:border-b max-lg:py-3 relative">
                    <a class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        class="hover:fill-[#007bff]"
                      >
                        <circle cx="10" cy="7" r="6" data-original="#000000" />
                        <path
                          d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                          data-original="#000000"
                        />
                      </svg>
                      {/* <svg
                  xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16" data-original="#000000" />
                </svg> */}
                    </a>
                    <ul class="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 right-4 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                      {/* <li class="border-b py-2 ">
                        <Link
                          to={'/account'}
                          class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                        >
                          User Account 
                        </Link>
                      </li> */}
                      
                      <li class="border-b py-2 ">
                        <Link
                          to={'/dashboard/admin'}
                          class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                        >
                          Account 
                        </Link>
                      </li>
                      <li class="border-b py-2 ">
                        <Link
                          to={'/order'}
                          class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                        >
                          My Orders
                        </Link>
                      </li>
                      <li class="border-b py-2 ">
                        <button className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                          <Link
                            onClick={handleLogout}
                            to={"/login"}
                            className="inline-flex gap-2 items-center"
                          >
                            <LogOut />
                            LogOut
                          </Link>
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        <div class="flex flex-wrap justify-center px-10 py-3 relative">
          <div
            id="collapseMenu"
            class="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul class="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[280px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li class="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    class="w-36"
                  />
                </a>
              </li>
              <li class="max-lg:border-b max-lg:px-3 max-lg:py-3">
                <Link
                  to={"/"}
                  class="hover:text-[#007bff] text-gray-800 block text-[15px]"
                >
                  Home
                </Link>
              </li>
              <li class="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative">
                <a class="hover:text-[#007bff] hover:fill-[#007bff] text-gray-800 text-[15px] flex items-center">
                  Store
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    class="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <ul class="absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-[400ms]">
                  {categories?.map((c) => (
                    <li class="border-b py-3">
                      <Link
                        to={`/category/${c.slug}`}
                        class="hover:text-[#007bff] hover:fill-[#007bff] text-gray-800 text-[15px] flex items-center"
                      >
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-4 inline-block"
                      viewBox="0 0 64 64">
                      <path
                        d="M61.92 30.93a7.076 7.076 0 0 0-6.05-5.88 8.442 8.442 0 0 0-.87-.04V22A15.018 15.018 0 0 0 40 7H24A15.018 15.018 0 0 0 9 22v3.01a8.442 8.442 0 0 0-.87.04 7.076 7.076 0 0 0-6.05 5.88A6.95 6.95 0 0 0 7 38.7V52a3.009 3.009 0 0 0 3 3v6a1 1 0 0 0 1 1h3a1 1 0 0 0 .96-.73L16.75 55h30.5l1.79 6.27A1 1 0 0 0 50 62h3a1 1 0 0 0 1-1v-6a3.009 3.009 0 0 0 3-3V38.7a6.95 6.95 0 0 0 4.92-7.77ZM11 22A13.012 13.012 0 0 1 24 9h16a13.012 13.012 0 0 1 13 13v3.3a6.976 6.976 0 0 0-5 6.7v3.18a3 3 0 0 0-1-.18H17a3 3 0 0 0-1 .18V32a6.976 6.976 0 0 0-5-6.7Zm37 16v5H16v-5a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1ZM13.25 60H12v-5h2.67ZM52 60h-1.25l-1.42-5H52Zm3.83-23.08a1.008 1.008 0 0 0-.83.99V52a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V37.91a1.008 1.008 0 0 0-.83-.99 4.994 4.994 0 0 1 .2-9.88A4.442 4.442 0 0 1 9 27h.01a4.928 4.928 0 0 1 3.3 1.26A5.007 5.007 0 0 1 14 32v12a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V32a5.007 5.007 0 0 1 1.69-3.74 4.932 4.932 0 0 1 3.94-1.22 5.018 5.018 0 0 1 4.31 4.18v.01a4.974 4.974 0 0 1-4.11 5.69Z"
                        data-original="#000000" />
                    </svg> */}
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li class="max-lg:border-b max-lg:px-3 max-lg:py-3">
                <Link
                  to={"products"}
                  class="hover:text-[#007bff] text-gray-800 text-[15px] block"
                >
                  Product
                </Link>
              </li>
              {/* <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-800 text-[15px] block'>Blog</a></li> */}
              <li class="max-lg:border-b max-lg:px-3 max-lg:py-3">
                <Link
                  to={"about"}
                  class="hover:text-[#007bff] text-gray-800 text-[15px] block"
                >
                  About
                </Link>
              </li>
              <li class="max-lg:border-b max-lg:px-3 max-lg:py-3">
                <Link
                  to={"contact"}
                  class="hover:text-[#007bff] text-gray-800 text-[15px] block"
                >
                  Contact
                </Link>
              </li>
              {/* <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-800 text-[15px] block'>Source</a></li>
            <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-800 text-[15px] block'>Partner</a></li>
            <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-800 text-[15px] block'>More</a></li> */}
            </ul>
          </div>

          {/* <div id="toggleOpen" onClick={()=>setVisible(true)} class='flex ml-auto lg:hidden'>
          <button>
            <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div> */}
          {/* <div onClick={()=>setVisible(true)} className="flex ml-auto lg:hidden"> */}
          {/* <MdClose  className=" size-6" /> */}
          {/*             
              <HiMenuAlt3 className=" size-6" />
          
          </div> */}
          {/* sidebar menu for small screens */}
          <div
            id="toggleOpen"
            onClick={() => setVisible(true)}
            class="flex ml-auto lg:hidden"
          >
            <button>
              <svg
                class="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* <div
          className={`absolute top-0 right-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div
           
            className=" felx flex-col text-gray-600"
          >
            <div className="flex gap-2 p-3">
       
            lg:flex lg:gap-x-10 max-lg:space-y-3 top-0 left-0 absolute bg-white  transition-all overflow-hidden
            </div> */}
          <div className="lg:hidden">
            <ul
              class={`lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white top-0 left-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ${
                visible ? "max-lg:min-w-[280px]" : "w-0"
              }`}
            >
              <MdClose
                onClick={() => setVisible(false)}
                className="flex ml-auto mt-3 mr-3 shadow-sm rounded-md"
              />
              <li class="max-lg:border-b max-lg:px-3 max-lg:py-3">
                <Link
                  to={"/"}
                  class="hover:text-[#007bff] text-gray-800 block text-[15px]"
                >
                  Home
                </Link>
              </li>
              <li class="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative">
                <a class="hover:text-[#007bff] hover:fill-[#007bff] text-gray-800 text-[15px] flex items-center">
                  Store
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    class="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <ul class="absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-[400ms]">
                  {categories?.map((c) => (
                    <li class="border-b py-3">
                      <Link
                        to={`/category/${c.slug}`}
                        class="hover:text-[#007bff] hover:fill-[#007bff] text-gray-800 text-[15px] flex items-center"
                      >
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-4 inline-block"
                      viewBox="0 0 64 64">
                      <path
                        d="M61.92 30.93a7.076 7.076 0 0 0-6.05-5.88 8.442 8.442 0 0 0-.87-.04V22A15.018 15.018 0 0 0 40 7H24A15.018 15.018 0 0 0 9 22v3.01a8.442 8.442 0 0 0-.87.04 7.076 7.076 0 0 0-6.05 5.88A6.95 6.95 0 0 0 7 38.7V52a3.009 3.009 0 0 0 3 3v6a1 1 0 0 0 1 1h3a1 1 0 0 0 .96-.73L16.75 55h30.5l1.79 6.27A1 1 0 0 0 50 62h3a1 1 0 0 0 1-1v-6a3.009 3.009 0 0 0 3-3V38.7a6.95 6.95 0 0 0 4.92-7.77ZM11 22A13.012 13.012 0 0 1 24 9h16a13.012 13.012 0 0 1 13 13v3.3a6.976 6.976 0 0 0-5 6.7v3.18a3 3 0 0 0-1-.18H17a3 3 0 0 0-1 .18V32a6.976 6.976 0 0 0-5-6.7Zm37 16v5H16v-5a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1ZM13.25 60H12v-5h2.67ZM52 60h-1.25l-1.42-5H52Zm3.83-23.08a1.008 1.008 0 0 0-.83.99V52a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V37.91a1.008 1.008 0 0 0-.83-.99 4.994 4.994 0 0 1 .2-9.88A4.442 4.442 0 0 1 9 27h.01a4.928 4.928 0 0 1 3.3 1.26A5.007 5.007 0 0 1 14 32v12a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V32a5.007 5.007 0 0 1 1.69-3.74 4.932 4.932 0 0 1 3.94-1.22 5.018 5.018 0 0 1 4.31 4.18v.01a4.974 4.974 0 0 1-4.11 5.69Z"
                        data-original="#000000" />
                    </svg> */}
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li class="max-lg:border-b max-lg:px-3 max-lg:py-3">
                <Link
                  to={"products"}
                  class="hover:text-[#007bff] text-gray-800 text-[15px] block"
                >
                  Product
                </Link>
              </li>
              {/* <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-800 text-[15px] block'>Blog</a></li> */}
              <li class="max-lg:border-b max-lg:px-3 max-lg:py-3">
                <Link
                  to={"about"}
                  class="hover:text-[#007bff] text-gray-800 text-[15px] block"
                >
                  About
                </Link>
              </li>
              <li class="max-lg:border-b max-lg:px-3 max-lg:py-3">
                <Link
                  to={"contact"}
                  class="hover:text-[#007bff] text-gray-800 text-[15px] block"
                >
                  Contact
                </Link>
              </li>{" "}
            </ul>
          </div>
          {/* </div>
        </div> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
