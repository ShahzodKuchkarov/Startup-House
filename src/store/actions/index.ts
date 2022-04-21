import * as actionTypes from "../actionTypes";

export const addCompany = (payload: any) => {
  return {
    payload,
    type: actionTypes.ADD_COMPANY,
  };
};

export const deleteCompany = () => {
  return {
    type: actionTypes.DELETE_COMPANY,
  };
};
