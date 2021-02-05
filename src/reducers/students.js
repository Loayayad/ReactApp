export const students = (state={},action)=>{
    console.log(state)
    switch(action.type){
        case'ALL_STUDENTS_LIST':{
            return {...state,list:action.payload}
        }
        case 'STUDENTS_LIST':{
            return {...state,list:action.payload}
        }

        case 'STUDENT_DETAILS':{    
            return {...state,details:action.payload}
        }

        case 'CLEAR_STUDENT_DETAILS':{
            return{...state,details:action.payload}
        }

        case 'STUDENT_ADD':{
            return{...state,details:action.payload}
        }

        case 'STUDENT_DELETE':{
            return{...state,details:action.payload}
        }
        default:{
            return state
        }

    }
}