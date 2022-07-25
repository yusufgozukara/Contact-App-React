import React from 'react'

const Table = () => {
  return (
    <div className='tableContainer'>
        <div className="tableDiv">
            <h1>Contacts</h1>
            <table className='table'>
                <tr>
                    <th>Username</th>
                    <th>Phone Number</th>
                    <th>Gender</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                <tr>
                    <td>John</td>
                    <td>Wick</td>
                    <td>Male</td>
                    <td><i className="fa-solid fa-x"></i></td>
                    <td><i className="fa-solid fa-pen-to-square"></i></td>
                </tr>

            </table>
        </div>

    </div>
  )
}

export default Table