import React, { useState, useEffect, useRef } from "react";
import {  navigate } from "gatsby-link";
import Seo from "../components/Seo/seo";
import dataUsageJsonData from '../data/datausage.json';

import { StaticImage } from "gatsby-plugin-image";

const PremiumPage = () => {
   
    // Returned Excel JSON datas keep.
    const [dataUsage, setDataUsage] = useState([]);

    useEffect(() => {
        console.log("FetchingData");
        setDataUsage(dataUsageJsonData);

        console.log(dataUsage);
    }, []);


    return (
        <>
            <Seo
                title="AI wellness Assistant"
                keywords={[`AI wellness Assistant`, `AI wellness Assistant`]}
            />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css"></link>

            <main>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                </link>
                <div className="p-5">
                    <h2 className="text-center mb-5 name-heading">Hi Masekate Mokotjo 👋</h2>

                    <h3 className="text-white pb-5 pt-5">How can we help you?</h3>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-x-3 ">
                        <div onClick={() => navigate("/voice-chat")} className="text-center p-10 text-white border-2 border-blue-500/100 ">
                            <div>
                                <span className="material-icons ">mic</span>
                            </div>
                            <div>
                                <span>Talk to F.W.A</span>
                            </div>

                        </div>
                        <div onClick={() => navigate("/text-chat")} className="text-center p-10 text-white border-2 border-blue-500/100">
                            <div>
                                <span className="material-icons">chat</span>
                            </div>
                            <div>
                                <span>Chat to F.W.A</span>
                            </div>

                        </div>
                    </div>

                    <h3 className="text-white pb-5 pt-5">Data Usage:</h3>
                    <StaticImage
                        alt="privacyPic1"
                        className="rounded-t-lg"
                        src="../images/dataUsage.png"
                        />
                    <h3 className="text-white pb-5 pt-5">M-Pesa Usage:</h3>
                    <StaticImage
                        alt="privacyPic1"
                        className="rounded-t-lg"
                        src="../images/MpesaUsage.png"
                        />
                    <h3 className="text-white pb-5 pt-5">Call Records Usage:</h3>

                    <h4>Your Monthly data to date:</h4>
                    <StaticImage
                        alt="privacyPic1"
                        className="rounded-t-lg"
                        src="../images/callUsage.png"
                        />

                </div>
            </main>
        </>
    )
}

export default PremiumPage;