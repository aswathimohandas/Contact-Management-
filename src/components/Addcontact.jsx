import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addContact } from '../services/allApis';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';



function Addcontact({res}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [contact,setContact]=useState({
    fname:"",sname:"",number:""
})

  const handleAdd=async()=>{
    console.log(contact);
    const {fname,sname,number}=contact
    if(!fname || !sname || !number){
        toast.warning("enter valid input")
    }
    else{
       const result=await addContact(contact)
       console.log(result);
       if(result.status==201){
        setContact([contact, res.data]);
        console.log("Success toast will be shown")

        toast.success('Contact added!!')
        handleClose()
        setContact({
            fname:'',sname:'',number:''
        })
        res(result)
       }
       else{
        toast.error('adding failed')
       }
       
    }
    
  }
  return (
    <>
    <div style={{height:'80vh'}}>
      <h4>Add Contacts</h4>
        <button className='btn' onClick={handleShow}>
            <i className="fa-solid fa-circle-plus" style={{color: "#FFD43B",}}/>
            </button>
    
          <Modal
            show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title className='text-info'>Add your Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <FloatingLabel controlId="floatingInput" label="Enter First Name" className="mb-3" onChange={(e)=>{setContact({...contact,fname:e.target.value})}}>
            <Form.Control type="text" placeholder="1" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Enter Last Name" className="mb-3" onChange={(e)=>{setContact({...contact,sname:e.target.value})}}>
            <Form.Control type="text" placeholder="1" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Enter Contact Number" className="mb-3" onChange={(e)=>{setContact({...contact,number:e.target.value})}}>
            <Form.Control type="number" placeholder="1" />
          </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAdd}>Add</Button>
            </Modal.Footer>
          </Modal>
    </div>
    </>
  )
}

export default Addcontact
