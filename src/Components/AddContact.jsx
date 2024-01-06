import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";

export default function AddContact({addContact}) {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else {
      setContactData({ ...contactData, email: e.target.value });
    }
  };

  const handleAdd=()=>{
    if(contactData.name===""|| contactData.email===""){
      alert("Please Fill All Details !!!")
    }
    addContact(contactData);
    
    // after sending data form next component
    setContactData({name:"",email:""});
  }

  return (
    <Card className="card">
      <div className="add-contact">Add Contact</div>
      <form action="">
        <CardContent>
          <label className="form-label">Name : </label>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Enter Name"
            value={contactData.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <label className="form-label">Email : </label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={contactData.email}
            onChange={handleChange}
          />
        </CardContent>
      </form>
      <div className="form-btn">
        <Button onClick={handleAdd} className="btn" variant="contained">
          Add Contact
        </Button>
      </div>
    </Card>
  );
}
