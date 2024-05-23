import axios from "axios";

export const updataStudent = ({ id, data }) =>
    axios.patch('http://localhost:3000/students/${id}', data);