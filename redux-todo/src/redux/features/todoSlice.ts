import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export type TTodo = {
    id: string,
    title: string,
    description: string;
    isCompleted?: boolean
}

type TInitialState = {
    todos: TTodo[]
}

const initialState:TInitialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action:PayloadAction<TTodo>)=>{
          state.todos.push({...action.payload,isCompleted: false})
        },
        removeTodo:(state,action:PayloadAction<string>)=>{
          state.todos =  state.todos.filter(item=>item.id !== action.payload)
        },
        toggleComplete:(state,action)=>{
          const task = state.todos.find(item=>item.id === action.payload) 
          console.log(task); 
          task!.isCompleted = !task?.isCompleted
         state.todos = state.todos.filter(item=>item.id !== action.payload);
         state.todos.push(task)   
    },
  }})

  export default todoSlice.reducer

export const {addTodo,removeTodo,toggleComplete} = todoSlice.actions