// import React from 'react'
// import { AlignJustify, LogOut } from "lucide-react";
// import { Button } from "@headlessui/react";
// import { useAuth } from '../../context/auth';
// // import { useAuth } from "../../context/";

// const index = ({setOpen}) => {
//     const [auth,setAuth] = useAuth()
// const handleLogout = () => {
//     setAuth({
//       ...auth,
//       user: null,
//       token: "",
//     });
//     localStorage.removeItem("auth");
//   }
//     return (
//         <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
//           <button onClick={() => setOpen(true)} className="lg:hidden sm:block">
//             <AlignJustify />
//             <span className="sr-only">Toggle Menu</span>
//           </button>
//           <div className="flex flex-1 justify-end">
//             <Button
//               onClick={handleLogout}
//               className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
//             >
//               <LogOut />
//               Logout
//             </Button>
//           </div>
//         </header>
//       );
//     }
// export default index
