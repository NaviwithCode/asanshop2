import { useState, useContext, createContext } from "react";

const SearchContext = createContext();

const SearchProvider = ({children})=>{
    const [auth,setAuth] = useState({
       keyword:"",
       result:[]
    })
    // defaults axios
    // axios.defaults.headers.common['Authorization']= auth?.token
    // useEffect(()=>{
    //     const data = localStorage.getItem('auth')
    //     if(data){
    //         const parsedata = JSON.parse(data)
    //         setAuth({
    //             ...auth,
    //             user:parsedata.user,
    //             token:parsedata.token
    //         })
    //     }
    // },[])
    return(
        <SearchContext.Provider value={[auth,setAuth]}>
            {children}
        </SearchContext.Provider>
    )
}
// custom hook
const useSearch = () => useContext(SearchContext)
export{useSearch, SearchProvider}