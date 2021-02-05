import { connect } from 'react-redux';
import Student from '../components//student'
import { bindActionCreators } from 'redux'
import { getAllStudents } from '../actions'
import { useEffect } from 'react'

const StudentsList = ({list,getAllStudents}) => {
    //console.log(props)
    useEffect(() => {
        getAllStudents()
    }, [getAllStudents])

    if (list) {
        if (list.length > 0) {
            return (
                <div className="alert ">{
                    list.map((student) => {
                        return <Student key={student.id} studentInfo={student} />
                    })}
                </div>
            )
        }
        return <p>
            Enter a valid name and search again
    </p>
    }
    return <div>
        Enter a name to search
    </div>
}

const mapStateToProps = (state) => {
    return {
        list: state.students.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getAllStudents}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList)