import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Form, FormControl, Button } from 'react-bootstrap';

export default function Search() {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  // Set Query to whatever is in currently in the search box.
  const setQueryHandler = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query) {
      setSearchParams({ q: query });
    }
  };

  return (
    <Form className='d-flex' onSubmit={handleSubmit}>
      <FormControl
        placeholder='Search'
        className='me-2'
        aria-label='Search'
        onChange={setQueryHandler}
      />
      <Button variant='outline-success' onClick={handleSubmit}>
        Search
      </Button>
    </Form>
  );
}
