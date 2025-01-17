import React from 'react'
import { counterSlice } from '../feature/counter/counterSlice';
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})