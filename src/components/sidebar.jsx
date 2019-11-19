import React, { Component } from "react";

export default class SideBar extends Component {
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
      type: "",
      category: "",
      name: "",
      phone: "",
      vendor: "",
      model: "",
      size: "",
      color: "",
      width: "",
      item_number: "",
      requested_by: "",
      purchase_order: ""
    };
    this.setState({ filterItems: emptyFilterItems });
    this.props.handleClearFilter();
  };

  render() {
    return (
      <div>
        <form>
          <div class="form-group margin-top">
            <select
              className="form-control"
              value={this.state.filterItems.store}
              name="store"
              onChange={this.handleChange}
            >
              <option value="" disabled selected>
                STORE LOCATION
              </option>
              <option value="college">College</option>
              <option value="solano">Solano</option>
            </select>
          </div>
          <div class="form-group">
            <select
              className="form-control"
              value={this.state.filterItems.type}
              name="type"
              onChange={this.handleChange}
            >
              <option value="" disabled selected>
                TYPE
              </option>
              <option value="Order">Order</option>
              <option value="Transfer">Transfer</option>
            </select>
          </div>
          <div class="form-group">
            <select
              className="form-control"
              value={this.state.filterItems.category}
              name="category"
              onChange={this.handleChange}
            >
              <option value="" disabled selected>
                CATEGORY
              </option>
              <option value="Footwear">Footwear</option>
              <option value="Non-Footwear">Non-Footwear</option>
            </select>
          </div>

          <div className="form-group row">
            <label className="col-3 col-form-label" for="name">
              Name
            </label>
            <input
              className="form-control col margin-right"
              type="text"
              name="name"
              value={this.state.filterItems.name}
              onChange={this.handleChange}
              placeholder="Enter Name"
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
          </div>
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
