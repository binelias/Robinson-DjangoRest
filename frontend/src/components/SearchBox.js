import React, {useState} from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
  const [keyword, setKeyword] = useState('')

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault()
    if(keyword) {
      navigate(`/?keyword=${keyword}`)
    }
  }
  return (
    <div onSubmit={submitHandler} className=''>
      <Form >
        <FormControl
          type='text'
          name='q'
          onChange={ (e) => setKeyword(e.target.value)}
          className= 'me-sm-2 ms-sm-5 w-70'
        >
        </FormControl>
        <Button
          type='submit'
          variant='outine-success'
          className='p-2'
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default SearchBox