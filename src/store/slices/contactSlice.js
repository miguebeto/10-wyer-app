import { createSlice } from "@reduxjs/toolkit";


const initContacts = () => {
  return JSON.parse( localStorage.getItem( "contacts" ) ) || [];
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    idEdit: '',
    search: '',
    contacts: initContacts()
    //     contact: [{
    //         id: ','
    //         name: '',
    //         lastname: '',
    //         email: '',
    //         cel: null,
    //         date: null,
    //         address: '',
    //         typeContact: '',
    //     }]
  },
  reducers: {
    SetInitState: (state, { payload }) => {
      state.contacts = payload;
    },
    SetSearch: (state, { payload }) => {
      state.search = payload;
    },
    SetIdEdit: (state, { payload }) => {
      state.idEdit = payload;
    },
    Add_Contact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    Remove_Contact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    Edit_Contact: (state, {payload}) => {
        state.contacts = state.contacts.map((contact) => {
            if (contact.id === state.idEdit) {
              return payload;
            } 
            return contact;
          });
    },
  },
});

// Action creators are generated for each case reducer function
export const { SetInitState, SetSearch, SetIdEdit, Add_Contact, Remove_Contact, Edit_Contact } = contactSlice.actions;
