import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
  }
  from 'mdb-react-ui-kit';
import axios from "axios";

function SignupCard() {
    localStorage.removeItem("authToken");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/api/user/signup", {
                username,
                email,
                password,
            });

            const token = response.data.token;
            localStorage.setItem("authToken", token);
            window.location.href = "/";
        } catch (err) {
            console.log(err);
            alert(err.response.data.msg);
        }
    }

    return (
        <MDBContainer>
        <form onSubmit={handleSubmit}>
        <MDBCard className='text-black' style={{borderRadius: '25px'}}>
            <MDBCardBody>
              <MDBRow className='align-items-center'>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
    
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
    
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Your Username' id='form1' type='text' value={username} onChange={(event) => setUsername(event.target.value)} className='w-100'/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg'/>
                    <MDBInput label='Your Email' id='form2' type='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg'/>
                    <MDBInput label='Password' id='form3' type='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size='lg'/>
                    <MDBInput label='Repeat your password' id='form4' type='password'/>
                  </div>
    
                  <div className='mb-4'>
                    <p>Already a member? <a href="/login">Login</a></p>
                  </div>
    
                  <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>
    
                </MDBCol>
    
                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                  <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
                </MDBCol>
    
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </form>
        </MDBContainer>
      );
}

export default SignupCard;