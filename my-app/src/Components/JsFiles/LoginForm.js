import React,{useState} from "react";

function LoginForm() {
    const [Login,setLogin]=useState(true);

    const toggleForm=(e)=>{
        e.preventDefault();
        setLogin(!Login)
    };
  return (
    <div className="login">
        {Login ? (
        <form>
            <h1>Login</h1>
            <legend>Username : </legend>
            <input type="text" value="username" placeholder="Enter username..."/><br></br>
            <legend>Password : </legend>
            <input type="password" value="password" placeholder="Enter password..."/>
            <br></br>
            <button type="submit">Login</button><br></br>
            <p>Don't have an account? <a href="/register" onClick={toggleForm}>Sign  Up</a></p>
        </form>
        ): null}

       
    </div>
  );
}

export default LoginForm;
