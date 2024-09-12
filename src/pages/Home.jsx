import React,{useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Addcontact from '../components/Addcontact'
import Contacts from '../components/Contacts'



function Home() {

  const [response,setResponse]=useState('')
  const [response2,setResponse2]=useState('')
  return (
   <>
   <div className='d-flex justify-content-between p-4'>
     
    
  </div>
   <div className='container-fluid'>
   <Row>
      <Col sm={12} md={2}>
        <Addcontact res={setResponse} />
      </Col>
      <Col sm={12} md={10}>
      <Contacts response={response} response1={response2}/>
      </Col>
      

    </Row>
   </div>
   </>
  )
}

export default Home
