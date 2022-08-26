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
            .then(response => response.status == 200 ?  : navigate('/') )
            .catch(error => {
                console.log(error)
                alert("couldn't attempt")
            }) */ 
    }
return(
 <>  
  {
    choose ? <SignUp/> :
    <div className="container" id="container" >
		<div className="form-container sign-in-container">
			<form action="#" onSubmit={handlesubmit}>
				<h1>Sign In</h1>
				<div className="social-container">
					<a  className="social" ><i className="fab fa-facebook "></i></a>
					<a  className="social" ><i className="fab fa-google"></i></a>
					<a  className="social" ><i className="fab fa-github"></i></a>
				</div>
				<span>or use your account</span>
                <Button type ="text" placeholder="USERNAME" setValue={setUsername} />
                <Button type ="password" placeholder="PASSWORD" setValue={setPassword} />
				<p>New there , click<a href="#" color="yellow" onClick={()=>setChoose(true)} ><b> SIGN UP</b></a></p>
				<button onClick={()=>getData()}>Sign In</button>
			</form>
		</div>
		<div className="overlay-container">
			<div className="overlay">
					<div className="overlay-panel overlay-right">
					</div>
				</div>
			</div>
		</div>  
    } 
 </>
)
}