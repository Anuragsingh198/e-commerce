// import React, { useState }  from 'react';
import  {useDispatch , useSelector} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Productscreen from './Productscreen'
import  {listProducts} from '../Actions/productActions'
import { useEffect} from 'react'
import Loader from '../components/shared/Loader';
import Errormessage from '../components/shared/Errormessage';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const {loading, error , products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Errormessage>{error}</Errormessage>
      ) : Array.isArray(products) ? (
        <Row>
          {products.map((product) => (
            <Col key={product._id} md={3}>
              <Productscreen product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        <p>No products available</p>
      )}
    </>
  );
};

export default HomeScreen;
