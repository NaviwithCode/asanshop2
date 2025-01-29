// import React from 'react'
import React, { useEffect, useState } from "react";
import Card from "../img/card.png";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import axios from "axios";
import {MdClose} from 'react-icons/md'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button';
import toast from "react-hot-toast";
import { Modal } from "antd";
import ShowOrder from "./ShowOrder";
import { Helmet } from "react-helmet";
// import { allOrder } from "../../../controllers/orderController";

const Order = () => {
  const [cart, setCart] = useCart();
  const [Open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [method, setMehtod] = useState("cod");
  const [auth, setAuth] = useAuth();
  const { token } = useParams();
  const [userAddress, setUserAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   street: "",
  //   city: "",
  //   state: "",
  //   zipcode: "",
  //   country: "",
  //   phone: "",
  // });
  // const onChangeHandle = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setFormData((data) => ({ ...data, [name]: value }));
  // };
  const navigate = useNavigate();

  const showProducts = (id)=>{
    alert(id)
  }
  const userOrder = async () => {
    if (!auth?.token) {
      return null
    }
try {
  const res = await axios.post(
    `${process.env.REACT_APP_API}/api/v1/order/userorder`,
    {},{
      headers: {
        "Content-Type": "Application/json",
        Auth: token,
      },
    }
  );
  // console.log(res.data);
  if (res.data.success) {
    setOrders(res.data.orders);
  } else {
    toast.success(res.data.message);
  }
  // if (res.data.success) {
  //   let allOrderItems = []
  //   res.data.orders?.map((order) => {
  //     order.items?.map((item) => {
  //      item['status'] = order.status
  //      item['payment'] = order.payment
  //      item['paymentMethod'] = order.paymentMethod
  //      item['createdAt'] = order.createdAt
  //      allOrderItems.push(item)
  //     })
  //   })
  //   setOrder(allOrderItems.reverse())
    
  //   }
  // console.log("user Order",res.data)
  // setOrder(res.data)
  // setProducts()
  // if (res.data) {
  //   let allOrderItems =[]
  //   res.data.orders?.map((cart)=>{
  //   allOrderItems.push(order.orderItems)
  //   })
  //   console.log(allOrderItems)
  // }
  // console.log(res.data)
  // if (res.data.success) {
  //   let allOrder = [];
  //   res.data.orders.map((order) => {
  //     order.products.map((item) => {
  //       item["status"] = order.status;
  //       item["payment"] = order.payment;
  //       item["paymentMethod"] = order.paymentMethod;
  //       item["date"] = order.createdAt;
  //       allOrder.push(item);
  //     });
  //   });
  //   // console.log(allOrder)
  //   setOrder(allOrder.reverse());
  // }
  // console.log('user data ',res.data)
  // setOrder(res)
} catch (error) {
  
}
// if (!auth?.token) {
//   return null;
// }
// try {
//   const res = await axios.post(
//     `${process.env.REACT_APP_API}/api/v1/order/userorder`,
//     {},
//     {
//       headers: {
//         "Content-Type": "Application/json",
//         Auth: token,
//       },
//     }
//   );
//   // console.log(res.data)
//   if (res.data.success) {
//     setOrder(res.data.order);
//   } else {
//     toast.success(res.data.message);
//   }
// } catch (error) {
//   toast.error(error.message);
// }
  };
  useEffect(() => {
    // if (auth?.token)
       userOrder();
  }, [auth?.token]);
  return (
  //   <>
  //   <div>
  //        <div>
  //         <div class="flex flex-col px-12 pt-16">
  //     <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
  //       <h1 className="text-2xl text-center">Order Summary</h1>
  //       <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
  //         <div class="overflow-hidden">
  //           <table class="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
  //             <thead class="border-b bg-gray-700 text-white border-neutral-200 font-medium dark:border-white/10">
  //               <tr>
  //                 <th
  //                   scope="col"
  //                   class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
  //                 >
  //                   Order Deatails
  //                 </th>
  //                 {/* <th
  //                   scope="col"
  //                   class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
  //                 >
  //                   Order Deatails & Shippimg Address
  //                 </th> */}
  //               </tr>
  //             </thead>
  //             <tbody>
  //               <tr class="border-b border-neutral-200 dark:border-white/10">
  //                 <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
  //                   <div class="flex flex-col">
  //                     <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
  //                       <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
  //                         <div class="overflow-hidden">
  //                           <table class="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
  //                             <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
  //                               <tr>
  //                                 <th
  //                                   scope="col"
  //                                   class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
  //                                 >
  //                                   Products Images
  //                                 </th>
  //                                 <th
  //                                   scope="col"
  //                                   class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
  //                                 >
  //                                  Products Name
  //                                 </th>
  //                                 <th
  //                                   scope="col"
  //                                   class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
  //                                 >
  //                                   Product Price
  //                                 </th>
  //                                 <th
  //                                   scope="col"
  //                                   class="border-e border-neutral-200 px-6 py-4 "
  //                                 >
  //                                   Quantity
  //                                 </th>
  //                                 <th
  //                                   scope="col"
  //                                   class="border-e border-neutral-200 px-6 py-4 "
  //                                 >
  //                                   Payment Method
  //                                 </th>
  //                                 <th
  //                                   scope="col"
  //                                   class="border-e border-neutral-200 px-6 py-4 "
  //                                 >
  //                                   Order Status
  //                                 </th>
  //                                 <th
  //                                   scope="col"
  //                                   class="border-e border-neutral-200 px-6 py-4 "
  //                                 >
  //                                   Date
  //                                 </th>
  //                                 <th scope="col" class="px-6 py-4">
  //                                   Order Track
  //                                 </th>
  //                               </tr>
  //                             </thead>
  //                            {order?. length !== 0 && order?.map((order,index)=>{
  //                             return(
  //                             <tbody>
  //                                 <tr key={index} class="border-b border-neutral-200 dark:border-white/10">
  //                                   <td class="whitespace-nowrap border-e border-neutral-200 px-8 py-4 font-medium dark:border-white/10 ">
  //                                     <img
  //                                       src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${order?._id}`}
  //                                       className="h-10 w-10 "
  //                                     />
  //                                     {/* <h1>asans</h1> */}
  //                                     {/* {order?.paymentMethod} */}
  //                                   </td>
  //                                   <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
  //                                     {order?.name}
  //                                     {/* <ShowOrder cart={order?.products}/> */}
  //                                     {/* <button onClick={() => {setOpen(true)}}>Click Here to view</button> */}
  //                                   </td>
  //                                   <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
  //                                    AED {order?.price}
  //                                   </td>
  //                                   <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
  //                                     {order?.quantity}
  //                                   </td>
  //                                   <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
  //                                     {order?.paymentMethod}
  //                                   </td>
  //                                   <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
  //                                      {order?.status}
  //                                   </td>
  //                                   {/* <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
  //                                     {order?.amount}
  //                                   </td> */}
  //                                   <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
  //                                   {new Date(order?.createdAt).toDateString()}
  //                                   </td>
  //                                   <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
  //                                   <button onClick={userOrder} className="bg-green-400 hover:bg-green-500 rounded-md px-3 py-3 ">Order Track</button>
  //                                   </td>
  //                                   {/* <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4">
  //                                     {/* {order.quantity} */}
  //                                   {/* </td> */} 
  //                                   {/* <td class="whitespace-nowrap px-6 py-4">
  //                                     <button
  //                                       type="button"
  //                                       class="border px-4 py-2 text-sm font-medium rounded-sm bg-green-400 hover:bg-green-500"
  //                                       // onClick={() => removeCartItem(p._id)}
  //                                     >
  //                                       Order Track
  //                                     </button> */}
  //                                   {/* </td> */}
  //                                 </tr>
  //                               </tbody>
  //                             )
  //                            })}

                           
  //                             {/* <tr class="border-b border-neutral-200 dark:border-white/10">
  //                               <td class="whitespace-nowrap  border-e border-neutral-200 px-6 py-4"></td>
  //                               <td class="whitespace-nowrap  border-e border-neutral-200 px-6 py-4">
  //                                 <button className="font-bold py-2 px-4 rounded-sm  bg-black text-white">
  //                                   {" "}
  //                                   Total
  //                                 </button>
  //                               </td>
  //                               <td class="whitespace-nowrap  border-e border-neutral-200 px-6 py-4">
  //                                 <button className="font-bold py-2 px-4 rounded-sm  bg-green-400 text-black">
  //                                   {" "}
  //                                   {totalPrice()}
  //                                 </button>
  //                               </td> */}
  //                               {/* <td class="whitespace-nowrap  border-e border-neutral-200 px-6 py-4"> */}
  //                                 {/* <button className="font-bold py-2 px-4 rounded-sm  bg-green-400 text-black"> </button> */}
  //                               {/* </td>
  //                             </tr> */}
  //                           </table>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </td>
  //                 {/* <td class="border-e border-neutral-200">
  //                   <ul className="flex items-center gap-3 font-semibold flex-col justify-start">
  //                     <li>Name: {order?.fullName}</li>
  //                     <li>OrderId: {order?.orderId}</li>
  //                     <li>Phone: {userAddress?.phoneNumber}</li>
  //                     <li>Pincode: {userAddress?.pincode}</li>
  //                     <li>Address: {userAddress?.address}</li>
  //                     <li>State: {userAddress?.state}</li>
  //                     <li>Country: {userAddress?.country}</li>
  //                   </ul>
  //                 </td> */}
  //               </tr>
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   </div>
  //   </div>

  // {/* <Dialog open={false} className="">
  //   <button className="flex justify-end mt-2 mb-2 mr-2"><MdClose onCancel={()=>setOpen(false)} footer={null} visible={Open} className="bg-gray-200 rounded-full"/></button>
  //   {/* <h4 className="mb-1 font-bold px-1 w-[600px] h-[600px]">Products</h4> */}
  //   {/* <div class=" overflow-hidden">
  //                           <table class="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
  //                             <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
  //                               <tr>
  //                                 <th
  //                                   scope="col"
  //                                   class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
  //                                 >
  //                                   Product Id
  //                                 </th>
  //                                 <th
  //                                   scope="col"
  //                                   class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
  //                                 >
  //                                  Products Name
  //                                 </th>
  //                                 <th
  //                                   scope="col"
  //                                   class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
  //                                 >
  //                                   Products Description
  //                                 </th>
  //                               </tr>
  //                             </thead>
  //                             <tr>
  //                             <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
  //                                     fhjds
  //                                   </td>
  //                             <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
  //                                     fhjds
  //                                   </td>
  //                             <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
  //                                     fhjds
  //                                   </td>
  //                             </tr>
  //                             </table>
  //                             </div> */}
  // {/* </Dialog> */}
  // {/* <Modal onCancel={()=>setOpen(false)} footer={null} visible={Open}>
  // <div>
  //     <div class=" overflow-hidden mt-8">
  //                           <table class="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
  //                             <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
  //                               <tr>
  //                                 <th
  //                                   scope="col"
  //                                   class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
  //                                 >
  //                                   Product Id
  //                                 </th>
  //                                 <th
  //                                   scope="col"
  //                                   class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
  //                                 >
  //                                  Products Name
  //                                 </th>
  //                                 <th
  //                                   scope="col"
  //                                   class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
  //                                 >
  //                                   Products Description
  //                                 </th>
  //                               </tr>
  //                             </thead>
                              
  //                              {products?.map((p, cartIndex) => (
  //                                 // return(

  //                             <tr>
  //                             <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
  //                                     {p?.items?.name}
  //                                   </td>
  //                             <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
  //                                     fhjds
  //                                   </td>
  //                             <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
  //                                     fhjds
  //                                   </td>
  //                             </tr>
  //                                 // )

  //                              ))
  //                             }
  //                             </table>
  //                             </div>
  //   </div>
  //           </Modal> */}
  // </>
  <section class="py-24 relative">
          <Helmet>
                <meta charSet="utf-8" />
                <title>Orders - ASAN Graoup Shop</title>
                {/* <meta name="description" content="Discover how ASAN Group Shop combines innovation, excellence, and vision to drive your success. Explore our About Us page and join the journey to a brighter future." />
                <meta name="keywords" content="phone, laptop, watch,electronic" /> */}
            </Helmet>
  <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
    <h2 class="font-manrope font-bold text-4xl leading-10 text-black text-center">
      Orders
    </h2>
    {/* <p class="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
      Thanks for making a purchase you can check our order summary frm
      below
    </p> */}
    {orders?.length !== 0 &&
      orders?.map((o, i) => {
        return (
          <div class="main-box mt-3 border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
              <div class="data">
                <p class="font-semibold text-base leading-2 text-black">
                  Order Id:{" "}
                  <span class="text-indigo-600 font-medium">
                    {o?._id}
                  </span>
                </p>
                <p class="font-semibold text-base leading-2 text-black mt-2">
                  Method :{" "}
                  <span class="text-gray-400 font-medium">
                    {" "}
                    {o?.paymentMethod}
                  </span>
                </p>
                <p class="font-semibold text-base leading-2 text-black mt-2">
                  Payment :{" "}
                  <span class="text-gray-400 font-medium">
                    {" "}
                    {o?.payment ? "Success" : "Painding"}
                  </span>
                </p>
              </div>

              <button
              onClick={userOrder}
                  class="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">Track
                  Your Order</button>
              {/* <select onChange={(e)=>StatusHandle(e,o?._id)} value={o?.status} className="bg-gray-100 px-1 py-2 rounded-md shadow-md  ">
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out For Delivered">
                  Out For Delivered
                </option>
                <option value="Delivered">Delivered</option>
              </select> */}
            </div>
            {o?.items?.map((p, i) => (
              <div class="w-full px-3 min-[400px]:px-6">
                <div class="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                  <div class="img-box max-lg:w-full">
                    <img
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p?._id}`}
                      alt={p.name}
                      class="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover"
                    />
                  </div>
                  <div class="flex flex-row items-center w-full ">
                    <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
                      <div class="flex items-center">
                        <div class="">
                          <h2 class="font-semibold text-xl leading-8 text-black mb-3">
                            {p.name}
                          </h2>
                          <p class="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                            {p.description.substring(0, 30)}{" "}
                          </p>
                          <div class="flex items-center ">
                            {/* <p
                                          class="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                          Size: <span class="text-gray-500">100 ml</span></p> */}
                            <p class="font-medium text-base leading-7 text-black ">
                              Qty:{" "}
                              <span class="text-gray-500">
                                {p.quantity}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="grid grid-cols-5 text-center">
                        <div class="col-span-5 lg:col-span-1 flex items-end max-lg:mt-3">
                          <div class="flex gap-3 lg:block">
                            <p class="font-medium text-sm leading-7 text-black">
                              price
                            </p>
                            <p class="lg:mt-4 font-medium text-sm leading-6 text-indigo-600">
                              AED {p.price}
                            </p>
                          </div>
                        </div>
                        <div class="col-span-5 lg:col-span-2 flex items-end max-lg:mt-3 ">
                                  <div class="flex gap-3 lg:block">
                                      <p class="font-medium text-sm leading-6 text-black">Status
                                      </p>
                                      <p
                                          class="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                          {o?.status}</p>
                                  </div>

                              </div>
                        <div class="col-span-5 lg:col-span-2 flex items-end gap-5 max-lg:mt-3">
                          <div class="flex gap-3 lg:block">
                            <p class="font-medium text-sm whitespace-nowrap leading-6 text-black">
                              Date
                            </p>
                            <p class="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                              {new Date(
                                o?.createdAt
                              ).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div class="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
              <div class="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                  <button
                      class="flex outline-0 py-6 sm:pr-6  sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600">
                      <svg class="stroke-black transition-all duration-500 group-hover:stroke-indigo-600" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                          fill="none">
                          <path d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5" stroke="" stroke-width="1.6"
                              stroke-linecap="round" />
                      </svg>
                      Cancel Order
                  </button>
                  <p class="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">Paid using Credit Card <span class="text-gray-500">ending with 8822</span></p>
              </div>
              <p class="font-semibold text-lg text-black py-6">Total Price: <span class="text-indigo-600"> $200.00</span></p>
          </div> */}
            {/* <table class="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
                        <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                          <tr>
                            <th
                              scope="col"
                              class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                            >
                              FullName
                            </th>
                            <th
                              scope="col"
                              class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                            >
                              Phone Number
                            </th>
                            <th
                              scope="col"
                              class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                            >
                              Address
                            </th>
                            <th
                              scope="col"
                              class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                            >
                              Pin Code
                            </th>
                            <th
                              scope="col"
                              class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                            >
                              Country
                            </th>
                            <th
                              scope="col"
                              class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                            >
                              City
                            </th>
                            <th
                              scope="col"
                              class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                            >
                              St
                            </th>
                            </tr>
                            </thead>
                            </table> */}
            <div class="overflow-hidden">
              <table class="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
                <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th
                      scope="col"
                      class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      Full Name
                    </th>
                    <th
                      scope="col"
                      class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      class="border-e border-neutral-200 px-6 py-4 "
                    >
                      City
                    </th>
                    <th
                      scope="col"
                      class="border-e border-neutral-200 px-6 py-4 "
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      class="border-e border-neutral-200 px-6 py-4 "
                    >
                      Pin Code
                    </th>
                    <th
                      scope="col"
                      class="border-e border-neutral-200 px-6 py-4 "
                    >
                      State
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr class="border-b border-neutral-200 dark:border-white/10">
                    <td class="whitespace-nowrap border-e border-neutral-200 px-8 py-4 font-medium dark:border-white/10 ">
                      {/* <img
                                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${order?._id}`}
                                  className="h-10 w-10 "
                                /> */}
                      {/* <h1>asans</h1> */}
                      {o?.shippingAddress?.fullName}
                    </td>
                    <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {o?.shippingAddress?.address}
                      {/* <ShowOrder cart={order?.products}/> */}
                      {/* <button onClick={() => {setOpen(true)}}>Click Here to view</button> */}
                    </td>
                    <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {o?.shippingAddress?.phoneNumber}
                    </td>
                    <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {o?.shippingAddress?.city}
                    </td>
                    <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {o?.shippingAddress?.country}
                    </td>
                    <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {o?.shippingAddress?.pincode}
                    </td>
                    {/* <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                                {order?.amount}
                              </td> */}
                    <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {o?.shippingAddress?.state}
                      {/* {new Date(order?.createdAt).toDateString()} */}
                    </td>
                    {/* <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                              <button onClick={userOrder} className="bg-green-400 hover:bg-green-500 rounded-md px-3 py-3 ">Order Track</button>
                              </td> */}
                    {/* <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4">
                                {/* {order.quantity} */}
                    {/* </td> */}
                    {/* <td class="whitespace-nowrap px-6 py-4">
                                <button
                                  type="button"
                                  class="border px-4 py-2 text-sm font-medium rounded-sm bg-green-400 hover:bg-green-500"
                                  // onClick={() => removeCartItem(p._id)}
                                >
                                  Order Track
                                </button> */}
                    {/* </td> */}
                  </tr>
                </tbody>

                {/* <tr class="border-b border-neutral-200 dark:border-white/10">
                          <td class="whitespace-nowrap  border-e border-neutral-200 px-6 py-4"></td>
                          <td class="whitespace-nowrap  border-e border-neutral-200 px-6 py-4">
                            <button className="font-bold py-2 px-4 rounded-sm  bg-black text-white">
                              {" "}
                              Total
                            </button>
                          </td>
                          <td class="whitespace-nowrap  border-e border-neutral-200 px-6 py-4">
                            <button className="font-bold py-2 px-4 rounded-sm  bg-green-400 text-black">
                              {" "}
                              {totalPrice()}
                            </button>
                          </td> */}
                {/* <td class="whitespace-nowrap  border-e border-neutral-200 px-6 py-4"> */}
                {/* <button className="font-bold py-2 px-4 rounded-sm  bg-green-400 text-black"> </button> */}
                {/* </td>
                        </tr> */}
              </table>
            </div>
            <div className="w-full border-t border-gray-200 px-6 mb-3 flex flex-col lg:flex-row items-center justify-between">
              {/* <div class="flex justify-between xl:h-full items-stretch w-full flex-col md:mt-0">
    <div class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
      <div class="flex justify-center flex-row md:justify-start items-center md:items-start space-y-4 xl:mt-4">
        <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
        <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
      </div> */}
              {/* <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
        <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
        <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
      </div> */}
            </div>
          </div>
          //     </div>

          // </div>
        );
      })}
  </div>
</section>
   
  );
};

export default Order;

