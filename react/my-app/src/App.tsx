import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import PizzaContent from "./components/PizzaContent";
import { Button, Container, Navbar } from "react-bootstrap";
import Cart from "./components/Cart";
import SignUpPage from "./components/SignUpPage";
import ViewOrder from "./components/ViewOrder";
function App() {
  const navigate = useNavigate();

  const navigateCart = () => {
    navigate("/cart");
  };

  const navigateSignUpPage = () => {
    // 👇️ navigate to /contacts
    navigate("/signuppage");
  };

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };
  const navigateViewOrders = () => {
    // 👇️ navigate to /
    navigate("/orders");
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">PIZZAA!!</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button
              variant="outline-light"
              onClick={navigateCart}
              style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
            >
              Cart
            </Button>
            <Button
              variant="outline-light"
              onClick={navigateHome}
              style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
            >
              Home
            </Button>
            <Button
              variant="outline-light"
              onClick={navigateSignUpPage}
              style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
            >
              SignUp
            </Button>
            <Button
              variant="outline-light"
              onClick={navigateViewOrders}
              style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
            >
              Orders
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <div>
          <Routes>
            <Route path="/signuppage" element={<SignUpPage />} />
            <Route path="/" element={<PizzaContent />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<ViewOrder />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
