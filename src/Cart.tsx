import React from 'react';
import './Cart.css';

const Cart: React.FC = () => {
  return (
    <div className="cart-container">
      <h2>장바구니</h2>
      {/* 장바구니 내용 표시 */}
      <p>장바구니가 비어 있습니다.</p>
    </div>
  );
};

export default Cart;
