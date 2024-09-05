import { useState } from "react";
interface User {
    name: string;
    age: string;  // or number, depending on your use case
    hobbies: string[];
  }


const UserInfoWithUseState = () => {

    const [user,setUser] = useState<User>({name: "",age: '',hobbies: []})

    console.log(user);

    return (
       <form>
         <input onChange={(e)=>setUser({...user,name:e.target.value})} type="text" name="name" placeholder="name" />
         <input onChange={(e)=>setUser({...user,age:e.target.value})} type="text" name="age"  placeholder="age"/>
         <input onBlur={(e)=>setUser({...user,hobbies:[...user.hobbies,e.target.value]})} type="text" name="hobby" placeholder="hobby" />
         <button type="submit">Submit</button>
       </form>
    );
};

export default UserInfoWithUseState;