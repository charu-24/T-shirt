import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes"
import PrivateRoute from "./auth/helper/PrivateRoutes"
import UserDashboard from "./user/UserDashBoard";
import AdminDashboard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import UpdateCategory from "./admin/UpdateCategory";
import Cart from "./core/Cart";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup"  component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/cart" component={Cart} />
        
        <PrivateRoute path="/user/dashboard" component={UserDashboard}  />
        <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute path="/admin/create/category" component={AddCategory} />
        <AdminRoute path="/admin/categories" component={ManageCategories} />
        <AdminRoute path="/admin/create/product" component={AddProduct} />
        <AdminRoute path="/admin/manage/product" component={ManageProducts} />
        <AdminRoute path="/admin/product/update/:productId" component={UpdateProduct} />
        <AdminRoute path="/admin/create/update/:categorytId" component={UpdateCategory} />

      </Switch>
1/4    </BrowserRouter>
  );
};

export default Routes;