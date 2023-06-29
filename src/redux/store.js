import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";
import roleReducer from "./rolesSlice";

export default configureStore({
    reducer:{
        tasks: taskReducer,
        roles: roleReducer
    }
});