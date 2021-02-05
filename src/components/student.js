
import { Link } from "react-router-dom"

const Student = ({ studentInfo }) => {

    if (studentInfo) {
        return (
            <div className="card w-75 mb-3 mx-auto text-white bg-dark text-center">

                <Link className="text-white text-decoration-none" to={`students/${studentInfo.id}`}>
                    <span><h2>Student ID: {studentInfo.id}</h2></span>
                    <span><h3>Student Name: {studentInfo.name}</h3></span>
                </Link>

            </div>
        )
    }


}

export default Student