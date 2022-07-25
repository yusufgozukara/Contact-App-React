import React from 'react'

const Form = () => {
  return (
    <div className='formContainer'>
        <div className='formDiv'>
            <h1>Add Contact</h1>
            <form>
                <input type="text"  placeholder='Name'  />
                <input type="text" name="" id=""placeholder='Phone number'/>
                <select id="cars" name="cars">
                    <option value="gender" disabled>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <button type='submit'>Add</button>
                
            </form>

        </div>

    </div>
  )
}

export default Form