// import Header from './component/Header';
import "./App.css";
// import { Outlet } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { Outlet, Route, Routes } from "react-router-dom";
// import Layout from './component/Layout';
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Products";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./component/Header";
import Footer from "./component/Footer";
// import { Helmet } from "react-helmet";
import Dashboard from "./pages/Auth/Dashboard";
import PrivateRoute from "./component/Routes/Private";
import Forgot from "./pages/Forgot";
import ResetPasswords from "./pages/ResetPasswords";
import AdminRoute from "./component/Routes/AdminPrivate";
import AdminDashboard from "./pages/Admin/AdminDashboard";
// import orders from "./pages/Auth/Orders";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProducts from "./pages/Admin/CreateProducts";
import Users from "./pages/Admin/Users";
import Orders from "./pages/Auth/Orders";
// import Product from "./pages/Admin/AdminProduct";
// import Products from "./pages/Auth/Products";
import Profile from "./pages/Auth/Profile";
import AdminOrder from "./pages/Admin/AdminOrder";
import UpdateProducts from "./pages/Admin/UpdateProducts";
import ProductsFrom from "./component/form/ProductsFrom";
import Search from "./pages/Search";
import ProductsDetails from "./pages/ProductsDetails";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import AddressForm from "./pages/AddressForm";
import { IoLogoWhatsapp } from "react-icons/io5";
import Layout from "./component/Layout";
import Account from "./pages/Account";
// import Payment from "./pages/Payment";
// import Layout from "./component/dash-view/Layout";
// import Products from "./pages/Products";
// import Layout from "./component/Adminview/Layout";
// import AdminOrder from "./pages/Admin/AdminOrder";
// import AdminProduct from "./pages/Admin/AdminProduct"
// import AdminFeatures from "./pages/Admin/AdminFeatures";
// import Head from "./pages/Auth/head"
// import Products from "./pages/Products";
// import Profile from "./component/admin-view/Auth/Profile";
// import Orders from "./component/admin-view/Auth/Orders";
// import Products from "./component/admin-view/Auth/Products";
// import AdminLayout from "./component/admin-view/Layout";
// import { useState } from "react";

function App({ title, description, keywords, author}) {
  //   const { isLoading } = useState(
  //     (state) => state.auth
  //   );
  //   if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  // console.log(isLoading);
  // "pt-16 bg-slate-100 min-h-[calc(100vh)]"
  // {Children, title, description, keywords, author }
  return (
    <>
      <Header />
      {/* <main className="pt-16 w-[800] overflow-x-hidden bg-white h-[600px]"> */}
      <main className="overflow-x-hidden bg-white min-h-[calc(100vh)]">
      {/* <Layout/> */}
      {/* <meta charSet="utf-8" />
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords} />
      {/* <meta name="author" content="John Doe" /> */}
      {/* <title>{title}</title> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:slug" element={<ProductsDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shipping" element={<AddressForm />} />

          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/order" element={<Order />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category/:slug" element={<CategoryProducts />} />
          <Route path="/search" element={<Search />} />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/account" element={<Account />} />
          {/* <Route path="/forgot" element={<Forgot />} /> */}
          <Route
            path="/reset_password/:id/:token"
            element={<ResetPasswords />}
          />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
            <Route path="user/profile" element={<Profile />} />
            <Route path="user/orders" element={<Orders/>} />
            {/* <Route path="user/products" element={<Products/>} /> */}
            <Route />
            <Route path="/dashboard" element={<AdminRoute />}>
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="admin/category" element={<CreateCategory />} />
              <Route path="admin/product" element={<CreateProducts />} />
              <Route path="admin/addnewproducts" element={<ProductsFrom />} />
              <Route path="admin/product/:slug" element={<UpdateProducts />} />
              <Route path="admin/orders" element={<AdminOrder />} />
              {/* <Route
                path="admin/all-products"
                element={<Products />}
              /> */}
              <Route path="admin/users" element={<Users />} />
              {/* <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProduct />} />
          <Route path="orders" element={<AdminOrder />} />
          <Route path="features" element={<AdminFeatures />} /> */}
            </Route>
          </Route>
        </Routes>
        <Toaster />
      </main>
      <Footer />

      {/* <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
    {Children}
        <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

    </main> */}
    </>
  );
}

export default App;
