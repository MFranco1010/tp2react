import React, { useState } from 'react'
import moment from 'moment';
moment().format();
var now = moment()

export const Date = () => {
    const [jump, setJump] = useState(0);
    const plusJump = () => {
        setJump(jump + 1);
      };
    const minusJump = () => {
        setJump(jump - 1);
    };
    const [date, setDate] = useState(moment());
    const jumpDate = () => {
        const noww = now.clone().add(jump, 'day');
        setDate(noww);
      };
    const mjumpDate = () => {
    const noww = now.clone().subtract(jump, 'day');
    setDate(noww);
    };

  return (
    <div className='box'>
        <div className='btns'>
            <button className='btn' onClick={minusJump}>-</button>
            <p>Valor: {jump}</p>
            <button className='btn' onClick={plusJump}>+</button>
        </div>
        <div className='btns'>
            <button className='btn' onClick={mjumpDate}>-</button>
            <p>Valor: {date}</p>
            <button className='btn' onClick={jumpDate}>+</button>
        </div>
    </div>
  )
}
