import { useEffect, useState } from 'react'
import './App.scss'
import RadioTest from './components/radioTest/RadioTest';
import CheckboxTest from './components/checkboxTest/CheckboxTest';
import InputTest from './components/inputTest/InputTest';
import TextareaTest from './components/textareaTest/TextareaTest';
import { Button } from '@mui/material';

export interface ItestData {
  id?: number;
  question: string;
  answers: string[];
  type?: string;
  result?: string | string[] | null;
  callback?: (value: string | string[]) => void;
  active?: boolean;
  selected?: boolean;
}

interface IappState {
  time: number;
  curretIndex: number;
  test: ItestData[];
}

function App() {
  const initialState: IappState = {
    time: 12,
    curretIndex: 0,
    test: [
      {
        id: 1,
        type: 'radio',
        question: 'Что должен знать фронтенд-разработчик? Назовите три ключевых технологии',
        answers: ['HTML, CSS и JavaScript', 'Kotlin, PHP и Javascript', 'PHP, HTML и CSS'],
        result: null,
        active: true,
        selected: false
      },
      {
        id: 2,
        type: 'checkbox',
        question: 'Отметьте варианты ответа',
        answers: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
        result: null,
        active: false,
        selected: false
      },
      {
        id: 3,
        type: 'input',
        question: 'Напишите ответ на вопрос',
        answers: [],
        result: null,
        active: false,
        selected: false
      },
      {
        id: 4,
        type: 'textarea',
        question: 'Напишите ответ на вопрос и решение',
        answers: [],
        result: null,
        active: false,
        selected: false
      }
    ]
  };

  const onButtonClick = (value: string | string[]) => {
    const newState: IappState = { ...appState };
    newState.curretIndex += 1;
    if (newState.test[appState.curretIndex]) {
      newState.test[appState.curretIndex].result = value;
      newState.test[appState.curretIndex].active = false;
      newState.test[appState.curretIndex].selected = true;
    }
    if (newState.test[appState.curretIndex + 1]) {
      newState.test[appState.curretIndex + 1].active = true;
    }
    setAppState(newState);
    localStorage.setItem('madsoft24test', JSON.stringify(newState));
  }

  const savedState: IappState | null = localStorage.getItem('madsoft24test') ? JSON.parse(localStorage.getItem('madsoft24test') as string) as IappState : null;
  const savedTime: number = +(localStorage.getItem('madsoft24time') as string) ?? 0;

  const [appState, setAppState] = useState(savedState ?? initialState);

  function formatTime(time: number) {
    if (time < 10) {
      return '0' + time;
    }
    return time;
  }

  let time: number = savedTime;
  const checkTime = () => {
    setTimeout(() => {
      const date = new Date(time);
      const minutes = formatTime(date.getMinutes());
      const seconds = formatTime(date.getSeconds());
      // const newState: IappState = { ...appState };
      // if (time >= appState.time * 1000) {
      //   // clearInterval(checkTime);
      //   // newState.curretIndex = appState.test.length;
      // }
      const clock = document.querySelector('.clock');
      if (clock) clock.innerHTML = `${minutes} : ${seconds}`
      const newTime = time + 1000;
      console.log(time);

      // newState.usedTime = time;
      
      if (newTime > time && newTime <= appState.time * 1000) {
        time = newTime;
        localStorage.setItem('madsoft24time', newTime.toString());
        // setAppState(newState);
        // localStorage.setItem('madsoft24test', JSON.stringify(appState));
        checkTime();
      }
    }, 1000);
  }

  useEffect(() => {
    checkTime();
  }, []);

  // useEffect(() => {
  //   console.log(time);

  // }, [time]);

  const onShowButtonClick = () => {
    const results = appState.test.map((item, index) => `Вопрос ${index + 1}: ${item.result?.toString()}`);
    alert(results.join('\r\n'));
  }

  const onClearButtonClick = () => {
    localStorage.removeItem('madsoft24test');
    localStorage.removeItem('madsoft24time');
    document.location.reload();
  }
  return (
    <>
      <div className="titleWrapper">
        <h1>Тестирование</h1>
        <div className="clock"></div>
      </div>
      <div className="progressWrapper">
        {appState.test.map((item) => <div key={item.id} className={`progressItem ${item.active ? 'active' : ''} ${item.selected ? 'selected' : ''}`}></div>)}
      </div>
      {(appState.curretIndex >= appState.test.length || time >= appState.time * 1000) && <>
        <p>Тестирование окончено</p>
        <span className="showBtn"><Button variant="contained" onClick={onShowButtonClick}>Показать результаты</Button></span>
        <Button variant="contained" onClick={onClearButtonClick}>Начать заново</Button>
      </>}

      <div className="testWrapper">
        {appState.test[appState.curretIndex]?.type === 'radio' ? <RadioTest
          question={appState.test[appState.curretIndex].question}
          answers={appState.test[appState.curretIndex].answers}
          callback={onButtonClick} /> : ''}
        {appState.test[appState.curretIndex]?.type === 'checkbox' ? <CheckboxTest
          question={appState.test[appState.curretIndex].question}
          answers={appState.test[appState.curretIndex].answers}
          callback={onButtonClick} /> : ''}
        {appState.test[appState.curretIndex]?.type === 'input' ? <InputTest
          question={appState.test[appState.curretIndex].question}
          answers={appState.test[appState.curretIndex].answers}
          callback={onButtonClick} /> : ''}
        {appState.test[appState.curretIndex]?.type === 'textarea' ? <TextareaTest
          question={appState.test[appState.curretIndex].question}
          answers={appState.test[appState.curretIndex].answers}
          callback={onButtonClick} /> : ''}
      </div>
    </>
  )
}

export default App
