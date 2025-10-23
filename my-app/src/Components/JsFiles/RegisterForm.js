import React,{useState} from "react";

function RegisterForm() {
        const [Register,setRegister]=useState(true);
    
        const toggleForm=(e)=>{
            e.preventDefault();
            setRegister(!Register)
        };
  return (
    <div className="register">
        {Register ? (
                    <form>
            <h1 align="center">RegisterForm</h1>
            <legend>Username : </legend>
            <input type="text" value="username" placeholder="Enter username..."/><br></br>
            <legend>email : </legend>
            <input type="email" value="email" placeholder="Enter Email..."/><br></br>
            <legend>Phone Number : </legend>
            <input type="number" value="phonenumber" placeholder="Enter Phone number..."/><br></br>
            <legend>Password : </legend>
            <input type="password" value="password" placeholder="Enter password..."/><br></br>
            <legend>Confirm Password : </legend>
            <input type="password" value="password" placeholder="Re-enter password..."/><br></br>
            <legend>Date Of Birth : </legend>
            <input type="date" value="date" placeholder="Enter password..."/><br></br>
            <button type="submit">Register</button><br></br>
            <p>Already have an account? <a href="#" onClick={toggleForm}>Sign In</a></p>
        </form>
        ): null}
       
    </div>
  );
}

export default RegisterForm;
