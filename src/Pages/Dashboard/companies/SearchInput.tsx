import { Input } from "antd";
import { useAppDispatch } from "hooks/redux";
import { changeSearchedCompanies } from "store/actions";
import axios from "utils/axios";
import { ICompany } from ".";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const dispatchResult = (companies: ICompany[]) => {
    dispatch(changeSearchedCompanies(companies));
  };
  const onSearch = (symol: string) => {
    if (!symol) {
      dispatchResult([]);
      return;
    }
    axios
      .get(
        `?function=SYMBOL_SEARCH&keywords=${symol}&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        const { bestMatches } = res.data;
        dispatchResult(bestMatches);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  return <Input.Search placeholder="Example Apple" onSearch={onSearch} />;
};

export default SearchInput;
