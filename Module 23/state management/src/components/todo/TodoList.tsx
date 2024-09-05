import { useContext } from "react";
import { TodoContext, TTodo } from "../../context/TodoProvider";


const TodoList = () => {
    const {state,dispatch} = useContext(TodoContext)
    return (
        <div>
           {
            state.map((item:TTodo)=> <p className={`cursor-pointer ${item.isCompleted? 'line-through': ''}`} onClick={()=>dispatch({type: 'taskCompleted',payload: item.id})}>{item.title}</p>)
           } 
        </div>
    );
};

export default TodoList;