import React from 'react';
import { addStudent } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state)
    addStudent(this.state)
    this.componentWillUnmount();
    //alert("You are submitting " + this.state);
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }
  render() {
    return (
      <form className="w-75 mx-auto mt-4" onSubmit={this.mySubmitHandler}>

        <div className="form-group">
          <label className="h3">Name:</label>
          <input className="form-control" required type='text' name='username' onChange={this.myChangeHandler} />
        </div>

        <div className="form-group">
          <label className="h3">Age:</label>
          <input className="form-control required" required type='text' name='age' onChange={this.myChangeHandler} />
        </div>

        <div className="form-group">
          <label className="h3">Phone:</label>
          <input className="form-control required" required type='text' name='phone' onChange={this.myChangeHandler} />
        </div>

        <input className="form-control btn btn-dark mx-auto text-center" type='submit' value="Add"/>
      </form>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addStudent }, dispatch)
}

export default connect(null, mapDispatchToProps)(Add)