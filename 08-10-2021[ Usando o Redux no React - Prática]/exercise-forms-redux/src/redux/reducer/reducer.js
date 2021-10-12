import { SET_PERSONAL_VALUE, SET_PROFESSIONAL_VALUE } from '../action/index';

const initialState = {
  personalInputs: {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
  },

  professionalInputs: {
    curriculo: '',
    cargo: '',
    descricao: '',
  },
};
