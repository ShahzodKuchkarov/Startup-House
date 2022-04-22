import { ICompany } from "Pages/Dashboard/companies";
import * as actionTypes from "../actionTypes";
import { IChangeSearchedCompanies } from "./interfaces";

export const changeSearchedCompanies = (
  payload: ICompany[]
): IChangeSearchedCompanies => ({
  payload,
  type: actionTypes.CHANGE_SEARCHED_COMPANIES,
});

export const addCompanyToPortfolio = (company: ICompany) => {
  return {
    payload: company,
    type: actionTypes.ADD_COMPANY_TO_PORTFOLIO,
  };
};

export const removeCompanyFromPortfolio = (companySymbol: string) => {
  return {
    payload: companySymbol,
    type: actionTypes.REMOVE_COMPANY_FROM_PORTFOLIO,
  };
};
