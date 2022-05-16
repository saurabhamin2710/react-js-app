import axios from 'axios';
import React, { useState } from 'react'
import '../Pagecss/Login.css'
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleOnSubmit = (e) => {
        // console.log(e.email);
        e.preventDefault();
        const data = {
            "email": email,
            "password": password,
        }
        const headers = { 'key': 'RJiYTyA1JraHigoISu7LuGvcNFeHGfgy' };
        axios.post('http://milolivevideostreaming.ddns.net:50683/agency/login', data, { headers: headers })
            .then(function (response) {
                console.log(response);
                if (response.data.status === false) {
                    window.alert("Wrong Password or Email id");
                    window.location.reload('/');
                }
                else {
                    window.location.replace('/dashboard');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className="formL">
                <h1 className='Head'>Agency Login</h1>
                <form className="loginform" onSubmit={handleOnSubmit} >
                    <h3>Email :</h3>
                    <input type="email" className="email" size="40" placeholder='Email' value={email} required="required" onChange={(e) => setEmail(e.target.value)} />
                    <h3>Password :</h3>
                    <input type="password" className="pass" size="40" value={password} placeholder='Password' required="required" onChange={(e) => setPassword(e.target.value)} />
                    <h4 className="forgot">Forgot Password ?</h4>
                    <h4><input type="checkbox" name="check" id="GFG" value="1" required="required" /> By signing in,you agree to our ,
                        <a href='https://www.milolive.com/termCondition.php'>
                            <b className='forgot'>
                                terms and conditions</b></a></h4>
                    <button type="submit" className='Submit'>Submit</button>
                </form>
            </div >
        </>
    );
}

export default Login