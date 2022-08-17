import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fields: [
        {
          name: 'name',
          type: "name",
          label: "Votre Identité :",
          placeholder: "Votre idendité",
          required: {
            required: "Merci de renseigner votre identité."
          },
          constraint: {
            min: 3,
          },
          classname: '',
        },
        {
          name: 'email',
          type: "email",
          label: "Votre Email :",
          placeholder: "Votre email",
          required: {
            required: "Merci de renseigner un email valide."
          },
          constraint: {
            min: 3,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            }, 
          },
          classname: '',
        },
        {
          name: 'subject',
          type: "text",
          label: "Sujet de la demande :",
          placeholder: "Sujet de la demande",
          required: {
            required: "Merci de renseigner le sujet de la demande."
          },
          constraint: {
            min: 3,
          },
          classname: '',
        },
      ],
    textareaSettings: {
      name: 'ticket',
      label: "Votre Demande :",
      placeholder: "Votre Demande",
      required: {
        required: "Vous n'avez pas formulé votre demande."
      },
      constraint: {
        min: 1,
        rows: 5,
      },
      classname: '',
    },
    responseMessage: '',
    responseClass: '',
};
const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
      createTicket: () => {
      },
      showTicketCreationResponse: (state, action) => {
        if (action.payload.status === 404 ) {
            state.responseMessage = 'Foiré';
            state.responseClass = 'contact__response--error';
          }
        else if (action.payload.status === 201) {
        state.responseMessage = 'Réussi';
        state.responseClass = 'contact__response--success';
        }
      }
    },
});

export const { createTicket, showTicketCreationResponse } = contactSlice.actions;

export default contactSlice.reducer;