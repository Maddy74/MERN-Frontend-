import axios from 'axios';


export const forgetPassword = email => async dispatch => {
  try{
    dispatch({type: 'changePasswordRequest'});

    const {data} = await axios.post(`${server}/forgetpassword`,
      {
       email
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },

        withCredentials: true,
      }
    );

    dispatch({type: 'forgetPasswordSuccess', payload: data.message});
  } catch (error){
    dispatch({
      type: 'forgetPasswordFail',
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (token, password) => async dispatch => {
    try{
      dispatch({type: 'resetPasswordRequest'});
  
      const {data} = await axios.post(`${server}/resetpassword/${token}`,
        {
         email
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
  
          withCredentials: true,
        }
      );
  
      dispatch({type: 'resetPasswordSuccess', payload: data.message});
    } catch (error){
      dispatch({
        type: 'resetPasswordFail',
        payload: error.response.data.message,
      });
    }
  };