import React from 'react';
import { useState,useEffect } from 'react';
export default function Popappinfo(props) {
    const {cover}=props;
    // alert(cover);
    const pic="https://image.tmdb.org/t/p/original"+cover;
    return (
        
        <div  className="popup">
        
        <img className="popimg" src={pic}/>
        <h1 className="popup">jhgjhgjhg jhg gjh jhg jhg jhg jhg jhg jhg jhg jhgjhg j fhgjfjhgjkh gjkhg kjh kjh kjh kjh kjh kjh kjh kjh kjh kjh kj</h1>

        </div>

        );
}