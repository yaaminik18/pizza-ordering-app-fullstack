import * as React from 'react';
import {  Container,  Tab, Tabs } from 'react-bootstrap';
import Login from './Login';
import SignUp from './SignUp';

interface ISignUpProps {
}

const SignUpPage: React.FunctionComponent<ISignUpProps> = (props) => {
  
  return(
   
    <>
    <Container style={{background:' linear-gradient(to right, rgb(255, 240, 179), rgb(255, 112, 77))',paddingTop:'1rem',paddingBottom:'1rem',marginTop:'1rem',boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}}>
    <Tabs style={{fontWeight:'bold'}}
       defaultActiveKey="SignUp"
       id="uncontrolled-tab-example"
       className="mb-3"
    >
      <Tab eventKey="SignUp" title="SignUp"  >
      <Container>
      <SignUp/>
      </Container>
      </Tab>


      <Tab eventKey="Login" title="Login" >
      <Container>
   <Login/>
      </Container>
      </Tab>
    </Tabs>
    </Container>
    </>
  ) ;
};

export default SignUpPage;