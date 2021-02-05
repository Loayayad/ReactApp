
const baseURL = "http://localhost:3001/students"

export const getAllStudents = async() => {
    let payload;

    try {
        let response = await fetch(`${baseURL}`)
        payload = await response.json()
        console.log(payload)
        
    } catch (error) {
        console.log(error)
    }
    
    return {
        type: 'ALL_STUDENTS_LIST',
        payload
    }

}

export const getStudents = async(name) => {
    let payload;

    try {
        let response = await fetch(`${baseURL}?name=${name}`)
        payload = await response.json()
        console.log(payload)
        
    } catch (error) {
        console.log(error)
    }
    
    return {
        type: 'STUDENTS_LIST',
        payload
    }

}

export const getStudentDetails = async (id) => {
    let payload;

    try {
        let response = await fetch(`${baseURL}/${id}`)
        payload = await response.json()
        console.log(payload)
        
    } catch (error) {
        console.log(error)
    }
    
    return {
        type: 'STUDENT_DETAILS',
        payload
    }

}

export const clearStudentDetails = ()=>{
    return {
        type:'CLEAR_STUDENT_DETAILS',
        payload:null
    }
}

export const addStudent = async(student) =>{
    let payload;
    let stud = {
        "id": parseInt(student.id),
        "name": student.username,
        "phone": student.phone,
        "age": parseInt(student.age)
    }

    try {
        let options = {
            method: 'POST', 
            headers: { 
                'Content-Type':  
                    'application/json;charset=utf-8' 
            }, 
            body: JSON.stringify(stud) 
        }
        let res = await fetch(`${baseURL}`,options); 
        payload = await res.json() 
        console.log(payload) 

    } catch (error) {
        console.log(error)
    }

    return {
        type: 'STUDENT_ADD',
        payload:null
    }
}


export const deleteStudent = async(id) =>{
    try {
        let options = {
            method: 'DELETE', 
            headers: { 
                'Content-Type':  
                    'application/json;charset=utf-8' 
            }
        }
        let res = await fetch(`${baseURL}/${id}`,options)
        res = await 'resorse deleted..'
        console.log(res);
    } catch (error) {
        console.log(error)
    }
    return {
        type: 'STUDENT_DELETE',
        payload:null
    }
}


