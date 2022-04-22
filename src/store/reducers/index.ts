import { ICompany } from "Pages/Dashboard/companies";
import * as actionTypes from "../actionTypes";

interface ICompanyState {
  companiesInPortfolio: ICompany[];
  searchedCompanies: ICompany[];
}

const initialState: ICompanyState = {
  companiesInPortfolio: [],
  searchedCompanies: [],
};

const companyReducer = (state: ICompanyState = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCHED_COMPANIES: {
      return {
        ...state,
        searchedCompanies: action.payload,
      };
    }
    case actionTypes.ADD_COMPANY_TO_PORTFOLIO: {
      const hasCompanyInPortfolio: ICompany | undefined =
        state.companiesInPortfolio.find(
          (company) => company["1. symbol"] === action.payload["1. symbol"]
        );
      if (hasCompanyInPortfolio) {
        return state;
      }
      return {
        ...state,
        companiesInPortfolio: [...state.companiesInPortfolio, action.payload],
      };
    }
    case actionTypes.REMOVE_COMPANY_FROM_PORTFOLIO: {
      const companiesWithoutRemoved = state.companiesInPortfolio.filter(
        (company) => company["1. symbol"] !== action.payload
      );
      return {
        ...state,
        companiesInPortfolio: companiesWithoutRemoved,
      };
    }
    default: {
      return state;
    }
  }
};

export default companyReducer;
