import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './authContext'
import axios from 'axios'

export const userDataContext = createContext()
function UserContext({children}) {
    let [userData, setUserData] = useState("")
    let {serverUrl} = useContext(authDataContext)
     const getCurrentUser = async () => {
        try {
            let result = await axios.post(
                serverUrl + "/api/user/getcurrentuser",
                {},
                { withCredentials: true }
            );
            setUserData(result.data)
            // console.log(result.data)
        } catch (error) {
            if (error.response?.status !== 401) {
                console.log("Get Current User Error:", error.response?.data);
            }
            // setUserData(null);
            // console.log(error);
            //  console.log("Status:", error.response?.status);
            //  console.log("Backend Error:", error.response?.data);
        }
     }
     useEffect(() => {
        getCurrentUser()
     },[])

    let value = {
        userData, setUserData, getCurrentUser
    }
   
    
  return (
    <div>
        <userDataContext.Provider value={value}>
          {children}
        </userDataContext.Provider>
    </div>
  )
}

export default UserContext