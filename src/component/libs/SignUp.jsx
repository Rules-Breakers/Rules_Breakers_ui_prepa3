import { useState } from "react";
import '../../css/Login.css';
import Login from "./Login";
import Button from "./Button";
import { useNavigate } from "react-router";

export default function SignUp(props) {
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(username)
        console.log(password)
    };
    const navigate = useNavigate()
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [role , setRole] = useState("");
    const [choose , setChoose ] = useState(false)

    const addAdmin = () =>{
        navigate('/home')
   /*     const options = {
            method: 'POST',
            body: {
            username  :  username ,
            password  : password ,
            role      : role
            }
        }
            fetch(`${BASE_URL}`+'/authorization', options)
            .then(response => response.status == 200 ?  : navigate('/') )
            .catch(error => {
                console.log(error)
                alert("couldn't added person")
            }) */
    }
return(
 <>  { 
    choose ? <Login/> :
<div className="body">
    <div className="container1" id="container" >
		<div className="form-container sign-in-container">
			<form action="#" onSubmit={handlesubmit}>
				<h1 className="title">Sign Up</h1>
                <Button type ="text" placeholder="USERNAME" setValue={setUsername} />
                <Button type ="password" placeholder="PASSWORD" setValue={setPassword} />
				<p>Already member , click<a href="#" color="yellow" onClick={()=>setChoose(true)} ><b> SIGN IN</b></a></p>
				<button className="button">Sign Up</button>
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