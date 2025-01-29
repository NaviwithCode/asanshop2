import { FaUserCircle } from "react-icons/fa";
const DashboardBox =(props)=>{
return(
    <div className='w-72 p-5 rounded-md overflow-hidden h-44 bg-[#ccc]' style={{
        // backgroundimage: `linear-gradient(to right, red , yellow);`
        // backgroundimage: `linear-gradient(to right, var(--tw-gradient-stops[0],tw-gradient-stops1))`
        backgroundImage:`linear-gradient(to right,${props.color?.[0]},${props.color?.[1]})`
    }}>
        <div className="flex">
            <div className="mb-0">
                <h4 className="text-white text-xl font-bold">Total Users</h4>
                <span className="text-white leading-3 text-2xl font-semibold">277</span>
            </div>
            {
                props.icon ? 
            <div className="ml-auto flex items-center justify-center w-8 h-8 rounded-sm" style={{ backgroundImage:'linear-gradient(to right, rgba(0,0,0,0.0),rgba(0,0,0,0.2))'}}>
                {props.icon?props.icon:""}
{/* <FaUserCircle className="text-xl opacity-[0.3] text-white"/> */}
            </div>:""
            }
        </div>
    </div>
)
}
export default DashboardBox