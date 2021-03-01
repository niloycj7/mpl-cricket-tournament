import './App.css';
import cricketerList from './data/data.json'
import { useEffect, useState } from 'react';
import Player from './components/Playercard/Player';
import Header from './components/Playercard/Header/Header';
import Cart from './components/Playercard/Cart/Cart';


function App() {
  const [player, setPlayer] = useState([]);
  const[cart, setCart] = useState([]);

  useEffect(() =>{
    setPlayer(cricketerList);
  },[])

  const handleAddPlayer = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
  }

  return (
    <div className="App">
      <Header></Header>
      <h1>Squad Selection for MPL BD</h1>
     <h3>player info: {player.length}</h3>
     <h4>Player Added: {cart.length}</h4>
     <Cart cart={cart}></Cart>
      {
       player.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Player>)
      }
    </div>
  );
}

export default App;
