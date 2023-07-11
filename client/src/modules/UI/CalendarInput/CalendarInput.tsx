import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { FC } from 'react';
import { Button } from '~/components/ui/button';
import { Calendar } from '~/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { cn } from '~/lib/utils';

interface CalendarInputProps {
  value: Date | undefined;
  setValue: (value: Date | undefined) => void;
}

const CalendarInput: FC<CalendarInputProps> = ({ value, setValue }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn('justify-start text-left font-normal', !value && 'text-muted-foreground')}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {value ? format(value, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar weekStartsOn={1} mode='single' selected={value} onSelect={setValue} />
      </PopoverContent>
    </Popover>
  );
};

export default CalendarInput;
