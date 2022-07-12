import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

function SearchBox() {
  const [keyword, setKeyword] = useState('')
  let location = useLocation();
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault()
    if(keyword) {
      navigate(`/?keyword=${keyword}&page=1`)
    }else {
      navigate(navigate(location.pathname))
    }
  }
  return (
    <Form onSubmit={submitHandler} className='wrapper'>
        <input
          type='text'
          name='q'
          onChange={ (e) => setKeyword(e.target.value)}
          className= 'input'
        />
        <Button
          type='submit'
          className='searchbtn'
        >
          <i className="fas fa-search"></i>
        </Button>
    </Form>
    
  )
}

export default SearchBox