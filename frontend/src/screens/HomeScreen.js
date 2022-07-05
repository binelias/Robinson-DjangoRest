import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

import products from '../products';

function HomeScreen() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map(products => (
          <Col key={products._id} sm ={12} md={6} lg={4} xl={3}>
            <Product product={products} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen