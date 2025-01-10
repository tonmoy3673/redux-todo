import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Reducers/TodoSlice";

const AddTodo =()=>{
    const [input,setInput] = useState('');
    const dispatch = useDispatch();
    const handleAddTodo=(e)=>{
        e.preventDefault();
        
        dispatch(addTodo(input))
        setInput('')
       
    }
    return (
        <div>
            <form onSubmit={handleAddTodo} className="flex items-center justify-center gap-x-3">
                <div className="flex space-x-3">
                    <label htmlFor="text" className="text-gray-600 font-semibold">Add Task :</label>
                    <input value={input} className="bg-gray-400 text-white px-2 py-[2px] rounded-sm placeholder-white" type="text" onChange={(e)=>setInput(e.target.value)} placeholder="Enter Your Task"/>
                   
                </div>
                <div>
                    <button  type="submit" className="bg-teal-800 px-3 py-3 text-white rounded-md transform hover:scale-110 duration-300 ease-in-out hover:shadow-lg">
                    <span className="inline-block">Add</span>
                    </button>
                </div>
            </form>
        </div>
    )
};

export default AddTodo;