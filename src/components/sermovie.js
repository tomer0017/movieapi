import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Sermovie(props) {
const {title,poster_path,id}=props;
const imgg="https://image.tmdb.org/t/p/w500";
const imegpath=imgg+poster_path;
return (

<div className="movie">
    
    <img src={imegpath}/>
    <div className="textS">
    <Link to={`/info/${id}`} >{title}</Link>
    </div>
</div>
);
}