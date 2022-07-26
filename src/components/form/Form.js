import { useContext, useState } from "react";
import { ContactContext } from "../../context/ContactContext";

const Form = () => {
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [gender, setGender] = useState('');
  // console.log(name, phone, gender);

  const {name, setName, phone, setPhone, gender, setGender, handleSubmit, editActive, setEditActive,editContact} =useContext(ContactContext)
  console.log(name )

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setName('');
  //   setPhone('');
  //   setGender('');
    
  // }

  return (
    <div className="formContainer">
      <div className="formDiv">
        <h1>Add Contact</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <select id="cars" value={gender} name="cars" onChange={(e) => setGender(e.target.value)} required>
            <option value="" >
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {editActive ? <button type="submit" onClick={editContact}>Edit</button> : <button type="submit">Add</button>}
          
        </form>
      </div>
    </div>
  );
};

export default Form;
