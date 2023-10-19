import React from "react";
import { Header, LineChart } from "../../components";

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-25 p-10 bg-white dark:bg-secondary-dark-bg rounded-xl">
      <Header category="Chart" title="Inflation Rate" />
      <div className="w-full">
        {" "}
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
