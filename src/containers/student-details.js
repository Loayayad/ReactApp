import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getStudentDetails, clearStudentDetails, deleteStudent } from '../actions'
const StudentDetails = ({ getStudentDetails, clearStudentDetails, deleteStudent, details, match }) => {
    const id = match.params.id
    console.log(id)
    useEffect(() => {
        getStudentDetails(id)

        return () => {
            console.log('cleanup (unmount)')
            clearStudentDetails()
        }
    }, [id, getStudentDetails, clearStudentDetails])

    const renderStudentDetails = (details) => {
        if (details && details.id) {
            return (
                <div className="card w-75 mb-3 mx-auto text-white bg-dark pl-4">

                    <span><h1>Name: {details.name}</h1></span>
                    <br />
                    <span><h2>Age: {details.age}</h2></span>
                    <br />
                    <span><h2>Phone {details.phone}</h2></span>

                    <input className="btn btn-danger w-25 mx-auto mb-2" type='submit' onClick=
                        {
                            (details) => {
                                if (window.confirm('Are you sure you want to delete this student from the database?')) {
                                    console.log('student deleted.');
                                    deleteStudent(id)
                                } else {
                                    console.log('student remains');
                                }
                            }
                        }
                        value="Delete" />
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
    return bindActionCreators({ getStudentDetails, clearStudentDetails, deleteStudent }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)

