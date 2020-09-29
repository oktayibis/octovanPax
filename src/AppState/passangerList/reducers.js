import {
  GET_LIST_FAIL,
  GET_LIST_START,
  GET_LIST_SUCCESS,
  GET_PASSANGER_BYID_FAIL,
  GET_PASSANGER_BYID_START,
  GET_PASSANGER_BYID_SUCCESS,
  UPDATE_LIST_FAIL,
  UPDATE_LIST_START,
  UPDATE_LIST_SUCCESS,
  UPDATE_PAXNAME_FAIL,
  UPDATE_PAXNAME_START,
  UPDATE_PAXNAME_SUCCESS,
} from './types';

const INITIAL_STATE = {
  // First List Loading
  listFirstLoading: true,
  passangerList: null,
  errorMessage: null,

  // Update Name- patch
  updateNameLoading: false,
  updateNameError: null,

  // Fetch another ten pax
  updateListLoading: false,
  updateListError: null,

  // Fetch one passger
  selectedPax: null,
  selectedPaxLoading: true,
  selectedPaxError: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST_START:
      return {
        ...state,
        listFirstLoading: true,
      };
    case GET_LIST_SUCCESS:
      return {
        ...state,
        listFirstLoading: false,
        passangerList: action.passangerList,
      };
    case GET_LIST_FAIL:
      return {
        ...state,
        listFirstLoading: false,
        errorMessage: action.error,
      };
    case UPDATE_PAXNAME_START:
      return {
        ...state,
        updateNameLoading: true,
      };
    case UPDATE_PAXNAME_SUCCESS:
      let updatedName = {
        ...state.selectedPax,
        name: action.newName,
      };
      return {
        ...state,
        updateNameLoading: false,
        selectedPax: updatedName,
      };
    case UPDATE_PAXNAME_FAIL:
      return {
        ...state,
        updateNameLoading: false,
        updateNameError: action.error,
      };
    case UPDATE_LIST_START:
      return {
        ...state,
        updateListLoading: true,
      };
    case UPDATE_LIST_SUCCESS:
      const updatedList = state.passangerList.concat(action.newList);
      return {
        ...state,
        updateListLoading: false,
        passangerList: updatedList,
      };
    case UPDATE_LIST_FAIL:
      return {
        ...state,
        updateListLoading: false,
        updateListError: action.error,
      };
    case GET_PASSANGER_BYID_START:
      return {
        ...state,
        selectedPaxLoading: true,
      };
    case GET_PASSANGER_BYID_SUCCESS:
      return {
        ...state,
        selectedPax: action.selectedPax,
        selectedPaxLoading: false,
      };
    case GET_PASSANGER_BYID_FAIL:
      return {
        ...state,
        selectedPaxLoading: false,
        selectedPaxError: action.error,
      };

    default:
      return {...state};
  }
};
