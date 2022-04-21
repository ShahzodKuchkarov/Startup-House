import React, { useState } from "react";
import { Input, Table } from "antd";
import Title from "components/title";
import Axios from "utils/axios";

interface Company {
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

const CompanyList = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<Company[]>([]);
  const columns = [
    {
      title: "Company Name",
      dataIndex: "2. name",
      key: "name",
    },
    {
      title: "Symbol",
      dataIndex: "1. symbol",
      key: "symbol",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "action",
      render: (text: string, record: Company) => (
        <button onClick={() => console.log(record)}>remove</button>
      ),
    },
  ];
  const onSearch = (value: string) => {
    Axios.get(
      `?function=SYMBOL_SEARCH&keywords=${value}&apikey=${process.env.REACT_APP_API_KEY}`
    ).then((res) => {
      const { bestMatches } = res.data;
      setCompanies(bestMatches);
    });
  };
  const onSelect = (company: Company) => {
    setSelectedCompanies((prev) => Array.from(new Set([...prev, company])));
  };
  return (
    <div>
      <div className="companyName">
        <div className="search">
          <Title text="Company Name" />
          <Input.Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
        <div className="results">
          <Title text="Search Results" />
          <div className="results__list">
            {companies.map((company) => (
              <div key={company["1. symbol"]}>
                {company["1. symbol"]} - {company["2. name"]}
                <button onClick={() => onSelect(company)}>+</button>
              </div>
            ))}
          </div>
        </div>
        <Table dataSource={selectedCompanies} columns={columns} />
      </div>
    </div>
  );
};

export default CompanyList;
