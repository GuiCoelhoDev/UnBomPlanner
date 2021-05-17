import React, { useState } from "react";

import { Container, Background } from "./styles";

import ClickAwayListener from "@material-ui/core/ClickAwayListener/";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import { format, getYear } from "date-fns";

import LongButton from "../LongButton";

function InputDateTime({ readOnly, value, setValue, additionalClass }) {
  const [openPicker, setOpenPicker] = useState(false);
  const [selectedDay, setSelectedDay] = useState("5");
  const [selectedHour, setSelectedHour] = useState("8");
  const [selectedMinute, setSelectedMinute] = useState("0");
  const [selectedMonth, setSelectedMonth] = useState("1");

  const months = [
    { value: 1, label: "Janeiro" },
    { value: 2, label: "Fevereiro" },
    { value: 3, label: "Março" },
    { value: 4, label: "Abril" },
    { value: 5, label: "Maio" },
    { value: 6, label: "Junho" },
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
    { value: 10, label: "Outubro" },
    { value: 11, label: "Novembro" },
    { value: 12, label: "Dezembro" },
  ];

  const endDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const monthDay = (month) => {
    const monthDays = [];
    for (let day = 1; day <= endDays[month - 1]; day++) {
      monthDays.push(day.toString());
    }
    return monthDays;
  };

  const hours = () => {
    const hourArray = [];
    for (let hour = 0; hour <= 23; hour++) {
      hourArray.push(hour.toString());
    }
    return hourArray;
  };

  const minutes = () => {
    const minuteArray = [];
    for (let minute = 0; minute <= 59; minute++) {
      minuteArray.push(minute.toString());
    }
    return minuteArray;
  };

  const closeModal = () => {
    const year = getYear(new Date());

    setValue(
      new Date(
        year,
        selectedMonth - 1,
        +selectedDay,
        +selectedHour,
        +selectedMinute
      )
    );
    setOpenPicker(!openPicker);
  };

  return (
    <>
      <input
        type="text"
        placeholder="A definir"
        onClick={readOnly ? () => {} : () => closeModal()}
        value={value ? format(value, "dd/LL 'às' HH':'mm") : ""}
        className={"input-date " + additionalClass}
        readOnly={true}
      />
      {openPicker ? (
        <>
          <Background></Background>
          <ClickAwayListener onClickAway={() => setOpenPicker(false)}>
            <Container>
              <Autocomplete
                disableClearable
                popupIcon={null}
                options={months}
                getOptionLabel={(option) => option.label}
                getOptionSelected={(option, selected) =>
                  option.value === selected.value
                }
                value={months[selectedMonth - 1]}
                onChange={(e, v) => setSelectedMonth(v.value)}
                renderInput={(params) => (
                  <TextField {...params} label="Mês" variant="outlined" />
                )}
              />
              <Autocomplete
                disableClearable
                popupIcon={null}
                options={monthDay(selectedMonth)}
                getOptionLabel={(option) => option}
                value={selectedDay}
                onChange={(e, v) => setSelectedDay(v)}
                renderInput={(params) => (
                  <TextField {...params} label="Dia" variant="outlined" />
                )}
              />
              <Autocomplete
                disableClearable
                popupIcon={null}
                options={hours()}
                getOptionLabel={(option) => option}
                value={selectedHour}
                onChange={(e, v) => setSelectedHour(v)}
                renderInput={(params) => (
                  <TextField {...params} label="Hora" variant="outlined" />
                )}
              />
              <Autocomplete
                disableClearable
                popupIcon={null}
                options={minutes()}
                getOptionLabel={(option) => option}
                value={selectedMinute}
                onChange={(e, v) => setSelectedMinute(v)}
                renderInput={(params) => (
                  <TextField {...params} label="Minuto" variant="outlined" />
                )}
              />
              <LongButton onClick={closeModal}>Confirmar</LongButton>
            </Container>
          </ClickAwayListener>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default InputDateTime;
