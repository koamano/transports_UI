import React, { Component } from "react";

class SalesReportTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTableData() {
    const { useFilterView, filterViewList, viewList } = this.props;
    const currentViewList = useFilterView === true ? filterViewList : viewList;

    return currentViewList.map((record, index) => (
      <tr key={index}>
        <td>{record.store}</td>
        <td>{record.itemNumber}</td>
        <td>{record.itemName}</td>
        <td>{record.vendor}</td>
        <td>{record.customerName}</td>
        <td>{record.category}</td>
        <td>{record.sellPrice}</td>
        <td>{record.dateSold}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Store</th>
              <th>Item Number</th>
              <th>Item Name</th>
              <th>Vendor</th>
              <th>Customer</th>
              <th>Category</th>
              <th>Sell Price</th>
              <th>Date Sold</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default SalesReportTable;
