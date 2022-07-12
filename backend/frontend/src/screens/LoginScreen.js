import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Row, Col  } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';

function LoginScreen() {
  let navigate = useNavigate();
  let {search} = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const redirect = search ? search.split('=')[1] : '/';

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo, error, loading } = userLogin;

  useEffect(() => {
    if(userInfo){
      navigate(redirect)
    }
  },[navigate, redirect,userInfo])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  }

  return (
    <FormContainer>
      <h1 className='pt-md-5'>Log In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='password' className='py-md-4'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>Log In</Button>
      
      </Form>

      <Row className='pt-md-5'>
        <Col>
          Don't have an account? <Link 
          to={redirect ? `/register?redirect=${redirect}` : '/register'}
          >Register</Link>
        </Col>
      </Row>

    </FormContainer>
  )
}

export default LoginScreen