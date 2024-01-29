import React, { useEffect , useState} from 'react'
import {Row, ListGroup, Button , Col, Image, ListGroupItem , Form} from 'react-bootstrap'
import { Link, useParams ,useNavigate} from 'react-router-dom'
import Rating from '../components/rating'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/shared/Loader'
import Errormessage from '../components/shared/Errormessage'
import { listProductDetails} from '../Actions/productActions'


const Productdetails = () => {

        const {id} = useParams();
        console.log(id);
          const history  = useNavigate();
        const dispatch = useDispatch()
        const  ProductDiscription =  useSelector(state => state.ProductDiscription);
        const {loading , error, product} =  ProductDiscription;
        const [qty, setqty] = useState(1);
        useEffect(() =>{
            dispatch(listProductDetails({id}));
        } , [dispatch ]);
    
        const AddToCartHandler = () =>{
            history(`/cart/${id}?qty=${qty}`);
        }

  return (
    <>
    <Link to='/' style={{textDecoration:'None'}} className='btn btn-light rounded'>
    <i class="fa-solid fa-arrow-left"></i> &nbsp;Back</Link>
    {
         loading ? <Loader/> :error ?<Errormessage>{error}</Errormessage>:
    
        <Row style={{marginTop:'10px'}}>
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid  />
        </Col>

        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroupItem>
                <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                    <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
                </ListGroupItem>
                <ListGroupItem>
                    Price: ${product.price}
                </ListGroupItem>
                <ListGroupItem> 
                    {product.description}
                </ListGroupItem>
            </ListGroup>
        </Col>

        <Col md={3} >
            <ListGroup className=' rounded text-center'>
            <ListGroupItem >
            <Row className='my-3'>
                <Col>
                  <h5>Status:</h5>
                </Col>
                <Col >
                 {product.countInStock >0 ? 'In Stock':'Out  Of Stock'}
                </Col>
            </Row>
            </ListGroupItem>
            {

            product.countInStock > 0 && (
                    <ListGroupItem>
                <Row>
                    <Col>qty</Col>
                    <Form.Control  as = "select" value={qty}  onChange={(e) => setqty(e.target.value)}>
                        {[...Array (product.countInStock).keys()].map((x) => (
                            <option key ={x+1} value={x+1}> {x+1}</option>
                        ))}
                    </Form.Control>
                </Row>
                </ListGroupItem>
            )

           }
            <ListGroupItem>
             <Button className='btn-block rounded' type='button' onClick={AddToCartHandler}>Add To Cart</Button>
            </ListGroupItem>
            </ListGroup>
        </Col>
    </Row>
}
    </>
  )
}

export default Productdetails