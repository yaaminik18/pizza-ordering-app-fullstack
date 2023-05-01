import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface ILoginProps {}
type User = {
  email: string;
  password: string;
};

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const url = "http://localhost:8080/auth/login";
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });
  const setNewValue = (id: string, newValue: string) => {
    setUser((prevState) => ({ ...prevState, [id]: newValue }));
  };
  const loginUser = async () => {
    try {
      const response = await axios.post(url, user);
      localStorage.setItem("user", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userid", response.data.id);
      console.log(response.data);
      console.log(response.data.id);
      alert(`You are now logged in! as ${response.data.user.email}`);
    } catch (exception) {
      alert(exception);
    }
  };
  return (
    <>
      <Form style={{ fontWeight: "bold" }}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user.email}
            onChange={(e) => setNewValue("email", e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="off"
            value={user.password}
            onChange={(e) => setNewValue("password", e.target.value)}
          />
        </Form.Group>
        <Button
          variant="dark"
          onClick={() => {
            loginUser();
          }}
        >
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
