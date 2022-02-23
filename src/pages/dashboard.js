import React from 'react';
import Square from '../components/square';
import data from '../data';


export default function Dashboard () {

  const squares = data.map(item => {
    return (
      <Square
      />
    )
  })

  return (
    <div>
      {squares}
    </div>
  )
  
}
