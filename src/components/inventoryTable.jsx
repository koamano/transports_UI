import React, { Component } from "react";

class InventoryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTableData() {
    const { useFilterView, filterViewList, viewList } = this.props;
    const currentViewList = useFilterView === true ? filterViewList : viewList;

    return currentViewList.map((inventory, index) => (
      <tr key={index}>
        <td>{inventory.itemNumber}</td>
        <td>{inventory.itemName}</td>
        <td>{inventory.vendor}</td>
        <td>{inventory.color}</td>
        <td>{inventory.price}</td>
        <td>{inventory.gender}</td>
        <td>{inventory.size}</td>
        <td>{inventory.width}</td>
        <td>{inventory.style}</td>
        <td>{inventory.subCategory}</td>
        <td>{inventory.onHandCollege}</td>
        <td>{inventory.onHandSolano}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        {/* <ul>{printList}</ul> */}
        <table className="table">
          <thead>
            <tr>
              <th>Item Number</th>
              <th>Item Name</th>
              <th>Vendor</th>
              <th>Color</th>
              <th>Price</th>
              <th>Gender</th>
              <th>Size</th>
              <th>Width</th>
              <th>Style</th>
              <th>Type</th>
              <th>OH College</th>
              <th>OH Solano</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default InventoryTable;
