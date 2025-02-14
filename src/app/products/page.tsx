'use client';

import { useTestStore } from '@/store/test';
import React from 'react';

const Products = () => {
  const amount = useTestStore(state => state.amount);
  const clear = useTestStore(state => state.removeAmount);
  const increase = useTestStore(state => state.amountBy);
  return (
    <div>
      <h1>Products Page {amount}</h1>
      <br />
      <button onClick={clear}>clear</button>
      <br />
      <br />
      <button onClick={() => increase(10)}>+10</button>
    </div>
  );
};

export default Products;
