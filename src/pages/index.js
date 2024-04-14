import React, { useState  } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, navigate } from "gatsby-link";
import Seo from "../components/Seo/seo";


const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [displayErrorMessage, setDisplayErrorMessage] = useState("");



  return (
    <>
      <Seo
        title="AI wellness Assistant"
        keywords={[`AI wellness Assistant`, `AI wellness Assistant`]}
      />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css"></link>

      <main>

        <div className="p-10">
          <div className="content-container">

            <StaticImage
              style={{ height: "350px", width: "100%" }}
              alt="privacyPic1"
              className="rounded-t-lg"
              src="../images/bot.png"
            />

            <div>
              <h3 className="index-heading text-center">A.I Assistant That Really Helps</h3>

              <p className="text-white text-center pt-10">F.W.A is the most friendly and fast assistant ever made on the internet</p>
            </div>
         
          </div> 
          <button onClick={() => navigate("/home")} className="bg-blue-500 rounded-xl text-lg	 w-full text-gray-100 p-10 rounded hover:blue-600 transition-colors">Get Started</button>

          
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

export default IndexPage;