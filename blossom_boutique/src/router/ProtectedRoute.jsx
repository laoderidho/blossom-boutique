import React,{useState, useEffect} from 'react'
import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
    
     const [username, setUsername] = useState(
       sessionStorage.getItem("username")
     );
     const location = useLocation();

     useEffect(() => {
       setUsername(sessionStorage.getItem("username"));
     }, [sessionStorage]);

     if (username === "" || username === null || username === undefined) {
       return (
         <Navigate to="/login" state={{ from: location.pathname }} replace />
       );
     } else {
       return <Outlet />;
     }
}

export default ProtectedRoute