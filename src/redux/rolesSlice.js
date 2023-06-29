import { createSlice } from "@reduxjs/toolkit";

export const rolesSlice = createSlice({
    name: "roles",
    initialState:[],
    reducers:{
        addRole: (state, action)=> {
            const newRole = {
                id: Date.parse(new Date()),
                label: action.payload.roleLabel,
                key: action.payload.roleKey
            }
            state.push(newRole);
        },
        deleteRole: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const {addRole, deleteRole} = rolesSlice.actions;

export default rolesSlice.reducer;