import * as actionTypes from "../actionTypes";

interface CompanyState {
  company: any;
}

const initialState = {
  company: null,
};

const companyReducer = (state: CompanyState = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_COMPANY: {
      return {
        ...state,
        company: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default companyReducer;
