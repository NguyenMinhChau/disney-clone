import { createSlice } from '@reduxjs/toolkit';

const initialStateUser = {
    name: '',
    email: '',
    photo: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        ...initialStateUser,
    },
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        setUserLogout: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    },
});

export const { setUserLoginDetails, setUserLogout } = userSlice.actions;

export const selectUserName = (state) => {
    if (state) {
        return state.user.name;
    }
};
export const selectUserEmail = (state) => {
    if (state) {
        return state.user.email;
    }
};
export const selectUserPhoto = (state) => {
    if (state) {
        return state.user.photo;
    }
};

export default userSlice;
