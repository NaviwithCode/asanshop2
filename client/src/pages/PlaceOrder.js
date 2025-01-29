import React, { useEffect, useState } from "react";
import Card from "../img/card.png";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
// import { forgotController } from "../../../controllers/authControllers";
const PlaceOrder = () => {
  const [cart, setCart] = useCart();
  const [products,setProducts] = useState([]);
  const [method, setMehtod] = useState("cod");
  const [auth, setAuth] = useAuth();
  const { token } = useParams();
  const [userAddress, setUserAddress] = useState("");
  const [loading, setLoading] = useState(false);
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
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phoneNumber: "",
  });
  const onChangerHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const { fullName, address, city, state, country, pincode, phoneNumber } =
  //   formData;
 
  // console.log(orderData)
  // Address Shipping
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
// let orderItems=[]
// cart.map((item) => {
//   orderItems.push({
//     product_id:item,
//     quantity:item.quantity
//     })
// })
//   let orderItems = []
// for(const items in cart){
//   for(const item in cart[items]){
//     if(cart[items][item]>0){
//       const itemInfo = structuredClone(products.find(product => product._id === items))
//       if(itemInfo){
//         itemInfo.quantity = cart[items][item]
//         orderItems.push(itemInfo)
//       }
// //       // orderItems.push({itemInfo})
//     }
//   }
// }
const orderData = {
  shippingAddress:formData,
  items: cart,
  amount:totalPrice()
  
}
// console.log(orderData)
setLoading(true);
// const { nonce } = await instance.requestPaymentMethod();
const { response } = await axios.post(
  `${process.env.REACT_APP_API}/api/v1/order/place`,orderData)
setLoading(false);
localStorage.removeItem("cart");
setCart([]);
// setUserAddress([])
navigate("/order");
toast.success('Order Successfully');
// console.log(orderData)
      // switch (method) {
      //   case 'cod':
      //     setLoading(true);
      //     const response = await axios.post( `${process.env.REACT_APP_API}/api/v1/order/place`,orderData)
      //     if(response.data.success){
      //       setCart({})
      //     }else{
      //       setLoading(false);
      //       localStorage.removeItem("cart");
      //       navigate('/order')
      //       setFormData({
      //         fullName: "",
      //         address: "",
      //         city: "",
      //         state: "",
      //         country: "",
      //         pincode: "",
      //         phoneNumber: "",
      //       });
      //       toast.success(response.data.message,
      //         {
      //             position: "top-right",
      //             autoClose: 1500,
      //           });
      //       // )
            
      //     }
      //     break;
      
      //   default:
      //     break;
      // }
    } catch (error) {
      setLoading(false);
    }
   
    // const api = await axios.post(
    //   `${process.env.REACT_APP_API}/api/v1/order/place`,formData,
  
    // );
    // const result = await api(fullName, address, city, state, country, pincode, phoneNumber)

    // console.log("address Addedd",api);
    // toast.success("Address Addedd", {
    //   position: "top-right",
    //   autoClose: 1500,
    // });
    // navigate("/payment");
    // setFormData({
    //   fullName: "",
    //   address: "",
    //   city: "",
    //   state: "",
    //   country: "",
    //   pincode: "",
    //   phoneNumber: "",
    // });
    // return api.data;
  };
  // get address
  // const getAddress = async () => {
  //   const api = await axios.get(
  //     `${process.env.REACT_APP_API}/api/v1/address/get`,
  //     { headers: { "Content-Type": "Application/json", auth: token } }
  //   );
  //   // console.log("user address",api.data.userAddress)
  //   setUserAddress(api.data.userAddress);
  // };
  // useEffect(() => {
  //   getAddress();
  // }, [auth?.token]);

  //   const [formData, setFormData] = useState({
  //     fullName: '',
  //     phone: '',
  //     address: '',
  //     orderItems: [],
  //     // totalAmount: 0,
  //     paymentMethod: 'Cash on Delivery',
  // });
  // const onChangerHandler = (e) => {
  //   setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value
  //   });
  // };
  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //       const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/createorder/order`, formData);
  //       alert('Order placed successfully');
  //       console.log(response.data);
  //   } catch (error) {
  //       console.error('Order submission failed:', error);
  //   }
  // };
//   const [formData, setFormData] = useState({
//     fullName: "",
//     address: "",
//     city: "",
//     state: "",
//     country: "",
//     pincode: "",
//     phoneNumber: ""
//   });

//   // Handle input changes
//   const onChangerHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Submit order form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  


// };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col px-14 sm:flex-row gap-4 pt-5 sm:pt-4 min-h-[80vh] justify-between border-t"
    >
            <Helmet>
                <meta charSet="utf-8" />
                <title>Place Orders - ASAN Graoup Shop</title>
                {/* <meta name="description" content="Discover how ASAN Group Shop combines innovation, excellence, and vision to drive your success. Explore our About Us page and join the journey to a brighter future." />
                <meta name="keywords" content="phone, laptop, watch,electronic" /> */}
            </Helmet>
      {/* left side */}
      <div className="felx gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <h1>DELIVERY INFORMATION</h1>
        </div>
        <div className="flex gap-3">
          <input
            required
            name="fullName"
            value={formData.fullName}
            onChange={onChangerHandler}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            required
            name="country"
            value={formData.country}
            onChange={onChangerHandler}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <div className="flex gap-3 mt-3">
          <input
            required
            name="state"
            value={formData.state}
            onChange={onChangerHandler}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
          <input
            required
            name="city"
            value={formData.city}
            onChange={onChangerHandler}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
        </div>
        <div className="flex gap-3 mt-3">
          <input
            required
            name="pincode"
            value={formData.pincode}
            onChange={onChangerHandler}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="PinCode"
          />

          <input
            required
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={onChangerHandler}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Phone"
          />
        </div>
        <input
          required
          name="address"
          value={formData.address}
          onChange={onChangerHandler}
          className="border mt-3 border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Address"
        />
      </div>

      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <div className="w-full">
            <div className="text-2xl">
              <h1>CART TOTAL</h1>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
              <hr />
              <div className="flex justify-between">
                <p>Total</p>
                <p>{totalPrice()}</p>
              </div>
              <div className="mt-12">
                <h2>PAYMENT METHOD</h2>
                {/* Payment Method */}
                <div className="flex gap-3 flex-col">
                  <div
                    onClick={() => setMehtod("Card")}
                    className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
                  >
                    <p
                      className={`min-w-3.5 h-3.5 border rounded-full ${
                        method === "Card" ? "bg-green-400" : ""
                      }`}
                    ></p>
                    <img className="h-5 mx-4 " src={Card} />
                  </div>
                  <div
                    onClick={() => setMehtod("cod")}
                    className="flex mt-3 items-center gap-3 border p-2 px-3 cursor-pointer"
                  >
                    <p
                      className={`min-w-3.5 h-3.5 border rounded-full ${
                        method === "cod" ? "bg-green-400" : ""
                      }`}
                    ></p>
                    <p className="text-gray-500 text-sm font-medium mx-4">
                      Cash on Delivery
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                // onClick={() => navigate("/order")}
                className="bg-black text-white text-sm my-8 px-8 py-3 rounded-md"
              >
               {loading ? "Processing ...." : "Place Order"}
              </button>
              {/* {userAddress && (
        <button
          type="button"
          onClick={() => navigate("/order")}
          className="bg-black text-white text-sm my-8 px-8 -mt-4 py-3 rounded-md"
        >
          OLD Address
        </button>
      )} */}
            </div>
          </div>
        </div>
      </div>
    </form>
    // <form onSubmit={onSubmitHandler} class="bg-gray-100 dark:bg-gray-900">
    //   <div class="w-full max-w-3xl mx-auto p-8">
    //     <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
    //       <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
    //         Shipping Address
    //       </h1>

    //       {/* <!-- Shipping Address --> */}
    //       <div class="mb-6">
    //         <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2"></h2>
    //         <div class="grid grid-cols-2 gap-4">
    //           <div>
    //             <label
    //               for="first_name"
    //               class="block text-gray-700 dark:text-white mb-1"
    //             >
    //               First Name
    //             </label>
    //             <input
    //               type="text"
    //               name="fullName"
    //               value={formData.fullName}
    //               onChange={onChangerHandler}
    //               required
    //               id="first_name"
    //               class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
    //             />
    //           </div>
    //           <div>
    //             <label
    //               for="countery"
    //               class="block text-gray-700 dark:text-white mb-1"
    //             >
    //               Country
    //             </label>
    //             <input
    //               type="text"
    //               name="country"
    //               value={formData.country}
    //               onChange={onChangerHandler}
    //               required
    //               id="country"
    //               class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
    //             />
    //           </div>
    //         </div>

    //         <div class="mt-4">
    //           <label
    //             for="address"
    //             class="block text-gray-700 dark:text-white mb-1"
    //           >
    //             Address
    //           </label>
    //           <input
    //             type="text"
    //             name="address"
    //             value={formData.address}
    //             onChange={onChangerHandler}
    //             required
    //             id="address"
    //             class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
    //           />
    //         </div>

    //         <div class="mt-4">
    //           <label
    //             for="city"
    //             class="block text-gray-700 dark:text-white mb-1"
    //           >
    //             City
    //           </label>
    //           <input
    //             type="text"
    //             name="city"
    //             value={formData.city}
    //             onChange={onChangerHandler}
    //             required
    //             id="city"
    //             class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
    //           />
    //         </div>
    //         <div class="mt-4">
    //           <label
    //             for="state"
    //             class="block text-gray-700 dark:text-white mb-1"
    //           >
    //             State
    //           </label>
    //           <input
    //             type="text"
    //             name="state"
    //             value={formData.state}
    //             onChange={onChangerHandler}
    //             required
    //             id="state"
    //             class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
    //           />
    //         </div>

    //         <div class="grid grid-cols-2 gap-4 mt-4">
    //           <div>
    //             <label
    //               for="phoneNumber"
    //               class="block text-gray-700 dark:text-white mb-1"
    //             >
    //               Phone
    //             </label>
    //             <input
    //               type="number"
    //               name="phoneNumber"
    //               value={formData.phoneNumber}
    //               onChange={onChangerHandler}
    //               required
    //               id="Phone"
    //               class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
    //             />
    //           </div>
    //           <div>
    //             <label
    //               for="zip"
    //               class="block text-gray-700 dark:text-white mb-1"
    //             >
    //               ZIP Code
    //             </label>
    //             <input
    //               type="number"
    //               name="pincode"
    //               value={formData.pincode}
    //               onChange={onChangerHandler}
    //               required
    //               id="zip"
    //               class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       <div class="mt-8 flex gap-3 justify-end">
    //         <button
    //           type="submit"
    //           // onClick={() => navigate("/order")}
    //           class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900"
    //         >
    //           Place Order
    //         </button>
    //         {userAddress && (
    //           <button
    //             type="button"
    //             onClick={() => navigate("/payment")}
    //             class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900"
    //           >
    //             Old Address
    //           </button>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </form>
  );
};

export default PlaceOrder;
// import axios from 'axios';
// import React, { useState } from 'react';
// import toast from 'react-hot-toast';
// import { useParams } from 'react-router-dom';

// const PaymentAddressForm = () => {
//     const { token } = useParams();
//     const [customer, setCustomer] = useState({ name: '', phone: '' });
//     const [address, setAddress] = useState({ street: '', city: '', state: '', zip: '', country: '' });
//     const [paymentMethod, setPaymentMethod] = useState('creditCard');

//     const handleCustomerChange = (e) => {
//         const { name, value } = e.target;
//         setCustomer((prevCustomer) => ({
//             ...prevCustomer,
//             [name]: value,
//         }));
//     };

//     const handleAddressChange = (e) => {
//         const { name, value } = e.target;
//         setAddress((prevAddress) => ({
//             ...prevAddress,
//             [name]: value,
//         }));
//     };

//     const handlePaymentMethodChange = (e) => {
//         setPaymentMethod(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address})
//           if(res.data.success){
//               toast.success(res.data.message)
//               navigate("/login")
//           }else{
//               toast.error(res.data.message)
//           }

//       } catch (error) {
//           console.log(error)
//           toast.error("somthing went wronge")

//       }
//         // const orderData = await axios.post(
//         //     `${process.env.REACT_APP_API}/api/v1/auth/place`,
//         //     { customer, address, paymentMethod },
//         //     { headers: { "Content-Type": "Application/json", Auth: token } }
//         // );
//         // console.log(orderData);
//         // toast.success("Address Added", {
//         //     position: "top-right",
//         //     autoClose: 1500,
//         // });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Customer Information</h2>
//             <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={customer.name}
//                 onChange={handleCustomerChange}
//                 required
//             />
//             <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone"
//                 value={customer.phone}
//                 onChange={handleCustomerChange}
//                 required
//             />

//             <h2>Shipping Address</h2>
//             <input
//                 type="text"
//                 name="street"
//                 placeholder="Street"
//                 value={address.street}
//                 onChange={handleAddressChange}
//                 required
//             />
//             <input
//                 type="text"
//                 name="city"
//                 placeholder="City"
//                 value={address.city}
//                 onChange={handleAddressChange}
//                 required
//             />
//             <input
//                 type="text"
//                 name="state"
//                 placeholder="State"
//                 value={address.state}
//                 onChange={handleAddressChange}
//                 required
//             />
//             <input
//                 type="text"
//                 name="zip"
//                 placeholder="Zip Code"
//                 value={address.zip}
//                 onChange={handleAddressChange}
//                 required
//             />
//             <input
//                 type="text"
//                 name="country"
//                 placeholder="Country"
//                 value={address.country}
//                 onChange={handleAddressChange}
//                 required
//             />

//             <h2>Payment Method</h2>
//             <label>
//                 <input
//                     type="radio"
//                     value="creditCard"
//                     checked={paymentMethod === 'creditCard'}
//                     onChange={handlePaymentMethodChange}
//                 />
//                 Credit Card
//             </label>
//             <label>
//                 <input
//                     type="radio"
//                     value="paypal"
//                     checked={paymentMethod === 'paypal'}
//                     onChange={handlePaymentMethodChange}
//                 />
//                 PayPal
//             </label>
//             <label>
//                 <input
//                     type="radio"
//                     value="cashOnDelivery"
//                     checked={paymentMethod === 'cashOnDelivery'}
//                     onChange={handlePaymentMethodChange}
//                 />
//                 Cash on Delivery
//             </label>

//             <button type="submit">Place Order</button>
//         </form>
//     );
// };

// export default PaymentAddressForm;
