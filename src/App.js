import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import Table from './components/table/Table';
import { ContactContext } from './context/ContactContext';
import {db} from './store/firebaseConfig';
import {collection, getDocs, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore';

function App() {


  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState([]);
  const [editActive, setEditActive] = useState(false);
  const [editId, setEditId] = useState('');

  // const [newName, setNewName] = useState('');
  // const [newAge, setNewAge] = useState('');
 

  const contactCollectionRef = collection(db, 'contacts')
  const getContactDb = async () => {
    const data = await getDocs(contactCollectionRef);
    setContact(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
  }

  useEffect(() => {
    getContactDb();

  }, [])
  


  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {name:name, phone:phone, gender:gender, id:new Date().getTime()}
    console.log(newObj.id);
    setContact([...contact, newObj])
    setName('');
    setPhone('');
    setGender('');
    
  }

  const handleDelete = async (id) => {
    console.log(id);
    setContact(contact.filter((user)=> user.id!==id ));
    const userDoc = doc(db, 'contacts', id);
    await deleteDoc(userDoc);
    // getContactDb();   ** doğrusu bu...
  }

  const handleEdit = (user) => {
    setEditActive(true)
    setName(user.name);
    setEditId(user.id)
    setPhone(user.phone);
    setGender(user.gender);
  }

  // const editContact = async (e, id, name, phone, gender) => {
  //   e.preventDefault();
  //  (contact.filter((con) => con.id == editId)).map((con) => {con.name=name; con.phone=phone; con.gender=gender})
  //   setEditActive(false);
  //   setName('');
  //   setPhone('');
  //   setGender('');
  //   setEditId('');
  // }
  const editContact = async(e) => {
    e.preventDefault();
  //  (contact.filter((con) => con.id == editId)).map((con) => {con.name=name; con.phone=phone; con.gender=gender})
  const userDoc = doc(db, 'contacts', editId);
  const newUser = {name:name, phone:phone, gender:gender}
  await updateDoc(userDoc,newUser)
  getContactDb();
  setName('');
  setPhone('');
  setGender('');
  setEditId('');
  setEditActive(false);
  }

  const createUser = async () => {
    await addDoc(contactCollectionRef, {name: name, phone: phone, gender:gender });
  }

  return (
    <div className='container'>
      <ContactContext.Provider value={{name, setName, phone, setPhone, gender, setGender, handleSubmit, contact, setContact, handleDelete, handleEdit,editActive, setEditActive, editContact, createUser}}>
      <Form/>
      <Table/>
      </ContactContext.Provider>
    </div>
  );
}

export default App;
