import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { FC, HTMLAttributes } from 'react';
import { DateRange } from 'react-day-picker';
import { Button } from '~/components/ui/button';
import { Calendar } from '~/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { cn } from '~/lib/utils';

interface DatePickerWithRangeProps {
  date: DateRange | undefined;
  className?: HTMLAttributes<HTMLDivElement>;
  setDate: (date: DateRange | undefined) => void;
}

const DatePickerWithRange: FC<DatePickerWithRangeProps> = ({ className, date, setDate }) => {
  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'dd.MM.yyyy')} - {format(date.to, 'dd.MM.yyyy')}
                </>
              ) : (
                format(date.from, 'dd.MM.yyyy')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePickerWithRange;
