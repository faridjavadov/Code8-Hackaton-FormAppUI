import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { useSelector } from "react-redux";
import { StateType } from "../store/Store";
import { appeals } from "../../data/Appeals";

interface AppealSlice {
    data: any,
    status: 'pending' | 'fulfilled' | 'rejected' | null,
    error: any,
}

const InitialState: AppealSlice = {
    data: appeals,
    status: null,
    error: null
}







export const getFavoriteData = createAsyncThunk('get/favorite', async (email: any) => {
    console.log(email);

    const response = await axios.post('http://172.16.0.76:8080/api/product/getfavorite', { email: email });
    return response.data
})
export const addFavorite = createAsyncThunk('remove/favorite', async ({ email, item }: any) => {

    const response = await axios.put('http://172.16.0.76:8080/api/product/addfavorite', { email: email, item: item });
    return response.data
})
export const removeFavorite = createAsyncThunk('remove/favorite', async ({ email, item }: any) => {

    const response = await axios.put('http://172.16.0.76:8080/api/product/removefavorite', { email: email, item: item });
    return response.data
})



const AppealSlice = createSlice({
    name: 'ShoesSlice',
    initialState: InitialState,
    reducers: {
        handleAppeal: (state, action) => {
            state.data.push(action.payload)
            console.log(state.data);
            
        }
    },
    extraReducers: (builder) => {

        builder.addCase(getFavoriteData.pending, (state) => {
            state.status = 'pending'
        }).addCase(getFavoriteData.fulfilled, (state, action) => {
            state.status = 'fulfilled'
        }).addCase(getFavoriteData.rejected, (state) => {
            state.status = 'rejected'
        })

    }
})
export default AppealSlice.reducer

export const {handleAppeal } = AppealSlice.actions