'use client';

import { useTestStore } from '@/store/test';
import React from 'react';
// import { shallow } from 'zustand/shallow';

const Products = () => {
  const amount = useTestStore(state => state.amount);
  const clear = useTestStore(state => state.removeAmount);
  const increase = useTestStore(state => state.amountBy);
  // const { amount, clear, increase } = useTestStore(
  //   state => ({
  //     amount: state.amount,
  //     clear: state.removeAmount,
  //     increase: state.amountBy,
  //   }));

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
