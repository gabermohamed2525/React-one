import Layout from "./Layout";
import { createHashRouter, RouterProvider } from "react-router-dom";import Home from "./pages/Home";
import About from "./pages/About";
import Bolg from "./pages/Bolg";
import Tournament from "./pages/Tournament";
import Contact from "./pages/Contact";
import LogIn from "./Components/LogIn";
import Register from "./Components/Register";
import Prodcuts from "./pages/Prodcuts";
import ProdcutsCategory from "./pages/ProdcutsCategory";
import {ToastContainer} from 'react-toastify'
import useAuth from "./zustand/authSlice";
import { useEffect } from "react";
import UserProfile from "./pages/UserProfile";
import WhisList from "./pages/WhisList";
import CartBage from "./pages/CartBage";
import ProtectedRoute from "./Components/ProtectedRoute";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";


export default function App() {
  const restoreUserSession = useAuth(s=>s.restoreUserSession)
  useEffect(()=>{
      restoreUserSession()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const routing = createHashRouter([
    {
      path:'/',
      element : <Layout /> ,
      children:[
        {index:true , element: <Home />},
        {path:'/log-in' , element: <LogIn />},
        {path:'/log-in/register' , element: <Register />},
        {path:'about' , element :<About />},
        {path:'blog' , element :<Bolg />},
        {path:'prodcuts' , element :<Prodcuts />},
        {path:'prodcuts/:category' , element :<ProdcutsCategory />},
        {path:'tournament' , element :<Tournament />},
        {path:'contact' , element :<Contact />},
        // {path:'checkout' , element :<Checkout />},
        // {path:'/orders' , element :<Orders />},
        {path:'profile' , element :  
        <ProtectedRoute>
          <UserProfile />
        </ProtectedRoute>
          },
        {path:'wishlist' , element :
          <ProtectedRoute>
          <WhisList />
        </ProtectedRoute>
        },
        {path:'checkout' , element :
          <ProtectedRoute>
          <Checkout />
        </ProtectedRoute>
        },
        {path:'orders' , element :
          <ProtectedRoute>
          <Orders />
        </ProtectedRoute>
        },
        {path:'cart' , element :
          
          <CartBage/>
        
        },
      ]

    }
  ])
  return <div>
    <RouterProvider  router={routing}/>
      < ToastContainer />
  </div>
}
