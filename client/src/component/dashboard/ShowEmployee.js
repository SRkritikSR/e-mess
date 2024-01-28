import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { API } from '../../config';
import axios from 'axios';
const ShowEmployee = ({ auth: { user } }) => {
    const [edit,setEdit]=useState(false)
    // editData is essentilay a clone of the employees 
    const [employees, setEmployees] = useState([])
    useEffect(() => { fetchEmployees() }, [])
    const fetchEmployees = async () => {
        try {
            const result = await axios.get(`${API}/employee?all=true`)
            console.log("The details of all employees fetched are",result)
            if (result.status==200) setEmployees(result.data)
        }
        catch (error) {
            console.log("Error fetching employee for admin", error)
        }
    }

    const editData=(e,index)=> {
        console.log("dATA EDITING")
    //   setEmployees((previous)=> {
    //     const employee=previous[index]
    //     return {
    //         ...employee,[e.target.name]:e.target.value
    //     }

    //   })  
    }
    return (
        <div className='container w-100 my-1'>
            <div className='row'>
                <button className={`btn ${edit?"btn-outline-success":"btn-outline-info"} col-sm-3 my-3`} onClick={(e)=> {setEdit((prev)=> !prev)}}>{edit?"Save":"Edit"}</button>
                <table className='table table-responsive-md' style={{ color: "black" ,overflowX: 'auto'}}>
                    <thead>
                        <tr>
                            <th  scope='column '>S.No. </th>
                            <th scope='column'>Name</th>
                            <th scope='column' className='text-center'>Mess Name</th>
                            <th scope='column' className='text-center'>Role</th>
                            <th scope='column' className='text-center'>email</th>
                            <th scope='column' className='text-center'>Date Joined</th>
                            <th scope='column' className='text-center'>phonenum</th>
                            <th scope='column' className='text-center'>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => {
                            return (
                                <tr className=''>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{employee.name}</td>
                                    <td className='text-center' ><input type='text' onChange={(e)=>editData(e,index)} disabled={!edit} name= "messName" value={employee.messName}/></td>
                                    <td className='text-center'><input type='text'onChange={(e)=>editData(e,index)} disabled={!edit} name="role" value={employee.role}/></td>
                                    <td className='text-center'>{employee.email}</td>
                                    <td className='text-center'>{new Date(employee.date).toLocaleString()}</td>
                                    <td itemType="tel" className='text-center'>{employee.phonenum}</td>
                                    <td className='text-center'><input type='text' onChange={(e)=>editData(e,index)} disabled={!edit} name="salary" value={employee.salary}/></td>
                                </tr>
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