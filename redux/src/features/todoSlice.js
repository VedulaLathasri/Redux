import { createSlice } from "@reduxjs/toolkit";
import {nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        
    }
})