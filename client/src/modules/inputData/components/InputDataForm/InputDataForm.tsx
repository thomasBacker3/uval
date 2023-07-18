import useInputData from '../../store';
import DatePickerWithRange from '~/modules/UI/DatePickerWithRange/DatePickerWithRange';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';

const InputDataForm = () => {
  const { dates, setDates, type, setType } = useInputData();

  return (
    <div className='w-1/2 flex flex-col gap-2 mb-5'>
      <div className='flex gap-5 items-center'>
        <Tabs defaultValue='3' className='w-[400px]' onValueChange={(e) => setType(+e)}>
          <TabsList>
            <TabsTrigger value='1'>1 Day</TabsTrigger>
            <TabsTrigger value='2'>2 Days</TabsTrigger>
            <TabsTrigger value='3'>3 Days</TabsTrigger>
          </TabsList>
        </Tabs>
        <DatePickerWithRange date={dates} setDate={setDates} />
      </div>
    </div>
  );
};

export default InputDataForm;
