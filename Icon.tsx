import React from "react";
import circleIcon from "./path/to/circle-icon.svg";

export default class Icon extends React.Component {
  render() {
    return (
      <svg>
        <use xlinkHref={`${circleIcon}#symbol`} />
      </svg>
    );
  }
}
