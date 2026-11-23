import React, { useContext } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Product from "./pages/Product";
import Nav from "./component/Nav";
import { userDataContext } from "./context/UserContext";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";


function App() {
  let location = useLocation()
  let {userData} = useContext(userDataContext)
  return (
    <>
      {userData && <Nav />}
      <Routes>
        
        <Route path="/login"
        element={userData ? (<Navigate to={location.state?.from ||
          "/"}/>)
          : (<Login />)
          }/>

        <Route path="/signup"
        element={userData ? (<Navigate to={location.state?.from ||
          "/"}/>)
          : (<Registration />)
          } />

        <Route path="/" 
        element={userData ? <Home/> : <Navigate to="/login" 
        state={{from : location.pathname}} />}/>

        <Route path="/about" element={userData ? <About/> : <Navigate to="/login" 
        state={{from : location.pathname}} />} />

        <Route path="/collection" element={userData ? <Collections/> : <Navigate to="/login" 
        state={{from : location.pathname}} />} />

        <Route path="/product" element={userData ? <Product/> : <Navigate to="/login" 
        state={{from : location.pathname}} />} />

        <Route path="/Contact" element={userData ? <Contact/> : <Navigate to="/login" 
        state={{from : location.pathname}} />} />

        <Route path="/productdetail/:productId" element={userData ? <ProductDetail/> : <Navigate to="/login" 
        state={{from : location.pathname}} />} />
        
        

      </Routes>
    </>
  );
}

export default App;
