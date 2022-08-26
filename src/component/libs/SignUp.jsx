import { useState } from "react";
import { BASE_URL } from "../script/BaseUrl";
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
    <div className="container" id="container" >
    <div className="form-container sign-in-container">
        <form action="#">
            <h1>Sign Up</h1>
            <div className="social-container">
                <a  className="social" ><i className="fab fa-facebook "></i></a>
                <a  className="social" ><i className="fab fa-google"></i></a>
                <a  className="social" ><i className="fab fa-github"></i></a>
            </div>
            <span>or use your account</span>
            <Button type ="text" placeholder="USERNAME" setValue={setUsername} />
            <Button type ="password" placeholder="PASSWORD" setValue={setPassword} />
            <p>New there , click<a href="#" color="blue" onClick={()=>setChoose(true)} ><b> LOGIN IN</b></a></p>
            <button onClick={()=>addAdmin}>Sign Up</button>
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