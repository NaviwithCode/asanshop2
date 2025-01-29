import axios from "axios";
// import { set } from "mongoose";
import { useEffect, useState } from "react";

export default function UseCategory(){
    const [categories,setCategories] = useState([])

    // get cat
    const getCategory = async ()=>{
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/get-category`)
            setCategories(data?.category)
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
        getCategory()
    },[])
    return categories
}