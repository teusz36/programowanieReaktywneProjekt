import React, { useEffect } from 'react';
import './style.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { isExpired } from "react-jwt";

const LoginScreen = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!isExpired(localStorage.getItem('token'))) {
            navigate("/");
        }
       }, []);

    const handleSubmit = (event) => {
            event.preventDefault();
            var loginValue = document.getElementById("loginID").value;
            var passwordValue = document.getElementById("passwordID").value;
                axios({
                           method: 'post',
                           url: 'https://at.usermd.net/api/user/auth',
                           data: {
                               login: loginValue,
                               password: passwordValue
                           }
                       }).then((response) => {
                           console.log(response);
                           console.log(isExpired(response.data.token));
                           localStorage.setItem('token', response.data.token);
                           window.location.reload();
                       }).catch((error) => {
                           console.log(error);
                       });

            }


    return <div className="box">
                <div style={{padding: "15vh"}}>
                    <form name="loginForm" onSubmit={handleSubmit}>
                        <div>
                            Login:   <input type="text" name="login" id="loginID"/>
                        </div>
                        <div style={{marginTop: "4vh"}}>
                            Hasło:   <input type="password" name="haslo" id="passwordID"/>
                        </div>
                    <button type="submit" style={{marginTop: "6vh"}} class="btn btn-secondary"><span>Zaloguj się</span></button>
                    </form>
                    <div style={{marginTop: "5vh", fontSize: "14px"}}>
                        <span>Nie masz konta? </span>
                        <Link to="/signup">Zarejestruj się</Link>
                    </div>
                 </div>
           </div>
}

export default LoginScreen;