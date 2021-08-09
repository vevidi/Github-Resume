import { api } from '../api';

const GET_LANGUAGES = 'GET_LANGUAGES';

const initialState = {
  languages: null
}

export const languages = (state = initialState, action) => {
  switch (action.type) {
    case GET_LANGUAGES:
      return {
        ...state,
        languages: action.payload
      }
    default:
      return state
  }
}

export const setLanguagesAC = payload => {
  return {
    type: GET_LANGUAGES,
    payload,
  }
}

export const getLanguageTC = (username) => async (dispatch) => {
  try {
    const res = await api.getLanguages(username);
    const languages = res.map((i) => {
      if (i.language) return i.language
    }).filter(Boolean)
    const result = languages.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {})
    dispatch(setLanguagesAC(result))
  } catch (e) {
    console.log('getLanguageTC', e);
  }
}
