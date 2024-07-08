import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../Features/userDetailsSlice";

const Read = () => {
  const dispatch = useDispatch();

  const {users,loading} = useSelector((state)=>state.app)

  useEffect(() => {
    dispatch(showUser);
  }, []);
 
  if(loading){
    return (<h2>Loading.....!</h2>)
  }
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>All Data Displayed here.</h2>

      {users && users.map((element)=>(
 <div className="card w-50 mx-auto my-2">
 <div className="card-body">
   <h5 className="card-title">{element.name}</h5>
   <h6 className="card-subtitle mb-2 text-body-secondary">
    {element.email}
   </h6>
   <p className="card-text">
    {element.age}
   </p>
   <a href="#" className="card-link">
    View
   </a>
   <a href="#" className="card-link">
    Edit
   </a>
   <a href="#" className="card-link">
   Delete
   </a>
 </div>
</div>
      ))}
     
    </div>
  );
};

export default Read;
