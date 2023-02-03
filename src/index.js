import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
   BrowserRouter,
   Routes,
   Route,
   Navigate
} from "react-router-dom";
import Details from './components/details.jsx';
import MovieList from './components/MovieList.jsx';
import MovieAdd from './components/movieAdd.jsx';
import LoginScreen from './components/loginScreen.jsx';
import RegisterScreen from './components/registerScreen.jsx';
import { isExpired } from "react-jwt";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="" element={<MovieList />} />
                <Route path="details" element={<Details />} />
                <Route path="add" element={isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <MovieAdd />} />
                <Route path="signin" element={<LoginScreen />} />
                <Route path="signup" element={<RegisterScreen />} />
            </Route>

        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
