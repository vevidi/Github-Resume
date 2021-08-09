import { api } from '../api';

const GET_BASE_INFO = 'GET_BASE_INFO';

const initialState = {
  info: null,
};

export const baseInfo = (state = initialState, action) => {
  switch (action.type) {
    case GET_BASE_INFO:
      return {
        ...state,
        info: action.payload
      }
    default:
      return state
  }
}

export const setBaseInfoAC = payload => {
  return {
    type: GET_BASE_INFO,
    payload,
  }
}

export const getBaseInfoTC = (username) => async (dispatch) => {
  try {
    const res = await api.getBaseInfo(username)
    dispatch(setBaseInfoAC(res))
  } catch (e) {
    console.log('getBaseInfoTC', e);
  }
}
