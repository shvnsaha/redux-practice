import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { addTodo } from "@/redux/features/todoSlice";



const AddModal = () => {

    const [task,setTask] = useState("");
    const [description,setDescription] = useState("");
    const dispatch = useAppDispatch();

    const handleSubmit = (e:FormEvent) =>{
    e.preventDefault();
    const randomString = Math.random().toString(36).substring(2,7)
    const taskDetails = {
        id: randomString,
        title: task,
        description
    }

     dispatch(addTodo(taskDetails))
    }

    

    return (
        <Dialog>
      <DialogTrigger asChild>
        <Button>Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input onBlur={(e)=>setTask(e.target.value)}
              id="task"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
            onBlur={(e)=>setDescription(e.target.value)}
              id="description"
              className="col-span-3"
            />
          </div>
          <DialogClose asChild>
          <Button type="submit">Save changes</Button>
        </DialogClose>
        </form>
      
      </DialogContent>
    </Dialog>
    );
};

export default AddModal;