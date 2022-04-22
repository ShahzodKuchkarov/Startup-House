import { Main } from "Styles/Dashboard";
import Companies from "./companies";
import Portfolio from "./Portfolio";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <Main className="dashboard">
        <Companies />
        <Portfolio />
      </Main>
    </div>
  );
};

export default Dashboard;
