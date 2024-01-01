import React, { useEffect, useState } from 'react'
import StudentService from '../Services/StudentService';
import { Link } from 'react-router-dom';

const Home = () => {

    const [students, setstudent] = useState([]);

    const [msg, setMsg] = useState("");
    useEffect(() => {
        init();
    }, [])

    const init = () => {
        StudentService
            .getAllStudents()
            .then((res) => {
                setstudent(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const deleteStudent=(id)=>{
        StudentService
        .deleteStudent(id)
        .then((res)=>{
            // setMsg("delete successfully")
            init();
        })
        .catch((error)=>{
            console.log(error);
        })

    }

    return (
        <>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>
                        <Link to={"/addStudent"} type="button" class=" btn btn-outline-warning mb-2">Add Student</Link>
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                All Student List
                                {/* {msg && <p className="fs-4 text-center text-success">{msg}</p>} */}
                            </div>
                            <div className="card-body">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr. No.</th>
                                            <th scope="col">Student's Name</th>
                                            <th scope="col">studet's Address</th>
                                            <th scope="col">Student's Email</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map((s, num) => {
                                            return <tr>
                                                <td>{num + 1}</td>
                                                <td>{s.name}</td>
                                                <td>{s.address}</td>
                                                <td>{s.email}</td>
                                                <td className='d-grid gap-2  mx-auto'>
                                                    <Link to={"/editStudent/" + s.id} type="button" class=" btn btn-outline-success ">Edit</Link>
                                                    <button type="button" class=" btn btn-outline-danger " onClick={()=>deleteStudent(s.id)}>Delete</button>
                                   
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home