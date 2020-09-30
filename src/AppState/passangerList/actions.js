import api from '../../api';
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

// Get first list from api
export const getlistAction = () => {
  return (dispatch) => {
    dispatch({type: GET_LIST_START});
    api
      .getPaxList()
      .then((response) => {
        dispatch({type: GET_LIST_SUCCESS, passangerList: response.data.data});
      })
      .catch((error) => {
        dispatch({type: GET_LIST_FAIL, errorMessage: error.message});
      });
  };
};

// Update passanger name with patch
export const updatePaxNameAction = (id, name) => {
  return (dispatch) => {
    dispatch({type: UPDATE_PAXNAME_START});
    api
      .updatePaxName(id, name)
      .then(() => dispatch({type: UPDATE_PAXNAME_SUCCESS, newName: name}))
      .catch((error) => {
        dispatch({type: UPDATE_PAXNAME_FAIL, error: error.message});
      });
  };
};

// Update or Fetch List with pagination
export const updateListAction = (pageNo) => {
  return (dispatch) => {
    dispatch({type: UPDATE_LIST_START});
    api
      .getPaxList(pageNo)
      .then((response) =>
        dispatch({type: UPDATE_LIST_SUCCESS, newList: response.data.data}),
      )
      .catch((error) =>
        dispatch({type: UPDATE_LIST_FAIL, error: error.message}),
      );
  };
};

// Fetch one passangers' detail info
export const getPassangerById = (paxId) => {
  return (dispatch) => {
    dispatch({type: GET_PASSANGER_BYID_START});
    api
      .getWtihId(paxId)
      .then((response) => {
        dispatch({
          type: GET_PASSANGER_BYID_SUCCESS,
          selectedPax: response.data,
        });
      })
      .catch((error) =>
        dispatch({type: GET_PASSANGER_BYID_FAIL, error: error.message}),
      );
  };
};
