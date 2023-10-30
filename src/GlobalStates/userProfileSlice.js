import { createSlice } from "@reduxjs/toolkit";
import userIcon from "../assets/userIcon.png"

const userProfileSlice=createSlice({

    name:'userProfile',
    initialState:{

        userInfo:{

        name:"User",
        novelWorks:"none",
        profilePic:{userIcon}

        }
    },

    // reducers are function that can be applied on the state object.

    reducers:{
        setUser:(state,action)=>{
            state.userInfo=action.payload
        },

        logout:(state,action)=>{
            state.userInfo={};
        }
    }

    })

    export const {setUser, logout} = userProfileSlice.action

    export default userProfileSlice.reducer;