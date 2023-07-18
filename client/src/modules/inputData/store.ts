import { DateRange } from 'react-day-picker';
import { create } from 'zustand';

interface InputDataState {
  dates: DateRange | undefined;
  type: number | undefined;
  setDates: (dates: DateRange | undefined) => void;
  setType: (type: number | undefined) => void;
}

const useInputData = create<InputDataState>((set) => ({
  dates: {
    from: undefined,
    to: undefined,
  },
  type: 3,
  setDates: (dates) =>
    set((state) => ({
      dates: {
        from: dates?.from ?? state.dates?.from,
        to: dates?.to ?? state.dates?.to,
      },
    })),
  setType: (type) => set(() => ({ type })),
}));

export default useInputData;
