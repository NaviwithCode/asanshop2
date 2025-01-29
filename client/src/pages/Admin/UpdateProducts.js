// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate, useParams } from "react-router-dom";
// import {Select } from "antd";
// const { Option } = Select;

// const UpdateProducts = () => {
//     const [categories, setCategories] = useState([]);
//     const [shipping, setShipping] = useState("");
//     const [name, setName] = useState("");
//     const [photo,setPhoto]=useState("")
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState("");
//     const [category, setCategory] = useState("");
//     const [quantity, setQuantity] = useState("");
//     const navigate = useNavigate();
//     const params = useParams();
//     const [id,setId]=useState("")
//     const handleUpdated = async (e) => {
//         e.preventDefault();
//         try {
//           const productData = new FormData();
//           productData.append("name", name);
//           productData.append("description", description);
//           productData.append("price", price);
//           productData.append("quantity", quantity);
//           productData.append("photo", photo);
//           productData.append("category", category);
//            const data = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/reset-password/${id}`,productData)
//           if (data?.success) {
//             toast.error(data?.message);
//           } else {
//             toast.success("Product Updated Successfully");
//             navigate("/dashboard/admin/products");
//           }
//         } catch (error) {
//           console.log(error);
//           toast.error("something went wrong");
//         }
//       };
//     // get single product
//     const getSingleProduct = async ()=>{
//         try {
//             const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`)
//             setName(data.products.name);
//             setId(data.products._id);
//             setDescription(data.products.description);
//             setPrice(data.products.price);
//             setPhoto(data.products.photo);
//             setQuantity(data.products.quantity);
//             setShipping(data.products.shipping);
//             setCategory(data.products.category);
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     useEffect(() => {
//         getSingleProduct()
//         // eslint-disable-name-line
//     },[])

//   // get all cat
//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API}/api/v1/category/get-category`
//       );
//       if (data?.success) {
//         setCategories(data?.category);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong in getting catgeory");
//     }
//   };
//   useEffect(() => {
//     getAllCategory();
//   }, []);
//   return (
//     <>
//       <div className="m-1">
//         <Select
//           bordered={false}
//           placeholder="Select a Category"
//           showSearch
//           className="form-select mb-3 mt-8 shadow rounded grid cursor-pointer"
//           onChange={(value) => {
//             setCategory(value);
//           }}
//           value={category}
//         >
//           {categories?.map((c) => (
//             <Option key={c._id} value={c._id}>
//               {c.name}
//             </Option>
//           ))}
//         </Select>
//         <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded grid text-center cursor-pointer">
//           {photo ? photo.name : "upload Photo"}
//           <input
//             type="file"
//             name="photo"
//             accept="image/*"
//             onChange={(e) => setPhoto(e.target.files[0])}
//             hidden
//           />
//         </label>
//       </div>
//       <div className="mb-3">
//                 {photo ? (
//                   <div className="text-center">
//                     <img
//                       src={URL.createObjectURL(photo)}
//                       alt="product_photo"
//                       className="h-[200px]"

//                     />
//                   </div>
//                 ) : (
//                   <div className="flex justify-center">
//                     <img
//                       src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${id}`}
//                       alt="product_photo"
//                       className="h-[200px]"
//                     />
//                   </div>
//                 )}
//               </div>
//       <div className="mb-3 grid ">
//         <input
//           type="text"
//           value={name}
//           placeholder="write a Name"
//           className="form-control shadow py-2 px-3 rounded"
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="mb-3 grid">
//         <textarea
//           type="text"
//           value={description}
//           placeholder="write a Description"
//           className="form-control  shadow py-2 px-3 rounded"
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>
//       <div className="mb-3 grid ">
//         <input
//           type="number"
//           value={price}
//           placeholder="write a Price"
//           className="form-control  shadow py-2 px-3 rounded"
//           onChange={(e) => setPrice(e.target.value)}
//         />
//       </div>
//       <div className="mb-3 grid">
//         <input
//           type="number"
//           value={quantity}
//           placeholder="write a Quantity"
//           className="form-control  shadow py-2 px-3 rounded"
//           onChange={(e) => setQuantity(e.target.value)}
//         />
//       </div>
//       <div className="mb-3">
//         <Select
//           bordered={false}
//           placeholder="Select Shipping "
//           size="large"
//           showSearch
//           className="form-select mb-3 shadow rounded grid cursor-pointer"
//           onChange={(value) => {
//             setShipping(value);
//           }}
//           value={shipping?"yes":"no"}
//         >
//           <Option value="0">No</Option>
//           <Option value="1">Yes</Option>
//         </Select>
//       </div>
//       {/* <div className="mb-3 grid">
//               <input type="text" value={shipping} placeholder="write a Shipping" className="form-control  shadow py-2 px-3 rounded" onChange={(e)=> setName(e.target.value)}/>
//             </div> */}
//       <button
//         type="submit"
//         onClick={handleUpdated}
//         className="text-white mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         Update Products
//       </button>
//     </>
//   );
// };

// export default UpdateProducts;

// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { Select } from "antd";
// import { useNavigate, useParams } from "react-router-dom";
// import { set } from "mongoose";
// const { Option } = Select;
// const UpdateProducts = () => {
//   const [categories, setCategories] = useState([]);
//   const [shipping, setShipping] = useState("");
//   const [name, setName] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const navigate = useNavigate();
//   const params = useParams();
//   const [id,setId]=useState("")
//   // create products
//   const handleCreate = async (e) => {
//     e.preventDefault();
//     try {
//       const productData = new FormData();
//       productData.append("name", name);
//       productData.append("description", description);
//       productData.append("price", price);
//       productData.append("quantity", quantity);
//       photo && productData.append("photo", photo);
//       productData.append("category", category);
//       const { data } = axios.post(
//         `${process.env.REACT_APP_API}/api/v1/product/create-product`,
//         productData
//       );
//       if (data?.success) {
//         toast.error(data?.message);
//       } else {
//         toast.success("Product Created Successfully");
//         navigate("/dashboard/admin/products");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("something went wrong");
//     }
//   };

//   // get single product
//   const getSingleProduct = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
//       );
//       setName(data.products.name);
//       setId(data.products.id)
//       setPhoto(data.products.photo);
//       setPrice(data.products.price);
//       setDescription(data.products.description);
//       setQuantity(data.products.quantity);
//       setCategory(data.products.category._id);
//       setShipping(data.products.shipping);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getSingleProduct();
//   }, []);
//   // get all cat
//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API}/api/v1/category/get-category`
//       );
//       if (data?.success) {
//         setCategories(data?.category);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong in getting catgeory");
//     }
//   };
//   useEffect(() => {
//     getAllCategory();
//   }, []);
//   return (
//     <div>
//       <div className="m-1">
//         <Select
//           bordered={false}
//           placeholder="Select a Category"
//           showSearch
//           className="form-select mb-3 mt-8 shadow rounded grid cursor-pointer"
//           onChange={(value) => {
//             setCategory(value);
//           }}
//             value={category}
//         >
//           {categories?.map((c) => (
//             <Option key={c._id} value={c._id}>
//               {c.name}
//             </Option>
//           ))}
//         </Select>
//         <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded grid text-center cursor-pointer">
//           {photo ? photo.name : "upload Photo"}
//           <input
//             type="file"
//             name="photo"
//             accept="image/*"
//             onChange={(e) => setPhoto(e.target.files[0])}
//             hidden
//           />
//         </label>
//       </div>
//       <div className="mb-3">
//         {photo ? (
//           <div className=" flex justify-center">
//             <img
//               src={URL.createObjectURL(photo)}
//               alt="uploaded"
//               className=" h-[200px] "
//             />
//           </div>
//         ) : (
//           <div className=" flex justify-center">
//             <img
//               src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${id}`}
//               alt="uploaded"
//               className=" h-[200px] "
//             />
//           </div>
//         )}
//       </div>
//       <div className="mb-3 grid ">
//         <input
//           type="text"
//           value={name}
//           placeholder="write a Name"
//           className="form-control shadow py-2 px-3 rounded"
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="mb-3 grid">
//         <textarea
//           type="text"
//           value={description}
//           placeholder="write a Description"
//           className="form-control  shadow py-2 px-3 rounded"
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>
//       <div className="mb-3 grid ">
//         <input
//           type="number"
//           value={price}
//           placeholder="write a Price"
//           className="form-control  shadow py-2 px-3 rounded"
//           onChange={(e) => setPrice(e.target.value)}
//         />
//       </div>
//       <div className="mb-3 grid">
//         <input
//           type="number"
//           value={quantity}
//           placeholder="write a Quantity"
//           className="form-control  shadow py-2 px-3 rounded"
//           onChange={(e) => setQuantity(e.target.value)}
//         />
//       </div>
//       <div className="mb-3">
//         <Select
//           bordered={false}
//           placeholder="Select Shipping "
//           size="large"
//           showSearch
//           className="form-select mb-3 shadow rounded grid cursor-pointer"
//           onChange={(value) => {
//             setShipping(value);
//           }}
//           value={shipping}
//         >
//           <Option value="0">No</Option>
//           <Option value="1">Yes</Option>
//         </Select>
//       </div>
//       {/* <div className="mb-3 grid">
//               <input type="text" value={shipping} placeholder="write a Shipping" className="form-control  shadow py-2 px-3 rounded" onChange={(e)=> setName(e.target.value)}/>
//             </div> */}
//       <button
//         type="submit"
//         onClick={handleCreate}
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         Create Products
//       </button>
//     </div>
//   );
// };

// export default UpdateProducts;
import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast";
import axios from "axios";
import {Select } from "antd";
import { useNavigate, useParams } from 'react-router-dom';
// import AdminManu from '../../component/AdminMenu';
const { Option } = Select;

const UpdateProducts = () => {
  const [categories, setCategories] = useState([]);
  const [shipping, setShipping] = useState("");
  const [name, setName] = useState("");
  const [photo,setPhoto]=useState("")
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const [id,setId]=useState("")
  // const {_id}= useParams()

// create products
const handleUpdated = async (e) => {
  e.preventDefault();
  try {
    const productData = new FormData();
    productData.append("name", name);
    productData.append("description", description);
    productData.append("price", price);
    productData.append("quantity", quantity);
    photo && productData.append("photo", photo);
    productData.append("category", category);
    const { data } = axios.put(`${process.env.REACT_APP_API}/api/v1/product/update-product/${id}`,
      productData
    );
    if (data?.success) {
      toast.error(data?.message);
    } else {
      toast.success("Product updated Successfully");
      navigate("/dashboard/admin/product");
    }
  } catch (error) {
    console.log(error);
    toast.error("something went wrong");
  }
};
// get single products
const getSingleProduct = async()=>{
  try {
    const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`)
    setName(data.products.name)
    setId(data.products._id)
    setDescription(data.products.description)
    setPrice(data.products.price)
    setQuantity(data.products.quantity)
    setShipping(data.products.shipping)
    setCategory(data.products.category._id)

  } catch (error) {
    console.log(error);
    
  }
}
useEffect(()=>{
getSingleProduct()
},[])
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
    toast.error("Something went wrong in getting catgeory");
  }
};
useEffect(() => {
  getAllCategory();
}, []);

//  delete a product
 const handleDelete = async () => {
  try {
    // let answer = window.prompt("Are You Sure want to delete this product ? ");
    // if (!answer) return;
    const { data } = await axios.delete(`${process.env.REACT_APP_API}/api/v1/product/delete-product/${id}`);
    // if(data?.success){
    //   toast.error(data?.message);
    
      toast.success("Product Deleted Succfully");
      navigate("/dashboard/admin/product");
  
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};
  return (
    <div className='flex bg-white'>
      <div className="m-1 w-[600px] lg:ml-[400px] mt-4 flex-col sm:ml-[200px]">
        <h1 className="text-2xl font-bold text-center mt-2 text-gray-700">Update Product</h1>
        <Select
          bordered={false}
          placeholder="Select a Category"
          showSearch
          className="form-select mb-3 mt-8 shadow grid rounded cursor-pointer"
          onChange={(value) => {
            setCategory(value);
          }}
            value={category}
        >
          {categories?.map((c) => (
            <Option key={c._id} value={c._id}>
              {c.name}
            </Option>
          ))}
        </Select>
        <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded grid text-center cursor-pointer">
          {photo ? photo.name : "upload Photo"}
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            hidden
          />
        </label>
      <div className="mb-3">
        {photo ? (
          <div className=" flex justify-center">
            <img
              src={URL.createObjectURL(photo)}
              alt="uploaded"
              className=" h-[200px] "
              />
          </div>
        ):(
          <div className=" flex justify-center">
          <img
            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${id}`}
            alt="uploaded"
            className=" h-[200px] "
            />
        </div>
        )}
      </div>
      <div className="mb-3 grid ">
        <input
          type="text"
          value={name}
          placeholder="write a Name"
          className="form-control shadow py-2 px-3 rounded"
          onChange={(e) => setName(e.target.value)}
          />
      </div>
      <div className="mb-3 grid">
        <textarea
          type="text"
          value={description}
          placeholder="write a Description"
          className="form-control  shadow py-2 px-3 rounded"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3 grid ">
        <input
          type="number"
          value={price}
          placeholder="write a Price"
          className="form-control  shadow py-2 px-3 rounded"
          onChange={(e) => setPrice(e.target.value)}
          />
      </div>
      <div className="mb-3 grid">
        <input
          type="number"
          value={quantity}
          placeholder="write a Quantity"
          className="form-control  shadow py-2 px-3 rounded"
          onChange={(e) => setQuantity(e.target.value)}
          />
      </div>
      <div className="mb-3">
        <Select
          bordered={false}
          placeholder="Select Shipping"
          size="large"
          showSearch
          className="form-select mb-3 shadow rounded grid cursor-pointer"
          onChange={(value) => {
            setShipping(value);
          }}
          value={shipping ? "Yes":"No"}
          >
          <Option value="0">No</Option>
          <Option value="1">Yes</Option>
        </Select>
      </div>
      {/* <div className="mb-3 grid">
              <input type="text" value={shipping} placeholder="write a Shipping" className="form-control  shadow py-2 px-3 rounded" onChange={(e)=> setName(e.target.value)}/>
              </div> */}
      <button
        type="submit"
        onClick={handleUpdated}
        className="text-white mb-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
        Update Products
      </button>
      <button
        type="submit"
        onClick={handleDelete}
        className="text-white ml-3 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 mb-3 dark:focus:ring-blue-800"
        >
        Remove 
      </button>
        </div>
    </div>
  );
};

export default UpdateProducts;
