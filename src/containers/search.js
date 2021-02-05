import { useRef } from "react"
import { getStudents } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Search = (props) => {

    const name = useRef()
    
    const searchByname = () => {
        console.log(name.current.value)
        props.getStudents(name.current.value)
    }

    return <div className="col text-center w-75 mx-auto mt-4">
        <div className="form-group">
            <input ref={name} className="form-control rounded-pill text-center" type="text" placeholder="enter Name" />
        </div>
        <div className="form-group">
            <input className="btn btn-dark w-25" type="button" value="search"
            onClick={searchByname}
            />
        </div>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudents}, dispatch)
}
export default connect(null, mapDispatchToProps)(Search)
