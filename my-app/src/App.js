import './App.css';
import React, { useState } from 'react';

function Panel() {
  const [showPanel, setShowPanel] = useState(false);
  const [toDo, toDol] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [point, setPoint] = useState(false);
  const [numberList, setNumberList] = useState(false);
  const [burger, setBurger] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState('');
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const Titleclick = () => {
    document.getElementById('input-field').style.fontFamily = 'Arial';
    document.getElementById('input-field').style.fontSize = '40px';
    setBurger(false)
    setNumberList(false);
    toDol(false);
    setPoint(false);
    setShowPanel(!showPanel);
  };

  function CheckboxClick() {
    setIsClicked(!isClicked);
  }

  const burgerclick = () => {
    setShowInput(!showInput)
  }

  const burgerCreate = () => {
    setBurger(true)
    setNumberList(false);
    toDol(false);
    setPoint(false);
    document.getElementById('input-field').style.fontFamily = '';
    document.getElementById('input-field').style.fontSize = '';
    setShowPanel(!showPanel);
  }

  const numberListCreate = () => {
    setNumberList(true);
    toDol(false);
    setPoint(false);
    setBurger(false)
    document.getElementById('input-field').style.fontFamily = '';
    document.getElementById('input-field').style.fontSize = '';
    setShowPanel(!showPanel);
}

const pointCreate = () => {
  setPoint(true)
  toDol(false)
  setNumberList(false)
  setBurger(false)
  document.getElementById('input-field').style.fontFamily = '';
  document.getElementById('input-field').style.fontSize = '';
  setShowPanel(!showPanel);
};

const todoCreate = () => {
  toDol(true)
  setPoint(false)
  setNumberList(false)
  setBurger(false)
  document.getElementById('input-field').style.fontFamily = '';
  document.getElementById('input-field').style.fontSize = '';
  setShowPanel(!showPanel);
};

const Delate = () => {
  toDol(false)
  setPoint(false)
  setIsClicked(false);
  setNumberList(false);
  setBurger(false)
  setShowPanel(!showPanel);
  setShowInput(false);
  setText('');
  document.getElementById('input-field').style.fontFamily = '';
  document.getElementById('input-field').style.fontSize = '';
};

  const handleButtonClick = () => {
    setShowPanel(!showPanel);
  };

  // установка значения className в зависимости от значения isClicked
  const className = isClicked ? 'ckeckBox-super' : 'ckeckBox'; 
  const classYes = isClicked ? 'ckeckYes-super' : '';
  const classYess = isClicked ? 'ckeckYess-super' : '';

  return (
    <div>
      <input id='input-field' type='text' value={inputText} onChange={(e) => setInputText(e.target.value)} className='write'></input>
      <button className='button' onClick={handleButtonClick}>Открыть панель</button>
      {toDo && (
            <>
              <div onClick={CheckboxClick} className={className}>
                <div onClick={CheckboxClick} className={classYes}></div>
                <div onClick={CheckboxClick} className={classYess}></div>
              </div>
            </>
      )}
      {showPanel && (
        <>
          <div className='panel'>
            <button onClick={todoCreate} className='To-do_btn'>To-do</button>
            <button onClick={pointCreate} className='point_btn'>point</button>
            <button onClick={numberListCreate}className='numberList_btn'>Пронумерованый лист</button>
            <button onClick={Titleclick}>Заглавие 1</button>
            <button onClick={burgerCreate}className='burger_btn'>Бургер</button>
            <button onClick={Delate} className='delaite_function'>delaite</button>
          </div>
        </>
      )}
      {point && (
            <>
              <div className='point'></div>
            </>
      )}
      {numberList && (
            <>
              <div className='number_List'>1.</div>
            </>
      )}
      {burger && (
            <>
              <div onClick={burgerclick} className='burger_but'></div>
              {showInput && (
                  <input className='input_burger' type="text" value={text} onChange={handleInputChange}></input>
              )}
            </>
      )}
    </div>
  );
}

export default Panel;