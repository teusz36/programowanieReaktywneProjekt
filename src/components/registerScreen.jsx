import React, { useState } from 'react';
import './style.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterScreen = (props) => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        let loginValue = document.getElementById("loginID").value;
        let emailValue = document.getElementById("emailID").value;
        let passwordValue = document.getElementById("passwordID").value;
            axios({
                       method: 'post',
                       url: 'https://at.usermd.net/api/user/create',
                       data: {
                           name: loginValue,
                           email: emailValue,
                           password: passwordValue
                       }
                   }).then((response) => {
                       console.log(response);
                   }).catch((error) => {
                       console.log(error);
                   });
            navigate("/signin");
        }

    return <div className="box">
                           <div style={{padding: "15vh"}}>
                               <form name="loginForm" onSubmit={handleSubmit}>
                                   <div>
                                       Login:   <input type="text" name="login" id="loginID" />
                                   </div>
                                   <div style={{marginTop: "4vh"}}>
                                       Email:   <input type="email" name="email" id="emailID" />
                                   </div>
                                   <div style={{marginTop: "4vh"}}>
                                       Hasło:   <input type="password" name="haslo" id="passwordID" />
                                   </div>
                               <button type="submit" style={{marginTop: "6vh"}} class="btn btn-secondary"><span>Zarejestruj się</span></button>
                               </form>
                               <div style={{marginTop: "5vh", fontSize: "14px"}}>
                                   <span>Masz już konto? </span>
                                   <Link to="/signin">Zaloguj się</Link>
                               </div>
                            </div>
                      </div>
}

export default RegisterScreen;