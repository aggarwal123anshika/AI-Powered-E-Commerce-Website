import React, { useCallback, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nav from "./component/Nav";
import { userDataContext } from "./context/UserContext";

function App() {
  // let {userData} = useContext(userDataContext)
  return (
    <>
      {/* {userData && <Nav />} */}
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Registration></Registration>} />
      </Routes>
    </>
  );
}

export default App;
