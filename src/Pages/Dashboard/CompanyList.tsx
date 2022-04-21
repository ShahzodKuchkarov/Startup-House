import React from "react";
import { Input } from "antd";
import Title from "components/title";
import Axios from "utils/axios";

const { Search } = Input;

const CompanyList = () => {
  const onSearch = (value: string) => {
    Axios.get(
      `?function=SYMBOL_SEARCH&keywords=${value}&apikey=${process.env.REACT_APP_API_KEY}`
    ).then((res) => {
      console.log(res.data.bestMatches);
    });
  };
  return (
    <div>
      <div className="companyName">
        <div className="search">
          <Title text="Company Name" />
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
        <div className="results">
          <Title text="Search Results" />
          <div className="results__list"></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
