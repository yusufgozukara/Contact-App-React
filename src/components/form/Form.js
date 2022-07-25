import { useState } from "react";

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  console.log(name, phone, gender);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setPhone('');
    setGender('');
    
  }

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
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <select id="cars" name="cars" onChange={(e) => setGender(e.target.value)}>
            <option value="gender" selected disabled>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
