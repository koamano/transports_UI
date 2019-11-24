import React, { Component } from "react";
import Navbar from "./components/navbar";
// import Table from "./components/table";
import "bootswatch/dist/spacelab/bootstrap.min.css";
import "./App.css";
// import axios from "axios";
// import CustomModal from "./components/modal";
// import { elastic as Menu } from "react-burger-menu";
// import PrintView from "./components/printView";
// import SideBar from "./components/sidebar";
// import Login from "./components/login";
import { Route, Switch, Redirect } from "react-router-dom";
import RequestView from "./components/requestView";
import InventoryView from "./components/inventoryView";
import SalesReportView from "./components/salesReportView";
import Login from "./components/login";
import Logout from "./components/logout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // modal: false,
      // noteModal: false,
      // filterValue: "",
      // useFilterView: false,
      // requestList: [],
      // viewList: [],
      // filterViewList: [],
      // bulkEditItem: [],
      // activeItem: {
      //   name: ""
      // },
      // noteItem: {},
      // notesList: [],
      // printList: [],
      // showPrintView: false,
      // selectedPrintlist: []
    };
  }

  componentDidMount() {
    try {
      const user = localStorage.getItem("user");
      this.setState({ user });
    } catch (ex) {}
  }

  // refreshList = () => {
  //   axios
  //     .get("http://localhost:8000/api/request/")
  //     .then(res => this.setState({ requestList: res.data }))
  //     .catch(err => console.log(err));

  //   this.setState({ viewList: this.state.requestList });
  // };

  // findDiff = (prevItem, currentItem) => {
  //   let diff = Object.keys(currentItem).reduce((diff, key) => {
  //     if (prevItem[key] === currentItem[key]) return diff;
  //     return {
  //       ...diff,
  //       [key]: currentItem[key]
  //     };
  //   }, {});
  //   return diff;
  // };

  // toggle = () => {
  //   this.setState({ modal: !this.state.modal });
  // };

  // handleSubmit = (item, diff) => {
  //   this.toggle();
  //   if (item.id) {
  //     axios
  //       .put(`http://localhost:8000/api/request/${item.id}/`, item)
  //       .then(res => this.refreshList());
  //   } else {
  //     axios
  //       .post("http://localhost:8000/api/request/", item)
  //       .then(res => this.refreshList());
  //   }
  //   this.refreshList();

  //   this.handleAddHistory(item, diff);
  // };

  // handleBulkSubmit = (bulkItems, action) => {
  //   bulkItems.map(item => {
  //     axios.put(`http://localhost:8000/api/request/${item.id}/`, item);
  //     this.handleAddBulkHistory(item, action);
  //   });
  // };

  // handleDelete = item => {
  //   axios
  //     .delete(`http://localhost:8000/api/todos/${item.id}`)
  //     .then(res => this.refreshList());
  // };

  // handlePrint = items => {
  //   let itemNotes = "";
  //   let itemDataList = [];
  //   items.forEach(item => {
  //     axios
  //       .get(`http://localhost:8000/api/notes?requestid=${item.id}`)
  //       .then(res => (itemNotes = res.data));
  //     const itemData = { ...item, ...itemNotes };
  //     itemDataList = [...itemDataList, itemData];
  //   });
  //   this.setState({
  //     showPrintView: !this.state.showPrintView,
  //     selectedPrintlist: itemDataList
  //   });
  // };

  // handleExitPrint = () => {
  //   this.setState({ showPrintView: !this.state.showPrintView });
  // };

  // createItem = () => {
  //   const item = { name: "" };
  //   this.setState({ activeItem: item });
  //   this.toggle();
  // };

  // getHistory = item => {
  //   axios
  //     .get(`http://localhost:8000/api/history?requestid=${item.id}`)
  //     .then(res => this.setState({ historyList: res.data }));
  // };

  // getNotes = item => {
  //   axios
  //     .get(`http://localhost:8000/api/notes?requestid=${item.id}`)
  //     .then(res =>
  //       this.setState({
  //         notesList: res.data,
  //         activeItem: item,
  //         modal: !this.state.modal
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  // handleEditItem = item => {
  //   this.getHistory(item);
  //   setTimeout(() => {
  //     this.getNotes(item);
  //   }, 1000);
  // };

  // handleAddNote = item => {
  //   axios.post("http://localhost:8000/api/notes/", item);
  // };

  // handleAddHistory = (item, action) => {
  //   let actionData = JSON.stringify(action);
  //   actionData = actionData.replace(/"/g, "");
  //   actionData = actionData.replace("{", " ");
  //   actionData = actionData.replace("}", ",");
  //   const historyItem = { request: item.id, text: actionData };
  //   axios.post("http://localhost:8000/api/history/", historyItem);
  // };

  // handleAddBulkHistory = (item, action) => {
  //   const historyItem = { request: item.id, text: action };
  //   axios.post("http://localhost:8000/api/history/", historyItem);
  // };

  // handleAll = () => {
  //   const viewItems = this.state.requestList;
  //   this.setState({ viewList: viewItems });
  // };

  // handleStatus = selected => {
  //   let viewItems = "";
  //   if (selected.toUpperCase() == "ALL") {
  //     viewItems = this.state.requestList;
  //   } else {
  //     viewItems = this.state.requestList.filter(
  //       request => request.status.toUpperCase() == selected.toUpperCase()
  //     );
  //   }
  //   this.setState({ viewList: viewItems });
  // };

  // handleStoreFilter = selected => {
  //   const viewItems = this.state.viewList.filter(
  //     request => request.store.toUpperCase() == selected.toUpperCase()
  //   );
  //   this.setState({ filterViewList: viewItems, useFilterView: true });
  // };

  // handleStoreFilter = selected => {
  //   const viewItems = this.state.viewList.filter(
  //     request => request.store.toUpperCase() == selected.toUpperCase()
  //   );
  //   this.setState({ filterViewList: viewItems, useFilterView: true });
  // };

  // handleTypeFilter = selected => {
  //   const viewItems = this.state.viewList.filter(
  //     request => request.type.toUpperCase() == selected.toUpperCase()
  //   );
  //   this.setState({ filterViewList: viewItems, useFilterView: true });
  // };

  // handleCategoryFilter = selected => {
  //   const viewItems = this.state.viewList.filter(
  //     request => request.category.toUpperCase() == selected.toUpperCase()
  //   );
  //   this.setState({ filterViewList: viewItems, useFilterView: true });
  // };

  // handleAllFilter = filterItems => {
  //   const viewItems = this.state.viewList.filter(
  //     request =>
  //       request.category.toUpperCase() == filterItems.category.toUpperCase()
  //   );
  //   this.setState({ filterViewList: viewItems, useFilterView: true });
  // };

  // handleFilter = filterItems => {
  //   const filteredViewList = this.state.viewList.filter(item => {
  //     for (let key in filterItems) {
  //       if (filterItems[key] != "") {
  //         if (key == "category") {
  //           if (
  //             item[key] === undefined ||
  //             item[key].toUpperCase() != filterItems[key].toUpperCase()
  //           )
  //             return false;
  //         } else {
  //           if (
  //             item[key] === undefined ||
  //             !item[key].toUpperCase().includes(filterItems[key].toUpperCase())
  //           )
  //             return false;
  //         }
  //       }
  //     }
  //     return true;
  //   });

  //   this.setState({ filterViewList: filteredViewList, useFilterView: true });
  // };

  // // handleFilter = filterItems => {
  // //   let filteredViewList = [...this.state.viewList, ...this.state.viewList];
  // //   this.setState({ filterViewList: filteredViewList, useFilterView: true });
  // // };

  // handleClearFilter = () => {
  //   this.setState({ useFilterView: false });
  // };

  render() {
    // let content;
    // if (this.state.showPrintView) {
    //   content = (
    //     <PrintView
    //       activeItems={this.state.selectedPrintlist}
    //       handleExitPrint={() => this.handleExitPrint}
    //     ></PrintView>
    //   );
    // } else {
    //   content = (
    //     <div className="content-space">
    //       <div className="row ">
    //         <div className="col-3  bg-light">
    //           <SideBar
    //             handleFilter={this.handleFilter}
    //             handleClearFilter={this.handleClearFilter}
    //           ></SideBar>
    //         </div>
    //         <div className="col-9 nopadding">
    //           <div class="p-3 mb-2 bg-secondary">
    //             {/* <div className="mb-2 bg-primary"> */}
    //             <button
    //               type="button"
    //               className="btn btn-success btn-space-large"
    //               onClick={this.createItem}
    //             >
    //               Add New
    //             </button>
    //             <button
    //               className="btn btn-outline-light btn-space"
    //               onClick={() => this.handleStatus("all")}
    //             >
    //               All
    //             </button>
    //             <button
    //               className="btn btn-outline-light btn-space"
    //               onClick={() => this.handleStatus("open")}
    //             >
    //               Open
    //             </button>
    //             <button
    //               className="btn btn-outline-light btn-space"
    //               onClick={() => this.handleStatus("ordered")}
    //             >
    //               Ordered
    //             </button>
    //             <button
    //               className="btn btn-outline-light btn-space"
    //               onClick={() => this.handleStatus("received")}
    //             >
    //               Received
    //             </button>
    //             <button
    //               className="btn btn-outline-light btn-space"
    //               onClick={() => this.handleStatus("done")}
    //             >
    //               DONE
    //             </button>
    //             <button
    //               className="btn btn-outline-light btn-space"
    //               onClick={() => this.handleStatus("rejected")}
    //             >
    //               Rejected
    //             </button>
    //             <button
    //               className="btn btn-outline-light btn-space"
    //               onClick={() => this.handleStatus("BO")}
    //             >
    //               BO
    //             </button>
    //             <button
    //               className="btn btn-outline-light btn-space"
    //               onClick={() => this.handleStatus("archived")}
    //             >
    //               Archived
    //             </button>
    //             {/* </div> */}
    //           </div>
    //           <Table
    //             viewList={this.state.viewList}
    //             filterViewList={this.state.filterViewList}
    //             useFilterView={this.state.useFilterView}
    //             onEdit={this.handleEditItem}
    //             onBulkEditSave={this.handleBulkSubmit}
    //             onPrint={this.handlePrint}
    //           ></Table>
    //         </div>
    //       </div>
    //       {this.state.modal ? (
    //         <CustomModal
    //           activeItem={this.state.activeItem}
    //           noteItem={this.state.noteItem}
    //           notesList={this.state.notesList}
    //           historyList={this.state.historyList}
    //           toggle={this.toggle}
    //           onSaveNote={this.handleAddNote}
    //           findDiff={this.findDiff}
    //           onSave={this.handleSubmit}
    //         ></CustomModal>
    //       ) : null}
    //     </div>
    //   );
    // }
    return (
      <div>
        <Navbar user={this.state.user} />

        <Switch>
          <Route path="/requests" component={RequestView} />
          <Route path="/inventory" component={InventoryView} />
          <Route path="/salesreport" component={SalesReportView} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    );
    // return (
    //   <div>
    //     <Navbar />
    //     <div className="content"></div>
    //     {content}
    //   </div>
    // );
  }
}

export default App;
