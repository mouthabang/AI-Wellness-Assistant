import React, { useState, useEffect, useRef } from "react";
import { navigate } from "gatsby-link";
import Seo from "../components/Seo/seo";
import recOne from "../data/recommendations/british/one.mp3";
import recTwo from "../data/recommendations/british/two.mp3";

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [displayErrorMessage, setDisplayErrorMessage] = useState("");

  const [isvoicePlay, setIsVoicePlay] = useState(false);
  const audioRef = useRef();

  const [audioSrc, setAudioSrc] = useState();

  const recomendationData = [
    {
      text: "We notice you buy electricity on the 20th. Did you know, you can double your units buy purchasing on the 1st week of every month.",
      imageSRC: "https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg",
      audioSRC: recOne,
      desc: "recOne",
      title: "LEC"
    },
    {
      text: "There are 10 days left before your school fee recuring bill is due on the 20th.",
      imageSRC: "https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg",
      audioSRC: recTwo,
      desc: "recTwo",
      title: "Pay bill"
    }
  ]

  const subscriptionData = [
    {
      text: "Your M-Pate Sheleng subscription is due to be paid in 3 days",
      imageSRC: "https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg",
      audioSRC: recTwo,
      desc: "recTwo",
      title: "M-Pate Sheleng"
    }
  ]
  const playAndPause = (voice) => {
    setIsVoicePlay(!isvoicePlay);
    console.log(voice);

    if (isvoicePlay) {
      //   console.log(audioSrc);
      setAudioSrc(recOne);
      if (voice == "recOne") {
        setAudioSrc(recOne);
        const audio = new Audio(recOne);
        audio.play()
      }

      if (voice == "recTwo") {
        setAudioSrc(recTwo);
        const audio = new Audio(recTwo);
        audio.play()
      }

    } else {
      //    audioRef.current.pause();
    }



  }

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

          <div className=" h-200 p-6 rounded unlockBackground">
            <div className="grid grid-cols-2 md:grid-cols-2">
              <div>
                <h3 className="name-heading pb-5 text-white">Premium Plan</h3>
                <p className="pb-10 text-white"> Unlock your assistant & get all Premium Features</p>
                <button onClick={() => navigate("/premium")} className="bg-blue-500 rounded-xl w-full text-sm text-gray-100 p-5 rounded hover:blue-600 transition-colors">Unlock F.A.W</button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="pb-5 pt-5  font-bold text-gray-200 ">Recommendations</h3>
            <main className="grid">
              <div>
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                  {recomendationData.map((item, index) => (

                    <div key={index} id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
                      <div className="flex items-center">
                        <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <h3 className="text-lg font-medium">{item.title}</h3>
                      </div>
                      <div className="mt-2 mb-4 text-sm">
                        {item.text}
                      </div>
                      <div  >
                      <svg onClick={() => playAndPause(item.desc)}  xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                          </svg>
                        <button className="text-white opacity-1 ">
                        </button>
                      </div>
                    </div>

                  ))}
                </section>
              </div>
            </main>
          </div>

          <div>
            <h3 className="text-white pb-5 pt-5">Vodacom Subscription Reminders:</h3>


            <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
              <div className="flex items-center">
                <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <h3 className="text-lg font-medium">M-Pate Sheleng</h3>
              </div>
              <div className="mt-2 mb-4 text-sm">
                Your <b>M-Pate Sheleng</b> subscription is due to be paid in 3 days
              </div>
            </div>

            <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
              <div className="flex items-center">
                <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <h3 className="text-lg font-medium">Pay bill</h3>
              </div>
              <div className="mt-2 mb-4 text-sm">
              </div>
            </div>
          </div>
          {/* 
          <h4>Your Monthly data to date:</h4>

          <div id="bar-example-18">
            <table className="charts-css bar show-labels">
              <caption> Bar Example #18 </caption>
              <tbody>
                <tr><th scope="row"> Food </th>
                  <td style={{ '--size': 'calc( 20 / 100 )' }}> $20K </td>
                </tr>
                <tr><th scope="row"> Alcohol </th>
                  <td style={{ '--size': 'calc( 40 / 100 )' }}> $40K </td>
                </tr>
                <tr><th scope="row"> Grocery </th>
                  <td style={{ '--size': 'calc( 60 / 100 )' }}> $60K </td>
                </tr>
              </tbody>
            </table>
          </div>

*/}
        </div>
      </main>
      { /* 
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <form  onSubmit={handleSubmit}>

        <h1 className="mb-4 text-center text-3xl ">Hi Masekate Phahla</h1>
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

export default IndexPage;