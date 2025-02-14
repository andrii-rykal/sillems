import { create } from 'zustand';

interface AmountState {
  amount: number;
  removeAmount: () => void;
  amountBy: (by: number) => void;
}

export const useTestStore = create<AmountState>(set => ({
  amount: 25,
  removeAmount: () => set({ amount: 0 }),
  amountBy: (by: number) => set(state => ({ amount: state.amount + by })),
}));
