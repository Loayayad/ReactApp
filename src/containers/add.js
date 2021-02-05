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

        <div class="form-group">
          <label className="h3">Name:</label>
          <input class="form-control required" type='text' name='username' onChange={this.myChangeHandler} />
        </div>

        <div class="form-group">
          <label className="h3">Age:</label>
          <input class="form-control required" type='text' name='age' onChange={this.myChangeHandler} />
        </div>

        <div class="form-group">
          <label className="h3">Phone:</label>
          <input class="form-control required" type='text' name='phone' onChange={this.myChangeHandler} />
        </div>

        <input class="form-control btn btn-dark mx-auto text-center" type='submit' value="Add"/>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addStudent }, dispatch)
}

export default connect(null, mapDispatchToProps)(Add)




















// const Add = () => {
//     const addStudent = () =>{

//     }
//     return(
//     <form>
//     <div className="form-group">
//     <label for="id">id </label>
//     <input type="id" class="form-control" id="id" />
//     </div>

//     <div className="form-group">
//     <label for="name">name </label>
//     <input type="name" class="form-control" id="name" />
//     </div>

//     <div className="form-group">
//     <label for="age">age</label>
//     <input type="age" class="form-control" id="age" />

//     </div>
//     <div className="form-group">
//     <label for="phone">phone</label>
//     <input type="phone" class="form-control" id="phone" />
//     </div>
//     <button type="submit" onClick={addStudent} class="btn btn-primary">Submit</button>
//     </form>
//     )
// }

// export default Add