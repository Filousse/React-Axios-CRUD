import axios from "axios";

export default axios.create({
    baseURL: "https://react-auth-firebase-eeffc-default-rtdb.europe-west1.firebasedatabase.app",
      headers: {
    "Content-type": "application/json"
  }

    



  
})