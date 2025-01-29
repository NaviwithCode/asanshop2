// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaChartLine } from "react-icons/fa";
// import { TbLayoutDashboardFilled, TbShoppingBag } from "react-icons/tb";
// import { CgProfile } from "react-icons/cg";
// import { BiBadgeCheck } from "react-icons/bi";
// import { MdCategory } from "react-icons/md";
// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import CreateProducts from "../pages/Admin/CreateProducts";
// import { Helmet } from "react-helmet";

// const AdminMenu = () => {
//   const navigate = useNavigate();
//   return (
//     // <div className='flex items-center list-group'>
//     //     <h4>Admin Panel</h4>
//     //   <Link to={"/dashboard/admin/create-category"} className='list-group-item list-group-item-action' >Create Category</Link>
//     //   <Link to={"/dashboard/admin/create-product"} className='list-group-item list-group-item-action' >Create Product</Link>
//     //   <Link to={"/dashboard/admin/users"} className='list-group-item list-group-item-action' >Users</Link>
//     // </div>
//     <header className="shadow bg-white w-60 flex-col h-[1000px] flex">
//        <Helmet>
//                 <meta charSet="utf-8" />
//                 <title>Admin Panel - ASAN Graoup Shop</title>
//                 {/* <meta name="description" content="Discover how ASAN Group Shop combines innovation, excellence, and vision to drive your success. Explore our About Us page and join the journey to a brighter future." />
//                 <meta name="keywords" content="phone, laptop, watch,electronic" /> */}
//             </Helmet>
//       <div className=" px-4 py-6 sm:px-6 lg:px-8">
//         <Link
//           to={"/dashboard/admin"}
//           className="flex items-center gap-2 cursor-pointer"
//         >
//           <FaChartLine size={25} />
//           <h1 className="text-xl font-extrabold">Admin Panel</h1>
//         </Link>
//         <div className="mt-4">
//           <Link
//             to={"/dashboard/admin"}
//             className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground"
//           >
//             {" "}
//             <TbLayoutDashboardFilled />
//             Dashboard
//           </Link>
//         </div>
//         <div className="">
//           <Link
//             to={"/dashboard/admin/users"}
//             className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground"
//           >
//             {" "}
//             <CgProfile />
//             Profile
//           </Link>
//         </div>
//         <Menu as="div" className="relative inline-block text-left">
//           <div>
//             <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-300 hover:text-foreground">
//               {/* <Link to={"/dashboard/admin/product"} className=""> */}
//               <TbShoppingBag className="text-lg" />
//               Products
//               <ChevronDownIcon
//                 aria-hidden="true"
//                 className="-mr-1 h-5 w-5 text-gray-400"
//               />
//               {/* </Link> */}
//             </MenuButton>
//           </div>

//           <MenuItems
//             transition
//             className="absolute lift-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//           >
//             <div className="py-1">
//               <MenuItem>
//                 <Link
//                   to={"/dashboard/admin/product"}
//                   className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer bg-white hover:bg-gray-300 hover:text-foreground"
//                 >
//                   {" "}
//                   {/* <MdCategory /> */}
//                   All Products
//                 </Link>
//               </MenuItem>
//               <MenuItem>
//                 <Link
//                   to={"/dashboard/admin/addnewproducts"}
//                   className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground"
//                 >
//                   {" "}
//                   {/* <MdCategory /> */}
//                   Add New Products
//                 </Link>
//               </MenuItem>
//               <MenuItem>
//                 <Link
//                   to={"/dashboard/admin/category"}
//                   className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground"
//                 >
//                   {" "}
//                   {/* <MdCategory /> */}
//                   Category
//                 </Link>
//               </MenuItem>
//             </div>
//           </MenuItems>
//         </Menu>
//         {/* <div className="">
//           <Link
//             to={"/dashboard/admin/products"}
//             className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground"
//           >
//             {" "}
            
//             Products
//           </Link>
//         </div>
//         <div className="">
         
//         </div> */}
//         <div className="">
//           <Link
//             to={"/dashboard/admin/orders"}
//             className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground"
//           >
//             {" "}
//             <BiBadgeCheck />
//             Orders
//           </Link>
//         </div>
//         {/* <div className='mt-2 '>
//             <Link to={"/dashboard/admin/create-products"} className='list-group-item list-group-item-action flex items-center box-content h-2 w-full p-2 border-2 shadow rounded-md' >Create Products</Link>
//             </div>
//             <div className='mt-2 '>
//             <Link to={"/dashboard/admin/users"} className='list-group-item list-group-item-action flex items-center box-content h-2 w-full p-2 border-2 rounded-md shadow' >Users</Link>
//             </div> */}
//       </div>
//     </header>
//   );
// };

// export default AdminMenu;

// import React from "react";
// import { Fragment } from "react";
// import { FaChartLine } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { BiBadgeCheck } from "react-icons/bi";
// import { TbLayoutDashboardFilled, TbShoppingBag } from "react-icons/tb";
// import { RiAdminFill } from "react-icons/ri";
// import { CgProfile } from "react-icons/cg";
// import { Menu, MenuButton } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import DroupDown from "./DroupDown";
// // import Head from "../pages/Auth/head"
// // import { ChartNoAxesCombined, Sheet,SheetContent, } from 'lucide-react';
// // import { SheetContent, SheetHeader, SheetTitle } from "";
// const UserManuDashboard = [
//   {
//     id: "admin",
//     label: "Dashboard Panel",
//     path: "/dashboard/admin",
//     icons: <TbLayoutDashboardFilled />,
//   },
//   {
//     id: "users",
//     label: "Profile",
//     path: "/dashboard/admin/users",
//     icons: <CgProfile />,
//   },

//   {
//     id: "products",
//     label: "Products",
//     icons: <TbShoppingBag />,
//     path: "/dashboard/admin/products",
//   },
//   {
//     id: "category",
//     label: "Category",
//     path: "/dashboard/admin/category",
//     icons: <TbShoppingBag />,
//   },
//   {
//     id: "orders",
//     label: "Orders",
//     path: "/dashboard/admin/orders",
//     icons: <BiBadgeCheck />,
//   },
// ];
// function MenuItem() {
//   const navigate = useNavigate();
//   return (
//     <nav className="w-60 mt-8 flex-col flex gap-2">
//       {UserManuDashboard.map((MenuItem) => (
//         <div
//           key={MenuItem.id}
//           onClick={() => navigate(MenuItem.path)}
//           className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground"
//         >
//           {MenuItem.icons}
//           <span>{MenuItem.label}</span>
//         </div>
//       ))}
//     </nav>
//   );
// }
// const AdminManu = () => {
//   const navigate = useNavigate();
//   return (
//     <Fragment>

//       <aside className="w-68 flex-col border-r h-[535px] shadow bg-white p-6 lg:flex sm:flex">
//         <div
//           onClick={() => navigate("/dashboard/admin")}
//           className="flex items-center gap-2 cursor-pointer"
//         >
//           <FaChartLine size={25} />
//           <h1 className="text-xl font-extrabold">Admin Panel</h1>
//         </div>
//         <MenuItem />
//       </aside>

//       {/* <Head/> */}
//     </Fragment>
//   );
// };

// export default AdminManu;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBox, FaChartLine, FaCog, FaShoppingCart, FaTachometerAlt, FaUser, FaUsers } from "react-icons/fa";
import { TbLayoutDashboardFilled, TbShoppingBag } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { BiBadgeCheck } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import InventoryIcon from "@mui/icons-material/Inventory";
import { FaCartArrowDown } from "react-icons/fa6";
// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import CreateProducts from "../pages/Admin/CreateProducts";
// import { Helmet } from "react-helmet";

const AdminMenu = () => {
    const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0)

  const isOpen = (index)=>{
    setActiveTab(index)
    setOpen(!open)
}

  return (
    // <div className='flex items-center list-group'>
    //     <h4>Admin Panel</h4>
    //   <Link to={"/dashboard/admin/create-category"} className='list-group-item list-group-item-action' >Create Category</Link>
    //   <Link to={"/dashboard/admin/create-product"} className='list-group-item list-group-item-action' >Create Product</Link>
    //   <Link to={"/dashboard/admin/users"} className='list-group-item list-group-item-action' >Users</Link>
    // </div>
    <header className="bg-white text-gray-900 shadow-md h-screen px-4 w-16 md:w-64 border-r border-e-gray-300">
       {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Admin Panel - ASAN Graoup Shop</title>
                {/* <meta name="description" content="Discover how ASAN Group Shop combines innovation, excellence, and vision to drive your success. Explore our About Us page and join the journey to a brighter future." />
                <meta name="keywords" content="phone, laptop, watch,electronic" /> */}
            {/* </Helmet> */}
      <div className=" mt-3">
        {/* <Link
          to={"/dashboard/admin"}
          className="flex items-center gap-2 cursor-pointer"
        >
          <FaChartLine size={25} />
          <h1 className="text-xl font-extrabold">Admin Panel</h1>
        </Link> */}
<ul className='flex flex-col mt-5 text-xl'>
  <Link to={'/dashboard/admin'}>
          <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
            <FaTachometerAlt/>
            <span className=' hidden md:inline'>Dashboard</span>
          </li>
          </Link>
          <Link to={"/dashboard/admin/product"}>
          <li className='flex items-center py-3 group max-lg:border-b max-lg:px-3 max-lg:py-3 relative px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
            <FaBox/>
            <span className='hidden md:inline'>Product</span>
            <ul class="absolute top-4 max-lg:top-8 -right-60 z-50 block space-y-2 shadow-lg bg-gray-100 rounded-sm max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-[400ms]">
                              <li class="border-b py-3">
                                <Link
                                  to={"/dashboard/admin/product"}
                                  class="hover:text-[#007bff] hover:fill-[#007bff] text-gray-800 text-[15px] flex items-center"
                                >
                                 
                              All Products
                                </Link>
                              </li>
                              <li class="border-b py-3">
                                <Link
                                  to={"/dashboard/admin/addnewproducts"}
                                  class="hover:text-[#007bff] hover:fill-[#007bff] text-gray-800 text-[15px] flex items-center"
                                >
                                 
                              Add New Products
                                </Link>
                              </li>
                              <li class="border-b py-3">
                                <Link
                                  to={"/dashboard/admin/category"}
                                  class="hover:text-[#007bff] hover:fill-[#007bff] text-gray-800 text-[15px] flex items-center"
                                >
                                 
                              Category
                                </Link>
                              </li>
                          </ul>
          </li>
          </Link>
          <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
            <FaUser/>
            <span className='hidden md:inline'>Users</span>
          </li>
          <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
            <FaShoppingCart/>
            <span className='hidden md:inline'>Orders</span>
          </li>
          <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
            <FaUsers/>
            <span className='hidden md:inline'>Customers</span>
          </li>
          <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
            <FaCog/>
            <span className='hidden md:inline'>Setting</span>
          </li>
        </ul>

        {/* <div className="mb-2">
          <Link
            to={"/dashboard/admin"} onClick={()=>isOpen(0)}
            className={`flex gap-2 items-center px-3 py-3 rounded-lg hover:bg-[#f1f1f1] hover:text-black ${activeTab===0  ?"bg-[#f1f1f1] text-gray-800":''} `}
          >
            {" "}
            <TbLayoutDashboardFilled  className="text-[20px]"/>
            <span>Dashboard</span>
          </Link>
        </div> */}
        {/* <div className="mb-2"> */}
          {/* <Link
            to={"/dashboard/admin/product"} onClick={()=>isOpen(1)}
            className={`flex gap-2 items-center px-3 py-3 rounded-lg hover:bg-[#f1f1f1] hover:text-black  ${activeTab===1 ?"bg-[#f1f1f1] text-gray-800":''}`}
          >
            {" "}
            <InventoryIcon className="!text-[20px]"/>
            Products
          </Link> */}
            {/* <div class="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative">
                          <Link  to={""} onClick={()=>isOpen(1)} class={`flex gap-2 items-center px-3 py-3 rounded-lg hover:bg-[#f1f1f1] hover:text-black  ${activeTab===1 ?"bg-[#f1f1f1] text-gray-800":''}`}>
                          <InventoryIcon className="!text-[20px]"/>
                            Products */}
                            {/* <svg
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
                            </svg> */}
                          {/* </Link>
                          <ul class="absolute top-4 max-lg:top-8 -right-60 z-50 block space-y-2 shadow-lg bg-gray-100 rounded-sm max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-[400ms]">
                              <li class="border-b py-3">
                                <Link
                                  to={"/dashboard/admin/product"}
                                  class="hover:text-[#007bff] hover:fill-[#007bff] text-gray-800 text-[15px] flex items-center"
                                >
                                 
                              All Products
                                </Link>
                              </li>
                              <li class="border-b py-3">
                                <Link
                                  to={"/dashboard/admin/addnewproducts"}
                                  class="hover:text-[#007bff] hover:fill-[#007bff] text-gray-800 text-[15px] flex items-center"
                                >
                                 
                              Add New Products
                                </Link>
                              </li>
                              <li class="border-b py-3">
                                <Link
                                  to={"/dashboard/admin/category"}
                                  class="hover:text-[#007bff] hover:fill-[#007bff] text-gray-800 text-[15px] flex items-center"
                                >
                                 
                              Category
                                </Link>
                              </li>
                          </ul>
                        </div>
        </div> */}
      
        {/* <div className="">
          <Link
            to={"/dashboard/admin/products"}
            className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground"
          >
            {" "}
            
            Products
          </Link>
        </div>
        <div className="">
         
        </div> */}
        {/* <div className="">
          <Link
            to={"/dashboard/admin/orders"} onClick={()=>isOpen(2)}
            className={`flex gap-2 items-center px-3 py-3 rounded-lg hover:bg-[#f1f1f1] hover:text-black ${activeTab===2 ?"bg-[#f1f1f1] text-gray-800":''}`}
          >
            {" "}
            <FaCartArrowDown className="text-[20px]" />
            Orders
          </Link>
        </div> */}
        {/* <div className='mt-2 '>
            <Link to={"/dashboard/admin/create-products"} className='list-group-item list-group-item-action flex items-center box-content h-2 w-full p-2 border-2 shadow rounded-md' >Create Products</Link>
            </div>
            <div className='mt-2 '>
            <Link to={"/dashboard/admin/users"} className='list-group-item list-group-item-action flex items-center box-content h-2 w-full p-2 border-2 rounded-md shadow' >Users</Link>
            </div> */}
      </div>
    </header>
  );
};

export default AdminMenu;