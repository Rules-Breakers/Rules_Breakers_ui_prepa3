import { useState } from "react";
import { BASE_URL } from "../script/BaseUrl";
import '../../css/Login.css';
import Button from "./Button";
import { useNavigate } from "react-router";
import SignUp from "./SignUp";

export default function Login(props) {
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(username)
        console.log(password)
    };
   const navigate = useNavigate()
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [choose , setChoose ] = useState(false)
     const getData =()=>{
        navigate('/home')
    /**   const options = {
            method: 'POST',
            body: 
            username 
        }
    
            fetch(`${BASE_URL}/login`, options)
            .then(response => response.status == 200 ? navigate('/') : navigate('/home') )
            .catch(error => {
                console.log(error)
                alert("couldn't attempt")
            }) */ 
    }

    const getBooklist = ()=>{
        navigate('/book')
    }
return(
 <>  
  {
    choose ? <SignUp/> :
<div className="body">
    <div className="container1" id="container" >
		<div className="form-container sign-in-container">
			<form action="#" onSubmit={handlesubmit}>
				<h1 className="title">Sign In</h1>
                <Button type ="text" placeholder="Username..." setValue={setUsername} />
                <Button type ="password" placeholder="Password..." setValue={setPassword} />
				<p>New there , click<a href="#" color="yellow" onClick={()=>setChoose(true)} ><b> SIGN UP</b></a></p>
				<button onClick={()=>getData()} className='button1' >Sign In</button><br />
                <p>Or, you can click<a href="#" color="yellow" onClick={()=>getBooklist()}><b> Book </b></a>to show book list</p>
			</form>
		</div>
		<div className="overlay-container">
			<div className="overlay">
					<div className="overlay-panel overlay-right">
					</div>
				</div>
			</div>
		</div>  
    </div>
    } 
 </>
)
}