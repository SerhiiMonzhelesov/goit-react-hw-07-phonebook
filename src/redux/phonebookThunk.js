import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteUser,
  postNewUser,
  requestContacts,
} from 'services/api';

export const getContacts = createAsyncThunk('contacts/getContacts', () =>
  requestContacts()
);

export const addUser = createAsyncThunk('contacts/addUser', contactData =>
  postNewUser(contactData)
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  contactId => deleteUser(contactId)
);
