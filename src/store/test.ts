import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AmountState {
  amount: number;
  removeAmount: () => void;
  amountBy: (by: number) => void;
}

// export const useTestStore = create<AmountState>((set, get) => ({
//   amount: 25,
//   removeAmount: () => set({ amount: 0 }),
//   amountBy: (by: number) => {
//     set({ amount: get().amount + by });
//   },
// }));
export const useTestStore = create<
  AmountState,
  [['zustand/persist', AmountState]]
>(
  persist<AmountState>(
    (set, get) => ({
      amount: 25,
      removeAmount: () => set({ amount: 0 }),
      amountBy: (by: number) => {
        set({ amount: get().amount + by });
      },
    }),
    {
      name: 'amount-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
