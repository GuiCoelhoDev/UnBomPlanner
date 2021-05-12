import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import {  } from 'react-dom';

import Dropdown from "react-dropdown";

import { DatePickerComponent, DatePickerInput, DatePickerContainer } from './styles';

// import './styles.css';

function DatePicker({ onChange, readOnly }) {
  let oneDay = 60 * 60 * 24 * 1000;
  let todayTimestamp = Date.now() - (Date.now() % oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);
  let inputRef = useRef(null);
  let datePickerRef = useRef(null);

  const range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
  }

  const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthMap = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const hoursMap = range(0, 23);
  const minutesMap = range(0,59);

  const getNumberOfDays = (year, month) => {
    return 40 - new Date(year, month, 40).getDate();
  }

  const getDayDetails = args => {
    let date = args.index - args.firstDay; 
    let day = args.index % 7;
    let prevMonth = args.month - 1;
    let prevYear = args.year;
    
    if (prevMonth < 0) {
      prevMonth = 11;
      prevYear--;
    }

    let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
    let _date = (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;
    let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
    let timestamp = new Date(args.year, args.month, _date).getTime();

    return {
      date: _date,
      day,
      month, 
      timestamp,
      dayString: daysMap[day]
    }
  }

  const getMonthDetails = (year, month) => {
    let firstDay = (new Date(year, month)).getDay();
    let numberOfDays = getNumberOfDays(year, month);
    let monthArray = [];
    let rows = 6;
    let currentDay = null;
    let index = 0; 
    let cols = 7;

    for(let row=0; row < rows; row++) {
      for(let col=0; col < cols; col++) { 
        currentDay = getDayDetails({
            index,
            numberOfDays,
            firstDay,
            year,
            month
        });
        monthArray.push(currentDay);
        index++;
      }
    }
    return monthArray;
  }

  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [hours, setHours] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [selectedDay, setSelectedDay] = useState(todayTimestamp);
  const [monthDetails, setMonthDetails] = useState(() => {
    return getMonthDetails(year, month);
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddBackDrop = useCallback((e) => {
    if (showDatePicker && !datePickerRef.current.contains(e.target)) {
      handleShowDatePicker(false);
    }
  }, [showDatePicker]);

  const handlePreventDefaultDateInput = useCallback((e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault()
    }
  }, []);

  const handleSetDateToInput = useCallback((timestamp) => {
    let dateString = getDateStringFromTimestamp(timestamp);
    console.log(inputRef);
    inputRef.current.value = dateString;
  }, [inputRef]);

  useEffect(() => {
    let ref = inputRef;

    ref.current.addEventListener('keydown', handlePreventDefaultDateInput, false);
    window.addEventListener('click', handleAddBackDrop);
    handleSetDateToInput(selectedDay);

    return () => {
      window.removeEventListener('click', handleAddBackDrop);
      ref.current.removeEventListener('keydown', handlePreventDefaultDateInput);
    }
  }, [inputRef, selectedDay, handleAddBackDrop, handleSetDateToInput, handlePreventDefaultDateInput]);

  const handleShowDatePicker = (showDatePicker = true) => {
    setShowDatePicker(showDatePicker);
  }

  const isCurrentDay = day => {
    return day.timestamp === todayTimestamp;
  }

  const isSelectedDay = day => {
    return day.timestamp === selectedDay;
  }

  const getDateFromDateString = dateValue => {
    console.log('HERE', dateValue);
    let dateData = dateValue.split('-').map(d => parseInt(d, 10));
    
    if (dateData.length < 3) {
      return null;
    }

    let year = dateData[0];
    let month = dateData[1];
    let date = dateData[2];

    return {year, month, date};
  }

  const getMonthStr = month => {
    return monthMap[Math.max(Math.min(11, month), 0)] || 'Month';
  }

  const getDateStringFromTimestamp = timestamp => {
    let dateObject = new Date(timestamp);
    let month = dateObject.getMonth() + 1;
    let date = dateObject.getDate();
    let hours = dateObject.getHours();
    let minutes = dateObject.getMinutes();
    
    return dateObject.getFullYear() + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date) +
      'T' + (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);
  }

  const handleSetDate = dateData => {
    let selectedDay = new Date(dateData.year, dateData.month - 1, dateData.date).getTime();

    setDate(selectedDay);

    if(onChange) {
      onChange(selectedDay);
    }
  }



  const handleUpdateDateFromInput = () => {
    let dateValue = inputRef.current.value;
    let dateData = getDateFromDateString(dateValue);
    
    if (dateData !== null) { 
      handleSetDate(dateData);
      setYear(dateData.year);
      setMonth(dateData.month - 1);
      setMonthDetails(getMonthDetails(dateData.year, dateData.month - 1));
    }
  }

  const handleOnDateClick = day => {
    setSelectedDay(day.timestamp);
    handleSetDateToInput(day.timestamp);

    const newDateTime = new Date(day.timestamp);
    newDateTime.setHours(hours);
    newDateTime.setMinutes(minutes);

    handleSetDateToInput(newDateTime.getTime());
    // handleAddBackDrop(false);

    if(onChange) {
      onChange(day.timestamp);
    }
  }

  const handleSetYear = offset => {
    let _year = year + offset;
    let _month = month;

    setYear(_year);
    setMonthDetails(getMonthDetails(_year, _month));
  }

  const handleSetMonth = offset=> {
    let _year = year;
    let _month = month + offset;

    if (_month === -1) {
        _month = 11;
        _year--;
    } else if (_month === 12) {
        _month = 0;
        _year++;
    }

    setYear(_year);
    setMonth(_month);
    setMonthDetails(getMonthDetails(_year, _month));
  }

  const handleSetHours = (e) => {
    setHours(e.value);
  }

  const handleSetMinutes = (e) => {
    setMinutes(e.value);
  }

  const handleRenderCalendar = () => {
    let days = monthDetails.map((day, index)=> {
      return (
        <div
          className={'c-day-container ' + (day.month !== 0 ? ' disabled' : '') + 
            (isCurrentDay(day) ? ' highlight' : '') + (isSelectedDay(day) ? ' highlight-green' : '')}
          key={index}
        >
          <div className='cdc-day'>
            <span onClick={() => handleOnDateClick(day)}>
              {day.date}
            </span>
          </div>
        </div>
      )
    })

    return (
      <div className='c-container'>
        <div className='c-hour-picker'>
          <Dropdown
            controlClassName="select"
            value={hours}
            placeholder={"hh"}
            onChange={handleSetHours}
            options={hoursMap}
            disabled={readOnly}
          />
          <Dropdown
            controlClassName="select"
            value={minutes}
            placeholder={"mm"}
            onChange={handleSetMinutes}
            options={minutesMap}
            disabled={readOnly}
          />
        </div>
        <div className='cc-head'>
          {
            ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d,i) => <div key={i} className='cch-name'>{d}</div>)
          }
        </div>
        <div className='cc-body'>
          {days}
        </div>
      </div>
    );
  }

  return (
    <DatePickerComponent ref={datePickerRef}>
      <DatePickerInput className='mdp-input'  onClick={() => handleShowDatePicker(true)}>
        <input type='datetime-local' onChange={handleUpdateDateFromInput} ref={inputRef} placeholder="A definir"/>
      </DatePickerInput>
      {showDatePicker ? (
        <DatePickerContainer>
          <div className='mdpc-head'>
            <div className='mdpch-button'>
              <div className='mdpchb-inner' onClick={() => handleSetYear(-1)}>
                <span className='mdpchbi-left-arrows'></span>
              </div>
            </div>
            <div className='mdpch-button'>
              <div className='mdpchb-inner' onClick={()=> handleSetMonth(-1)}>
                <span className='mdpchbi-left-arrow'></span>
              </div>
            </div>
            <div className='mdpch-container'>
              <div className='mdpchc-year'>{year}</div>
              <div className='mdpchc-month'>{getMonthStr(month)}</div>
            </div>
            <div className='mdpch-button'>
              <div className='mdpchb-inner' onClick={() => handleSetMonth(1)}>
                <span className='mdpchbi-right-arrow'></span>
              </div>
            </div>
            <div className='mdpch-button' onClick={() => handleSetYear(1)}>
              <div className='mdpchb-inner'>
                <span className='mdpchbi-right-arrows'></span>
              </div>
            </div>
          </div>
          <div className='mdpc-body'>
            {handleRenderCalendar()}
          </div>
        </DatePickerContainer>
      ) : ''}
    </DatePickerComponent>
  )
}

export default DatePicker;
