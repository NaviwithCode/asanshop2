import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../img/card.png";
import toast from "react-hot-toast";
import DropIn from "braintree-web-drop-in-react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const Payment = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [totalprice, setPrice] = useState(0);
  const [totalquantity, setTotalQuantity] = useState(0);
  const [userAddress, setUserAddress] = useState("");
  const [method, setMehtod] = useState("cod");
  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "AED",
      });
    } catch (error) {
      console.log(error);
    }
  };
  // count total price
  //   const total = () => {
  //     let totalprice = 0;
  //     cart.map((ele, ind) => {
  //       totalprice = ele.price * ele.qnty + totalprice;
  //     });
  //     setPrice(totalprice);
  //   };
  //   useEffect(() => {
  //     total();
  //   }, [total]);

  // useEffect(()=>{
  //     countquantity()
  // },[countquantity]);

//   get payment gateway token
    const getToken = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/product/braintree/token`
        );
        setClientToken(data?.clientToken);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getToken();
    }, [auth?.token]);

  //handle payments
 
    const handlePayment = async () => {
      try {
        setLoading(true);
        const { nonce } = await instance.requestPaymentMethod();
        const { data } = await axios.post(
          `${process.env.REACT_APP_API}/api/v1/product/braintree/payment`,
          {
            nonce,
            cart,
          }
        );
        setLoading(false);
        localStorage.removeItem("cart");
        setCart([]);
        // setUserAddress([])
        navigate("/order");
        toast.success("Payment Completed Successfully ");
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

  return (
    <div className="flex flex-row">
      <div class="w-full max-w-lg mx-auto p-8">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-lg font-medium mb-6">Payment Information</h2>
          <div className="flex gap-3 flex-col">
            {/* <div
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
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg focus:outline-none"
              onClick={handlePayment}
              // disabled={loading || !instance || !auth?.user?.address}
            >
              {loading ? "Processing ...." : "Make Payment"}
            </button>
          </div>
          <div> */}
            <div className="mt-2">
              {!clientToken || !auth?.token || !cart?.length ? (
                ""
              ) : (
                <>
                  <DropIn 
                    options={{
                      authorization: clientToken,

                      paypal: {
                        flow: "vault",
                      },
                    }}
                    onInstance={(instance) => setInstance(instance)}
                  />
                
                  <button
                    className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
                    onClick={handlePayment}
                    disabled={loading || !instance || !auth?.user?.address}
                  >
                    {loading ? "Processing ...." : "Make Payment"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

// src/PaymentAddressForm.js
// src/PaymentAddressForm.js
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
//         const orderData = await axios.post(
//             `${process.env.REACT_APP_API}/api/v1/auth/place`,
//             { customer, address, paymentMethod },
//             { headers: { "Content-Type": "Application/json", Auth: token } }
//           );
//         // const orderData = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/place`,{ customer, address, paymentMethod },{ headers: { "Content-Type": "Application/json", Auth: token } });
//         console.log(orderData)
//         toast.success("Address Addedd", {
//             position: "top-right",
//             autoClose: 1500,
//         });
//         // return orderData.data
//     };
//         // try {
//         //     // const response = await fetch('http://localhost:5000/api/order', {
//         //     //     method: 'POST',
//         //     //     headers: {
//         //     //         'Content-Type': 'application/json',
//         //     //     },
//         //     //     body: JSON.stringify(orderData),
//         //     // });

//         //     // const data = await response.json();
//         //     // if (response.ok) {
//         //     //     alert(data.message);
//         //     // } else {
//         //     //     alert('Error: ' + data.message);
//         //     // }
//         // } catch (error) {
//         //     console.error('Error:', error);
//         //     alert('An error occurred while placing the order.');
//         // }

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
//         const orderData = await axios.post(
//             `${process.env.REACT_APP_API}/api/v1/auth/place`,
//             { customer, address, paymentMethod },
//             { headers: { "Content-Type": "Application/json", Auth: token } }
//         );
//         console.log(orderData);
//         toast.success("Address Added", {
//             position: "top-right",
//             autoClose: 1500,
//         });
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