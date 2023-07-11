import { Label } from '~/components/ui/label';
import useInputData from '../../store';
import DatePickerWithRange from '~/modules/UI/DatePickerWithRange/DatePickerWithRange';

const InputDataForm = () => {
  const { dates, setDates } = useInputData();

  return (
    <div className='flex gap-6'>
      <div className='w-1/2 flex flex-col gap-2 mb-5'>
        <Label>START date</Label>
        <DatePickerWithRange date={dates} setDate={setDates} />
      </div>
    </div>
  );
};

export default InputDataForm;
