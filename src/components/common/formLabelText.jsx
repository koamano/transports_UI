import React, { Component } from "react";

class FormLabelText extends Component {
  state = {};
  render() {
    const { label, name, handleChange, filterItemName } = this.props;
    return (
      <div className="form-group row">
        <label className="col-3 col-form-label" for={name}>
          {label}
        </label>
        <input
          className="form-control col margin-right"
          type="text"
          name={name}
          value={filterItemName}
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default FormLabelText;
