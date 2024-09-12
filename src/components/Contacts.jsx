import React, { useState, useEffect } from 'react';
import { getContacts, deleteContacts, updateContact } from '../services/allApis';
import Table from 'react-bootstrap/Table';
import { FloatingLabel, Modal, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

function Contacts({ data, response}) {

  const [contactList, setContactList] = useState([]);
  const [contactDetails, setContactDetails] = useState(data);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getData();
  }, [response]);

  const getData = async () => {
    try {
      const result = await getContacts();
      if (result.status === 200) {
        setContactList(result.data);
      } else {
        toast.error("Failed to fetch contacts");
      }
    } catch (error) {
      toast.error("An error occurred while fetching contacts");
    }
  };

  const delContacts = async (id) => {
    try {
      const result = await deleteContacts(id);
      if (result.status === 200) {
        getData();
        toast.success("Contact removed!");
      } else {
        toast.error("Failed to remove contact");
      }
    } catch (error) {
      toast.error("An error occurred while removing the contact");
    }
  };

  const handleShow = (contact) => {
    setContactDetails(contact);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleEdit = async () => {
      const res = await updateContact(contactDetails.id, contactDetails);
      if (res.status === 200) {

        setContactList(contactList.map(contact =>
          contact.id === contactDetails.id ? contactDetails : contact
        ));
        
        toast.success("Contact updated successfully");
        
        handleClose();
        
      } else {
        toast.error("Failed to update contact");
      }
    } 
  

  return (
    <>
      <h1 className='m-4 text-bolder text-center text-info'>ALL CONTACTS</h1>
      <div className='border border-3 border-black p-3'>
        {contactList.length > 0 ? (
          <div className='row'>
            <Table className='table bordered'>
              <thead>
                <tr>
                  <th>FIRST NAME</th>
                  <th>SECOND NAME</th>
                  <th>PHONE NUMBER</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {contactList.map((item, index) => (
                  <tr key={index}>
                    <td className='m-2'>{item.fname}</td>
                    <td>{item.sname}</td>
                    <td>{item.number}</td>
                    <td>
                      <button className='btn' onClick={() => handleShow(item)}>
                        <i className="fa-regular fa-pen-to-square" />
                      </button>
                    </td>
                    <td>
                      <button className='btn' onClick={() => delContacts(item.id)}>
                        <i className="fa-solid fa-trash fa-xl" style={{ color: "#e1091f" }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Contact</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={contactDetails?.fname}
                    onChange={(e) => setContactDetails({ ...contactDetails, fname: e.target.value })}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Last Name" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={contactDetails?.sname}
                    onChange={(e) => setContactDetails({ ...contactDetails, sname: e.target.value })}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Phone Number" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    value={contactDetails?.number}
                    onChange={(e) => setContactDetails({ ...contactDetails, number: e.target.value })}
                  />
                </FloatingLabel>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>Cancel</Button>
                <Button variant="outline-primary" onClick={handleEdit}>Update</Button>
              </Modal.Footer>
            </Modal>
          </div>
        ) : (
          <h2 className='text-center text-danger'>No Contacts Available</h2>
        )}
      </div>
    </>
  );
}

export default Contacts;


