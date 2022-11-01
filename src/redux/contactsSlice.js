import { createSlice, nanoid } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '500px',
  position: 'center-top',
  closeButton: true,
  fontFamily: 'Comic Sans MS',
  fontSize: '24px',
  warning: {
    background: 'rgb(255, 240, 245)',
    textColor: 'rgb(40, 70, 219)',
    notiflixIconColor: 'rgb(205, 92, 92)',
  },
});

const initialContactsState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(data) {
        const { name, number } = data;
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addContact, deleteContact } = contactsSlice.actions;
