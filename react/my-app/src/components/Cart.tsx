import axios from "axios";
import * as React from "react";
import { useContext, useState } from "react";
import { Accordion, Alert, Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//import "./Cart.css";

interface ICartProps {}
interface Cart {
  cartId: number;
  userId: number;
  pizzaId: number;
  pizzaName: string;
  ingredientId: number[];
  total_price: number;
}

const Cart: React.FunctionComponent<ICartProps> = (props) => {
  const navigate = useNavigate();
  const showCart_url = "http://localhost:8080/cart/getCart/";
  const placeOrder_url = "http://localhost:8080/orders/";
  const cart_id = localStorage.getItem("cartid");
  const [show, setShow] = useState(false);
  const [recievedcart, setRecievedcart] = useState<Array<Cart>>([]);
  const showCart = async () => {
    axios.get(showCart_url + cart_id).then((response) => {
      setRecievedcart(response.data);
      console.log(response.data);
    });
  };

  //todo:pass cartid in url
  const placeOrder = async () => {
    try {
      const response = await axios.post(placeOrder_url + cart_id);
      setShow(true);
    } catch (exception) {
      alert(exception);
    }
  };
  const navigateToHome = async () => {
    navigate("/");
  };

  const totalPrice = recievedcart.reduce(
    (accumulator, item) => accumulator + item.total_price,
    0
  );

  return (
    <>
      <Container>
        <Card
          style={{
            background:
              " linear-gradient(to right, rgb(255, 240, 179), rgb(255, 112, 77))",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            marginTop: "1rem",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            fontWeight: "bold",
          }}
        >
          <Card.Body>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={showCart}>
                  Click to see your cart
                </Accordion.Header>
                <Accordion.Body>
                  {" "}
                  {recievedcart &&
                    recievedcart.map((item: any) => (
                      <Container>
                        <div>
                          <span>Pizza name : {item.pizzaName}</span>
                          <br></br>
                          <span>Toppings : {item.ingredientId.length}</span>
                          <br></br>
                          <span>Total price:{item.total_price}</span>
                        </div>
                        <hr></hr>
                      </Container>
                    ))}
                  <Container>
                    <span style={{ fontWeight: "bold" }}>
                      SubTotal:{totalPrice}
                    </span>
                  </Container>
                </Accordion.Body>
                <Accordion.Body>
                  <Button
                    variant="dark"
                    onClick={() => {
                      placeOrder();
                    }}
                  >
                    Place order
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Container>
      <Alert show={show} variant="success">
        <Container>
          <Alert.Heading>Order placed successfully!!</Alert.Heading>
          <p>
            Your order will reach you in 30-40 minutes. For any queries
            contact:xxxxxxxxxx
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => {
                setShow(false);
                navigateToHome();
              }}
              variant="outline-success"
            >
              Close me y'all!
            </Button>
          </div>
        </Container>
      </Alert>
    </>
  );
};

export default Cart;
