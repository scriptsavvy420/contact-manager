import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableBody, TableHead, useMediaQuery } from '@mui/material';

export default function ContactList(props) {

    const {contact,removeContact}= props;
        console.log(contact);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const contactRows = contact.map((val, index) => (
    <TableRow key={index}>
      <TableCell>{val.data.name}</TableCell>
      <TableCell>{val.data.email}</TableCell>
      <TableCell>  <span onClick={()=>removeContact(val.id)}><DeleteIcon fontSize='large' className='deleteIcon'></DeleteIcon></span></TableCell>
    
    </TableRow>
  ));

  return (
   <>
    <div className="card-contact">
      <div className="contactCard">
        {isSmallScreen ? (
          // For small screens, display a simple list
          <ul>{contact.map((val, index) => <li key={index}>{val.name}: {val.email}</li>)}</ul>
        ) : (
          // For larger screens, display a table
           
          <TableContainer component={Paper}>
            <Table>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell></TableCell>                
              </TableRow>
            <TableBody>
            {contactRows}
            </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
   </>
  );
}
