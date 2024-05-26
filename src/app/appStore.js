import { configureStore } from "@reduxjs/toolkit";
import crudReducer from '../app/Slice'

export const appStore=configureStore({reducer:crudReducer})