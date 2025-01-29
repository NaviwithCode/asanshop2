import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { DisclosurePanel } from "@headlessui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Img1 from "../img/01.webp";
import Img2 from "../img/02.webp";
import Img3 from "../img/03.webp";
import toast from "react-hot-toast";
import Slider from "./Slider";
import { Carousel, Checkbox, Radio } from "antd";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {Modal} from "antd"
import Filter from "./Filter";
import { prices } from "../component/Prices";
import { useCart } from "../context/cart";
// import HomeSlider from "./HomeSlider"
import { IoLogoWhatsapp } from "react-icons/io";


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useCart();
  const navigate = useNavigate;
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // get total count
  const getTotalCount = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  // load more
  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotalCount();
  }, []);
  // get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);
  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/product-filters`,
        {
          checked,
          radio,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    // <div className="">
    //   <Slider />
    //   <div className=" bg-white overflow-hidden flex py-8 antialiased dark:bg-gray-900 ">
    //     {/* <div className="">
    //       <div className="flex mt-20 flex-col">
    //         <h4 className="px-3">Filter By Category</h4>
    //         <div className="mt-3 px-3 flex-col flex">
    //           {categories?.map((c) => (
    //             <Checkbox
    //               key={c._id}
    //               onChange={(e) => handleFilter(e.target.checked, c._id)}
    //             >
    //               {c.name}
    //             </Checkbox>
    //           ))}
    //         </div>
    //         <h4 className="px-3 mt-4">Filter By Prices</h4>
    //         <div className="px-3 mt-2">
    //           <Radio.Group onChange={(e) => setRadio(e.target.value)}>
    //             {prices?.map((p) => (
    //               <Radio key={p._id} value={p.Array}>
    //                 {p.name}
    //               </Radio>
    //             ))}
    //           </Radio.Group>
    //         </div>
    //         <div className="p-3">
    //           <button
    //             className="bg-red-700 text-white py-3 px-3 rounded-md"
    //             onClick={() => window.location.reload()}
    //           >
    //             RESET FILTERS
    //           </button>
    //         </div>
    //       </div>
    //     </div> */}
    //     <div class="mx-auto max-w-screen-xl 2xl:px-0">
    //     <div className="text-center py-8 text-3xl">
    //       <h1>LATEST COLLECTIONS</h1>
    //     </div>
         
    //       {/* </div> */}
    //       {/* <div class="mb-4 grid lg:grid-cols-3 sm:grid-cols-2 gap-4 md:mb-8">
    //         {products?.map((p) => (
    //           <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
    //             <div class="h-56 w-full">
    //               <a href="#">
    //                 <img
    //                   class="mx-auto h-full dark:hidden"
    //                   src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
    //                   alt=""
    //                 />
    //               </a>
    //             </div>
    //             <div class="pt-6">
    //               <div class="mb-4 flex items-center justify-between gap-4">
    //                 <span class="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
    //                   {" "}
    //                   Up to 35% off{" "}
    //                 </span>

    //                 <div class="flex items-center justify-end gap-1">
    //                   <button
    //                     type="button"
    //                     data-tooltip-target="tooltip-quick-look"
    //                     class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //                   >
    //                     <span class="sr-only"> Quick look </span>
    //                     <svg
    //                       class="h-5 w-5"
    //                       aria-hidden="true"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       fill="none"
    //                       viewBox="0 0 24 24"
    //                     >
    //                       <path
    //                         stroke="currentColor"
    //                         stroke-width="2"
    //                         d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
    //                       />
    //                       <path
    //                         stroke="currentColor"
    //                         stroke-width="2"
    //                         d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    //                       />
    //                     </svg>
    //                   </button>
    //                   <div
    //                     id="tooltip-quick-look"
    //                     role="tooltip"
    //                     class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
    //                     data-popper-placement="top"
    //                   >
    //                     Quick look
    //                     <div class="tooltip-arrow" data-popper-arrow=""></div>
    //                   </div>

    //                   <button
    //                     type="button"
    //                     data-tooltip-target="tooltip-add-to-favorites"
    //                     class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //                   >
    //                     <span class="sr-only"> Add to Favorites </span>
    //                     <svg
    //                       class="h-5 w-5"
    //                       aria-hidden="true"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       fill="none"
    //                       viewBox="0 0 24 24"
    //                     >
    //                       <path
    //                         stroke="currentColor"
    //                         stroke-linecap="round"
    //                         stroke-linejoin="round"
    //                         stroke-width="2"
    //                         d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
    //                       />
    //                     </svg>
    //                   </button>
    //                   <div
    //                     id="tooltip-add-to-favorites"
    //                     role="tooltip"
    //                     class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
    //                     data-popper-placement="top"
    //                   >
    //                     Add to favorites
    //                     <div class="tooltip-arrow" data-popper-arrow=""></div>
    //                   </div>
    //                 </div>
    //               </div>

    //               <a
    //                 href={`/products/${p.slug}`}
    //                 class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
    //               >
    //                 {p.name}
    //               </a>
    //               <div class="mt-2 flex items-center gap-2">
    //                 <div class="flex items-center">
    //                   <svg
    //                     class="h-4 w-4 text-yellow-400"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="currentColor"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
    //                   </svg>

    //                   <svg
    //                     class="h-4 w-4 text-yellow-400"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="currentColor"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
    //                   </svg>

    //                   <svg
    //                     class="h-4 w-4 text-yellow-400"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="currentColor"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
    //                   </svg>

    //                   <svg
    //                     class="h-4 w-4 text-yellow-400"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="currentColor"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
    //                   </svg>

    //                   <svg
    //                     class="h-4 w-4 text-yellow-400"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="currentColor"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
    //                   </svg>
    //                 </div>

    //                 <p class="text-sm font-medium mt-3 text-gray-900 dark:text-white">
    //                   5.0
    //                 </p>
    //                 <p class="text-sm font-medium mt-3 text-gray-500 dark:text-gray-400">
    //                   (455)
    //                 </p>
    //               </div>

    //               <ul class="mt-2 flex items-center gap-4">
    //                 <li class="flex items-center gap-2">
    //                   <svg
    //                     class="h-4 w-4 text-gray-500 dark:text-gray-400"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path
    //                       stroke="currentColor"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       stroke-width="2"
    //                       d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    //                     />
    //                   </svg>
    //                   <p class="text-sm font-medium mt-3 text-gray-500 dark:text-gray-400">
    //                     Fast Delivery
    //                   </p>
    //                 </li>

    //                 <li class="flex items-center gap-2">
    //                   <svg
    //                     class="h-4 w-4 text-gray-500 dark:text-gray-400"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path
    //                       stroke="currentColor"
    //                       stroke-linecap="round"
    //                       stroke-width="2"
    //                       d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    //                     />
    //                   </svg>
    //                   <p class="text-sm font-medium mt-3 text-gray-500 dark:text-gray-400">
    //                     Best Price
    //                   </p>
    //                 </li>
    //               </ul>

    //               <div class="mt-4 flex items-center justify-between gap-4">
    //                 <p class="text-2xl mt-5 font-extrabold leading-tight text-gray-900 dark:text-white">
    //                   AED{p.price}
    //                 </p>

    //                 <button
    //                   type="button"
                     
    //                   class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    //                 onClick={()=>{
    //                   setCart([...cart,p])
    //                   localStorage.setItem(
    //                     "cart",
    //                     JSON.stringify([...cart, p])
    //                   );
    //                   toast.success("Item Added to Cart")
    //                 }} >
    //                   <svg
    //                     class="-ms-2 me-2 h-5 w-5"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path
    //                       stroke="currentColor"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       stroke-width="2"
    //                       d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
    //                     />
    //                   </svg>
    //                   Add to cart
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div> */}
    //       <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-2 p-2
    //       ">
    //         {products?.map((p) => (
    //           <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
    //             <a
    //               class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
    //               href={`/products/${p.slug}`}
    //             >
    //               <img
    //                 class="object-cover"
    //                 src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
    //                 alt="product image"
    //               />
    //               {/* <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
    //             </a>
    //             <div class="mt-4 px-5 pb-5">
    //               <a href={`/products/${p.slug}`}>
    //                 <h5 class="text-xl tracking-tight text-slate-900">
    //                   {p.name}
    //                 </h5>
    //               </a>
    //               <div class="mt-2 mb-5 flex items-center justify-between">
    //                 <p>
    //                   <span class="text-3xl font-bold text-slate-900">
    //                     AED {p.price}
    //                   </span>
    //                   {/* <span class="text-sm text-slate-900 line-through"></span> */}
    //                 </p>
    //                 {/* <div class="flex items-center">
    //     <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //     </svg>
    //     <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //     </svg>
    //     <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //     </svg>
    //     <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //     </svg>
    //     <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //     </svg>
    //     <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
    //   </div> */}
    //               </div>
    //               <button
    //                 onClick={() => {
    //                   setCart([...cart, p]);
    //                   localStorage.setItem(
    //                     "cart",
    //                     JSON.stringify([...cart, p])
    //                   );
    //                   toast.success("Item Added to Cart");
    //                 }}
    //                 class="flex items-center justify-center rounded-md bg-gray-600  hover:bg-[#007bff] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
    //               >
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   class="mr-2 h-6 w-6"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   stroke="currentColor"
    //                   stroke-width="2"
    //                 >
    //                   <path
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    //                   />
    //                 </svg>
    //                 Add to cart
    //               </button>
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //       {/* <div class="w-full text-center">
    //         <a href="/products">
    //         <button
    //         type="button"
    //             class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
    //           >
    //             Show more
    //           </button>
    //         </a>
    //         </div> */}
    //       <div className="mt-3">
    //         {products && products.length < total && (
    //           <button
    //             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //             onClick={(e) => {
    //               e.preventDefault();
    //               setPage(page + 1);
    //             }}
    //           >
    //             {loading ? "Loading more ..." : "Loadmore"}
    //           </button>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
    <Slider />
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-12">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    {/* <!-- Heading & Filters --> */}
    <div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
      <div>
        <h2 class="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">ALL COLLECTIONS</h2>
      </div>
      <div class="flex items-center space-x-4">
        <button onClick={() => {setIsModalOpen(true)}} data-modal-toggle="filterModal" data-modal-target="filterModal" type="button" class="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
          <svg class="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
          </svg>
          Filters
          <svg class="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>       
      </div>
      <Modal onCancel={()=>setIsModalOpen(false)} footer={null} visible={isModalOpen}>
           <div className="">
           <div className="flex mt-20 flex-col">
             <h4 className="px-3">Filter By Category</h4>
             <div className="mt-3 px-3 flex-col flex">
               {categories?.map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
            <h4 className="px-3 mt-4">Filter By Prices</h4>
            <div className="px-3 mt-2">
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {prices?.map((p) => (
                  <Radio key={p._id} value={p.Array}>
                    {p.name}
                  </Radio>
                ))}
              </Radio.Group>
            </div>
            <div className="p-3">
              <button
                className="bg-red-700 text-white py-3 px-3 rounded-md"
                onClick={() => window.location.reload()}
              >
                RESET FILTERS
              </button>
            </div>
          </div>
        </div>
            </Modal>
    </div>
    <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p)=>(
      <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="h-56 w-full">
          <Link to={ `/products/${p.slug}`}>
            <img class="mx-auto h-full dark:hidden" src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}alt="" />
            <img class="mx-auto hidden h-full dark:block" src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} alt="" />
          </Link>
        </div>
        <div class="pt-6">  
          <Link to={`/products/${p.slug}`} class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{p.name.substring(0, 44)}</Link>
          <div class="mt-4 flex items-center justify-between gap-4">
            <p class="text-2xl font-extrabold mt-4 leading-tight text-gray-900 dark:text-white">AED{p.price}</p>

            <button onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to Cart");
                    }} type="button" class="inline-flex items-center rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-[#007bff] focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>    
  ))}
    </div>
    <div class="w-full text-center">
    {products && products.length < total && (
      <button type="button" class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"     onClick={(e) => {
                      e.preventDefault();
                      setPage(page + 1);
                    }}>
                      {loading ? "Show More ..." : "Loadmore"}</button>
    )}
    </div>
  </div>
  {/* <IoLogoWhatsapp /> */}

</section>
</>
  );
};

export default Home;
