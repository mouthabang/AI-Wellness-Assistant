import React, { useState } from "react";
import { isLoggedin } from "../../services/auth";
import { format } from 'date-fns'
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { API_ROOT } from "../../../env/development";
import secureLocalStorage from "react-secure-storage";

const DashboardContent = () => {
  var [records, setRecords] = useState([]);
  var [resetValues, setResetValues] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  React.useEffect(() => {
    setIsLoading(true);
    const fetchCustomerRecords = async () => {
      var converted = JSON.parse(secureLocalStorage.getItem("simreg"));
      setIsLoading(true);
      const getCustomerRecords = await fetch(API_ROOT + "/get_customers", {
        method: "GET",
        headers: {
          "x-access-token": converted.token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        });

      console.log(getCustomerRecords);
      if (getCustomerRecords.success == true)
      {
        setRecords(getCustomerRecords.data);
      }else if(getCustomerRecords.success == false)
      {
        setRecords([]);
      }        
      setResetValues(true);
      setIsLoading(false); 
    };

    if (isLoggedin()) {
      fetchCustomerRecords();
    }
  }, [resetValues]);

  const filterByToken = (event) => {
    const query = event.target.value;

    var updatedList = [...records];
    if (query.length <= 0) {
      setResetValues((current) => !current);
    }
    var updatedList = records.filter((item) => {
      return item.SP_REFERENCE_TOKEN.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setRecords(updatedList);
  };

  return (
    <>
     <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 mb-5">
                <div className="relative">
                  <FaSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"/>
                  <input type="text"  placeholder="Search Token..." onChange={filterByToken}  className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4"/>
                </div>
                <div className="flex items-center gap-2 mr-2">

                </div>
        </div> 
        
      <div className="bg-white px-4 pb-4 rounded-sm border border-gray-200 flex-1">
        <div className="mt-3">
          <table className="w-full text-gray-700">
            <thead>
              <tr>
                <td>Date</td>
                <td>Token</td>
                <td>Customer Fullname</td>
                <td>Customer NID</td>
                <td>ICCID</td>
                <td>Customer MSISDN</td>
                <td>Agent Fullname</td>
                <td>Agent MSISDN</td>
              </tr>
            </thead>
            <tbody>
              {records.map( record => (
                <tr key={record.SP_REFERENCE_TOKEN}>
                  <td>{format(new Date(record.SP_CREATED_ON), 'dd MMM yyyy')}</td>
                  <td>{record.SP_REFERENCE_TOKEN}</td>
                  <td>{record.SP_FIRST_NAME} {record?.SP_LAST_NAME}</td>
                  <td>{record.SP_NATIONAL_ID } </td>
                  <td>{record.SP_ICCID} </td>
                  <td>{record.SP_MSISDN} </td>
                  <td>{record.RA_FIRST_NAME} {record.RA_LAST_NAME} </td>
                  <td>{record.RA_MSISDN} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 mb-5">
       
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
