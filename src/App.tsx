import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
//@ts-ignore
import TimeInputPolyfill from 'react-time-input-polyfill'

const CustomTimeInput = ({value, onChange}: any) => 
    {
      console.log('rerender');
      // const [state, setState] = useState(value);

      // useEffect(() => {
      //   if (state) {
      //     onChange(state);
      //   }
      // }, [state])

      return <label>
        <span>Yolo</span>
        <TimeInputPolyfill
          value={value}
          //value={state}
          onChange={({value}: any) => {
            //setState(value);
            if (value) {
              onChange(value);
            }
          }}
			/>
      </label>
    }

function App() {
  const [startDate, setStartDate] = useState<any>(new Date());

  

//    const timeInput = useMemo(() => , []);

  return (
    
    <div>
<DatePicker selected={startDate} onChange={date => setStartDate(date)} showTimeInput timeFormat="HH:MM" customTimeInput={<CustomTimeInput/>} />
    </div>
  );
}

export default App;
