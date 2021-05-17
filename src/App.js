import logo from './logo.svg';
import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import './animations.css';
import Movie from './components/movie.js';
import WidthMovie from './components/widthMovie.js';
import Sermovie from './components/sermovie.js';
import Info from './components/info.js';
import Search from './components/search.js';
import Popupinfo from './components/popupinfo.js';
import { useState,useEffect } from 'react';
import { Button,Container,Row,Col,Nav,Form,NavDropdown,FormControl,Navbar } from 'react-bootstrap';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function App() {
  const movies=["1","2","3"];
  const apiKay="6672f2eb7338a41fcd5a028cd9cf2488";
  const [cover, setCover] = useState("tomer");
  const popular="https://api.themoviedb.org/3/movie/popular?api_key=6672f2eb7338a41fcd5a028cd9cf2488&language=en-US&page=1";
  const popularTv="https://api.themoviedb.org/3/tv/popular?api_key=6672f2eb7338a41fcd5a028cd9cf2488&language=he-IL&page=1" ;         
  const ganer="https://api.themoviedb.org/3/discover/movie?api_key=6672f2eb7338a41fcd5a028cd9cf2488&with_genres=";
  const comingSoon="https://api.themoviedb.org/3/movie/upcoming?api_key=6672f2eb7338a41fcd5a028cd9cf2488&language=en-US&page=1";
  const [popmovie,setpop]=useState([]);
  const [poptv,setpoptv]=useState([]);
  const [comingsoonar,setcomingsoonar]=useState([]);
  const [ganermovie,setganer]=useState([]);
  const [ganerId,setganerId]=useState("16");
  const [h1ganer,seth1ganer]=useState("");
  const [coverPic,setCoverPic]=useState("");
  const x=3; 
  const today=new Date();
  // const fontSize=coverPic.overview.length;
  const [fontSize,setfontSize]=useState("5");

  
  const year= parseInt(today.getFullYear());
  const month= parseInt(today.getMonth()+1);
  const day= today.getDate();
  // alert("day"+day+"month"+month+"year"+year)



// coverPic

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// try{alert(popmovie[getRandomInt(20)].backdrop_path); }

// catch{

// };




  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=6672f2eb7338a41fcd5a028cd9cf2488&language=he-IL&with_genres='+ganerId)
     .then(response => response.json()).then(data=>{setganer(data.results);
    
     })
   
     },[ganerId]);




  useEffect(()=>{
 fetch('https://api.themoviedb.org/3/movie/popular?api_key=6672f2eb7338a41fcd5a028cd9cf2488&language=he-IL&page=1')
  .then(response => response.json()).then(data=>{setpop(data.results);
   
  })
 
  },[]);

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=6672f2eb7338a41fcd5a028cd9cf2488&language=he-IL&page=2')
     .then(response => response.json()).then(data=>{setCoverPic(data.results[getRandomInt(20)])
      
     })
    
     },[]);

// cover font size

  useEffect(() => {
    coverPic && setfontSize(coverPic.overview.length); ;
  },[coverPic]);

console.log("tomer"+fontSize)

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=6672f2eb7338a41fcd5a028cd9cf2488&language=he-IL&page=1')
     .then(response => response.json()).then(data=>{setpoptv(data.results);
      
    
     })
    
     },[]);
 


     useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=6672f2eb7338a41fcd5a028cd9cf2488&language=he-IL&page=1")
       .then(response => response.json()).then(data=>{setcomingsoonar(data.results);
        
      
       })


        // fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=6672f2eb7338a41fcd5a028cd9cf2488&language=he-IL&page=2")
        //  .then(responsex => responsex.json()).then(datax=>{setcomingsoonar([...comingsoonar,...datax.results]);
          
        
        //  })

        // fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=6672f2eb7338a41fcd5a028cd9cf2488&language=he-IL&page=3")
        //    .then(responsey => responsey.json()).then(datay=>{setcomingsoonar([...comingsoonar,...datay.results]);
         
          
        //    })
        

       },[]);

          // console.log(comingsoonar);

           
 
 
  

 
 
  const backimage="https://img.wcdn.co.il/f_auto,w_300,t_54/3/3/9/6/339649-46.jpg";
  const bannerImg={
    
    outline:"1px solid slategrey",
    // background: `&url(https://image.tmdb.org/t/p/w500/8yhtzsbBExY8mUct2GOk4LDDuGH.jpg)`,
    
    
    // height: "280px",
    // width: "100%",
    // filter: `${blur}`,
    
  } 

  function cleanCover(){
     setCoverPic("");
  }
  
  

  useEffect(()=>{
  if(ganerId==="28") seth1ganer("אקשן");
  if(ganerId=="35") seth1ganer("קומדיה");
  if (ganerId==="18") seth1ganer("דרמה");
  if (ganerId==="16") seth1ganer("אנימציה");
  if (ganerId==="53") seth1ganer("מתח");
  if (ganerId==="878") seth1ganer("מדע בדיוני");
  if (ganerId==="10749") seth1ganer("רומנטיקה");
},[ganerId]);


//  coverPic && (   (coverPic.overview.length>0) && (coverPic.overview.length<100) ? setfontSize("20px"):setfontSize("10px"))
// console.log(fontSize);
  return (
<Router>
    
    <div className="App">


    <header>
      <Row>
      <Col md={12} className="header2">
   
      <Row>
      <Col md={3} >
      <Link to={`/`} ><img className="logo" src="http://www.up2me.co.il/imgs/67152986.png"/></Link>
      </Col>

      <Col md={8} >
        <div className="searchcenter">
      <Search />
         </div>
        
      </Col>


      <Col md={1} >
     
      </Col>
      


      </Row>

        
        
      
         </Col>
         
    </Row>
    </header> 





   
   

      <Switch>
        <Route exact path="/">
        <header >
      <Row> 
       
      <Col md={12} >
      <div    style={{ "border-radius":`0px`,"background-image":`linear-gradient(to right,rgb(0 0 0 / 92%) 150px,rgba(100.98%, 100.98%, 100.98%, 0.5) 100%)`,"height": `70vh`,"background-size": `cover`,"background-repeat": `no-repeat`,"backgroundImage":`url(https://image.tmdb.org/t/p/original${coverPic.backdrop_path})`}}>
        <Row>   <div class=" to_animate animated slideLeft" data-animation="slideLeft" data-delay="150"	> 
    <div className="coverOverview">
        <Col md={9} >
          <h5>{}</h5>
          <h1 style={{"font-size":`75px`,"padding":`16px`}}>{coverPic.title}</h1>
          <h3 style={{"font-size": fontSize<="300"?"27px":"20px","width":` 100%`,
                     "height": `164px`,
                     "overflow": `hidden`,
                     "text-overflow": `ellipsis`,
                     "padding":`10px`}}>{coverPic.overview}</h3>
          <div style={{"padding-left":`35px`}}>
           
            <img className="starIcon"   style={{"margin-top":`20px`}} src="http://www.up2me.co.il/imgs/54209343.png" width="22px" height="22px"/>
            <h5 className="starIcon" style={{"margin-top":`16px`,"font-size":`25px`}}> דירוג: {coverPic.vote_average}/10</h5>
            <Link style={{ "float": `right`}} className="starIcon" to={`/info/${coverPic.id}/${"movie"}`} >  <Button onClick={a=>cleanCover()} variant="warning"style={{ "border-radius": `15px`,"font-size":`20px`,"padding":`20px`}} >לצפייה בטריילר</Button></Link>
            </div>
          
        </Col>
        
        </div>
         
        <Col md={3}></Col>
        </div>
        </Row>  
        
           </div>
         {/* <input type="text" onChange={searchfunc} value={searchval} className="search" placeholder="search..."></input> */}
         </Col>
    
    </Row>
    </header> 
  
    {/* style={bannerImg} */} 
    <div style={{"margin-top": `-52px`,"background-attachment": `fixed`, "height": `210vh`,"background-size": `cover`,"background-repeat": `no-repeat`,"backgroundImage":`url(https://image.tmdb.org/t/p/original${cover})`}}>
    <div className="blackPoster">


        <Container >
  

       {/* <Popupinfo cover={cover}/> */}

       <Row > 
       <div class="col-sm-12 to_animate animated fadeIn" data-animation="fadeIn" data-delay="150"	> 
          <h1 style={{ "margin-top":`75px`}} className="moviecat">הסרטים הפופולרים</h1>
          </div>
          <Swiper
      spaceBetween={1}
      slidesPerView={5}
      navigation
      
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
        { popmovie.map(movie=>(

<SwiperSlide   ><Movie onMouseEnter={value=>setCover(value)} videoType={'movie'} onMouseLeave={value=>setCover(value)} key={movie.id}{...movie}/></SwiperSlide>
        

            ) )}  ;

############################

    </Swiper>

       </Row>
       <Row > 
          <div class="col-sm-12 to_animate animated fadeIn" data-animation="fadeIn" data-delay="150"	> 

          <h1 className="moviecat">הסדרות המובילות</h1>
          </div>
          <Swiper
      spaceBetween={2}
      slidesPerView={5}
      navigation
      
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      
    >
        { poptv.map(movie=>(

<SwiperSlide  ><Movie  onMouseEnter={value=>setCover(value)} onMouseLeave={value=>setCover(value)} videoType={'tv'} title={movie.name} key={movie.id}{...movie}/></SwiperSlide>
        

            ) )}  ;


    </Swiper>

       </Row>


       {/* <Popupinfo cover={cover}/> */}

   
       </Container> 
       
            </div>
            </div>

          {/* sdarot */}
       <div style={{"margin-top": `-91vh`}}>  
          <h1 className="moviecat">סרטי {h1ganer} </h1>
          <div className="moviebytype">
          <header>
      <Row>

      <Col md={12} className="header3">
   
      <Row>
      <Col md={1} >
      {/* <Link to={`/`} ><img className="logo" src="http://www.up2me.co.il/imgs/11799347.png"/></Link> */}
      </Col>

      <Col md={10} >
<Navbar  expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="topnav-centered">

      <Nav.Link className="navtext" onClick={a=>setganerId("28")} href="#home">אקשן</Nav.Link>
      <Nav.Link className="navtext" onClick={a=>setganerId("35")} href="#home">קומדיה</Nav.Link>
      <Nav.Link className="navtext"onClick={a=>setganerId("18")} href="#home">דרמה</Nav.Link>
      <Nav.Link className="navtext"onClick={a=>setganerId("16")} href="#home">אנימציה</Nav.Link>
      <Nav.Link className="navtext"onClick={a=>setganerId("53")} href="#home">מתח</Nav.Link>
      <Nav.Link className="navtext"onClick={a=>setganerId("878")} href="#home">מדע בדיוני</Nav.Link>
      <Nav.Link className="navtext" onClick={a=>setganerId("10749")} href="#home">רומנטיקה</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

 
         
        
      </Col>


      <Col md={1} >
     
      </Col>
      


      </Row>

        
        
      
         </Col>
         
    </Row>
   
    </header> 
    <Container>
    <Row >
          <popappinfo/>
          {/* popular */}
          {/* <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/> */}

          {/* חיפוש לפי קטגוריה */}
          <div class="col-sm-12 to_animate animated fadeIn" data-animation="fadeIn" data-delay="150"	> 
          
           </div>
          <Swiper
      spaceBetween={1}
      slidesPerView={4}
      navigation
      style={{"padding-top":` 38px`}}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    
							
    >
        { ganermovie.map(movie=>(

<SwiperSlide  ><WidthMovie onMouseEnter={value=>setCover(value)} videoType={'movie'} poster_path={movie.backdrop_path} onMouseLeave={value=>setCover(value)} key={movie.id}{...movie}/></SwiperSlide>
        

            ) )}  ;


    </Swiper>

       </Row>
       </Container>
     </div>
     </div> 
<Container>
     {/* upcoming */}
     <Row > 
       <div class="col-sm-12 to_animate animated fadeIn" data-animation="fadeIn" data-delay="150"	> 
          <h1 style={{ "margin-top":`35px`}} className="moviecat">בקרוב</h1>
          </div>
          <Swiper
      spaceBetween={1}
      slidesPerView={5}
      navigation
      
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
        { comingsoonar.map(movie=>(
        // movie.title != "Godzilla vs. Kong" ? x :
        
        // (parseInt(movie.release_date.slice(0,4)) === year )&&( parseInt(movie.release_date.slice(5,7)) >= month ) ? 
        
<SwiperSlide   ><Movie onMouseEnter={value=>setCover(value)} videoType={'movie'} onMouseLeave={value=>setCover(value)} key={movie.id}{...movie}/></SwiperSlide>
        // : x

            ) )}  ;

############################

    </Swiper>

       </Row>
       </Container>


     {/* ######################### */}
       </Route>
       <Route path="/info/:id/:videoType">
            <Info></Info>
       </Route>
     </Switch>
   

  

    
   
    </div>
  
   </Router>
  );
}

export default App;
