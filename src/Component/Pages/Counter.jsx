import { useSelector } from "react-redux";

const Counter = () => {
    const counter = useSelector(state=>state.counter);
    console.log(counter);
  return (
    <div>
      <h2 className="text-xl text-gray-600 font-semibold py-5 text-center">
        Counter App
      </h2>
      <div className="text-center text-lg text-gray-500">
       Count : <span className="font-bold">{counter.count}</span>
      </div>
    </div>
  );
};

export default Counter;
