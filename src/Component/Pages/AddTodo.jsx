const AddTodo =()=>{
    return (
        <div>
            <form className="flex items-center justify-center gap-x-3">
                <div className="flex space-x-3">
                    <label htmlFor="text" className="text-gray-600 font-semibold">Add Task :</label>
                    <input id="text" className="bg-gray-400 text-white px-2 py-[2px] rounded-sm placeholder-white" type="text" placeholder="Enter Your Task"/>
                   
                </div>
                <div>
                    <button className="bg-teal-800 px-3 py-3 text-white rounded-md transform hover:scale-110 duration-300 ease-in-out hover:shadow-lg">
                    <span className="inline-block">Add</span>
                    </button>
                </div>
            </form>
        </div>
    )
};

export default AddTodo;