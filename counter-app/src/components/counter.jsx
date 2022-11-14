import React, { Component } from "react";

class Counter extends Component {
  render() {  
    console.log("COUNTERS - rendered");

    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('PrevProps', prevProps);
    console.log('PrevState', prevState); 

    if(prevProps.counter.value != this.props.counter.value){
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount(){
    console.log('Component - Unmount');
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
