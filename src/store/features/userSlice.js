import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        getUser: () => {}
    }
})

export const {getUser} = userSlice.actions

export default userSlice.reducer;

