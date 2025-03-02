import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user:{
            name: null,
            email: null
        }
    },
    reducers: {
        getUser: (state, action) => {
            
            // console.log(action.payload);
            console.log(state.user.email)
            console.log(state.user.name)
        },
        setUser: (state, action) => {
            const {name, email} = action.payload
            // console.log("Reached in redux", name, email)
            state.user.name = name;
            state.user.email = email;
            // console.log("Last set", state.user.name, state.user.email)
        }

    }
})

export const {getUser, setUser} = userSlice.actions

export default userSlice.reducer;

