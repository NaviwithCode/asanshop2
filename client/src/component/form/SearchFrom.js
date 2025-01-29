import React, { useState } from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import UseCategory from "../../hooks/UseCategory";
import { FaArrowRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
const SearchForm = () => {
  const [values, setValues] = useSearch();
  const categories = UseCategory()
  const navigate = useNavigate();

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
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  return (
// 

<form class="max-w-lg" onSubmit={handleSubmit}>
    <div class="flex">
        {/* <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div> */}
        {/* <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
          All
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
        <div className="py-1">
          <MenuItem>
            <a
            href=""
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              All categories
               <div className="absolute right-2 py-2 bg-white px-2 shadow drop-shadow-md flex flex-col">
              </div>
            </a>
          
          </MenuItem>
          </div>
        {categories?.map((c)=>(
        <div className="py-1">
          <MenuItem>

            <a
            href={`category/${c.slug}`}
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              {c.name}
            </a>
          </MenuItem>
          </div>
            ))}
          </MenuItems>
          </Menu> */}
          {/* <div  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 cursor-pointer">All Category

          {showMenu && (
            <div className=" text-slate-600" onClick={handleShowMenu}>
                <div className="cursor-pointer">
                  {" "}
                  </div>
                  <div className="absolute right-2 py-2 bg-white px-2 shadow drop-shadow-md flex flex-col"></div>
                </div>
            )}
            </div> */}
            {/* <details className="dropdown">
  <summary className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border rounded-s-lg  dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 cursor-pointer">All</summary>
  <ul className="absolute rounded-md py-2  bg-white px-2 w-40 text-black shadow">
    <details className="dropdown">
  <summary className="flex items-center cursor-pointer">All Category <FaArrowRight className="mt-2 text-center px-1" /></summary>
  <ul className="absolute rounded-sm -right-56 flex flex-row gap-3 -mt-7 w-56 py-2 bg-white px-2 shadow">
  {categories?.map((c)=>(
    <div key={c._id} className="">
      <a href={`/category/${c.slug}`}>{c.name}</a>

    </div>
  ))}
  </ul>
</details>
   
  {/* {categories?.map((c)=>(
    <li>
      <a href={`/category/${c.slug}`}>{c.name}</a></li>
  ))} */}
  {/* </ul> */}
{/* </details> */}
        {/* <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 z-20 text-sm rounded-e-lg lg:w-[350px] border-s-gray-50 border-s-2 border  dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search flowers, cakes, gifts etc." value={values.keyword}
            onChange={(e) => setValues({ ...values, keyword: e.target.value })} />
            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button> */}
             <div class='flex flex-wrap w-full items-center'>
          <input type='text' placeholder='Search something...' onChange={(e) => setValues({ ...values, keyword: e.target.value })}
            class='xl:w-80 max-lg:hidden lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-gray-100 border focus:bg-transparent px-4 rounded h-10 outline-none text-sm transition-all' />
            <div className=" max-lg:hidden hover:bg-[#007bff] focus:bg-transparent border-t border-b border-r bg-gray-100  text-gray-600 hover:text-white rounded-sm hover:px-2 hover:py-2  py-2 px-2 h-10 outline-none text-xl -ml-2  transition-all">
        <IoSearch className="" />
            </div>
        </div>
        
    </div>
</form>


  )
}
export default SearchForm;

// import React from "react";
// import { useSearch } from "../../context/search";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const SearchForm = () => {
//   const [values, setValues] = useSearch();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API}/api/v1/product/search/${values.keyword}`
//       );
//       setValues({ ...values, results: data });
//       navigate("/search");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <form
//         className="d-flex search-form"
//         role="search"
//         onSubmit={handleSubmit}
//       >
//         <input
//           className="form-control me-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//           value={values.keyword}
//           onChange={(e) => setValues({ ...values, keyword: e.target.value })}
//         />
//         <button className="btn btn-outline-success" type="submit">
//           Search
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SearchForm;
