import  { useEffect } from "react";
import { navigate } from "gatsby";
import { isLoggedin } from "../../services/auth";
import PropTypes from "prop-types";


const PrivateRouteLoggedIn = ({ component: Component, location, ...rest }) => {
   
    useEffect(() => {
        checkLoginStatus();
      });
    
      const checkLoginStatus = () => {
        if (!isLoggedin() && location.pathname !== `/`) {
          navigate("/");
        }
      }
    
    };
    
    
    export default PrivateRouteLoggedIn;