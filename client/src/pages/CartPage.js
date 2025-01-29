// import React, { useEffect, useState, Component } from "react";
// import { useCart } from "../context/cart";
// import { useAuth } from "../context/auth";
// import { useNavigate } from "react-router-dom";
// import Payment from "./Payment";
// import axios from "axios";
// import toast from "react-hot-toast";
// import DropIn from "braintree-web-drop-in-react";
// import AddressForm from "./AddressForm";

// const CartPage = () => {
//   const [cart, setCart] = useCart();
//   const [auth, setAuth] = useAuth();
//   const [clientToken, setClientToken] = useState("");
//   const [instance, setInstance] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // const [count, setCount] = useState(1);

//   // const increaseCount = () => {
//   //   setCount(count + 1);
//   // };

//   // const decreaseCount = () => {
//   //   setCount(count - 1);
//   // };
//   const [quantity, setQuantity] = useState(1);

//   // const increment =(id)=>{
//   // if(quantity < 10){
//   // setQuantity((prevCount) =>
//   // prevCount?.map((item)=>
//   // item?.id === id ? {...item, quantity: item?.quantity + 1}: item
//   // )
//   // )
//   // }

//   // }
//   // const decrease = ()=>{
//   //   if(quantity > 1){
//   //     setQuantity(prevCount => prevCount - 1)
//   //   }
//   // }
//   // }
//   // const quantityIncrements = (id)=>{
//   //   console.log(id)
//   // }
//   //get payment gateway token
//   const getToken = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API}/api/v1/product/braintree/token`
//       );
//       setClientToken(data?.clientToken);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getToken();
//   }, [auth?.token]);

//   //handle payments
//   const handlePayment = async () => {
//     try {
//       setLoading(true);
//       const { nonce } = await instance.requestPaymentMethod();
//       const { data } = await axios.post(
//         `${process.env.REACT_APP_API}/api/v1/product/braintree/payment`,
//         {
//           nonce,
//           cart,
//         }
//       );
//       setLoading(false);
//       localStorage.removeItem("cart");
//       setCart([]);
//       navigate("/dashboard/user/orders");
//       toast.success("Payment Completed Successfully ");
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };
//   //total price
//   const totalPrice = () => {
//     try {
//       let total = 0;
//       cart?.map((item) => {
//         total += item.price * item.quantity + total;
//       });
//       return total.toLocaleString("en-US", {
//         style: "currency",
//         currency: "AED",
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   //detele item
//   const removeCartItem = (pid) => {
//     try {
//       let myCart = [...cart];
//       let index = myCart.findIndex((item) => item._id === pid);
//       myCart.splice(index, 1);
//       setCart(myCart);
//       localStorage.setItem("cart", JSON.stringify(myCart));
//       toast.success("Products Remove")
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
//         <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
//           <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
//             Shopping Cart
//           </h2>

//           <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
//             <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
//               <div class="space-y-6">
//                 {cart?.map((p, cartIndex) => (
//                   <div
//                     key={p.id}
//                     class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
//                   >
//                     <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
//                       <a href="#" class="shrink-0 md:order-1">
//                         <img
//                           class="h-20 w-20 dark:hidden"
//                           src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
//                           alt="imac image"
//                         />
//                         <img
//                           class="hidden h-20 w-20 dark:block"
//                           src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
//                           alt="imac image"
//                         />
//                       </a>

//                       <label for="counter-input" class="sr-only">
//                         Choose quantity:
//                       </label>

//                       <div class="flex items-center justify-between md:order-3 md:justify-end">
//                         <div class="flex items-center">
//                           <button
//                             type="button"
//                             id="decrement-button"
//                             data-input-counter-decrement="counter-input"
//                             class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
//                             // onClick={() => updateQuantity(p._id, -1)}
//                             // onClick={decrease}
//                             // onClick={decrease}
//                             onClick={() => {
//                               const _CART = cart.map((item, index) => {
//                                 return cartIndex === index
//                                   ? {
//                                       ...item,
//                                       quantity:
//                                         item.quantity > 1
//                                           ? item.quantity - 1
//                                           : 1,
//                                     }
//                                   : item;
//                               });
//                               setCart(_CART);
//                             }}
//                           >
//                             <svg
//                               class="h-2.5 w-2.5 text-gray-900 dark:text-white"
//                               aria-hidden="true"
//                               xmlns="http://www.w3.org/2000/svg"
//                               fill="none"
//                               viewBox="0 0 18 2"
//                             >
//                               <path
//                                 stroke="currentColor"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                                 stroke-width="2"
//                                 d="M1 1h16"
//                               />
//                             </svg>
//                           </button>
//                           <input
//                             type="text"
//                             id="counter-input"
//                             data-input-counter
//                             class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
//                             placeholder=""
//                             value={p.quantity}
//                           />
//                           <button
//                             type="button"
//                             id="increment-button"
//                             data-input-counter-increment="counter-input"
//                             class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
//                             // onClick={() => updateQuantity(p._id, 1)}
//                             // onClick={()=>increaseCount(p.quantity)}
//                             // onClick={increment}
//                             onClick={() => {
//                               const _CART = cart.map((item, index) => {
//                                 return cartIndex === index
//                                   ? { ...item, quantity: item.quantity + 1 }
//                                   : item;
//                               });
//                               setCart(_CART);
//                             }}
//                           >
//                             <svg
//                               class="h-2.5 w-2.5 text-gray-900 dark:text-white"
//                               aria-hidden="true"
//                               xmlns="http://www.w3.org/2000/svg"
//                               fill="none"
//                               viewBox="0 0 18 18"
//                             >
//                               <path
//                                 stroke="currentColor"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                                 stroke-width="2"
//                                 d="M9 1v16M1 9h16"
//                               />
//                             </svg>
//                           </button>
//                         </div>
//                         <div class="text-end md:order-4 md:w-32">
//                           <p class="text-base font-bold text-gray-900 dark:text-white">
//                             AED {p.price}
//                           </p>
//                         </div>
//                       </div>

//                       <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
//                         <a
//                           href="#"
//                           class="text-base font-medium text-gray-900 hover:underline dark:text-white"
//                         >
//                           {p.name}
//                         </a>

//                         <div class="flex items-center gap-4">
//                           {/* <button type="button" class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
//                     <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
//                     </svg>
//                     Add to Favorites
//                   </button> */}

//                           <button
//                             type="button"
//                             class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
//                             onClick={() => removeCartItem(p._id)}
//                           >
//                             <svg
//                               class="me-1.5 h-5 w-5"
//                               aria-hidden="true"
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 stroke="currentColor"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                                 stroke-width="2"
//                                 d="M6 18 17.94 6M18 18 6.06 6"
//                               />
//                             </svg>
//                             Remove
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <Payment />
//             </div>
//             {/* <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
//               <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
//                 <p class="text-xl font-semibold text-gray-900 dark:text-white">
//                   Order summary
//                 </p>

//                 <div class="space-y-4">
//                   <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
//                     <dt class="text-base font-bold text-gray-900 dark:text-white">
//                       Total
//                     </dt>
//                     <dd class="text-base font-bold text-gray-900 dark:text-white">
//                       {totalPrice()}
//                     </dd>
//                   </dl>
//                 </div> */}
//             <div className="w-full">
//               <div className="text-2xl">
//                 <h1>CART TOTAL</h1>
//               </div>
//               <div className="flex flex-col gap-2 mt-2 text-sm">
//                 {/* <div className="flex justify-between">
//     <p>Subtotal</p>
//     <p>{totalPrice()}</p>
//   </div>
//   <hr/>
//   <div className="flex justify-between">
//     <p>Shippimg Free</p>
//     <p>{currency} {delivery_fee}  </p>
//   </div> */}
//                 <hr />
//                 <div className="flex justify-between">
//                   <p>Total</p>
//                   <p>{totalPrice()}</p>
//                 </div>
//                 <button
//                   onClick={() => navigate("/place-order")}
//                   className="bg-black text-white text-sm my-8 px-8 py-3 rounded-md"
//                 >
//                   PROCEED TO CHECKOUT
//                 </button>
//               </div>
//             </div>
//             {/* <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
//                 <form class="space-y-4">
//                   <div>
//                     <label
//                       for="voucher"
//                       class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
//                     >
//                       {" "}
//                       Do you have a voucher or gift card?{" "}
//                     </label>
//                     <input
//                       type="text"
//                       id="voucher"
//                       class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
//                       placeholder=""
//                       required
//                     />
//                   </div> */}
//             {/* <button
//                     type="submit"
//                     class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                   >
//                     Apply Code
//                   </button> */}
//             {/* </form>
//               </div> */}
//           </div>
//           {/* </div> */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CartPage;
import React, { useState } from "react";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Payment from './Payment'
import { Helmet } from "react-helmet";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //   //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total += item.price * item.quantity + total;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "AED",
      });
    } catch (error) {
      console.log(error);
    }
  };
//   //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
      toast.success("Products Remove")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cart - ASAN Graoup Shop</title>
                <meta name="description" content="Discover how ASAN Group Shop combines innovation, excellence, and vision to drive your success. Explore our Cart page and join the journey to a brighter future." />
                <meta name="keywords" content="phone, laptop, watch,electronic" />
            </Helmet>
      <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>

          <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div class="space-y-6">
                {cart?.map((p, cartIndex) => (
                  <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                    <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" class="shrink-0 md:order-1">
                        <img
                          class="h-20 w-20 dark:hidden"
                          src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                          alt="imac image"
                        />
                      </a>

                      <label for="counter-input" class="sr-only">
                        Choose quantity:
                      </label>
                      <div class="flex items-center justify-between md:order-3 md:justify-end">
                        <div class="flex items-center">
                          <button
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="counter-input"
                            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            onClick={() => {
                              const _CART = cart.map((item, index) => {
                                return cartIndex === index
                                  ? {
                                      ...item,
                                      quantity:
                                        item.quantity > 1
                                          ? item.quantity - 1
                                          : 1,
                                    }
                                  : item;
                              });
                              setCart(_CART);
                            }}
                          >
                            <svg
                              class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            id="counter-input"
                            data-input-counter
                            class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                            placeholder=""
                            value={p.quantity}
                          />
                          <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="counter-input"
                            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            onClick={() => {
                              const _CART = cart.map((item, index) => {
                                return cartIndex === index
                                  ? { ...item, quantity: item.quantity + 1 }
                                  : item;
                              });
                              setCart(_CART);
                            }}
                          >
                            <svg
                              class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                        <div class="text-end md:order-4 md:w-32">
                          <p class="text-base font-bold text-gray-900 dark:text-white">
                            AED {p.price}
                          </p>
                        </div>
                      </div>

                      <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a
                          href="#"
                          class="text-base font-medium text-gray-900 hover:underline dark:text-white"
                        >
                         {p.name}
                        </a>

                        <div class="flex items-center gap-4">
                          <button
                            type="button"
                            class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500" onClick={() => removeCartItem(p._id)}
                          >
                            <svg
                              class="me-1.5 h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <Payment /> */}
            </div>

            <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p class="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>

                <div class="space-y-4">
                  <div class="space-y-2">
                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                       Total
                      </dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">
                       {totalPrice()}
                      </dd>
                    </dl>
                  </div>
                </div>

                {/* <a
                  href="/place-order"
                  class="flex w-full items-center justify-center rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Proceed to Checkout
                </a> */}

                {auth?.token ? (
                    <button
                   
                    class="flex w-full items-center justify-center rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                   > <a
                    href="/place-order" >
                    Proceed to Checkout
                  </a>
                    </button>
                  ) : (
                    <button
                      className="flex w-full items-center justify-center rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={() =>
                        navigate("/login", {
                          state: "/cart",
                        })
                      }
                    >
                      Proceed To Checkout
                    </button>
                  )}
                <div class="flex items-center justify-center gap-2">
                  <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <a
                    href="/"
                    title=""
                    class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <form class="space-y-4">
                  <div>
                    <label
                      for="voucher"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Do you have a voucher or gift card?{" "}
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Apply Code
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
