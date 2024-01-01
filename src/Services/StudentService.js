import axios from "axios";

const REST_API = "http://localhost:9091"

class StudentService {
    getAllStudents() {
        return axios.get(REST_API + "/Student");
    }

    getStudentById(id) {
        return axios.get(REST_API + "/Student/" + id);
    }

    addStudent(student) {
        return axios.post(REST_API + "/add", student);
    }

    deleteStudent(id) {
        return axios.delete(REST_API + "/delete/" + id);
    }

    updateStudent(student) {
        return axios.post(REST_API + "/update/" + student.id, student);
    }
}

export default new StudentService();