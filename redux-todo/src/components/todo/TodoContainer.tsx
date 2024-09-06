
// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddModal from "./AddModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";


const TodoContainer = () => {
    // const {todos} = useAppSelector((state)=>state.todos)

    const [priority,setPriority] = useState("")

    

    // server
    const {data:todos,isLoading,isError} = useGetTodosQuery(priority)


    if(isLoading) {
        return <p>Load....</p>
    }

    return (
        <div>
            <div className="flex justify-between">
                
                <AddModal></AddModal>
                <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
            </div>
            <div className="bg-red-500 space-y-3 rounded-xl p-5">
                {
                    todos.length === 0 ?  <div className="bg-white p-5 flex justify-center text-2xl font-semibold items-center rounded-md">
                    <p>There is no task pending...</p>
                </div> :
                     todos.data?.map((item)=>(<TodoCard key={item?._id} item={item}></TodoCard>))
                }
           
             
            </div>
        </div>
    );
};

export default TodoContainer;