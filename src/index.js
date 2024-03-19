import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Admin from './admin/Admin'
import ProductList from './scenes/productList/ProductList'
import ProductDetail from './scenes/productDetail/ProductDetail'
import Home from './scenes/home/Home'

import Checkout from './scenes/checkout/Checkout'
import Confirmation from './scenes/checkout/Confirmation';

// import Footer from './scenes/global/Footer'
// import NavBar from './scenes/global/NavBar'
// import components from './components/Product'
// import AppBar from './App/AppBar'
// import Copyright from './scenes/global/Copyright'
// import Banner from './scenes/global/Banner'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CartMenu from './scenes/global/CartMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
     {
      path: '/',
      element: <App />,
      children:[
        {
          index: true,
          element: <Home />
        },
        {
          path: 'product',
          element: <ProductList />
        },
        {
          path: 'product/:id',
          element: <ProductDetail />
        },
        {
          path: 'checkout',
          element: <Checkout /> 
        },
        {
          path: 'checkout/success',
          element: <Confirmation />
        },
        {
          path: 'cart',
          element: <CartMenu />
        },

      //    // {
      //   //   path: 'footer',
      //   //   element: <Footer />
      //   // },
      //   // {
      //   //   path: 'navbar',
      //   //   element:<NavBar />
      //   // },
      //   // {
      //   //   path: 'appbar',
      //   //   element: <AppBar />
      //   // },
      //   // {
      //   //   path: 'copyright',
      //   //   element: <Copyright />
      //   // }

      ]
     },
     {
      path:'/admin',
      element: <Admin />
     }
    ]);
root.render(
  <React.StrictMode>
     <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>
)

