import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { Accordion, Button, Card, Container, Table } from "react-bootstrap";

interface IViewOrderProps {}
interface Order {
  userId: number;
  ordered_pizza: string[];
  total: number;
}
const ViewOrder: React.FunctionComponent<IViewOrderProps> = (props) => {
  const order_url = "http://localhost:8080/orders/get/";
  const user_id = localStorage.getItem("userid");
  const [orders, setOrders] = useState<Array<Order>>([]);
  const showOrder = async () => {
    axios.get(order_url + user_id).then((response) => {
      setOrders(response.data);
      console.log(response.data);
    });
  };
  return (
    <>
      <Container
        style={{
          background:
            " linear-gradient(to right, rgb(255, 240, 179), rgb(255, 112, 77))",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          marginTop: "1rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Card>
          <Card.Body>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={showOrder}>
                  Click to see all your Orders
                </Accordion.Header>
                <Accordion.Body>
                  <Container>
                    <Table striped bordered hover variant="dark">
                      <thead>
                        <tr>
                          <th>User ID</th>
                          <th>Pizza</th>
                          <th>Amount</th>
                        </tr>
                      </thead>{" "}
                      {orders &&
                        orders.map((item: any) => (
                          <tbody>
                            <tr>
                              <td>{item.userId}</td>
                              <td>{item.ordered_pizza.join(",")}</td>
                              <td>{item.total}</td>
                            </tr>
                          </tbody>
                        ))}
                    </Table>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ViewOrder;
