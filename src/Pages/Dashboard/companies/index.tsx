import Text from "components/Text";
import SearchInput from "./SearchInput";
import { CompaniesStyle } from "Styles/Companies";
import SearchedCompanies from "./SearchedCompanies";

export interface ICompany {
  "1. symbol": string;
  "2. name": string;
  "3. type": string;
  "4. region": string;
  "5. marketOpen": string;
  "6. marketClose": string;
  "7. timezone": string;
  "8. currency": string;
  "9. matchScore": string;
}

const Companies = () => {
  return (
    <CompaniesStyle>
      <div className="search">
        <Text text="Company Name" />
        <SearchInput />
      </div>
      <div className="list">
        <Text text="Search results" />
        <SearchedCompanies />
      </div>
    </CompaniesStyle>
  );
};

export default Companies;
