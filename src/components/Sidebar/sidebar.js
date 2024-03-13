import { Link } from "gatsby-link";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { FaSlidersH   } from "@react-icons/all-files/fa/FaSlidersH";
import { FaSignOutAlt   } from "@react-icons/all-files/fa/FaSignOutAlt";
import { useLocation } from "react-router";
import {  onLogout} from "../../services/auth";




const SideBar = () => {

    React.useEffect(() => {


    },[]);

      return (
        <div className="flex flex-col bg-red-700 w-60 p-5 text-white">
            <div className="flex items-center gap-2 px-1 py-3">
            <StaticImage
                  alt="privacyPic1"
                  className="rounded-t-lg"
                  src="../../images/icon.png"
              /> <span className="text-neutral-100 text-lg"></span>SIM Registration
            </div>

            <div className="py-8 flex-1  flex  flex-col gap-0.5">
                <div>
                    
                    <Link to="/app/admin/"
                    className={ 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'}
                    > 
                        <span><FaSlidersH /></span>Dashboard</Link>
                    </div>
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
            <div className={ 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'}>
                <FaSignOutAlt  />
            <div >
                <button onClick={onLogout} >Logout</button>
            </div>
                
            </div>
            </div>

        </div>

      );
}
 
export default SideBar;
