import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";
const initialState = {
  contacts: data ,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      if (state.contacts.find(el => el.name === action.payload.name)) {
        alert(`${action.payload.name} is already in contacts`);
        return;
      }

      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload);
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;