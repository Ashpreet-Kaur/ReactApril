import React from 'react'
import students from '../Data/students'

const StudentsPage = () => {
    
  return (
    <>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>CITY</th>
                    <th>AGE</th>
                    <th>COURSE</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((student)=>{
                        return (
                          
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.city}</td>
                                    <td>{student.age}</td>
                                    <td>{student.course}</td>
                                </tr>
                           
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default StudentsPage