import React, { Component } from "react";
import FormLabelText from "./common/formLabelText";
import ImportFromFileBodyComponent from "./fileReader";

export default class InventorySideBar extends Component {
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
      itemNumber: "",
      itemName: "",
      vendor: "",
      price: "",
      size: "",
      color: "",
      width: "",
      sex: "",
      style: "",
      onHandCollege: "",
      onHandSolano: ""
    };
    this.setState({ filterItems: emptyFilterItems });
    this.props.handleClearFilter();
  };

  render() {
    return (
      <div>
        <form>
          <h3 className="sidebar-title">Inventory</h3>
          {/* <ImportFromFileBodyComponent></ImportFromFileBodyComponent> */}
          <FormLabelText
            label="Vendor"
            name="vendor"
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
            label="Color"
            name="color"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>
          <FormLabelText
            label="Price"
            name="price"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>
          <FormLabelText
            label="Gender"
            name="gender"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>
          <FormLabelText
            label="Size"
            name="size"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>
          <FormLabelText
            label="Width"
            name="width"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>
          <FormLabelText
            label="Style"
            name="style"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>
          <FormLabelText
            label="Type"
            name="subCategory"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>
          <FormLabelText
            label="OH College"
            name="onHandCollege"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>
          <FormLabelText
            label="OH Solano"
            name="onHandSolano"
            filterItemsName={this.state.filterItems.name}
            handleChange={this.handleChange}
          ></FormLabelText>

          {/* <div className="form-group row">
            <label className="col-3 col-form-label" for="name">
              Item Number
            </label>
            <input
              className="form-control col margin-right"
              type="text"
              name="itemNumber"
              value={this.state.filterItems.name}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group row">
            <label className="col-3 col-form-label" for="phone">
              Phone
            </label>
            <input
              className="form-control col margin-right"
              type="text"
              name="phone"
              value={this.state.filterItems.phone}
              onChange={this.handleChange}
              placeholder="Enter Phone"
            />
          </div>

          <div className="form-group row">
            <label className="col-3 col-form-label" for="vendor">
              Vendor
            </label>
            <input
              className="form-control col margin-right"
              type="text"
              name="vendor"
              value={this.state.filterItems.vendor}
              onChange={this.handleChange}
              placeholder="Enter Vendor"
            />
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label" for="model">
              Model
            </label>
            <input
              className="form-control col margin-right"
              type="text"
              name="model"
              value={this.state.filterItems.model}
              onChange={this.handleChange}
              placeholder="Enter Model"
            />
          </div>

          <div class="form-group row">
            <label className="col-3 col-form-label" for="name">
              Size
            </label>
            <input
              className="form-control col margin-right"
              type="text"
              name="size"
              value={this.state.filterItems.size}
              onChange={this.handleChange}
              placeholder="Enter Size"
            />
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label" for="name">
              Color
            </label>
            <input
              className="form-control col margin-right"
              type="text"
              name="color"
              value={this.state.filterItems.color}
              onChange={this.handleChange}
              placeholder="Enter Color"
            />
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label" for="width">
              Width
            </label>
            <input
              className="form-control col margin-right"
              type="text"
              name="width"
              value={this.state.filterItems.width}
              onChange={this.handleChange}
              placeholder="Enter Width"
            />
          </div>

          <div className="form-group row">
            <label className="col-3 col-form-label" for="itemNumber">
              Item Number
            </label>
            <input
              className="form-control col margin-right"
              type="text"
              name="item_number"
              value={this.state.filterItems.item_number}
              onChange={this.handleChange}
              placeholder="Enter Item Number"
            />
          </div>
          <div className="form-group row">
            <div className="col">
              <label for="requestedBy">Requested By</label>
              <input
                className="form-control col margin-right"
                type="text"
                name="requested_by"
                value={this.state.filterItems.requested_by}
                onChange={this.handleChange}
                placeholder="Enter Requested By"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label" for="purchase_order">
              PO
            </label>
            <input
              className="form-control col margin-right"
              type="text"
              name="purchase_order"
              value={this.state.filterItems.purchase_order}
              onChange={this.handleChange}
              placeholder="Enter PO"
            />
          </div> */}
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
