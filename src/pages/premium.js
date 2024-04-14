import React, { useState, useEffect, useRef } from "react";
import { Link, navigate } from "gatsby-link";
import Seo from "../components/Seo/seo";
import dataUsageJsonData from '../data/datausage.json';

import { Chart, Line } from 'react-chartjs-2';
import { StaticImage } from "gatsby-plugin-image";

const PremiumPage = () => {
   
    // Returned Excel JSON datas keep.
    const [dataUsage, setDataUsage] = useState([]);

    useEffect(() => {
        // Fetch Excel file.
        console.log("FetchingData");
        setDataUsage(dataUsageJsonData);
        {/*
            fetch("/DataUsage.xlsx")
                // Convert to ArrayBuffer.
                .then((res) =>  res.arrayBuffer())
                .then((data) => {
                    const wb = XLSX.read(data, { type: "buffer" });
                    const wsname = wb.SheetNames[0];

                let value =  wb.SheetNames.forEach(function (sheetName) {
                        var XL_row_object = XLSX.utils.sheet_to_row_object_array(wb.Sheets[
                            sheetName]);
                        var json_object = JSON.stringify(XL_row_object);
                        setData(json_object);
                        return json_object; 
                    });
                });
 */}
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
                        <div className="text-center p-10 text-white border-2 border-blue-500/100">
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
            { /* 
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <form  onSubmit={handleSubmit}>

        <h1 className="mb-4 text-center text-3xl ">Hi Masekate Mokotjo</h1>
        <div className="bg-white w-96 p-6 rounded shadow-sm">
          <div className="flex item-center justify-center mb-4">
              <StaticImage
              style={{ height: "80px", width: "80px" }}
                  alt="privacyPic1"
                  className="rounded-t-lg"
                  src="../images/logo.webp"
              />
          </div>
          <ErrorMessages
                    displayErrorMessage={displayErrorMessage}
                    setDisplayErrorMessage={setDisplayErrorMessage} />
         
          <label className="text-gray-700">Email:
          <input 
             onChange={(e) => setEmail(e.target.value)}

          className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username@vodacom.co.ls"
          type="email"/>
          </label>

        
          <label className="text-gray-900">Password:
          <input 
             onChange={(e) => setPassword(e.target.value)}

          className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""
                 type="password"/>
          </label>

          <button type="submit" className="bg-red-500 w-full text-gray-100 py-2 rounded hover:blue-600 transition-colors"  >Login</button>

        </div>
      </form>

    </main>
  */}
        </>
    )
}

export default PremiumPage;