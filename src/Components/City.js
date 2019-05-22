import React from 'react';
import {Card} from 'react-bootstrap';

const City = (props) => {

  const handleKey = (event) => {
    if(event.keyCode === 13){
      props.cityInfo(event.target.value)
    }
  }

  return(
      <Card border="danger" style={{ width: '23rem' }}>
        <Card.Body>
            <input style={{width: '20rem'}} type="text" name="city" placeholder="Введите город. Например 'Алматы'" onChange = {props.changed} onKeyUp = { handleKey } />
            <p className="mt-2">Город: {props.value}</p>
        </Card.Body>
      </Card>
  )
}

export default City;
