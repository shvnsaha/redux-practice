
import { decrement, increment, incrementByValue } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook"






function App() {
 
  const dispatch = useAppDispatch()
  const {count} = useAppSelector((state)=>state.counter)

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-500 rounded-md p-10">
        <button onClick={()=>dispatch(increment())} className="px-3 py-2 rounded-md bg-green-500 font-bold text-white">Increment</button>
        <button onClick={()=>dispatch(incrementByValue(5))} className="px-3 py-2 rounded-md bg-green-500 font-bold text-white">Increment By 5</button>
        <h1 className="mx-6">{count}</h1>
        <button onClick={()=>dispatch(decrement())} className="px-3 py-2 rounded-md bg-red-500 font-bold text-white">Decrement</button>
      </div>
    </div>
  )
}

export default App
