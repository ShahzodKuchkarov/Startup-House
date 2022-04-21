import React from "react";
import { Main } from "Styles/Dashboard";
import CompanyList from "./CompanyList";
import Portfolio from "./Portfolio";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <Main className="dashboard">
        <CompanyList />
        <Portfolio />
      </Main>
    </div>
  );
};

export default Dashboard;
