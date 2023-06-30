import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";
import roleReducer from "./rolesSlice";
import userReducer from "./usersSlice";

export default configureStore({
    reducer:{
        tasks: taskReducer,
        roles: roleReducer,
        users: userReducer
    }
});