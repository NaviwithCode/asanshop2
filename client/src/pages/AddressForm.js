// // import React from 'react'
// import React, { useState } from "react";
// import axios from "axios";
// import { useCart } from "../context/cart";
// import { useParams } from "react-router-dom";
// import toast from "react-hot-toast";

// const AddressForm = () => {
//   const [cart, setCart] = useCart([]);
//   const { token } = useParams();
//   const [products, setProducts] = useState([]);
//   const [method, setMehtod] = useState("cod");
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
//   const [formData, setFormData] = useState({
//     fullName: "",
//     address: "",
//     city: "",
//     state: "",
//     country: "",
//     pincode: "",
//     phoneNumber: "",
//     products:"",
//     // orderItems: [{ products: '', quantity: 1 }],
//     amount: totalPrice(),
//     // paymentMethod: 'Cash on Delivery',
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   // const { fullName, address, city, state, country, pincode, phoneNumber,paymentMethod,} =
//   // formData;

//   // Submit order form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // try {
//     //     const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/order/place`, formData, { headers: { "Content-Type": "Application/json", Auth: token } });
//     //     if (response.data.success) {
//     //       setCart({})
//     //       alert('Order placed successfully');

//     //     } else{
//     //       alert('Order failed to place');
//     //     }
//     //     // console.log(response.data);
//     //     // setFormData({
//     //     //   fullName: "",
//     //     //   address: "",
//     //     //   city: "",
//     //     //   state: "",
//     //     //   country: "",
//     //     //   pincode: "",
//     //     //   phoneNumber: "",
//     //     // });
//     // } catch (error) {
//     //     console.error('Failed to submit order:', error);
//     // }
//     // try {
//     //   let orderItems = [];
//     //   for (const items in cart) {
//     //     for (const item in cart[items]) {
//     //       if (cart[items][item] > 0) {
//     //         const itemInfo = structuredClone(
//     //           products.map((p) => p._id === items)
//     //         );
//     //         if (itemInfo) {

//     //           itemInfo.quantity = cart;
//     //           orderItems.push(itemInfo);
//     //         }
//     //       }
//     //     }
//     //     let orderData = {
//     //       address: formData,
//     //       products: orderItems,
//     //       amount: totalPrice(),
//     //     };
//     //     const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/order/place`,orderData,{ headers: { "Content-Type": "Application/json", Auth: token } })
//     //     if (response.data.success) {
//     //       setCart({})
//     //       toast.success(response.data.message)
//     //     }else{
//     //       toast.success(response.data.message)
//     //     }
//     //   }
//       // console.log(orderItems)
//       // console.log(orderData)

//       // const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/order/place`,orderData,{ headers: { "Content-Type": "Application/json", Auth: token } })
//       // if (response.data.success) {
//         //   setCart({})
//         //   alert('Order placed successfully')
//         // }else{
//           //   alert('Order failed to place')
//           // }
//           // switch (method) {
//             //   case 'cod':
//             //     const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/order/place`, orderData,{headers:{token}})
//             //     if (response.data.success) {
//               //       setCart({})
//               //     }else{
//                 //       alert('Order failed to place');
//                 //     }
//                 //     break;

//                 //   default:
//                 //     break;
//                 // }
//     //           } catch (error) {
//     //   console.log(error);
//     //   toast.error("somthing went wronge")
//     // }
//     // setFormData({})

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/order/place`,{
//         ...formData,
//         paymentMethod: 'Cash on Delivery'
//     });;
//       setFormData({
//         fullName: "",
//         address: "",
//         city: "",
//         state: "",
//         country: "",
//         pincode: "",
//         phoneNumber: "",
//         products:"",
//         amount: totalPrice(),
//           // orderItems: [{ productId: '', quantity: 1 }],
//           // paymentMethod: 'Cash on Delivery'
//       });
//   } catch (error) {
//       alert('Error placing order');
//   }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h2>Order Form</h2>

//         <label>Name:</label>
//         <input
//           type="text"
//           name="customerName"
//           value={formData.customerName}
//           onChange={handleChange}
//           required
//         />

//         <label>Phone:</label>
//         <input
//           type="number"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           required
//         />
//         <label>Pincode:</label>
//         <input
//           type="number"
//           name="pincode"
//           value={formData.pincode}
//           onChange={handleChange}
//           required
//         />
//         <label>Country:</label>
//         <input
//           type="text"
//           name="country"
//           value={formData.country}
//           onChange={handleChange}
//           required
//         />
//         <label>City:</label>
//         <input
//           type="text"
//           name="city"
//           value={formData.city}
//           onChange={handleChange}
//           required
//         />
//         <label>Country:</label>
//         <input
//           type="text"
//           name="state"
//           value={formData.state}
//           onChange={handleChange}
//           required
//         />

//         <label>Address:</label>
//         <textarea
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//         ></textarea>

//         {/* <label>Total Amount:</label>   */}
//         {/* <input
//                 type="number"
//                 name="totalAmount"
//                 value={formData.totalAmount}
//                 onChange={handleChange}
//                 required
//             />   */}
//         {/* <p>{totalPrice()}</p> */}

//         <label>Payment Method:</label>
//         <div
//           onClick={() => setMehtod("cod")}
//           className="flex mt-3 items-center gap-3 border p-2 px-3 cursor-pointer"
//         >
//           <p
//             className={`min-w-3.5 h-3.5 border rounded-full ${
//               method === "cod" ? "bg-green-400" : ""
//             }`}
//           ></p>
//           <p className="text-gray-500 text-sm font-medium mx-4">
//             Cash on Delivery
//           </p>
//         </div>
//         {/* <select
//           name="paymentMethod"
//           // value={formData.paymentMethod}
//           // onChange={handleChange}
//           onClick={()=>setMehtod('cod')}
//           required
//         >
//           <option value="Cash on Delivery">Cash on Delivery</option>
//         </select> */}

//         <button type="submit">Place Order</button>
//       </form>
//     </div>
//   );
// };

// export default AddressForm;

import React, { useState } from "react";
import axios from "axios";
import { useCart } from "../context/cart";

const AddressForm = () => {
  const [cart, setCart] = useCart([]);
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
    items: [],
    amount: totalPrice(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/order/place`,
        {
          ...formData,
          paymentMethod: "Cash on Delivery",
        }
      );
      alert("Order placed successfully!");
      setFormData({
        fullName: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        phoneNumber: "",
        items: [],
        amount: totalPrice(),
      });
    } catch (error) {
      alert("Error placing order");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="customerName"
        placeholder="Name"
        value={formData.customerName}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="customerEmail"
        placeholder="Email"
        value={formData.customerEmail}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="customerAddress"
        placeholder="Address"
        value={formData.customerAddress}
        onChange={handleInputChange}
        required
      ></textarea>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default AddressForm;
