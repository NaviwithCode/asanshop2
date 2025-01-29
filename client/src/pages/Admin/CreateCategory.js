import React, { useEffect, useState } from "react";
import AdminMenu from "../../component/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../component/form/CategoryForm";
import {Modal} from "antd"
const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
const [name,setName]=useState("")
const [isModalOpen, setIsModalOpen] = useState(false);
const [selected, setSelected]=useState(null)
const [updatedName,setUpdatedName]=useState("")
// handle form
const handleForm = async (e) => {
  e.preventDefault()
  try {
    const {data} = await axios.post(`${process.env.REACT_APP_API}/api/v1/category/create-category`,{name})
    if(data?.success){
      toast.success(`${name} is created`)
      getAllCategory()
    }else{
      toast.error(data.message)
    }
  } catch (error) {
    console.log(error)
    toast.error("Somthing went wrong in input form")
    
  }
}
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
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);
  // update category
  const handleUpdated = async(e)=>{
    e.preventDefault()
    try {
      const {data}= await axios.put(`${process.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`,{name:updatedName})
      if(data.success){
        toast.success(`${updatedName} is updated`)
        setSelected(null)
        setUpdatedName("")
        setIsModalOpen(false)
        getAllCategory()
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error("Something went wrong ")
    }
  }
  // update deletd
  const handleDeletd = async(pId)=>{
    try {
      const {data}= await axios.delete(`${process.env.REACT_APP_API}/api/v1/category/delete-category/${pId}`)
      if(data.success){
        toast.success(`category is Deleted`)
        getAllCategory()
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error("Something went wrong ")
    }
  }
  return (
    <header className="bg-white flex">
      <AdminMenu />
      <div className="max-w-7xl px-4 py-6 ">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Manage Category
        </h1>
        <div className="p-3 items-center grid grid-cols-1 sm:grid-cols-2">
          <CategoryForm handleSumbit={handleForm} value={name}setValue={setName}/>
          <div className="">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500  bg-blue-300 mt-4">
                <thead className="text-xs text-gray-900 gap-x-20 uppercase bg-blue-300 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="px-12 py-3">
                      Action
                    </th>
                    {/* <th scope="col" class="px-6 py-3">
                    Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                    Price
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c) => (
                    <>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td
                          key={c._id}
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {c.name}
                        </td>
                        <td className=" flex items-center py-2 px-4">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ms-2" onClick={() => {setIsModalOpen(true); setUpdatedName(c.name); setSelected(c)}}>
                            Edit
                          </button>
                          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ms-2" onClick={()=>{handleDeletd(c._id)}}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal onCancel={()=>setIsModalOpen(false)} footer={null} visible={isModalOpen}>
              <CategoryForm value={updatedName} setValue={setUpdatedName} handleSumbit={handleUpdated}/>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CreateCategory;
