import React, { Component } from "react";
import InventoryTable from "./inventoryTable";
import InventorySideBar from "./inventorySideBar";
import http from "./../services/httpService";

class InventoryView extends Component {
  constructor(props) {
    const inventoryEndpoint = "/inventory";
    super(props);
    this.state = { viewList: [], filterViewList: [], useFilterView: false };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    http
      .get("/inventory")
      .then(res => this.setState({ viewList: res.data }))
      .catch(err => console.log(err));
  };

  handleFilter = filterItems => {
    const filteredViewList = this.state.viewList.filter(item => {
      for (let key in filterItems) {
        if (filterItems[key] != "") {
          if (key == "category") {
            if (
              item[key] === undefined ||
              item[key].toUpperCase() != filterItems[key].toUpperCase()
            )
              return false;
          } else {
            if (
              item[key] === undefined ||
              !item[key].toUpperCase().includes(filterItems[key].toUpperCase())
            )
              return false;
          }
        }
      }
      return true;
    });

    this.setState({ filterViewList: filteredViewList, useFilterView: true });
  };

  // handleFilter = filterItems => {
  //   let filteredViewList = [...this.state.viewList, ...this.state.viewList];
  //   this.setState({ filterViewList: filteredViewList, useFilterView: true });
  // };

  handleClearFilter = () => {
    this.setState({ useFilterView: false });
  };

  render() {
    return (
      <React.Fragment>
        <div className="content-space">
          <div className="row ">
            <div className="col-3  bg-light">
              <InventorySideBar
                handleFilter={this.handleFilter}
                handleClearFilter={this.handleClearFilter}
              ></InventorySideBar>
            </div>
            <div className="col-9 nopadding">
              <InventoryTable
                viewList={this.state.viewList}
                filterViewList={this.state.filterViewList}
                useFilterView={this.state.useFilterView}
              ></InventoryTable>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InventoryView;
