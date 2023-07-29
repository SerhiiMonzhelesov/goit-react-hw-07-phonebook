import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64c53024c853c26efada9824.mockapi.io',
});

export const requestContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const postNewUser = async contactData => {
  const { data } = await instance.post('/contacts', contactData);
  return data;
};

export const deleteUser = async contactId => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
};
