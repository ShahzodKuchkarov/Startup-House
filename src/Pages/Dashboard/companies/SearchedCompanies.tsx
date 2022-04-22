import Text from "components/Text";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { Link } from "react-router-dom";
import { addCompanyToPortfolio } from "store/actions";
import { SearchedCompaniesList } from "Styles/Companies";
import { ICompany } from ".";

const SearchedCompanies = () => {
  const searchedCompanies = useAppSelector((state) => state.searchedCompanies);
  const dispatch = useAppDispatch();
  const onClick = (company: ICompany) => {
    dispatch(addCompanyToPortfolio(company));
  };
  return (
    <SearchedCompaniesList className="list">
      {searchedCompanies.map((company: ICompany) => (
        <li className="list__item" key={company["1. symbol"]}>
          <Link to={company["1. symbol"]}>
            <div className="list__title-wrapper">
              <Text text={company["1. symbol"]} />
              <div className="list__hyphen">-</div>
              <Text text={company["2. name"]} />
            </div>
          </Link>
          <button className="list__button" onClick={() => onClick(company)}>
            +
          </button>
        </li>
      ))}
    </SearchedCompaniesList>
  );
};

export default SearchedCompanies;
