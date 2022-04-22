import { ICompany } from "Pages/Dashboard/companies";

export interface IChangeSearchedCompanies {
  payload: ICompany[];
  type: string;
}
