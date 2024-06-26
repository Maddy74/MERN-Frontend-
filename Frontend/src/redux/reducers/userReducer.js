import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  message: null,
  error: null,
};

// Define actions for user-related events
const userLogin = createAction('user/login');
const userLogout = createAction('user/logout');
const userFetchStart = createAction('user/fetchStart');
const userFetchError = createAction('user/fetchError');
// loaduser
const loaduserRequest = createAction('user/loadRequest');
const loaduserSuccess = createAction('user/loadSuccess');
const loaduserFail = createAction('user/loadFail');

// log out
const logoutRequest = createAction('user/logoutRequest');
const logoutSuccess = createAction('user/logoutSuccess');
const logoutFail = createAction('user/logoutFail');

// register
const registerRequest = createAction('user/registerRequest');
const registerSuccess = createAction('user/registerSuccess');
const registerFail = createAction('user/registerFail');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userLogin, (state, action) => {
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    })
    .addCase(userLogout, (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    })
    .addCase(userFetchStart, (state) => {
      state.loading = true;
    })
    .addCase(userFetchError, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
// loaduser
    .addCase(loaduserRequest, (state) => {
      state.loading = true;
    })
    .addCase(loaduserSuccess, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    })
    .addCase(loaduserFail, (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    })
// log out

.addCase(logoutRequest, (state) => {
  state.loading = true;
})
.addCase(logoutSuccess, (state, action) => {
  state.user = null;
  state.isAuthenticated = false;
  state.loading = false;
  state.error = null;
  state.message = action.payload;
})
.addCase(logoutFail, (state) => {
  state.isAuthenticated = true;
  state.loading = false;
  state.error = null;
})

// register
.addCase(registerRequest, (state) => {
  state.loading = true;
})
.addCase(registerSuccess, (state, action) => {
  state.user = action.payload.user;
  state.isAuthenticated = true;
  state.loading = false;
  state.message = action.payload.message;
})
.addCase(registerFail, (state, action) => {
  state.isAuthenticated = false;
  state.loading = false;
  state.error = action.payload;
})


});

export { userReducer, userLogin, userLogout, userFetchStart, userFetchError };
