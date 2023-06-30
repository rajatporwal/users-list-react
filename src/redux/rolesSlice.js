import { createSlice } from "@reduxjs/toolkit";

export const rolesSlice = createSlice({
    name: "roles",
    initialState: [],
    reducers: {
        addRole: (state, action) => {
            const newRole = {
                id: Date.parse(new Date()),
                label: action.payload.roleLabel,
                key: action.payload.roleKey
            }
            state.push(newRole);
        },
        editRole: (state, action) => {
            const newRole = state.map((item) => item.id === action.payload.id ?
                {
                    ...item,
                    label: action.payload.roleLabel,
                    key: action.payload.roleKey
                }
                :
                item
            )
            return [...newRole];
        },
        deleteRole: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const { addRole, editRole, deleteRole } = rolesSlice.actions;

export default rolesSlice.reducer;