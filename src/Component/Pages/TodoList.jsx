import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  return (
    <div className="py-5">
      <h2 className="text-xl font-semibold text-center text-gray-600">
        All Todo List
      </h2>
      <div className="text-center grid grid-cols-4 items-center justify-around mt-8 space-y-5">
        {todos.map((todo) => (
          <div key={todo.id}>
            <p>Id: {todo?.id}</p>
            <h4>{todo?.text}</h4>
            <div>
              <button className="text-red-600 font-bold text-xl">X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
