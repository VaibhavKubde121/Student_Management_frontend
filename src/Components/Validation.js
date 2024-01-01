
import React from 'react'

const Validation = (student) => {
    let error = {}

    if (!student.name) {
        error.name = "Name Required"
    }
    else if (student.name.length < 5) {
        error.name = "Name must be more than 5 Char"
    }

    else if(!student.address)
    {
        error.address="Address Required"
    }
    else if(!student.email)
    {
        error.email="Email Required"
    }

    return error;

}

export default Validation