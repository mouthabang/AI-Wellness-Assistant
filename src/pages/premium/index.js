import React, { useState, useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../../components/Seo/seo";


import { FaMicrophone  } from "@react-icons/all-files/fa/FaMicrophone";

const PremiumPage = () => {
   

    return (
        <>
        <Seo 
            title="Talk to AI"
        />

        <main>
            <div className="p-5">
                        <div className="content-container">
                            <div className="top-content">

                            </div>
                        </div>
                        <div className="">
                            <button className="mic-toggle button-mic" id="mic">
                                <span ><FaMicrophone /></span>
                            </button>

                            <audio className="playback" controls></audio>
                        </div>
            </div>
        </main>


         </>
    )
}

export default PremiumPage;