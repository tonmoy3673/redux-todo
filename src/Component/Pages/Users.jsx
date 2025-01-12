import { useSelector } from "react-redux";

const Users =()=>{
    const users = useSelector(state=>state.users.users);
    console.log(users);

    return (
        <div className="py-6">
            <h2 className="text-center text-xl text-gray-600 font-semibold">All Users</h2>
            <div className="grid grid-cols-4 items-center justify-center  py-4">
                {
                   users.map((user)=>
                   (
                    <div key={user?.id} className="mx-auto py-4">
                        <p>ID : {user.id}</p>
                        <h2>Name : {user?.name}</h2>
                        <h2>Email : {user?.email}</h2>
                        <div className="text-center py-2 mt-1">
                            <button className="text-sm bg-gray-600 hover:bg-red-500 text-white py-1 px-2 rounded-md shadow-lg">Delete</button>
                        </div>
                    </div>
                   )
                )
                }
            </div>

        </div>
    )
};

export default Users;