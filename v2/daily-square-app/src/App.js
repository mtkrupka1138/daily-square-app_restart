import { useState, useEffect } from 'react';

const App = () => {
  const [squares, setSquares] = useState([])

  useEffect(() => {
    const getSquares = async () => {
      const squaresFromServer = await fetchSquares()
      setSquares(squaresFromServer)
    }
    getSquares();
  })
}

export default App;
