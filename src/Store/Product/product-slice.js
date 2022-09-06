import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: "product",
    initialState:{
        products:[]
    },
    reducers:{
        fetchProduct(state,action){
            console.log("action, product", action.payload)
            state.products = action.payload
        }
    }
})

export const productActions = productSlice.actions;
export default productSlice.reducer;