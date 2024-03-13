import { navigate } from "gatsby";
import secureLocalStorage from "react-secure-storage";
import { API_ROOT } from "../../env/development";


export const handleLogin = async (username, password) => {
    const isBrowser = typeof window !== `undefined`;

    if (!isBrowser) return { success: false };

    let bodyFormData = new FormData();
    bodyFormData.append("username", username);
    bodyFormData.append("password", password);

    let login = await fetch(API_ROOT + "/login", {
        method: "POST",
        body: bodyFormData,
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
      
    if (login.success == true) {
      secureLocalStorage.setItem("simreg", JSON.stringify({
        email: login.data.BOA_EMAIL,
        firstname: login.data.BOA_FIRSTNAME,
        lastname: login.data.BOA_LASTNAME,
        token: login.data.TOKEN

      }));
      return login;
    } else if (login.success == false) {
        secureLocalStorage.removeItem("simreg");
        return login;
    }
    //login logic
}

export const isLoggedin = () => {
  const isBrowser = typeof window !== `undefined`;

  if (isBrowser) {
    var converted = JSON.parse(secureLocalStorage.getItem("simreg"));
   
    if (converted) {
      if ( converted.email && converted.firstname  && converted.lastname  && converted.token) {
        return true;
      }
    }
  }
  return false;
};

export const onLogout = () => {
  secureLocalStorage.removeItem("simreg");
  navigate("/");
};

export const handleResetPassword = async (  password) => {
    const isBrowser = typeof window !== `undefined`;
  
    if (!isBrowser) return { message: "", code: "", success: false };

    var converted = JSON.parse(secureLocalStorage.getItem("simreg"));

    let bodyFormData = new FormData();
    bodyFormData.append("password", password);
    bodyFormData.append("email", converted.email);

    let resetPassword = await fetch(API_ROOT + "/reset-password", {
      method: "POST",
      body: bodyFormData,
      headers: {
        "x-access-token": converted.token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
      
      return resetPassword;
}