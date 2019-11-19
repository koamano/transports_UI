import React, { Component } from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BulkMenu extends Component {
  state = { isOpen: false };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleSelect = e => {
    let { label, value } = e.target;
    if (label === "Print View") {
    } else if (label === "Edit") {
    }
  };

  render() {
    const menuClass = `dropdown-menu${
      this.state.isOpen ? " show dropdown-menu-right" : " dropdown-menu-right"
    }`;
    return (
      <div className="dropdown dropdown-menu-right" onClick={this.toggleOpen}>
        <button
          className="btn btn-primary dropdown-toggle my-dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
          {/* <span className="caret"></span> */}
        </button>
        <ul className={menuClass}>
          <li>
            <a href="#" onClick={this.props.handlePrintView}>
              Print View
            </a>
          </li>
          <li>
            <a href="#" onClick={this.props.handleEditView}>
              Edit
            </a>
          </li>
        </ul>
      </div>
    );
  }
  //   render() {
  //     const options = [
  //       { value: "...", label: "..." },
  //       { value: "Edit", label: "Edit" },
  //       { value: "Print View", label: "Print View" }
  //     ];

  //     const defaultOption = options[0];
  //     return (
  //       <div>
  //         <Dropdown
  //           options={options}
  //           onChange={this.handleSelect}
  //           value={defaultOption}
  //           placeholder="Select an option"
  //         />
  //       </div>
  //     );
  //   }
}

export default BulkMenu;
