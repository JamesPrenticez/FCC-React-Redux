import React from 'react'

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'James'
    }
  }
  render() {
    return (
       <div>
         <Navbar name= {this.state.name}/>
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: {this.props.name}</h1>
      {/* Change code above this line */}
    </div>
    );
  }
};

export default MyComponent