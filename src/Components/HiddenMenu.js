import React from 'react';
import '../App.css';



export default class HiddenMenu extends React.Component {
  render() {
    return (
      <div className="hiddenContainer" onMouseEnter={this.props.toggleSideBar}>
      </div>
    );
  }
}
