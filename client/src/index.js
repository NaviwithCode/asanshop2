import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import "antd/dist/reset.css";
import { SearchProvider } from "./context/search";
import { CartProvider } from "./context/cart";
// import About from './pages/About';
// import Home from './pages/Home';
// import Product from './pages/Products';
// import Contact from './pages/Contact';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/'element ={<App/>}>
//        <Route index element = {<Home/>}/>
//        <Route path='product'element ={<Product/>}/>
//        <Route path='about'element ={<About/>}/>
//        <Route path='contact'element ={<Contact/>}/>
//        <Route path='login'element ={<Login/>}/>
//        <Route path='signup'element ={<Signup/>}/>
//     </Route>
//   )
// )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  </AuthProvider>
  // {/* <RouterProvider router={router}/> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
