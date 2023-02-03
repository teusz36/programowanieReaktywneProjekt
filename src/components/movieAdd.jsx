import React from 'react';
import './style.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MovieAdd = (props) => {
    const navigate = useNavigate();

    const handleAdd = (event) => {
            event.preventDefault();
            let titleValue = document.getElementById("titleID").value;
            let imageValue = document.getElementById("imageID").value;
            let contentValue = document.getElementById("contentID").value;
            if(titleValue !== "" && imageValue !== "" && contentValue !== "") {
                console.log(titleValue, " ", imageValue, " ", contentValue)
                axios({
                           method: 'post',
                           url: 'https://at.usermd.net/api/movies',
                           data: {
                               title: titleValue,
                               image: imageValue,
                               content: contentValue
                           }
                       }).then((response) => {
                           console.log(response);
                       }).catch((error) => {
                           console.log(error);
                       });
                navigate("/");
                }
            }

    return  <div className="box">
                <div style={{padding: "15vh"}}>
                    <form name="addMovieForm" onSubmit={handleAdd} >
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{display: 'flex', flexDirection: 'column', spacing: '10px'}}>
                            <span style={{marginRight: '10px', marginBottom: '10px'}}>Tutuł:</span>
                            <span style={{marginRight: '10px', marginBottom: '10px'}}>URL plakatu:</span>
                            <span style={{marginRight: '10px'}}>Opis:</span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <input style={{marginBottom: '10px'}} type="text" name="title" id="titleID" />
                            <input style={{marginBottom: '10px'}} type="text" name="image" id="imageID" />
                            <textarea style={{width: '320px'}} type="text" name="content" id="contentID" />
                        </div>
                    </div>
                        <button type="submit" style={{marginTop: "6vh"}} class="btn btn-secondary"><span>Dodaj film</span></button>
                    </form>
                </div>
           </div>
}

export default MovieAdd;