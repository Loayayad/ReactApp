export const studentDetails = (state = null, action) => {

    if (action.type === "STUDENT_DETAILS")
        return action.payload

    return state
}