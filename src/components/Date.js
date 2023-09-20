import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/es';

export const Date = () => {
  const [jump, setJump] = useState(0);
  const [date, setDate] = useState(moment());
  const [hour, setHour] = useState(moment());

  const plusJump = () => {
    setJump(jump + 1);
  };
  const minusJump = () => {
    setJump(jump - 1);
  };

  const jumpDate = () => {
    const newDate = date.clone().add(jump, 'day');
    setDate(newDate);
  };
  const mjumpDate = () => {
    const newDate = date.clone().subtract(jump, 'day');
    setDate(newDate);
  };

  const jumpHour = () => {
    const newHour = hour.clone().add(1, 'hour');
    setHour(newHour);
  };
  const mjumpHour = () => {
    const newHour = hour.clone().subtract(1, 'hour');
    setHour(newHour);
  };

  return (
    <div className='box'>
      <div className='btns'>
        <button className='btn' onClick={minusJump}>-</button>
        <p>Días: {jump}</p>
        <button className='btn' onClick={plusJump}>+</button>
      </div>
      <div className='btns'>
        <button className='btn' onClick={mjumpHour}>-</button>
        <p>Horas</p>
        <button className='btn' onClick={jumpHour}>+</button>
      </div>
      <div className='btns'>
        <button className='btn' onClick={mjumpDate}>-</button>
        <p>Update fecha</p>
        <button className='btn' onClick={jumpDate}>+</button>
      </div>
      <p className='now'>{date.format('LLLL')}</p>
    </div>
  );
};
