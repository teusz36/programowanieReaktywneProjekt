import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

const RegisterScreen = (props) => {
    return <div className="box">
                           <div style={{padding: "15vh"}}>
                               <form name="loginForm">
                                   <div>
                                       Login:   <input type="text" name="login" />
                                   </div>
                                   <div style={{marginTop: "4vh"}}>
                                       Nazwa:   <input type="text" name="nazwa" />
                                   </div>
                                   <div style={{marginTop: "4vh"}}>
                                       Email:   <input type="email" name="email" />
                                   </div>
                                   <div style={{marginTop: "4vh"}}>
                                       Hasło:   <input type="password" name="haslo" />
                                   </div>
                               </form>
                               <button style={{marginTop: "6vh"}} class="btn btn-secondary"><span>Zarejestruj się</span></button>
                               <div style={{marginTop: "5vh", fontSize: "14px"}}>
                                   <span>Masz już konto? </span>
                                   <Link to="/signin">Zaloguj się</Link>
                               </div>
                            </div>
                      </div>
}

export default RegisterScreen;