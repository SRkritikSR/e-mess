import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { API } from '../../config';
import axios from 'axios';
const EditableRow=({student,index,onSave}) => {
    // to handle the changes in the data
    const [editData,setEditData]=useState(student)
    const handleInputChange=(e)=> {
        const {name,value}=e.target
        setEditData((prevData)=> (
            {...prevData,[name]: value}
        ))
    }
    return (
    <tr className=''>
        <th scope='row'>{index + 1}</th>
        <td>{editData.name}</td>
        <td className='text-center' ><input type='text' onChange={handleInputChange}  name= "year" value={editData.year}/></td>
        <td className='text-center'><input type='text' onChange={handleInputChange} name="branch" value={editData.branch}/></td>
        <td className='text-center'>{editData.email}</td>
        <td className='text-center'>{editData.date}</td>
        <td className='text-center'><input type='text' onChange={handleInputChange} name="credits" value={editData.credits}/></td>
        <td className='text-center'><button onClick={()=> onSave(editData)}>Save</button></td>
    </tr>
    )
}
const DisplayRow=({student,index,onEdit})=> {

    // to display read only rows
    return (
        <tr className=''>
            <th scope='row'>{index + 1}</th>
            <td>{student.name}</td>
            <td className='text-center' >{student.year}</td>
            <td className='text-center'>{student.branch}</td>
            <td className='text-center'>{student.email}</td>
            <td className='text-center'>{new Date(student.date).toLocaleString()}</td>
            <td className='text-center'>{student.credits}</td>
            <td className='text-center'><button onClick={onEdit}>Edit</button></td>
        </tr>
        )
}

const ShowStudent = ({ auth: { user } }) => {
    const [students, setStudents] = useState([])
    const [editIndex,setEditIndex]=useState(-1)
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
    const handleEdit=(index)=> {
        setEditIndex(index)
    }
    const handleSave=(data)=> {
        updateStudents(data)
    }
    const updateStudents=async(data)=> {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body=data
            const result=await axios.put(`${API}/student`,body,config)
            if (result.status==200) {
                const newData=students
                newData[editIndex]=body
                setStudents(newData)
                alert("update successful")
                setEditIndex(-1)
            }
            
        }
        catch (error) {
            console.error(error)
            alert("Update Unsuccessful")

        }
    }
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
                            <th scope='column' className='text-center'>Edit Student</th>

                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => {
                            return index===editIndex ? (
                                <EditableRow student={student} index={index} onSave={(editData)=>handleSave(editData)}/>                            
                                ):(
                                    <DisplayRow student={student} index={index} onEdit={()=>handleEdit(index)}/>
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