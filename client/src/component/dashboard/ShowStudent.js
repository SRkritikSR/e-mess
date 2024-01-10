import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { API } from '../../config';
import axios from 'axios';
const ShowStudent = ({ auth: { user } }) => {
    const [students, setStudents] = useState([])
    const fetchStudents = async () => {
        try {
            const result = await axios.get(`${API}/student?all=true`)
            console.log("The details of all students fetched are",result)
            if (result.status==200) setStudents(result.data)
        }
        catch (error) {
            console.log("Error fetching student for admin", error)
        }
    }
    useEffect(() => { fetchStudents() }, [])
    return (
        <div className='container w-100'>
            <div className='row'>
                <table className='table table-responsive-md' style={{ color: "black" }} >
                    <thead>
                        <tr>
                            <th  scope='column '>S.No. </th>
                            <th scope='column'>Name</th>
                            <th scope='column' className='text-center'>Year</th>
                            <th scope='column' className='text-center'>Branch</th>
                            <th scope='column' className='text-center'>email</th>
                            <th scope='column' className='text-center'>Date Joined</th>
                            <th scope='column' className='text-center'>Credits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => {
                            return (
                                <tr className=''>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{student.name}</td>
                                    <td className='text-center' >{student.year}</td>
                                    <td className='text-center'>{student.branch}</td>
                                    <td className='text-center'>{student.email}</td>
                                    <td className='text-center'>{new Date(student.date).toLocaleString()}</td>
                                    <td className='text-center'>{student.credits}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
ShowStudent.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
    {
        auth: state.auth
    });

export default connect(mapStateToProps)(ShowStudent)