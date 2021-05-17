import React from 'react';
import { useRef,useState,useEffect } from 'react';
import { Button,Container,Row,Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



export default function Search(props) {
    const imgg="https://image.tmdb.org/t/p/w500";
// const {title,poster_path,id}=props;
const [searchval,setsearch]=useState("");
const [searchres,setsearchres]=useState([]);
const inputEl = useRef();

const search="https://api.themoviedb.org/3/search/movie?api_key=6672f2eb7338a41fcd5a028cd9cf2488&language=he-IL&query=";
const search2="&page=1&include_adult=false";

function searchfunc(e){
    setsearch(e.target.value) ;
}

useEffect(()=>{
    fetch(search+searchval+search2)
     .then(response => response.json()).then(data=>{setsearchres(data.results);
      console.log(data.results);
     })
   
     },[searchval]);

     function rest(){
        inputEl.current.value=null;
        setsearch("");
     }
     
return (

<>
<input ref={inputEl} className="search" value={searchval} onChange={searchfunc} type="text" placeholder="חפש כאן..."></input>
{searchres && 
<div className="opensearch">
    
    {searchres && searchres.map((movie,index)=>
       <Link  onClick={rest} to={`/info/${movie.id}/movie`} > 
       
       <Row className="searchbatton" style={{marginBottom:"10px"}}>
    
        <Col md={4} ><img src={imgg+movie['poster_path']}></img></Col>
        <Col md={8}>
        <h5 style={{"font-weight":`bold`,"font-size":`20px`,"marginTop":`25px`}}>{movie['title']}</h5>
        
             <h6 style={{"font-size":`15px`,"color":`rgb(150 150 150)`}}>שנת יציאה: {movie.release_date.slice(0,4)}</h6>
        
       
        <h6 style={{"font-size":`13px`,"color":`#5a5a5a`}}>דירוג: {movie.vote_average}</h6>
        
        </Col>
       
        {/* ${id}/${videoType} */}
     </Row> 
     
     </Link>
    )}
  

</div>
}
</>
);
}