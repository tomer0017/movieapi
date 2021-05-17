import React, { useState,useEffect, useRef } from 'react';
import YouTubePlayer from 'youtube-player';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {useParams} from  'react-router';

export default function Info() {
  const {id,videoType}=useParams();
  const [videoinfo,setinfo]=useState([]);
  

let player;
const playHere = useRef(null);
const youtubeKay1='https://api.themoviedb.org/3/'+videoType+'/'+id+'/videos?api_key=';
const apiKay="6672f2eb7338a41fcd5a028cd9cf2488";
const info1="https://api.themoviedb.org/3/"+videoType+"/";
const info2="?api_key=6672f2eb7338a41fcd5a028cd9cf2488&language=he-IL";
const playerRef=useRef(null);


useEffect(()=>{
    fetch(youtubeKay1+apiKay)
     .then(response => response.json()).then(data=>{
        // console.log(data.results[0].key);
        playerRef.current = YouTubePlayer(playHere.current);
        playerRef.current.loadVideoById(data.results[0].key);
        playerRef.current
    .stopVideo()
     }
     )},[]);


     useEffect(()=>{
      fetch(youtubeKay1+apiKay)
       .then(response => response.json()).then(data=>{
          // console.log(data.results[0].key);
          const player=playerRef.current;
          player.loadVideoById(data.results[0].key);
          player
      .stopVideo()
       }
       )},[videoinfo]);




     useEffect(()=>{
      fetch(info1+id+info2)
       .then(response => response.json()).then(data=>{setinfo(data);
        console.log(data);
        
       })
     
       },[id]);

       console.log(videoType.poster_path);
// alert(youtubeKay1+apiKay);
//  alert(id+videoType);
// console.log(info1+id+info2);
return (

<div style={{ "height": `81vh`,"background-size": `cover`,"background-repeat": `no-repeat`,"backgroundImage":`url(https://image.tmdb.org/t/p/original${videoinfo.backdrop_path})`}}>

  <div
   ref={playHere}
    style={{"margin-top":`80px`}}
    > 

  </div>
  
  <h1 className="info">{videoinfo.title?videoinfo.title:videoinfo.name}</h1>
  <h1 className="info">{videoinfo.overview}</h1>
  <br/>
  <br/>
  <br/>
</div>
);
}