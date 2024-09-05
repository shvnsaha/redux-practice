

import { useState } from 'react';
import './App.css'
// import CounterWithClass from './components/CounterWithClassComponents'
import CounterWithFunction from './components/CounterWithFunction'
import UserInfoWithUseState from './components/UserInfoWithUseState';
import UserInfoWithUseReducer from './components/UserInfoWithUseReducer';
import TodoProvider from './context/TodoProvider';
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';

function App() {
 
  const [count,setCount] = useState(0);

  return (
     <TodoProvider>
      <div className='border border-purple-500 m-10 p-10'>
       {/* <button>{count}</button>
      <CounterWithFunction count={count} setCount={setCount}></CounterWithFunction> */}
      {/* <UserInfoWithUseState></UserInfoWithUseState> */}
      {/* <UserInfoWithUseReducer></UserInfoWithUseReducer> */}
      <TodoForm></TodoForm>
      <TodoList></TodoList>
     </div>
     </TodoProvider>
  )
}

export default App
