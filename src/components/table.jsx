import React, { Component } from "react";
import Popup from "react-popup";
import StatusButton from "./statusButton";
import BulkEditModal from "./bulkEditModal";
import BulkCheckBox from "./bulkCheckbox";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BulkMenu from "./bulkMenu";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAll: false,
      selectedItems: [],
      showBulkEditModal: false
    };
  }

  //   renderTableHeader() {

  //     return (<th>StATUS</th>
  //         <th>STORE</th>
  //         <th>TYPE</th>
  //         <th>DATE</th>
  //         <th>ID</th>
  //         <th>NAME</th>
  //         <th>REQUESTED_BY</th>
  //     )
  //   }

  toggle = () => {
    this.setState({ showBulkEditModal: !this.state.showBulkEditModal });
  };

  requestToString(request) {
    return JSON.stringify(request);
  }

  handleBulkEditSave = (items, action) => {
    this.toggle();
    const stringItems = JSON.stringify(items);
    alert("Submit bulk change for these request? \n" + stringItems);
    this.props.onBulkEditSave(items, action);
    this.setState({ selectedItems: [], selectAll: !this.state.selectAll });
  };

  handleSelectAll = () => {
    if (!this.state.selectAll) {
      this.setState({ selectedItems: this.props.viewList });
    } else {
      this.setState({ selectedItems: [] });
    }
    this.setState({ selectAll: !this.state.selectAll });
  };

  // handleBulkCheckbox = request => {
  //   let requests = [];
  //   if (this.props.useFilterView === true) {
  //     requests = [...this.props.filterViewList];
  //   } else {
  //     requests = [...this.props.viewList];
  //   }
  //   const index = requests.indexOf(request);
  //   requests[index] = { ...requests[index] };
  //   requests[index].bulkEditChecked = !requests[index].bulkEditChecked;
  //   this.setState({ requests });
  // };

  handleBulkCheckbox = request => {
    let selectedItems = this.state.selectedItems;
    const index = this.state.selectedItems.indexOf(request);

    if (index >= 0) {
      selectedItems.splice(index);
    } else {
      selectedItems = [...selectedItems, request];
    }

    this.setState({ selectedItems });
  };

  renderTableData() {
    const { useFilterView, filterViewList, viewList } = this.props;
    const currentViewList = useFilterView === true ? filterViewList : viewList;

    return currentViewList.map(request => (
      <tr key={request.id}>
        <td>{request.id}</td>
        <StatusButton activeItem={request}></StatusButton>
        <td>{request.store}</td>
        <td>{request.type}</td>
        <td>{request.date}</td>
        <td>{request.name}</td>
        <td>{request.requested_by}</td>
        <td>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.props.onEdit(request)}
          >
            Edit
          </button>
        </td>
        <td>
          <BulkCheckBox
            onBulkEdit={() => this.handleBulkCheckbox(request)}
            checked={this.state.selectedItems.includes(request)}
          ></BulkCheckBox>
        </td>
      </tr>
    ));
  }

  render() {
    // const printList = this.props.viewList.map(request => (
    //   <li>{request.store}</li>
    // ));
    return (
      <div>
        {/* <ul>{printList}</ul> */}
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>STATUS</th>
              <th>STORE</th>
              <th>TYPE</th>
              <th>DATE</th>
              <th>NAME</th>
              <th>BY</th>
              <th>Edit</th>
              <th>
                <div className="row">
                  <input
                    name="forBulk"
                    type="checkbox"
                    onChange={this.handleSelectAll}
                    checked={this.state.selectAll}
                    className="content-space margin-top"
                  ></input>
                  <BulkMenu
                    handlePrintView={() =>
                      this.props.onPrint(this.state.selectedItems)
                    }
                    handleEditView={this.toggle}
                  ></BulkMenu>
                </div>
                {/* <button
                    className="btn btn-primary btn-sm content-space"
                    name="selectAll"
                    onClick={this.toggle}
                  >
                    Bulk Edit
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => this.props.onPrint(this.state.selectedItems)}
                  >
                    Print
                  </button> */}
              </th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
        {this.state.showBulkEditModal ? (
          <BulkEditModal
            onBulkEditSave={this.handleBulkEditSave}
            toggle={this.toggle}
            selectedItems={this.state.selectedItems}
          ></BulkEditModal>
        ) : null}
      </div>
    );
  }
}

export default Table;
