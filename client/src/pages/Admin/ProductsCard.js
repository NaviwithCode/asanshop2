import { Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
// import UpdateProducts from "./UpdateProducts";

// import { TERipple } from 'tw-elements-react';
const ProductsCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shipping, setShipping] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const [id, setId] = useState("");
  // const [id,setId]=useState()
  // const handleForm = async (e) => {
  //   e.preventDefault();
  //   // try {
  //   //   const {data} = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/create-product`,{name})
  //   //   if(data?.success){
  //   //     toast.success(`${name} is created`)
  //   //     getAllCategory()
  //   //   }else{
  //   //     toast.error(data.message)
  //   //   }
  //   // } catch (error) {
  //   //   console.log(error)
  //   //   toast.error("Somthing went wrong in input form")

  //   // }
  // };
  // const handleUpdated = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const productData = new FormData();
  //     productData.append("name", name);
  //     productData.append("description", description);
  //     productData.append("price", price);
  //     productData.append("quantity", quantity);
  //     photo && productData.append("photo", photo);
  //     productData.append("category", category);
  //     const { data } = axios.put(
  //       `${process.env.REACT_APP_API}/api/v1/product/update-product/${id}`,
  //       productData
  //     );
  //     if (data?.success) {
  //       toast.error(data?.message);
  //     } else {
  //       toast.success("Product updated Successfully");
  //       navigate("/dashboard/admin/products");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("something went wrong");
  //   }
  // };
  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
  //     );
  //     setName(data.products.name);
  //     setId(data.products._id);
  //     setDescription(data.products.description);
  //     setPrice(data.products.price);
  //     setQuantity(data.products.quantity);
  //     setShipping(data.products.shipping);
  //     setCategory(data.products.category._id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getSingleProduct();
  // }, []);
  
  
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product`
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  // lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  const handleDelete = async () => {
    try {
      // let answer = window.prompt("Are You Sure want to delete this product ? ");
      // if (!answer) return;
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/product/delete-product/${id}`
      );
      // if (data?.success) {
      //   toast.error(data?.message);
      // } else {
        toast.success("Product Deleted Succfully");
        // navigate("/dashboard/admin/products");
      
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                {/* <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label> */}
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              image
            </th>
            <th scope="col" class="px-6 py-3">
              Product Name
            </th>
            <th scope="col" class="px-6 py-3">
                    Category
                </th>
            {/* <th scope="col" class="px-6 py-3">
                    Accessories
                </th> */}
            {/* <th scope="col" class="px-6 py-3">
                    Available
                </th> */}
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            {/* <th scope="col" class="px-6 py-3">
                    Weight
                </th> */}
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
          <tbody>
        {products?.map((p) => (
            <tr  class="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td key={p._id} class="w-4 p-4">
                <div class="flex items-center">
                  {/* <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  /> */}
                  {/* <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label> */}
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="h-20"
                />
              </th>
              <td class="px-6 py-4">{p.name.substring(0,30)} ...</td>
              <td class="px-6 py-4">
                    {p.category.name}
                </td>
              {/* <td class="px-6 py-4">
                    Yes
                </td> */}
              {/* <td class="px-6 py-4">
                    
                </td> */}
              <td class="px-6 py-4">AED {p.price}</td>
              {/* <td class="px-6 py-4">
                    3.0 lb.
                </td> */}
              <td class="flex items-center mt-6 px-6 py-4">
                <Link
                  to={`/dashboard/admin/product/${p.slug}`}
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                {/* <a type="sumbit" onClick={()=>{window.location.reload(); handleDelete(p.id)}} class="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer ms-3">Remove</a> */}
                {/* <button
                  type="submit"
                  onClick={handleDelete}
                  className="text-white ml-3 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 mb-3 dark:focus:ring-blue-800"
                >
                  Delete Products
                </button> */}
              </td>
            </tr>
        ))}
          </tbody>
      </table>
    </div>
  );
};
export default ProductsCard;

// <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10">
{
  /* <Link></Link> */
}
// {products?.map((p) => (
//   <Link
//     to={`/dashboard/admin/product/${p.slug}`}
//     className=" mt-3 rounded-lg bg-white p-6 dark:bg-neutral-700"
//     key={p._id}
//   >
//     <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
// {/* <TERipple> */}
// <div className="relative overflow-hidden bg-cover bg-no-repeat">
//   <img
//     className="rounded-t-lg"
//     src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
//     alt=""
//   />
//   <a href="#!">
//     <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
//   </a>
// </div>
// {/* </TERipple> */}
// <div className="p-6">
//   <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
//     {p.name}
//   </h5>
//   <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
//     {p.description}
//   </p>
//     {/* <a href={`/dashboard/admin/product/${p.slug}`}
//   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//   // onClick={() => {
//   //   setIsModalOpen(true);
//   // }}
// >
//   Edit
// </a> */}

//   {/* <TERipple> */}
//   {/* <button
//   type="button"
//   className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
//   Button
// </button> */}
//           {/* </TERipple> */}
//       //   </div>
//       // </div>

//       {/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//         <img
//           className="w-full"
//           src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
//           alt={p.name}
//         />
//         <div class="p-5">
//           <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             {p.name}
//           </h5>
//           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//             {p.description}
//           </p>
//         </div> */}
//       {/* </div> */}
//       {/* <Modal
//         onCancel={() => setIsModalOpen(false)}
//         footer={null}
//         visible={isModalOpen}
//       >
//         <UpdateProducts
//           handleSumbit={handleForm}
//           value={id}
//           setValue={setI}
//         />
//       </Modal> */}
//       {/* <img className="w-full" src={`${process.env.REACT_APP_API}/api/v1/product//product-photo/${p._id}`} alt={p.name} />shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
//       <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
//       {p.name}
//       </h5>
//       <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
//       {p.description}
//       </p>
//       <TERipple>
//       <button
//         type="button"
//         className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//       >
//       Button
//       </button>
//       </TERipple> */}
// //     </Link>
//   ))}
// </div>
