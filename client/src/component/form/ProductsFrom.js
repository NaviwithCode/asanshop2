import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import AdminMenu from "../AdminMenu";
const { Option } = Select;
const ProductsFrom = () => {
  const [categories, setCategories] = useState([]);
  const [shipping, setShipping] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  // create products
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/create-product`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/product");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

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
  return (
    <div className="flex bg-white">
      <AdminMenu />
      <div className="w-[600px] px-5">
      <h1 className="mt-3 mb-0 font-bold text-3xl">Add New Products</h1>
        <Select
          bordered={false}
          placeholder="Select a Category"
          showSearch
          className="form-select mb-3 mt-8 grid shadow rounded cursor-pointer"
          onChange={(value) => {
            setCategory(value);
          }}
          //   value={category}
        >
          {categories?.map((c) => (
            <Option key={c._id} value={c._id}>
              {c.name}
            </Option>
          ))}
        </Select>
        <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center flex cursor-pointer">
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
        {photo && (
          <div className=" flex justify-center">
            <img
              src={URL.createObjectURL(photo)}
              alt="uploaded"
              className=" h-[200px] "
              />
          </div>
        )}
      </div>
      <div className="mb-3 grid">
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
      <div className="mb-3 grid">
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
      <div className="mb-3 grid">
        <Select
          bordered={false}
          placeholder="Select Shipping "
          size="large"
          showSearch
          className="form-select mb-3 shadow rounded grid cursor-pointer"
          onChange={(value) => {
            setShipping(value);
          }}
          // value={shipping}
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
        onClick={handleCreate}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
        Create Products
      </button>
        </div>
    </div>
  );
};

export default ProductsFrom;
