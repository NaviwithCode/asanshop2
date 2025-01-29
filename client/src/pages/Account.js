import React from 'react'
// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";
import { TbLayoutDashboardFilled, TbShoppingBag } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { BiBadgeCheck } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import CreateProducts from "../pages/Admin/CreateProducts";
const Account = () => {
  return (
    <div>
          <header className="shadow bg-white w-60 flex-col h-[1000px] flex">
      <div className=" fixed px-4 py-6 sm:px-6 lg:px-8">
        <div
        //   onClick={() => navigate("/dashboard/user")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <FaChartLine size={25} />
          <h1 className="text-xl font-extrabold">User Account</h1>
        </div>
        <div className="mt-4">
          {/* <Link
            to={"/dashboard/admin"}
            className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground"
          >
            {" "}
            <TbLayoutDashboardFilled />
            Dashboard
          </Link> */}
        </div>
        <div className="">
          <Link
            to={"/dashboard/user/profile"}
            className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground"
          >
            {" "}
            <CgProfile />
            Profile
          </Link>
        </div>
        {/* <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-300 hover:text-foreground">
              <TbShoppingBag className="text-lg" />
              Products
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute lift-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  to={"/dashboard/admin/product"}
                  className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer bg-white hover:bg-gray-300 hover:text-foreground"
                >
                  {" "}
                  <MdCategory />
                  All Products
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to={"/dashboard/admin/addnewproducts"}
                  className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground"
                >
                  {" "}
                  <MdCategory />
                  Add New Products
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to={"/dashboard/admin/category"}
                  className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground"
                >
                  {" "}
                  <MdCategory />
                  Category
                </Link>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu> */}
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
        <div className="">
          <Link
            to={"/dashboard/user/orders"}
            className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground"
          >
            {" "}
            <BiBadgeCheck />
            Orders
          </Link>
        </div>
        {/* <div className='mt-2 '>
            <Link to={"/dashboard/admin/create-products"} className='list-group-item list-group-item-action flex items-center box-content h-2 w-full p-2 border-2 shadow rounded-md' >Create Products</Link>
            </div>
            <div className='mt-2 '>
            <Link to={"/dashboard/admin/users"} className='list-group-item list-group-item-action flex items-center box-content h-2 w-full p-2 border-2 rounded-md shadow' >Users</Link>
            </div> */}
      </div>
    </header>
    </div>
  )
}

export default Account
