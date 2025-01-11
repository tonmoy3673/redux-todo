import { useDispatch, useSelector } from "react-redux";
import { addCount, minusCount, resetCount } from "../Reducers/CounterSlice";

const Counter = () => {
    const counter = useSelector(state=>state.counter);
    
    const dispatch = useDispatch();
    console.log(counter.count);
  return (
    <div>
      <h2 className="text-xl text-gray-600 font-semibold py-5 text-center">
        Counter App
      </h2>
      <div className="text-center text-lg text-gray-500">
       Count : <span className="font-bold">{counter.count}</span>
       <div className="flex items-center justify-center space-x-6 mt-4">
        <button onClick={()=>dispatch(addCount(1))} className="text-2xl font-bold">+</button>
        <button onClick={()=>dispatch(resetCount(0))}>Reset</button>
        <button onClick={()=>dispatch(minusCount(1))} className="text-2xl font-bold">-</button>
       </div>
      </div>
    </div>
  );
};

export default Counter;
