import React, { useEffect, useState } from 'react'
import { useCart } from '../context/cart';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Products = () => {
  const [cart, setCart] = useCart();
  const navigate = useNavigate;
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
 const [page, setPage] = useState();
  
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
      // getTotalCount();
    }, []);
    // get products
    const getAllProducts = async () => {
      try {
        // setLoading(true);
        const { data } = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
        );
        // setLoading(false);
        setProducts(data.products);
      } catch (error) {
        // setLoading(false);
        console.log(error);
      }
    };
     useEffect(() => {
        getAllProducts();
      }, []);
  return (
//     <div className="mb-4 grid lg:grid-cols-4 sm:grid-cols-2 gap-3 md:mb-8">
//     {products?.map((p) => (
//       <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
//         <a
//           class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
//           href={`/products/${p.slug}`}
//         >
//           <img
//             class="object-cover"
//             src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
//             alt="product image"
//           />
//           {/* <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
//         </a>
//         <div class="mt-4 px-5 pb-5">
//           <a href={`/products/${p.slug}`}>
//             <h5 class="text-xl tracking-tight text-slate-900">
//               {p.name}
//             </h5>
//           </a>
//           <div class="mt-2 mb-5 flex items-center justify-between">
//             <p>
//               <span class="text-3xl font-bold text-slate-900">
//                 AED {p.price}
//               </span>
//               {/* <span class="text-sm text-slate-900 line-through"></span> */}
//             </p>
//             {/* <div class="flex items-center">
// <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
// </svg>
// <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
// </svg>
// <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
// </svg>
// <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
// </svg>
// <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
// </svg>
// <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
// </div> */}
//           </div>
//           <button
//             onClick={() => {
//               setCart([...cart, p]);
//               localStorage.setItem(
//                 "cart",
//                 JSON.stringify([...cart, p])
//               );
//               toast.success("Item Added to Cart");
//             }}
//             class="flex items-center justify-center rounded-md bg-gray-600  hover:bg-[#007bff] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="mr-2 h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               stroke-width="2"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//               />
//             </svg>
//             Add to cart
//           </button>
//         </div>
//       </div>
//     ))}
//   </div>
<>
<Helmet>
                <meta charSet="utf-8" />
                <title>Products - ASAN Graoup Shop</title>
                <meta name="description" content="Discover how ASAN Group Shop combines innovation, excellence, and vision to drive your success. Explore our products page and join the journey to a brighter future." />
                <meta name="keywords" content="phone, laptop, watch,electronic,tv,apple watch," />
            </Helmet>
<div class="mb-4 grid gap-4 mt-8 p-2 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
{products?.map((p)=>(
<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
  <div class="h-56 w-full">
    <a href={`/products/${p.slug}`}>
      <img class="mx-auto h-full dark:hidden" src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}alt="" />
      <img class="mx-auto hidden h-full dark:block" src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} alt="" />
    </a>
  </div>
  <div class="pt-6">  
    <a href={`/products/${p.slug}`} class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{p.name}</a>
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
</>
  )
}

export default Products
