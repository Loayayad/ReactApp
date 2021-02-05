import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getStudentDetails, clearStudentDetails, deleteStudent } from '../actions'

const StudentDetails = ({ getStudentDetails, clearStudentDetails,deleteStudent, details, match }) => {
    const id = match.params.id
    console.log(id)
    useEffect(() => {
        this.props.getStudentDetails(id)

        return () => {
            console.log('cleanup (unmount)')
            clearStudentDetails()
        }
    }, [id])
    
    const delStudent = () => {
        console.log(details)
        deleteStudent(details.id)
        alert("You are deleting  " + details.name);
    }

    const renderStudentDetails = (details) => {
        if (details && details.id) {
            return (
                <div className="card">
                    <h2>
                        <span>Name  {details.name}</span>
                        <br />
                        <span>Age {details.age}</span>
                        <br />
                        <span>Phone {details.phone}</span>
                    </h2>
                    <input type='submit' onClick={delStudent()} placeholder="Delete"/>
                </div>
            )
        }
    }
    return (<div className="alert alert-light">
        {renderStudentDetails(details)}
    </div>)
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        details: state.students.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudentDetails, clearStudentDetails,deleteStudent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)

