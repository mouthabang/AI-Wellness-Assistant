import React, { useState, useEffect } from "react";


export default function ErrorMessages({
    displayErrorMessage,
    setDisplayErrorMessage,
  }) {
    const [seconds, setSeconds] = useState(10); // Initial countdown time in seconds
    let interval;

  useEffect(() => {
    if (seconds > 0 && displayErrorMessage) {

      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      setSeconds(10);
      setDisplayErrorMessage("");
    }
    return () => {
      clearInterval(interval);
    };
  }, [displayErrorMessage, seconds]);


  return (
    <div>
      
      {displayErrorMessage !== "" && (
           <div id="invalidForm"  className="bg-red-500 px-3 py-2 rounded text-gray-100 mb-3">
            <p>{displayErrorMessage}</p>
            </div>
      )}
      </div>
    );
  }

  