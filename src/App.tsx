import { useEffect, useState } from 'react'
import './App.scss'
import RadioTest, { IradioProps } from './components/radioTest/RadioTest';
// import { Button } from '@mui/material';

interface IappState {
  time: number;
  curretIndex: number;
  test: IradioProps[];
}

function App() {
  const initialState: IappState = {
    time: 0,
    curretIndex: 0,
    test: [
      {
        id: 1,
        type: 'radio',
        question: 'Что должен знать фронтенд-разработчик? Назовите три ключевых технологии',
        answers: ['HTML, CSS и JavaScript', 'Kotlin, PHP и Javascript', 'PHP, HTML и CSS'],
        result: null
      },
      {
        id: 2,
        type: 'checkbox',
        question: 'Отметьте варианты ответа',
        answers: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
        result: null
      },
      {
        id: 3,
        type: 'input',
        question: 'Напишите ответ на вопрос',
        answers: [],
        result: null
      },
      {
        id: 4,
        type: 'textarea',
        question: 'Напишите ответ на вопрос и решение',
        answers: [],
        result: null
      }
    ]
  };

  const onButtonClick = (value: string) => {
    const newState: IappState = {...appState};
    newState.curretIndex += 1;
    newState.test[appState.curretIndex].result = value;
    setAppState(newState);
    console.log(appState);
  }

  const [appState, setAppState] = useState(initialState);
  // useEffect(() => {
  //   console.log(appState.curretIndex);
  //   // console.log(appState.test[appState.curretIndex]);
  // }, [appState.curretIndex]);

  return (
    <>
      <div className="titleWrapper">
        <h1>Тестирование</h1>
        <div className="clock"></div>
      </div>
      <div className="progressWrapper"></div>
      <div className="testWrapper">
        {appState.test[appState.curretIndex]?.type === 'radio' ? <RadioTest
          question={appState.test[appState.curretIndex].question}
          answers={appState.test[appState.curretIndex].answers} 
          callback={onButtonClick}/> : ''}
      </div>
    </>
  )
}

export default App
