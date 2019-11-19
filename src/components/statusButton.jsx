import React, { Component } from "react";
class StatusButton extends Component {
  constructor(props) {
    super(props);
  }
  //   state = { badgeLabel: "", badgeClass: "" };

  renderBadge = () => {
    const { status } = this.props.activeItem;
    let badgeLabel = "";
    let badgeClass = "";
    switch (status.toUpperCase()) {
      case "OPEN":
        badgeLabel = "OPEN";
        badgeClass = "badge badge-primary align-vertical";
        break;
      case "ORDERED":
        badgeLabel = "ORDERED";
        badgeClass = "badge badge-warning align-vertical";
        break;
      case "RECEIVED":
        badgeLabel = "RECEIVED";
        badgeClass = "badge badge-success align-vertical";
        break;
      case "DONE":
        badgeLabel = "DONE";
        badgeClass = "badge badge-danger align-vertical";
        break;
      case "REJECTED":
        badgeLabel = "REJECTED";
        badgeClass = "badge badge-dark align-vertical";
        break;
      case "BO":
        badgeLabel = "BO";
        badgeClass = "badge badge-light align-vertical";
        break;
      case "ARCHIVED":
        badgeLabel = "ARCHIVED";
        badgeClass = "badge badge-secondary align-vertical";
        break;
    }

    return <span className={badgeClass}>{badgeLabel}</span>;
  };
  render() {
    return <div>{this.renderBadge()}</div>;
  }
}

export default StatusButton;
