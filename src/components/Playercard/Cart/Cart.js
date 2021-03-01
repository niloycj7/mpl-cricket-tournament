import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalSalary = cart.reduce( (sum, player) => sum + player.salary ,0)
    return (
        <div className="tagInfo">
            {cart.map(player => <p>{player.name}  -  {player.salary} Tk.</p>)}
            <h2>Player in the squad: {cart.length}</h2>
            <h5>Total Salary: {totalSalary} TK.</h5>
        </div>
    );
};

export default Cart;

