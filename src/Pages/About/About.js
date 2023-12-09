import React from 'react'
import {Card , Container} from 'react-bootstrap';
import Avatar from '../../assets/Avatar2.png'
const About = () => {
    return (
        <Container className='d-flex justify-content-center align-items-center w-50 p-5'> 
        <Card  >
          <Card.Img style={{width:"300px",height:"300px",border:"none"}} variant="top" src={Avatar}/>
          <Card.Body>
            <Card.Title style={{fontSize:"30px"}}>About Me</Card.Title>
            <Card.Text style={{fontSize:"20px"}}>
              Hi , I am Akash Founder of The Coding Engineer. I am an aspiring MERN developer , 
              I am Intrested in listining audio books, Coding in night, creating Youtube Videos
               I will post my coding videos here with blogs. You guys just sit back read the blog, watch the videos,
               start coding.....
            </Card.Text>
          </Card.Body>
        </Card>
        </Container>
      );
}

export default About
