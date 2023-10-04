import {createSlice} from '@reduxjs/toolkit'


interface UserState { 
    userName:String,
    userLastname:String,
    status: 'pending'|'fulfilled'|'rejected'|null,
    error:any,
}

const InitialState : UserState = {
    userName:'',
    userLastname:'',
    status:null,
    error:null
}


const UserSlice = createSlice({
    name:'StatusSlice',
    initialState:InitialState,
    reducers:{
        handleName:(state,action)=>{
            state.userName = action.payload
        },
        handleLastName:(state,action)=>{
            state.userLastname = action.payload
        }
    }

})

export default UserSlice.reducer

export const {handleName,handleLastName} = UserSlice.actions