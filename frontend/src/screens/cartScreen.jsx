import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Button, Card, Image, ListGroup } from 'react-bootstrap';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'; 
import { addtoCart, removeFromCart } from '../Actions/cartaction';

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { id } = useParams();
  const qty = new URLSearchParams(useLocation().search).get('qty') || 1;

  useEffect(() => {
    if (id) {
      dispatch(addtoCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const cart = useSelector(state => state.Cart);
  const { cartItems } = cart;
  console.log(`cartitems_cartscreen : ${cartItems}`)
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  } 
  const checkout = () => {
    navigate("/login?redirect=shipping");
  };
  return (
    <>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {!cartItems ||cartItems.length === 0 ? (
            <p>Your Cart is Empty! <Link to="/">Go Back</Link></p>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addtoCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => dispatch(removeFromCartHandler(item.product))}
                      >
                        <i className="fa fa-trash text-danger" aria-hidden="true"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
            <ListGroup.Item>
                <h2>
                  Subtotal ({cartItems ? cartItems.reduce((acc, item) => acc + item.qty, 0) : 0}) items
                </h2>
                $
                {cartItems
                  ? cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)
                  : "0.00"}
              </ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={ !cartItems ||cartItems.length === 0}
                onClick={() => checkout()} // Fix: Replace 'checkout' with your actual checkout logic
              >
                Proceed to Checkout
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
