import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  InputGroup,
  Modal,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const styles: { [key: string]: React.CSSProperties } = {
  checkbox: {
    margin: "10px 0",
    padding: "14px 25px",
    backgroundColor: "rgb(238 237 247)",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
};
interface DATA {
  id: any;
  name: string;
}

interface IPizzaContentProps {}

const PizzaContent: React.FunctionComponent<IPizzaContentProps> = (props) => {
  const navigate = useNavigate();

  const url = "http://localhost:8080/cart/add/";
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("userid");

  const [show, setShow] = useState(false);
  const [users, setUsers] = useState<Array<DATA>>([]);
  const [dataId, setDataId] = useState<Array<any>>([]);
  const [showModal, setShowModal] = useState(false);
  const [pizzaid, setPizzaid] = useState(0);
  const [ing, setIng] = useState<Array<number>>([]);
  //const [recievedcart, setRecievedcart] = useState<Array<Cart>>([]);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //get methods for ingredients
  useEffect(() => {
    axios.get("http://localhost:8080/ingredients").then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  //post method to add selected items to cart
  const createCart = async () => {
    console.log(pizzaid);
    console.log(ing);
    try {
      const response = await axios.post(
        url + user_id,
        {
          pizzaId: pizzaid,
          ingredients: ing,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.setItem("cartid", response.data.cartId);
      localStorage.setItem("cart_for_user", response.data);
      console.log(response.data);
      console.log("cart id recieved:" + response.data.cartId);
      navigate("/cart");
    } catch (exception) {
      alert(exception);
      console.log(exception);
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const ingredientId = parseInt(event.target.value);

    if (checked) {
      setIng([...ing, ingredientId]);
    } else {
      setIng(ing.filter((ing) => ing !== ingredientId));
    }
  };

  const chooseCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(e.target.value);
    if (dataId.includes(id)) {
      const idCollection = dataId.filter((id) => id !== id);
      setDataId(idCollection);
    } else {
      const idCollection = [...dataId];
      idCollection.push(id);
      setDataId(idCollection);
    }
  };

  return (
    <>
      <br />
      <img
        src="https://lapinozpizza.in/assets/wla_new/lapinoz/img/banner1.jpg"
        width="1263"
        height="350"
        alt="pizza"
      />
      <br />
      <br />
      <Container
        className="border d-flex align-items-center justify-content-center"
        style={{
          fontSize: "35px",
          fontWeight: "bold",
          background:
            " linear-gradient(to right, rgb(255, 240, 179), rgb(255, 112, 77))",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          marginTop: "1rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        Menu
      </Container>
      <br />
      <Container
        className="pizza-content"
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          marginTop: "1rem",
        }}
      >
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://static.uengage.in/uploads/5/image-9591-1671431465.jpg"
              />
              <Card.Body>
                <Card.Title>Honey Veggie Pizza!</Card.Title>
                <Card.Text>
                  Super duper tasty pizza, loaded with onions, olive, capsicum
                  and jalapeño, with honey drizzled all over it! / ₹500 /
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={function (event) {
                    handleShow();
                    setPizzaid(1);
                  }}
                >
                  ADD+
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://static.uengage.in/uploads/5/image-8826-1671431564.jpeg"
              />
              <Card.Body>
                <Card.Title>Peppy Paneer Pizza</Card.Title>
                <Card.Text>
                  A nutritious combination of marinated paneer cubes with diced
                  onions and capsicum is placed on pizza!/ ₹300 /
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={function (event) {
                    handleShow();
                    setPizzaid(2);
                  }}
                >
                  ADD+
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://static.uengage.in/uploads/5/image-2766-1671431588.jpeg"
              />
              <Card.Body>
                <Card.Title>Margherita Pizza</Card.Title>
                <Card.Text>
                  Pizza margherita with a bubbly crust, crushed San Marzano
                  tomato sauce, fresh mozzarella and a drizzle of olive oil!/
                  ₹420 /
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={function (event) {
                    handleShow();
                    setPizzaid(3);
                  }}
                >
                  ADD+
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://static.uengage.in/uploads/5/image-1419-1671096446.jpeg"
              />
              <Card.Body>
                <Card.Title>Paneer Tikka Pizza</Card.Title>
                <Card.Text>
                  An indian variation to the popular italian pizza recipe
                  flavoured with marinated tikka sauce and fresh paneer!/ ₹580 /
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={function (event) {
                    handleShow();
                    setPizzaid(4);
                  }}
                >
                  ADD+
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://static.uengage.in/uploads/5/image-9643-1680605821.jpeg"
              />
              <Card.Body>
                <Card.Title>Mushroom Pizza</Card.Title>
                <Card.Text>
                  A pizza is smothered in sautéed mushrooms, onions and garlic,
                  olives and jalapenos and layers of mozzarella.!/ ₹470 /
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={function (event) {
                    handleShow();
                    setPizzaid(5);
                  }}
                >
                  ADD+
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://static.uengage.in/uploads/5/image-9591-1671431465.jpg"
              />
              <Card.Body>
                <Card.Title>Chicken Pizza!</Card.Title>
                <Card.Text>
                  Super duper tasty pizza, loaded with chicken, olive, capsicum
                  and jalapeño, with honey drizzled all over it! /700/
                </Card.Text>
                <Button
                  variant="primary"
                  id="buttonforadd"
                  onClick={function (event) {
                    handleShow();
                    setPizzaid(6);
                  }}
                >
                  ADD+
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Ingredients</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body
          style={{
            background:
              " linear-gradient(to right, rgb(255, 240, 179), rgb(255, 112, 77))",
          }}
        >
          <InputGroup className="mb-3">
            {users &&
              users.map((item: any) => (
                <div style={styles.checkbox} key={item.id}>
                  <span style={styles.id}>{item.id}</span>
                  <span style={styles.name}>{item.name}</span>
                  <span>
                    <input
                      type="checkbox"
                      value={item.id}
                      onChange={(e) => {
                        chooseCheckbox(e);
                        handleCheckboxChange(e);
                      }}
                      checked={dataId.includes(item.id) ? true : false}
                    />
                  </span>
                </div>
              ))}
            <Button
              variant="dark"
              onClick={() => {
                handleShowModal();
                createCart();
              }}
            >
              Add to Cart
            </Button>
          </InputGroup>
          <InputGroup></InputGroup>
        </Offcanvas.Body>
      </Offcanvas>
      *{/*message that displays when you add to cart*/}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Added to Cart!</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            background:
              " linear-gradient(to right, rgb(255, 240, 179), rgb(255, 112, 77))",
          }}
        >
          The pizza you have selected has been added to your cart. Check your
          cart and place the order and enjoy the yummy snack!!
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            onClick={function (e) {
              handleCloseModal();
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PizzaContent;
