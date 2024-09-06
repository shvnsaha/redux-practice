
import { useAppSelector } from "@/redux/hook";
import AddModal from "./AddModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";


const TodoContainer = () => {
    const {todos} = useAppSelector((state)=>state.todos)

    // server
    const {data,isLoading,isError} = useGetTodosQuery(undefined)

    return (
        <div>
            <div className="flex justify-between">
                
                <AddModal></AddModal>
                <TodoFilter></TodoFilter>
            </div>
            <div className="bg-red-500 space-y-3 rounded-xl p-5">
                {
                    todos.map((item)=>(<TodoCard item={item}></TodoCard>))
                }
            {/* <div className="bg-white p-5 flex justify-center text-2xl font-semibold items-center rounded-md">
                <p>There is no task pending...</p>
            </div> */}
             
            </div>
        </div>
    );
};

export default TodoContainer;