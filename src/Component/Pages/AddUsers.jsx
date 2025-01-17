import { useDispatch } from "react-redux";
import { addUser } from "../Reducers/UserSlice";

const AddUsers = () => {

  const dispatch = useDispatch();
    const handleUsers=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        if (name=="" || email=="") {
            alert('Invalid keyword!!')
            return
        }
        const userInfo = {name,email};
       if (typeof(userInfo) == 'symbol' || !isNaN(userInfo)) {
            alert('Invalid keyword!!')
            return
        }
      
       else{
        dispatch(addUser(userInfo));
       form.reset();
       }
    }
     
    return (
    <div>
      <div>
        <h3 className="text-md font-semibold text-center text-gray-600 py-3">
          Add User Info
        </h3>
        <form onSubmit={handleUsers}>
          <div className="flex items-center justify-center space-x-8">
            <div className="flex space-x-2 items-center justify-center">
              <label htmlFor="name" className="text-gray-500 font-semibold">
                Name :{" "}
              </label>
              <input
                id="name"
                type="text"
                className="bg-gray-400 rounded-md placeholder-white px-2 py-[2px]"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="flex space-x-2 items-center justify-center my-3">
              <label htmlFor="email" className="text-gray-500 font-semibold">
                Email :{" "}
              </label>
              <input
                id="email"
                type="email"
                className="bg-gray-400 rounded-md placeholder-white px-2 py-[2px]"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className="text-center py-3 mb-4">
            <button className="text-sm bg-slate-600 py-2 px-3 text-white rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
