import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../Features/userDetailsSlice";
import { useNavigate } from "react-router";

const Create = () => {
const [users,setUsers] = useState({})
const dispatch = useDispatch()
const navigate = useNavigate();
const getUserData = (e)=>{
 setUsers({...users,[e.target.name]:e.target.value})
 
}

const handleSubmit =(e)=>{
e.preventDefault();
console.log("users....",users)
dispatch(createUser(users));
navigate("/read")
}
  return (
    <div>
    <h2 style={{textAlign:"center"}}> Fill the input Form. </h2>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="name"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={getUserData}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={getUserData}
            name="age"
          />
        </div>
        <div className="mb-3">
          <input className="form-check-input" type="radio" name="gender" value="male" onChange={getUserData}/>
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input className="form-check-input"   type="radio" name="gender" value="female" onChange={getUserData} />
          <label className="form-check-label">Female</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
