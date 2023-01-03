import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

const LoginScreen = (props) => {
    return <div className="box">
                <div style={{padding: "15vh"}}>
                    <form name="loginForm">
                        <div>
                            Login:   <input type="text" name="login" />
                        </div>
                        <div style={{marginTop: "4vh"}}>
                            Hasło:   <input type="password" name="haslo" />
                        </div>
                    </form>
                    <button style={{marginTop: "6vh"}} class="btn btn-secondary"><span>Zaloguj się</span></button>
                    <div style={{marginTop: "5vh", fontSize: "14px"}}>
                        <span>Nie masz konta? </span>
                        <Link to="/signup">Zarejestruj się</Link>
                    </div>
                 </div>
           </div>
}

export default LoginScreen;