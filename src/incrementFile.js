import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './action';

class IncrementFile extends Component {
  constructor(props){
    super(props);
    // this.state={
    //     click : 0,
    // };
  }

  increment = () => {
    this.props.increment();
      // this.setState({ click: this.state.click +1})
      // console.log('increment');
  };
  
  decrement = () => {
    this.props.decrement();
    // this.setState({ click: this.state.click -1})
    // console.log('decrement');
  }

para  = () => {
    return <p>{this.props.click}</p>
};



  render() {
      console.log(this.props.user)
    return (
      <div>
            <p>{this.props.count}</p>
          <button onClick={this.increment}>Add</button>
          <button  onClick={this.decrement}>Subtract</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'state in component')
  return {
    count: state.count,
    // naa: state.user.name,
    // umr: state.user.age
  }
}

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(IncrementFile);