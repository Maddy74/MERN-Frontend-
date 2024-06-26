import {server} from "../reducers/store"
import axios from "axios";


export const login = (email, password) => async(dispatch)=>{
    try{
        dispatch({type: "loginRequest"});

        const response= await axios.post(`${server}/login`,{email, password},{
            headers:{
            "Content-Type": "application/json"    
            }, 
            withCredentials: true,
        });
        const { user} = response.data; // Ensure the response structure is correct
    dispatch({
      type: "user/login",
      payload: { user, message: `Welcome back, ${user.firstname}` },
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Login failed";
    dispatch({
      type: "user/fetchError",
      payload: errorMessage,
    });
  }
}

// loaduser
export const loadUser = () => async(dispatch)=>{
    try{
        dispatch({type: "user/loadRequest"});

        const response= await axios.get(`${server}/me`,{ 
            withCredentials: true,
        });
        const { user} = response.data; // Ensure the response structure is correct
    dispatch({
      type: "user/loaduserSuccess",
      payload: { user, message: `Welcome back, ${user.firstname}` },
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to load user';
    dispatch({
      type: "user/loaduserFail",
      payload: errorMessage,
    });    
  }
}

// log out
export const logout = () => async(dispatch)=>{
  try{
      dispatch({type: "user/logoutRequest"});

      const {data}= await axios.get(`${server}/logout`,{ 
          withCredentials: true,
      });
      // const { user} = response.data; // Ensure the response structure is correct
      console.log(data);
  dispatch({
    type: "user/logoutSuccess",
    payload: data.message,
  });
} catch (error) {
  dispatch({
    type: "user/logoutFail",
    payload: error.response.data.message,
  });    
}
}

// regiser
export const register = (formData) => async(dispatch)=>{
  try{
      dispatch({type: "user/registerRequest"});

      const data= await axios.post(`${server}/register`,formData,{
          headers:{
          "Content-Type": "application/json"    //multipart/form-data
          }, 
          withCredentials: true,
      });
  dispatch({
    type: "user/registerSuccess",
    payload: data,
  });
} catch (error) {
  dispatch({
    type: "user/registerFail",
    payload: error.response.data.message,
  });
}
}