import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
    
    <div className='p-4 d-flex align-items-center' style={{height:'80vh',backgroundColor:"black"}}>
      <div className='w-75 shadow p-3 justify-content-center align-items-center' style={{marginLeft:"100px"}}>
      <Row>
      <Col className='cols=6' sm={12} md={12}>
        <h3 className='text-center text-white m-5'><i className="fa-solid fa-address-book fa-beat fa-2xl m-3 text-center" style={{color: "#7f0b17",}} />
          Contact Management</h3>
          <p  className='justify-content-center text-white align-items-center p-5 m-5 container'>A contacts manager for business can 
            help you keep track of important contacts, manage lists, and share information
             with colleagues. It can also help you mark contacts, add notes, and import/export lists.
              With a contacts manager, you can easily organize and manage your contacts.Automating contact management is the key to building strong 
              customer relationships at scale.</p>
             <div className='text-center'>
              <Link to={'/home'} className='btn btn-danger'>Let's Go</Link>
             

      </div>
      </Col>
      </Row>
      
             </div>
      
     
      </div>
      <h3 className='text-center text-danger p-3 fs-2'>Features</h3>
      <div className='d-flex justify-content-around p-5'>
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://cdnsm5-ss10.sharpschool.com/UserFiles/Servers/Server_415374/Image/News/2016/September/Update%20Contact%20Information.jpg" />
      <Card.Body>
        <Card.Title className='text-warning text-bolder fs-3'>Update Contacts</Card.Title>
        <Card.Text>
        You can add, update, or remove phone numbers on your Google Account. Phone numbers are used for different reasons, and you have controls to manage how your numbers are used.

        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://icons.iconarchive.com/icons/ampeross/qetto-2/256/add-contact-icon.png" />
      <Card.Body>
        <Card.Title className='text-warning text-bolder fs-3'>Add Contacts </Card.Title>
        <Card.Text>
          Open the Contacts app, tap the Add icon, and enter the contact's name, email, or phone number. You can also add a photo, notes, and more.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://www.mobikin.com/d/file/data-clean/delete-contacts-on-android.jpg" />
      <Card.Body>
        <Card.Title className='text-warning text-bolder fs-3'>Remove Contacts</Card.Title>
        <Card.Text>
        There is a list of sharing contacts on my Camera APP, Google Photos App and Library that I wouldn't wan't to share photos with. Some sadly have passed away and others I have lost contact with. I have tried reinstalling apps, but it didn't help.

        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div>
        <Row>
          <Col sm={12} md={6}>
          <h3 className='p-2 m-3'>Simple and Faster</h3>
          <p className='justify-content p-2 m-3'>User-Friendly Interface: A clear, intuitive interface allows users to quickly add, edit, and access contact information without a steep learning curve.

Quick Search and Filter Options: Efficient search and filtering features help users find specific contacts swiftly, even if they have a large database.</p>
          </Col>
          <Col className='p-3'>
          <iframe width="500" height="300" src="https://www.youtube.com/embed/RZFBff-Aj1k?autoplay" title="Video Tutorial: Contact Management [2024]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </Col>
        </Row>
      </div>
    </>
  )
}

export default Landing
