import React from 'react';
import { useState,useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  import {
    PopupboxManager,
    PopupboxContainer
  } from 'react-popupbox';

export default function Movie(props) {
const {title,poster_path,backdrop_path,id,vote_average,videoType,release_date}=props;
const imgg="https://image.tmdb.org/t/p/original";
const imegpath=imgg+poster_path;
const [rating, setRating] = useState("");
const [year, setyear] = useState("");
const [cover, setCover] = useState("tomer");
const [textOnPic, settextOnPic] = useState("");



// const appStyles = {
//   height: "100vh",
//   background: `${bgColour}`,
// };

function enterPicChange(){
  props.onMouseEnter(backdrop_path);
  setRating(vote_average);
  if(videoType==="movie"){ setyear("תאריך יציאה:"+release_date);};
 
  settextOnPic("דירוג");
//  alert(backdrop_path);
 
}

function leavePicChange(){
  props.onMouseLeave("");
  setRating("");
  settextOnPic("");
  setyear("");
}
// alert(videoType);
return (

<div className="movie">
  <div  className="containerImg">
<Link onClick={a=>props.onMouseLeave("")} to={`/info/${id}/${videoType}`} >   

    <img className="littleimg"  value={"guy"} onMouseLeave={leavePicChange} onMouseEnter={enterPicChange} src={imegpath}/>
 
    <div  class="centeredTextImg">{textOnPic} <br/> {rating}</div>
    <div class="centeredTextImg2">{year}</div>
      <div className="textS">
  {title }
  
  
    </div>
    </Link>
    </div>
   
</div>
);
}