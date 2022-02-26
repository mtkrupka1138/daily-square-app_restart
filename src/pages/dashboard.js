import React from 'react';
import Square from '../components/square';
import SquareSingle from '../components/square-entry';
import Form from '../components/form';
import data from '../data';


export default function Dashboard () {

  // const squares = data.map(item => {
    return (

      <div className="flex">
        <Form />
        <SquareSingle
        />
      </div>
      
    )
  


  
}
