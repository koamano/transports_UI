import React, { Component } from "react";
import * as WebDataRocksReact from "./common/webdatarocks.react";
import Chart from "./common/chart";

class SalesAnalysisView extends Component {
  state = {};
  render() {
    const data = [
      {
        Product: "Apple",
        Price: 2.5
      },
      {
        Product: "Cherry",
        Price: 5.25
      }
    ];
    return (
      <div>
        <WebDataRocksReact.Pivot
          toolbar={true}
          report="https://cdn.webdatarocks.com/reports/report.json"
          //   report={data}
        />
        <Chart className="margin-top"></Chart>
      </div>
    );
  }
}

export default SalesAnalysisView;
