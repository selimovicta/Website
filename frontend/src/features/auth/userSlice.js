import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signupUser = createAsyncThunk(
    'users/signupUser',
    async ({ email, password, name }, thunkAPI) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/api/accounts/sign-up`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                        name
                    }),
                }
            );
            let data = await response.json();


            if (response.status === 200) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                localStorage.removeItem("userId");
                localStorage.removeItem("user_name");

                localStorage.setItem('token', data.token);
                localStorage.setItem('user', data.user);
                localStorage.setItem('userId', data.user.id);
                localStorage.setItem('user_name', data.user.name);
                return { user: data.user };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {

            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const loginUser = createAsyncThunk(
    'users/login',
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/api/accounts/login/`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );
            let data = await response.json();

            if (response.status === 200) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                localStorage.removeItem("userId");
                localStorage.removeItem("user_name");

                localStorage.setItem('user', data.user.image);
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.user.id);
                localStorage.setItem('user_name', data.user.name);
                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {

            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


export const userSlice = createSlice({
    name: 'users',
    initialState: {
        user: '',
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
        errors: {},
        token: ""
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            return state;
        },
    },
    extraReducers: {
        [signupUser.fulfilled]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isSuccess = true;
            state.user = payload.user;
            state.token = payload.token
        },
        [signupUser.pending]: (state) => {
            state.isFetching = true;
        },
        [signupUser.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
            state.errors = payload.errors
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.user = payload.user;
            state.isFetching = false;
            state.isSuccess = true;
            state.errorMessage = ''
            state.token = payload.token
            return state;
        },
        [loginUser.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.error;

        },
        [loginUser.pending]: (state) => {
            state.isFetching = true;
        },
    },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;