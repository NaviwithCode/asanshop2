import React, { useEffect, useState } from "react";
import AdminMenu from "../../component/AdminMenu";
import { useAuth } from "../../context/auth";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment";
import logo from "../../img/logo.jpeg";
const AdminOrder = () => {
  const [orders, setorders] = useState([]);
  const [auth] = useAuth();
  const { token } = useParams();
  const adminAllOrder = async () => {
    if (!auth?.token) {
      return null;
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/order/list`,
        {},
        {
          headers: {
            "Content-Type": "Application/json",
            Auth: token,
          },
        }
      );
      // console.log(res.data)
      if (res.data.success) {
        setorders(res.data.orders);
      } else {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const StatusHandle = async (e,orderId)=>{
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/order/status`,
        {orderId, status:e.target.value},
        {
          headers: {
            "Content-Type": "Application/json",
            Auth: token,
          },
        })
       adminAllOrder()
    } catch (error) {
      console.log(error)
      toast.success("Order Updated Successfully")
    }
  }
  useEffect(() => {
    // if (auth?.token)
    adminAllOrder();
  }, [auth?.token]);
  return (
    <div className="flex">
      <AdminMenu />
      <section class="py-24 relative">
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
                        Payment Id:{" "}
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

                    {/* <button
                        class="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">Track
                        Your Order</button> */}
                    <select onChange={(e)=>StatusHandle(e,o?._id)} value={o?.status} className="bg-gray-100 px-1 py-2 rounded-md shadow-md  ">
                      <option value="Order Placed">Order Placed</option>
                      <option value="Packing">Packing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Out For Delivered">
                        Out For Delivered
                      </option>
                      <option value="Delivered">Delivered</option>
                    </select>
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
                            <div class="grid grid-cols-5">
                              <div class="col-span-5 lg:col-span-1 flex items-end max-lg:mt-3">
                                <div class="flex gap-3 lg:block">
                                  <p class="font-medium text-sm leading-7 text-black">
                                    price
                                  </p>
                                  <p class="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">
                                    AED {p.price}
                                  </p>
                                </div>
                              </div>
                              {/* <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                                        <div class="flex gap-3 lg:block">
                                            <p class="font-medium text-sm leading-7 text-black">Status
                                            </p>
                                            <p
                                                class="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                                {o?.status}</p>
                                        </div>

                                    </div> */}
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

      {/* <div className="px-4 py-6 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-gray-900 gap-2 rounded-md px-3 py-2">Order Details</h1>
    {orders?. length !== 0 && orders?.map((o, i) => {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700">
          <div>
          <div className="">
            {o?.items?.map((p, i) => (
              <div className="" key={p._id}>
                <div className="">
                  <img
                     src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p?._id}`}
                    alt={p.name}
                    width="100px"
                    height={"100px"}
                  />
                </div>
                <div className="">
                  <p>{p.name}</p>
                  <p>{p.description.substring(0, 30)}</p>
                  <p>Price : {p.price}</p>
                </div>
              </div>
            ))}
          </div>
          <p>{o?.shippingAddress?.fullName+','}</p>
          <div>
          <p>{o?.shippingAddress?.address +"," +o?.shippingAddress?.pincode+"," +o?.shippingAddress?.city+","+o?.shippingAddress?.country+","
            +o?.shippingAddress?.state+","}</p>
          </div>
          <div>
          <p>{o?.shippingAddress?.phoneNumber+','}</p>
          </div>
          <p>Items: {o?.items?.length}</p>
          <p>Method: {o?.paymentMethod}</p>
          <p>Payment: {o?.payment ? "success":"Faild"}</p>
          <p>Date: {new Date (o?.createdAt).toLocaleDateString()}</p>
          </div>
          <p>{o?.amount}</p>
          <select>
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipped">Shipped</option>
            <option value="Out For Delivered">Out For Delivered</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
        
      );
    })}
    </div>
    </div> */}
    </div>
  );
};

export default AdminOrder;
