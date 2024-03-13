
import * as React from "react";
import PropTypes from "prop-types";

import { Router } from "@reach/router"
import PrivateRouteLoggedIn from "../PrivateRoute/PrivateRouteLoggedIn";

const Layout = ({ children, isLoading}) => {

    return (
        < >

        <Router basepath="/app">
                <PrivateRouteLoggedIn path="/admin" ></PrivateRouteLoggedIn>
        </Router>


        {isLoading ? <img id="cover-loading" alt=""/> : null}
                
                {children}
        </>
        );
    
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;