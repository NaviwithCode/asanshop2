import React from 'react'

const CategoryForm = ({handleSumbit,value,setValue}) => {
  return (
//     <>
// <div className="w-full max-w-xs">
//   <form onSubmit={handleSumbit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//     <div className="mb-4">
//       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"placeholder='Enter New Categroy' value={value}
//       onChange={(e)=>setValue(e.target.value)}/>
//     </div>
   
//       <button className
//       ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//         Create Category
//       </button>
//   </form>
// </div>
//     </>
<>


<form onSubmit={handleSumbit} className="max-w-sm mx-auto">
  <div class="mb-5">
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter New Catergroy'
        value={value} onChange={(e)=>setValue(e.target.value)}/>
  </div>
 
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Category</button>
</form>

</>
  )
}

export default CategoryForm
// <!-- component -->
// <div className="table w-full p-2">
//         <table className="w-full border">
//             <thead>
//                       <th classname="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
//                         <div classname="flex items-center justify-center">
//                             Name
//                         </div>
//                     </th>
//                      <th classname="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
//                         <div classname="flex items-center justify-center">
//                             Action
                    
                            
//                         </div>
//                     </th>
                
//             </thead>
//             <tbody>
//                 <tr classname="bg-gray-50 text-center">
//                     <td classname="p-2 border-r">
                        
//                     </td>
//                     <td classname="p-2 border-r">
//                         <input type="text" classname="border p-1"/>
//                     </td>
//                     <td classname="p-2 border-r">
//                         <input type="text" classname="border p-1"/>
//                     </td>
//                     <td classname="p-2 border-r">
//                         <input type="text" classname="border p-1"/>
//                     </td>
//                     <td classname="p-2 border-r">
//                         <input type="text" classname="border p-1"/>
//                     </td>
//                     <td classname="p-2">
//                         <input type="text" classname="border p-1"/>
//                     </td>
                    
                    
//                 </tr>
//                 <tr classname="bg-gray-100 text-center border-b text-sm text-gray-600">
//                     <td classname="p-2 border-r">
//                         <input type="checkbox"/>
//                     </td>
//                     <td classname="p-2 border-r">1</td>
//                     <td classname="p-2 border-r">John Doe</td>
//                     <td classname="p-2 border-r">john@gmail.com</td>
//                     <td classname="p-2 border-r">Sydney, Australia</td>
//                     <td>
//                         <a href="#" classname="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
//                         <a href="#" classname="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</a>
//                     </td>
//                 </tr>
               
//             </tbody>
//         </table>
//     </div>