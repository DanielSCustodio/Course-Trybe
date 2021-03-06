import { getCurrentISSLocation } from '../services/issAPI';

export const GET_ISS_LOCATION_SUCCESS = 'GET_ISS_LOCATION_SUCCESS';
export const GET_ISS_LOCATION_ERROR = 'GET_ISS_LOCATION_ERROR';

export const getISSLocationSuccess = (payload) => ({
  type: GET_ISS_LOCATION_SUCCESS,
  payload,
});

export const getISSLocationError = (payload) => ({
  type: GET_ISS_LOCATION_ERROR,
  payload,
});

export const getISSLocationThunk = () => async (dispatch) => { // a primeira função recebe parametros da tela, que não seja da API, ou seja deve ser colocado esses parametros no primeiro parentes
  try {
    const response = await getCurrentISSLocation();
    const payload = {
      latitude: Number(response.iss_position.latitude),
      longitude: Number(response.iss_position.longitude),
    };
    dispatch(getISSLocationSuccess(payload));
  } catch (error) {
    dispatch(getISSLocationError(error));
  }
};
