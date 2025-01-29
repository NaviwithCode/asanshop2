import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { json, Link, useParams } from 'react-router-dom'
import { useCart } from '../context/cart'

const ProductsDetails = () => {
  const [cart,setCart]=useCart()
    const params = useParams()
    const [products,setProducts]= useState({})
    const [relatedProducts, setRelatedProducts]=useState([])

    // initalp details
    useEffect(()=>{
        if(params?.slug) getProduct()
        },[params?.slug])
    // get product
    const getProduct = async()=>{
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`) 
            setProducts(data?.products)
            getSimilarProduct(data?.products._id, data?.products.category._id)
        } catch (error) {
            console.log(error)
            
        }
    }
    // get similar products
    const getSimilarProduct = async (pid,cid)=>{
        try {
          const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`) 
          setRelatedProducts(data?.products) 
        } catch (error) {
            console.log(error)
            
        }
    }
      const [count, setCount] = useState(1);

  const increaseCount = () => {
    // setCount(count + 1);
    const _CART = cart.map((item, index) => {
      return setCount === index
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
    setCart(_CART);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
   
    return (
        <section class="relative bg-white flex px-5 mb-20
        ">
      <div className=''>
        <div class="w-full mx-auto px-4 sm:px-6 lg:px-0">
              <div class="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-16 mx-auto max-md:px-2 ">
                  <div class="img">
                      <div class="img-box h-full max-lg:mx-auto shadow ">
                          <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${products._id}`} alt="Yellow Tropical Printed Shirt image"
                              class="max-lg:mx-auto h-full lg:ml-auto px-10  object-cover"/>
                      </div>
                  </div>
                  <div
                      class="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                      <div class="data w-full max-w-xl">
                          <p class="text-lg font-medium leading-8 text-indigo-600 mb-4">{products.category?.name}
                          </p>
                          <h2 class="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">{products.name}</h2>
                          <div class="flex flex-col sm:flex-row sm:items-center mb-6">
                              <h6
                                  class="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                                 AED {products.price}</h6>  
                          </div>
                          <p class="text-gray-500 text-base font-normal mb-5">
                             {products.description} <a href="/products"
                                  class="text-indigo-600">More....</a>
                          </p>  
                          <div class="mb-3">
                              <button
                                 onClick={() => {
                                  setCart([...cart, products]);
                                  localStorage.setItem(
                                    "cart",
                                    JSON.stringify([...cart,products])
                                  );
                                  toast.success("Item Added to Cart");
                                }}
                                  class="group py-4 px-5 rounded-full bg-indigo-600 text-white font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                                  <svg class="stroke-white " width="22" height="22" viewBox="0 0 22 22" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                                          stroke="" stroke-width="1.6" stroke-linecap="round" />
                                  </svg>
                                  Add to cart</button>
                          </div>
                          {/* <div class="flex items-center gap-3">
                              <button
                                  class="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400"><Link to='/cart'>
                                  Buy Now</Link>
                              </button>
                          </div> */}
                      </div>
                  </div>
              </div>
          </div>
          <hr className='mt-10'/>
          <div className='mt-3'>
            <h1 className='text-2xl'>Similar Product</h1>
            {relatedProducts.length <1&& <p className='text-center'>No Similar Product Found</p>}
            {/* {JSON.stringify(relatedProducts, null, 4)} */}
            <div class="mb-20 grid lg:grid-cols-3 sm:grid-cols-2 gap-4 md:mb-8">
            {relatedProducts?.map((p) => (
              // <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              //   <div class="h-56 w-full">
              //     <a href="#">
              //       <img
              //         class="mx-auto h-full dark:hidden"
              //         src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
              //         alt=""
              //       />
              //       {/* <img class="mx-auto hidden h-full dark:block" src={Logo} alt="" /> */}
              //     </a>
              //   </div>
              //   <div class="pt-6">
              //     <div class="mb-4 flex items-center justify-between gap-4">
              //       <span class="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              //         {" "}
              //         Up to 35% off{" "}
              //       </span>

              //       <div class="flex items-center justify-end gap-1">
              //         <button
              //           type="button"
              //           data-tooltip-target="tooltip-quick-look"
              //           class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              //         >
              //           <span class="sr-only"> Quick look </span>
              //           <svg
              //             class="h-5 w-5"
              //             aria-hidden="true"
              //             xmlns="http://www.w3.org/2000/svg"
              //             width="24"
              //             height="24"
              //             fill="none"
              //             viewBox="0 0 24 24"
              //           >
              //             <path
              //               stroke="currentColor"
              //               stroke-width="2"
              //               d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
              //             />
              //             <path
              //               stroke="currentColor"
              //               stroke-width="2"
              //               d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              //             />
              //           </svg>
              //         </button>
              //         <div
              //           id="tooltip-quick-look"
              //           role="tooltip"
              //           class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              //           data-popper-placement="top"
              //         >
              //           Quick look
              //           <div class="tooltip-arrow" data-popper-arrow=""></div>
              //         </div>

              //         <button
              //           type="button"
              //           data-tooltip-target="tooltip-add-to-favorites"
              //           class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              //         >
              //           <span class="sr-only"> Add to Favorites </span>
              //           <svg
              //             class="h-5 w-5"
              //             aria-hidden="true"
              //             xmlns="http://www.w3.org/2000/svg"
              //             fill="none"
              //             viewBox="0 0 24 24"
              //           >
              //             <path
              //               stroke="currentColor"
              //               stroke-linecap="round"
              //               stroke-linejoin="round"
              //               stroke-width="2"
              //               d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
              //             />
              //           </svg>
              //         </button>
              //         <div
              //           id="tooltip-add-to-favorites"
              //           role="tooltip"
              //           class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              //           data-popper-placement="top"
              //         >
              //           Add to favorites
              //           <div class="tooltip-arrow" data-popper-arrow=""></div>
              //         </div>
              //       </div>
              //     </div>

              //     <a
              //       href={`/products/${p.slug}`}
              //       class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
              //     >
              //       {p.name}
              //     </a>
              //     <div class="mt-2 flex items-center gap-2">
              //       <div class="flex items-center">
              //         <svg
              //           class="h-4 w-4 text-yellow-400"
              //           aria-hidden="true"
              //           xmlns="http://www.w3.org/2000/svg"
              //           fill="currentColor"
              //           viewBox="0 0 24 24"
              //         >
              //           <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              //         </svg>

              //         <svg
              //           class="h-4 w-4 text-yellow-400"
              //           aria-hidden="true"
              //           xmlns="http://www.w3.org/2000/svg"
              //           fill="currentColor"
              //           viewBox="0 0 24 24"
              //         >
              //           <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              //         </svg>

              //         <svg
              //           class="h-4 w-4 text-yellow-400"
              //           aria-hidden="true"
              //           xmlns="http://www.w3.org/2000/svg"
              //           fill="currentColor"
              //           viewBox="0 0 24 24"
              //         >
              //           <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              //         </svg>

              //         <svg
              //           class="h-4 w-4 text-yellow-400"
              //           aria-hidden="true"
              //           xmlns="http://www.w3.org/2000/svg"
              //           fill="currentColor"
              //           viewBox="0 0 24 24"
              //         >
              //           <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              //         </svg>

              //         <svg
              //           class="h-4 w-4 text-yellow-400"
              //           aria-hidden="true"
              //           xmlns="http://www.w3.org/2000/svg"
              //           fill="currentColor"
              //           viewBox="0 0 24 24"
              //         >
              //           <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              //         </svg>
              //       </div>

              //       <p class="text-sm font-medium mt-3 text-gray-900 dark:text-white">
              //         5.0
              //       </p>
              //       <p class="text-sm font-medium mt-3 text-gray-500 dark:text-gray-400">
              //         (455)
              //       </p>
              //     </div>

              //     <ul class="mt-2 flex items-center gap-4">
              //       <li class="flex items-center gap-2">
              //         <svg
              //           class="h-4 w-4 text-gray-500 dark:text-gray-400"
              //           aria-hidden="true"
              //           xmlns="http://www.w3.org/2000/svg"
              //           fill="none"
              //           viewBox="0 0 24 24"
              //         >
              //           <path
              //             stroke="currentColor"
              //             stroke-linecap="round"
              //             stroke-linejoin="round"
              //             stroke-width="2"
              //             d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              //           />
              //         </svg>
              //         <p class="text-sm font-medium mt-3 text-gray-500 dark:text-gray-400">
              //           Fast Delivery
              //         </p>
              //       </li>

              //       <li class="flex items-center gap-2">
              //         <svg
              //           class="h-4 w-4 text-gray-500 dark:text-gray-400"
              //           aria-hidden="true"
              //           xmlns="http://www.w3.org/2000/svg"
              //           fill="none"
              //           viewBox="0 0 24 24"
              //         >
              //           <path
              //             stroke="currentColor"
              //             stroke-linecap="round"
              //             stroke-width="2"
              //             d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              //           />
              //         </svg>
              //         <p class="text-sm font-medium mt-3 text-gray-500 dark:text-gray-400">
              //           Best Price
              //         </p>
              //       </li>
              //     </ul>

              //     <div class="mt-4 flex items-center justify-between gap-4">
              //       <p class="text-2xl mt-5 font-extrabold leading-tight text-gray-900 dark:text-white">
              //         AED{p.price}
              //       </p>

              //       <button
              //         type="button"
                     
              //         class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              //       >
              //         <svg
              //           class="-ms-2 me-2 h-5 w-5"
              //           aria-hidden="true"
              //           xmlns="http://www.w3.org/2000/svg"
              //           width="24"
              //           height="24"
              //           fill="none"
              //           viewBox="0 0 24 24"
              //         >
              //           <path
              //             stroke="currentColor"
              //             stroke-linecap="round"
              //             stroke-linejoin="round"
              //             stroke-width="2"
              //             d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              //           />
              //         </svg>
              //         Add to cart
              //       </button>
              //     </div>
              //   </div>
              // </div>
              <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <a
                class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href={`/products/${p.slug}`}
              >
                <img
                  class="object-cover"
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  alt="product image"
                />
                {/* <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
              </a>
              <div class="mt-4 px-5 pb-5">
                <a href={`/products/${p.slug}`}>
                  <h5 class="text-xl tracking-tight text-slate-900">
                    {p.name}
                  </h5>
                </a>
                <div class="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span class="text-3xl font-bold text-slate-900">
                      AED {p.price}
                    </span>
                    {/* <span class="text-sm text-slate-900 line-through"></span> */}
                  </p>
                  {/* <div class="flex items-center">
      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
    </div> */}
                </div>
                <button
                  onClick={() => {
                    setCart([...cart, p]);
                    localStorage.setItem(
                      "cart",
                      JSON.stringify([...cart, p])
                    );
                    toast.success("Item Added to Cart");
                  }}
                  class="flex items-center justify-center rounded-md bg-gray-600  hover:bg-[#007bff] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
            ))}
          </div>
          </div>
     
      </div>
      </section>              
  )
}

export default ProductsDetails
