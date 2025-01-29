// import React, { Fragment, useState } from "react";
// import AdminMenu from "../../component/AdminMenu";
// import { MdClose } from "react-icons/md";
// import { HiMenuAlt3 } from "react-icons/hi";
// // import Productrespo from "./productrespo";
// import ResponsivProduct from "../../component/ResponsivProduct";
// // import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../../component/ui/Sheet";
// // import {Sheet} from "@babel/core"

// const CreateProducts = () => {
// // const [open, setOpen] = useState(false);
// const [show, setShow] = useState(false);
// const toggleMenu = () => {
//   setShow(!show);
// }
//   return (
//     <Fragment>
//       <header className="bg-gray-200 flex">
//         <AdminMenu />
//         <div className="mb-5 ml-auto py-4 px-4">
//           <button
//             // onClick={() => setOpen(true)}
//             className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow bg-black text-white"
//           >
//             <div className="flex items-center gap-4">
//             {show ? (
//             <h1 onClick={toggleMenu}>Add New Product</h1>
//               // <MdClose onClick={toggleMenu} className=" size-6" />
//             ) : (
//               <h1 onClick={toggleMenu}>Add New Product</h1>
//               // <HiMenuAlt3 onClick={toggleMenu} className=" size-6" />
//             )}
//           </div>
//           </button>
//         {/* </div>
//         <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
//           <div open = {open}
//           className="bg-white rounded-md shadow-md p-4"
//           >

//           </div>
//           {/* <Sheet
//               open={openCreateProductsDialog}
//               onOpenChange={() => {
//                 setOpenCerateProductsDialog(false);
//                 // setCurrentEditedId(null);
//                 // setFormData(initialFormData);
//               }}
//           >
//             <SheetContent side=" right" className=" overflow-auto">
//               <SheetHeader>
//                 <SheetTitle>Add New Product</SheetTitle>
//               </SheetHeader>
//             </SheetContent>
//           </Sheet> */}
//         </div>
//         <ResponsivProduct show={show}/>
//       </header>
import toast from "react-hot-toast";
//     </Fragment>
//   );
// };

// export default CreateProducts;

import React, { useEffect, useState } from "react";
import AdminManu from "../../component/AdminMenu";
import axios from "axios";
import { Select } from "antd";
import ProductsFrom from "../../component/form/ProductsFrom";
import Modal from "antd/es/modal/Modal";
import ProductsCard from "./ProductsCard";
// const { Option } = Select;
const CreateProducts = () => {
  // const [categories, setCategories] = useState([]);
  // const [shipping, setShipping] = useState("");
  const [name, setName] = useState("");
  // const [photo,setPhoto]=useState("")
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  // const [category, setCategory] = useState("");
  // const [quantity, setQuantity] = useState("");
  const [Open, setOpen] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    // try {
    //   const {data} = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/create-product`,{name})
    //   if(data?.success){
    //     toast.success(`${name} is created`)
    //     getAllCategory()
    //   }else{
    //     toast.error(data.message)
    //   }
    // } catch (error) {
    //   console.log(error)
    //   toast.error("Somthing went wrong in input form")

    // }
  };
  // const [products,setProducts]=useState([])
  // get All Product
  // const getAllProducts = async()=> {
  //   try {
  //     const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`)
  //     setProducts(data.products)
  //   } catch (error) {
  //     console.log(error)
  //     toast.error("Something went wrong")
  //   }
  // }
  // // lifecycle method
  // useEffect(() => {
  //   getAllProducts()
  // },[])
  // get all cat
  // const getAllCategory = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_API}/api/v1/category/get-category`
  //     );
  //     if (data?.success) {
  //       setCategories(data?.category);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something wwent wrong in getting catgeory");
  //   }
  // };
  // useEffect(() => {
  //   getAllCategory();
  // }, []);
  return (
    <div>
      <header className="flex bg-white">
        <AdminManu />
        <div className="py-6  lg:px-10 sm:px-6">
          <h1 className="text-3xl  font-bold tracking-tight text-gray-900">
            All Products
          </h1>
          {/* <div className="lg:ml-[700px] sm:ml-[-700]">
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow bg-black text-white"
            >
              Add New Product
            </button>
          </div>
          <Modal onCancel={() => setOpen(false)} footer={null} visible={Open}>
            <ProductsFrom
              handleSumbit={handleForm}
              value={name}
              setValue={setName}
            />
          </Modal> */}
          <ProductsCard />
          {/* {products?.map((p)=>
          )} */}
          {/* <div className="m-1">
            <Select
              bordered={false}
              placeholder="Select a Category"
              showSearch
              className="form-select mb-3 shadow rounded w-[800px] grid grid-cols-1 sm:grid-cols-2"
              onChange={(value) => {
                setCategory(value);
              }}
            >
       
        {categories?.map((c) => (
          <Option key={c._id} value={c.name}>
            {c.name}
          </Option>
        ))}
            </Select>
            <div className="mb-3 mt-2 grid w-[800px] text-center">
              <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {photo?photo.name :"upload Photo"}
                <input type="file" name="photo" accept="image/*" onChange={(e)=>setPhoto(e.target.files[0])} hidden/>
              </label>
            </div>
            <div className="mb-3">
              {photo && (
                <div className=" flex justify-center">
                  <img src={URL.createObjectURL(photo)} alt="uploaded" className=" h-[200px] "/>
                </div>
              )}
            </div>
            <div className="mb-3 ">
              <input type="text" value={name} placeholder="write a Name" className="form-control w-[800px] shadow py-2 px-3 rounded" onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className="mb-3 ">
              <input type="text" value={description} placeholder="write a Description" className="form-control w-[800px] shadow py-2 px-3 rounded" onChange={(e)=> setDescription(e.target.value)}/>
            </div>
            <div className="mb-3 ">
              <input type="text" value={price} placeholder="write a Price" className="form-control w-[800px] shadow py-2 px-3 rounded" onChange={(e)=> setPrice(e.target.value)}/>
            </div>
            <div className="mb-3 ">
              <input type="text" value={shipping} placeholder="write a Shipping" className="form-control w-[800px] shadow py-2 px-3 rounded" onChange={(e)=> setShipping(e.target.value)}/>
            </div>
            <div className="mb-3 ">
              <input type="text" value={shipping} placeholder="write a Shipping" className="form-control w-[800px] shadow py-2 px-3 rounded" onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className="mb-3 ">
              <input type="text" value={shipping} placeholder="write a Shipping" className="form-control w-[800px] shadow py-2 px-3 rounded" onChange={(e)=> setName(e.target.value)}/>
            </div>
          </div> */}
        </div>
      </header>
    </div>
  );
};

export default CreateProducts;
