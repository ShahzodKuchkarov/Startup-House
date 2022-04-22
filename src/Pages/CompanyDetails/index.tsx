import Text from "components/Text";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CompanyDetail } from "Styles/Companies";
import axios from "utils/axios";
import { ICompanyDetail } from "./interfaces";

const initialCompanyDetail: ICompanyDetail = {
  Title: "Not found.",
  Address: "",
  MarketCapitalization: "",
  Description:
    "Company with this symbol not found, please enter another symbol.",
};

const CompanyDetails = () => {
  const [companyDetail, setCompanyDetail] =
    useState<ICompanyDetail>(initialCompanyDetail);
  const { companySymbol } = useParams();
  useEffect(() => {
    axios
      .get(
        `?function=OVERVIEW&symbol=${companySymbol}&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then(({ data }) => {
        const { Name, Address, MarketCapitalization, Description } = data;
        Name &&
          setCompanyDetail({
            Title: Name,
            Address,
            MarketCapitalization,
            Description,
          });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  const { Title, Description, Address, MarketCapitalization } = companyDetail;

  return (
    <CompanyDetail className="detail">
      <div className="detail__link">
        <Link to="/">Go back</Link>
      </div>
      <div className="detail__header">
        <h1 className="detail__title">{Title}</h1>
        <div className="detail__wrapper">
          <span className="detail__text--bold">Address:</span>
          <Text text={Address} />
        </div>
        <div className="detail__wrapper">
          <span className="detail__text--bold">Market Capitalization:</span>
          <Text text={MarketCapitalization} />
        </div>
      </div>
      <div className="detail__text">
        <Text text={Description} />
      </div>
    </CompanyDetail>
  );
};

export default CompanyDetails;
