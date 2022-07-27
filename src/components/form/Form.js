import { useContext} from "react";
import { ContactContext } from "../../context/ContactContext";

const Form = () => {

  const {name, setName, phone, setPhone, gender, setGender, handleSubmit, editActive,editContact, createUser} =useContext(ContactContext)

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
          {editActive ? <button type="submit" onClick={editContact}>Edit</button> : <button type="submit" onClick={createUser}>Add</button>}
          
        </form>
      </div>
    </div>
  );
};

export default Form;
