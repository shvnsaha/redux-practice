import ChildComponent from "./ChildComponent";


type TProps = {
    count: number,
    setCount:  React.Dispatch<React.SetStateAction<number>>
}


const CounterWithFunction = ({count,setCount}:TProps) => {
    
    return (

        <div className="border border-red-500 p-10 m-10">
            <button className="p-5 bg-green-400 rounded-md" onClick={()=>setCount(count+1)}>{count}</button>
            <ChildComponent count={count}></ChildComponent>
        </div>
    );
};

export default CounterWithFunction;