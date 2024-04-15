import { useState } from 'react'
import './App.scss'

function App() {
  const initialState = {
    time: 0,
    test: [
    {
      id: 1,
      type: 'radio',
      question:'Что должен знать фронтенд-разработчик? Назовите три ключевых технологии',
      answers: ['HTML, CSS и JavaScript', 'Kotlin, PHP и Javascript', 'PHP, HTML и CSS'],
      result: null
    },
    {
      id: 2,
      type: 'checkbox',
      question:'Отметьте варианты ответа',
      answers: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
      result: null
    },
    {
      id: 3,
      type: 'input',
      question:'Напишите ответ на вопрос',
      result: null
    }, 
    {
      id: 4,
      type: 'textarea',
      question:'Напишите ответ на вопрос и решение',
      answers: [],
      result: null
    }
  ]
  }
  const [appState, setAppState] = useState(initialState);

  return (
    <>
      <div className="titleWrapper">
        <h1>Тестирование</h1>
        <div className="clock"></div>
      </div>
      <div className="progressWrapper"></div>
      <div className="testWrapper"></div>
    </>
  )
}

export default App
