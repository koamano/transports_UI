import React, { Component } from "react";
import FormLabelText from "./common/formLabelText";

export default class SalesResportSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { filterItems: {} };
  }

  handleChange = e => {
    let { name, value } = e.target;
    const filterItems = { ...this.state.filterItems, [name]: value };
    this.setState({ filterItems });
  };

  onClear = () => {
    const emptyFilterItems = {
      store: "",
      customerName: "",
      category: "",
      itemNumber: "",
      itemName: "",
      vendor: "",
      color: "",
      unitPrice: "",
      sellPrice: "",
      gender: "",
      subCategory: "",
      style: "",
      size: "",
      width: "",
      dateSold: ""
    };
    this.setState({ filterItems: emptyFilterItems });
    this.props.handleClearFilter();
  };

  render() {
    return (
      <div>
        <form>
          <h3 className="sidebar-title">Sales Report</h3>
          {/* <ImportFromFileBodyComponent></ImportFromFileBodyComponent> */}
          <FormLabelText
            label="Store"
            name="store"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>
          <FormLabelText
            label="Customer Name"
            name="customerName"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>
          <FormLabelText
            label="Category"
            name="category"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>
          <FormLabelText
            label="Item Number"
            name="itemNumber"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>
          <FormLabelText
            label="Item Name"
            name="itemName"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>
          <FormLabelText
            label="Vendor"
            name="vendor"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>
          <FormLabelText
            label="Color"
            name="color"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>
          <FormLabelText
            label="Date Sold"
            name="dateSold"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>

          <button
            type="button"
            className="btn btn-primary float-right"
            onClick={() => this.props.handleFilter(this.state.filterItems)}
          >
            Filter
          </button>
          <button
            type="button"
            className="btn btn-light content-space float-right"
            onClick={this.onClear}
          >
            Clear
          </button>
        </form>
      </div>
    );
  }
}
