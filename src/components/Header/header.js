import * as React from "react";

import secureLocalStorage from "react-secure-storage";

const Header = () => {

      const converted = JSON.parse(secureLocalStorage.getItem("simreg"));
      return (
      
             <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
                <div className="relative">
                 </div>
                <div className="flex items-center gap-2 mr-2">
                      Welcome: {converted?.firstname} {converted?.lastname}
                </div>
              </div>
    
      );
}
 
export default Header;
