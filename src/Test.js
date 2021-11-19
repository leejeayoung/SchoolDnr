import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import subDays from "date-fns/subDays";
import "react-datepicker/dist/react-datepicker.css";

function Test() {
  const [startDate, setStartDate] = useState(new Date());
  const [choiceDate, setchoiceDate] = useState(['2021/11/09','2021/11/10','2021/11/11']);
  const [dateList, setDateList] = useState([new Date('2021/11/10'),new Date('2021/11/11')])
  
  const [dateList3, setDateList3] = useState([]);
  const newDateList = [...dateList3];
  return(
  <DatePicker
      selected={startDate}  
      onChange={(date) => setStartDate(date)}
      minDate={new Date('2021/11/1')}
      excludeDates={[...choiceDate.map((date)=>{
        return new Date(date)
      }), subDays(new Date(), 1),0]}
      placeholderText="Select a date other than today or yesterday"
    />
  )
}

export default Test;