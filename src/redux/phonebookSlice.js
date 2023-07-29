import { createSlice } from '@reduxjs/toolkit';
import { addUser, getContacts, removeContact } from './phonebookThunk';

const initialState = {
  contacts: {
    users: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.users = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.users.push(action.payload);
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.users = state.contacts.users.filter(
          user => user.id !== action.payload.id
        );
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { error }) => {
          state.contacts.isLoading = false;
          state.contacts.error = error;
        }
      );
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
