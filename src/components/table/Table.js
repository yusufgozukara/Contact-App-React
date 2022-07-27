import React, { useContext } from 'react'
import { ContactContext } from '../../context/ContactContext'

const Table = () => {
    const {contact, handleDelete,handleEdit} = useContext(ContactContext);

  return (
    <div className='tableContainer'>
        <div className="tableDiv">
            <h1>Contacts</h1>
            <table className='table'>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Phone Number</th>
                    <th>Gender</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>

                {contact.map((user) => (
                    
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.gender}</td>
                    <td onClick={() => handleDelete(user.id)}><i className="fa-solid fa-x"></i></td>
                    <td onClick={() => handleEdit(user)}><i className="fa-solid fa-pen-to-square"></i></td>
                </tr>
                ))}

                
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Table