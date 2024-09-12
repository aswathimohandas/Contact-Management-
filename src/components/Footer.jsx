import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className='bg-light py-2 container-fluid'>
      <Row>
          <Col sm={12} md={5}>
          <h3 className='text-info'>Contact Management</h3>
          <p className='aligntext-center'>A contacts manager for business can 
            help you keep track of important contacts, manage lists, and share information
             with colleagues. It can also help you mark contacts, add notes, and import/export lists.
              With a contacts manager, you can easily organize and manage your contacts.Automating contact management is the key to building strong 
              customer relationships at scale.</p>
  
          </Col>
          <Col sm={12} md={2}>
          <h3>Link</h3>
          <div className='d-grid'>
            <Link to={'/'}>Landing</Link>
            <Link to={'/Home'}>Home</Link>
          </div>
          </Col>
          <Col sm={12} md={5}>
          <h3>Feedback</h3>
          <input type="textarea" className='form-control'/>
          <button className='btn btn-info mt-2'>Send</button>
          </Col>
      </Row>
      </div>
      
    </>
  )
}

export default Footer

