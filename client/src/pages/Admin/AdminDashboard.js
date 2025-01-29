import React from 'react'
import AdminMenu from '../../component/AdminMenu'
import { useAuth } from '../../context/auth'
import DashboardBox from './DashboardBox'
import { FaUserCircle,FaShoppingCart, FaBox, FaUsers, FaCog } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { GiStarFormation } from "react-icons/gi";
import CardDashaboard from './CardDashaboard';
import { Chart } from "react-google-charts";
const AdminDashboard = () => {
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2014", 1000, 400],
    ["2015", 1170, 460],
    ["2016", 660, 1120],
    ["2017", 1030, 540],
  ];
  
  // Material chart options
  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales and Expenses over the Years",
    },
  };
  const [auth] = useAuth()
  return (
    // <div className='flex '>
    //   <div className='row'>
    //     <div className='col-md-3'>
    //       <AdminMenu/>
    //     </div>
    //     <div className='col-md-9'>
    //       content
    //     </div>
    //   </div>
      
    // </div>
      <header className="bg-white flex  ">
        <AdminMenu/>
<div className=' grow p-8'>
  <h2 className='text-2xl mb-4'>Dashboard</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    <CardDashaboard icon={<FaShoppingCart/>} title="Orders" value="140"/>
    <CardDashaboard icon={<FaBox/>} title="Products" value="120"/>
    <CardDashaboard icon={<FaUsers/>} title="Users" value="30"/>
    <CardDashaboard icon={<FaCog/>} title="Setings" value="11"/>
  </div>
  <div className='shadow border-0 py-3 px-3 rounded-md'>
            <h3 className='mb-4 text-lg font-bold text-[#403e57]'>Best Selling Products</h3>
            <div>
              <div>
                <h4 className='text-md font-semibold text-[#403e57]'>SHOW BY</h4>
              </div>
            </div>
            <div>
            {/* <Chart
      // Note the usage of Bar and not BarChart for the material version
      chartType="Bar"
      data={data}
      options={options}
    /> */}
            </div>
          </div>
</div>


        {/* <div className=' py-20 px-14'>
          <div className='flex gap-3 flex-wrap'>
            <DashboardBox color={["#1da256","#48d483"]} icon={<FaUserCircle className="text-xl opacity-[0.3] text-white"/>}/>
            <DashboardBox color={["#c012e2","#eb64fe"]} icon={<FaShoppingCart className="text-xl opacity-[0.3] text-white"/>}/>
            <DashboardBox color={["#2c78e5","#60aff5"]} icon={<FaBagShopping className="text-xl opacity-[0.3] text-white"/>}/>
            <DashboardBox color={["#e1950e","#f3cd29"]} icon={<GiStarFormation className="text-xl opacity-[0.3] text-white"/>}/> */}
            {/* <div className='w-72 rounded-md h-44 bg-[#ccc]'></div>
            <div className='w-72 rounded-md h-44 bg-[#ccc]'></div>
            <div className='w-72 rounded-md h-44 bg-[#ccc]'></div>
            <div className='w-72 rounded-md h-44 bg-[#ccc]'></div> */}
          {/* <div className='flex justify-end -mt-[11.7rem]'>
            <div className='w-64 rounded-md h-[22.7rem] bg-[#ccc] ml-auto'></div>
          </div>
          </div>
        </div> */}

        {/* <div className='px-4 py-6 sm:px-6 lg:px-8'>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div> */}
          {/* <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 ">
            <h1 className=" flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground text-2xl tracking-tight text-gray-900 ">Name : {auth?.user?.name}</h1>
            <h1 className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground text-2xl tracking-tight text-gray-900 ">Email : {auth?.user?.email}</h1>
            <h1 className=" flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground text-2xl tracking-tight text-gray-900 ">Contact : {auth?.user?.phone}</h1>
            <h1 className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground text-2xl tracking-tight text-gray-900 ">Address : {auth?.user?.address}</h1>
          </div> */}
       
        </header>
  )
}

export default AdminDashboard
