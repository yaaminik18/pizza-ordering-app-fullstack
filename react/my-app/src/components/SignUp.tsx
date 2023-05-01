import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

interface ISignUpProps {}
type User = {
  email: string;
  password: string;
  fullname: string;
  gender: string;
};

const SignUp: React.FunctionComponent<ISignUpProps> = (props) => {
  const url = "http://localhost:8080/auth/signup";
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    fullname: "",
    gender: "",
  });
  const setNewValue = (id: string, newValue: string) => {
    setUser((prevState) => ({ ...prevState, [id]: newValue }));
  };
  const createUser = async () => {
    try {
      const response = await axios.post(url, user);
      localStorage.setItem("user", response.data);
      console.log(response.data);
      alert(`You are now signed up as ${response.data.user.fullname}`);
    } catch (exception) {
      alert("This email id already exist");
    }
  };

  return (
    <>
      <Form style={{ fontWeight: "bold" }}>
        <Form.Group className="mb-3" controlId="formGroupEmails">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="form-control"
            type="email"
            placeholder="Enter email"
            value={user.email}
            onChange={(e) => setNewValue("email", e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPasswords">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="form-control"
            type="password"
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => setNewValue("password", e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupFullName">
          <Form.Label>FullName</Form.Label>
          <Form.Control
            className="form-control"
            type="FullName"
            placeholder="FullName"
            onChange={(e) => setNewValue("fullname", e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            className="form-control"
            type="Gender"
            placeholder="Gender"
            onChange={(e) => setNewValue("gender", e.target.value)}
          />
        </Form.Group>
        <Button
          variant="dark"
          onClick={() => {
            createUser();
          }}
        >
          SignUp
        </Button>
      </Form>
    </>
  );
};

export default SignUp;
{
  /*const[email_,setEmail]=useState('');
  const[password_,setPassword]=useState('');
  const[fullname_,setFullname]=useState('');
  const[gender_,setGender]=useState('');

  const handleEmail=((e:React.ChangeEvent<HTMLInputElement>)=>{
    
    setEmail(e.target.value);
  })
  const handlePassword=((e:React.ChangeEvent<HTMLInputElement>)=>{
    
    setPassword(e.target.value);
    console.log(e.target.value);
  })
  const handleFullname=((e:React.ChangeEvent<HTMLInputElement>)=>{
   
    setFullname(e.target.value);
    console.log(e.target.value)
  })
  const handleGender=((e:React.ChangeEvent<HTMLInputElement>)=>{
   
    setGender(e.target.value);
  })
const PostSignUp=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    axios.post('http://localhost:8080/auth/signup',{
      fullname:fullname_,
      email:email_,
      password:password_,
      gender:gender_
    }).then((response)=>{
    console.log(response)
    })
  }
*/
}
