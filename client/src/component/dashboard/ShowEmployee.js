
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { API } from '../../config';
import axios from 'axios';
const EditableRow=({employee,index,onSave}) => {
    // to handle the changes in the data
    const [editData,setEditData]=useState(employee)
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
        <td className='text-center' ><input type='text' onChange={handleInputChange}  name= "messName" value={editData.messName}/></td>
        <td className='text-center'><input type='text' onChange={handleInputChange} name="role" value={editData.role}/></td>
        <td className='text-center'>{editData.date}</td>
        <td className='text-center'>{editData.email}</td>
        <td className='text-center'><input type='text' onChange={handleInputChange}  name="salary" value={editData.salary}/></td>
        <td itemType="tel" className='text-center'>{editData.phonenum}</td>
        <td className='text-center'><button onClick={()=> onSave(editData)}>Save</button></td>
    </tr>
    )
}
const DisplayRow=({employee,index,onEdit})=> {

    // to display read only rows
    return (
        <tr className=''>
            <th scope='row'>{index + 1}</th>
            <td>{employee.name}</td>
            <td className='text-center' >{employee.messName}</td>
            <td className='text-center'>{employee.role}</td>
            <td className='text-center'>{new Date(employee.date).toLocaleString()}</td>
            <td className='text-center'>{employee.email}</td>
            <td className='text-center'>{employee.salary}</td>
            <td itemType="tel" className='text-center'>{employee.phonenum}</td>
            <td className='text-center'><button onClick={onEdit}>Edit</button></td>
        </tr>
        )
}

const ShowEmployee = ({ auth: { user } }) => {
    const [editIndex,setEditIndex]=useState(-1)
    // editData is essentilay a clone of the employees 
    const [employees, setEmployees] = useState([])
    useEffect(() => { fetchEmployees() }, [])
    const fetchEmployees = async () => {
        try {
            const result = await axios.get(`${API}/employee?all=true`)
            if (result.status==200) setEmployees(result.data)
        }
        catch (error) {
            console.log("Error fetching employee for admin", error)
        }
    }
    const handleEdit=(index)=> {
        
        setEditIndex(index)
    } 
    const handleSave=(data)=> {
        updateEmployees(data)
        
    }
    const updateEmployees=async(data)=> {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body=data
            const result=await axios.put(`${API}/employee`,body,config)
            if (result.status==200) {
                const newData=employees
                newData[editIndex]=body
                setEmployees(newData)
                alert("Update Successful")
                setEditIndex(-1)
            }


        }
        catch (error) {
            console.error(error)
            alert("Updated Unsuccessfull")
        }
    }
    return (
        <div className='container w-100 my-1'>
            <div className='row'>
                <table className='table table-responsive-sm' style={{ color: "black" ,overflowX: 'auto'}}>
                    <thead>
                        <tr>
                            <th  scope='column '>S.No. </th>
                            <th scope='column'>Name</th>
                            <th scope='column' className='text-center'>Mess Name</th>
                            <th scope='column' className='text-center'>Role</th>
                            <th scope='column' className='text-center'>Date Joined</th>
                            <th scope='column' className='text-center'>email</th>
                            <th scope='column' className='text-center'>salary</th>
                            <th scope='column' className='text-center'>phonenum</th>
                            <th scope='column' className='text-center'>Edits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => {
                            
                            return index===editIndex ? (
                                <EditableRow employee={employee} index={index} onSave={(editData)=>handleSave(editData)}/>                            
                                ):(
                                    <DisplayRow employee={employee} index={index} onEdit={()=>handleEdit(index)}/>
                                )
                            })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
ShowEmployee.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
    {
        auth: state.auth
    });

export default connect(mapStateToProps)(ShowEmployee)