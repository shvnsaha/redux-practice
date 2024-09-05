

const ChildComponent = ({count}:{count:number}) => {
    return (
        <div className="border border-red-500 p-10 m-10">
            {count}
        </div>
    );
};

export default ChildComponent;