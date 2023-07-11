import { DateRange } from 'react-day-picker';
import { create } from 'zustand';

interface InputDataState {
  dates: DateRange | undefined;
  setDates: (dates: DateRange | undefined) => void;
}

const useInputData = create<InputDataState>((set) => ({
  dates: {
    from: undefined,
    to: undefined,
  },
  setDates: (dates) =>
    set((state) => ({
      dates: {
        from: dates?.from ?? state.dates?.from,
        to: dates?.to ?? state.dates?.to,
      },
    })),
}));

export default useInputData;
