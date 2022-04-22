import Text from "components/Text";
import { Table } from "antd";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ICompany } from "./companies";
import { removeCompanyFromPortfolio } from "store/actions";
import { PortfolioStyle } from "Styles/Portfolio";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const companiesInPortfolio = useAppSelector(
    (state) => state.companiesInPortfolio
  );
  const dispatch = useAppDispatch();

  const onClick = (symbol: string) => {
    dispatch(removeCompanyFromPortfolio(symbol));
  };

  const tableColumns = [
    {
      title: "Company Name",
      dataIndex: "2. name",
      key: "name",
      render: (text: string, record: ICompany) => (
        <Link to={record["1. symbol"]} className="link">
          {text}
        </Link>
      ),
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
      render: (text: string, record: ICompany) => (
        <button
          className="portfolio__button"
          onClick={() => onClick(record["1. symbol"])}
        >
          Remove
        </button>
      ),
    },
  ];

  return (
    <PortfolioStyle>
      <div className="portfolio">
        <Text text="Your portfolio" />
      </div>
      <Table
        dataSource={companiesInPortfolio}
        columns={tableColumns}
        bordered
      />
    </PortfolioStyle>
  );
};

export default Portfolio;
